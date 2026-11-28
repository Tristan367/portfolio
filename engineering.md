# How my projects work

More detail on the personal projects from my portfolio. For my client work, see the JAIK case study.

## Bead Game: one body description, several connected systems

**Godot · C# · Procedural geometry · In development**

Bough describes branching forms such as creatures and trees. Geometry, rigs, collision shapes, animation, and surface patterns are connected through that representation. Changing a body needs to produce a usable result across those systems.

I worked out geometric join rules in drawn specifications: limbs leaving faces or edges, branching end faces, insets, and curved limbs. The implementation includes explicit rules for building those connections. This keeps the shape system extensible beyond a small collection of fixed creature templates.

Performance is another design constraint. Main-thread construction and uploads share a named frame budget. Per-body appearance values live in a texture-backed table, avoiding the engine’s limited instance-uniform allocation for that data. Seeded world generation and delta saves keep generated content separate from changes made during play.

## Heart of the Witch King: a model can narrate without owning the rules

**TypeScript · Node.js · Zod · Local and hosted models · In development**

A language model can describe a room or decide what an innkeeper says. Combat, inventory, travel, and the effects of actions still need consistent rules. The AI referee interacts through tools; the engine owns the resulting state changes.

The TypeScript project connects to models over a configurable HTTP adapter using a common chat-completions format. That supports local servers such as Ollama or llama.cpp as well as hosted providers. It does not require a TypeScript-native inference binding.

Content loads through a common mod pipeline with explicit define, replace, patch, and remove operations. Zod schemas, dependency checks, and reference validation catch malformed content before play. World-generation randomness is separate from live game rolls, so exploring a generated location does not consume the dice stream reserved for later actions. Node’s test runner and dedicated simulation tools support the growing rules engine.

Separately, I've fine-tuned an image model to get better at dragons, orcs, and goblins for an earlier version of the game. Fine-tuning a language model for this one comes after the harness stops changing.

## Necromyth: generate skinning from the same field as the body

**C++ · Vulkan · SDL3 · Procedural animation · In development**

A parameterized skeleton contributes to a scalar field. Marching cubes turns that field into a connected surface, and the contributions of the bones provide the skin weights. The mesh and the rig share the same underlying construction.

Animation uses bone roles, such as thigh, foot, spine, or wing, so behavior can apply across differently shaped bodies. The wider game combines streaming density-field terrain with cubic construction blocks and saves player edits as differences from the generated world.

The Vulkan renderer is a separate engine project. The game’s simulation has also been separated from rendering in several systems. It's built with multiplayer in mind, but the server is still a stub, so it isn't a multiplayer game yet.

## MyriadCode: agents that collaborate without corrupting their conversations

**Python · FastAPI · SQLite · HTMX · Agent orchestration**

MyriadCode supports custom tools defined by shell scripts and JSON schemas, peer-session messages, and configurable subagent tiers with their own models, tools, and concurrency limits.

Message delivery has to preserve the relationship between a model’s tool calls and their results. Busy sessions receive queued messages at turn boundaries. Cancellation also needs to stop an exchange from restarting itself: an already-running sender must not wake another session after the stop operation has cleared its mailbox.

The interface has its own engineering constraints. Streaming output, expanding blocks, and restored history need to preserve the reader’s position. The project documents the layout invariants behind that behavior and includes browser checks for transcript anchoring.

## Rex Vltimvs: the tactical battle inherits the strategic terrain

**C++23 · SDL3 · Simulation · In development**

The grand-strategy game generates a world and samples tactical terrain from the location where armies meet. A river on the strategic map therefore constrains the corresponding battle.

Shared decision logic supports the adviser, bots, and opponents. The development record includes comparing changes across seeded campaigns and removing a proposed behavior after the measurements did not support it. The value is in making world generation, pathfinding, tactical rules, and strategic decisions agree.

## Assistant: accessibility shapes the architecture

**Python · FastAPI · Voice interaction · Desktop packaging**

Assistant is a coding agent designed for people who may not use a terminal or mouse. Spoken input, local speech output, project management, and installers are part of the main experience.

A project manager handles application-level actions, while each project has its own focused coding assistant. Browser actions can run as a sequence and report outcomes, gathering diagnostic information when an interaction fails. These choices reduce the number of implementation details the user has to manage.

[Visit the Assistant project](https://tristan367.github.io/basicagent/).

## Local inference utilities: persistence and backend boundaries

**ChatGGUF · C# / LLamaSharp · ImageGGUF · Python / stable-diffusion.cpp**

ChatGGUF manages local chat sessions and model backend choices. Persisted chat history is the conversation source of truth; cached model state can be reused only when its fingerprint still matches the relevant settings and history. That separates conversational correctness from the performance benefit of loading a KV cache.

ImageGGUF exposes local image generation as a library and HTTP service, including progress and busy-state reporting. These are supporting inference tools, separate from the current TypeScript RPG’s HTTP model adapter.

## Soapbox and embedded work: software meets the machine

**Python · Offline speech · C · AVR microcontrollers**

Soapbox runs local Whisper dictation and types into other applications. Packaging has to account for different desktop input mechanisms, including X11 and Wayland. It has Windows and Linux builds. There's macOS code too, but I haven't verified it.

My RC-car firmware uses an ATmega328P for receiver pulse measurement, two-motor mixing, and motor control. It includes receiver-loss handling and battery voltage states with warning, cutoff, and hysteresis. I like it when code has to move something real.

## How I work with AI

I use coding agents for most of my development now. My job is picking the problem, deciding how the system should behave, drawing out the geometry and interactions when they're tricky, checking what comes back, and deciding what stays. Any of these projects, I can walk you through why it works the way it does.
