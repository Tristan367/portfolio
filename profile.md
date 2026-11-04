# Tristan Johnson

Spokane, Washington · t_johnson367@outlook.com · 509-944-0379 · [GitHub](https://github.com/Tristan367) · [Portfolio](https://tristan367.github.io/portfolio/)

## Software Engineer

Full-stack developer with sole ownership of a React administration application and its Node.js API, integrating existing commerce data and services. Independent work spans AI developer tools, local model applications, and procedural game systems. Recent bachelor’s graduate with around a decade of broader software experience.

## Experience

### JAIK Solutions · Contract Full-Stack Developer

**March 2026–present · Store Admin ownership: June–October 2026**

- Rebuilt most of a React 18 administration frontend and developed its Node.js backend on Azure Functions, implementing approximately 66 HTTP API endpoints.
- Delivered catalog editing and publishing, order placement and servicing, reporting, and store settings; brought the application to feature-complete QA by October 2026.
- Integrated shared SQL Server records with administrative data in Azure Cosmos DB through its MongoDB API and Mongoose, supporting workflows that depend on NetSuite-fed catalog data.
- Built persistent drafts, autosave, version history, and publishing workflows; coordinated database and environment changes with the authorized infrastructure owners.
- Maintained authentication and permissions using Microsoft Entra ID, MSAL, and API token validation. Added and maintained tests in an application with approximately 780 Jest tests.
- Created an internal AI agent kit with repository guidance, reusable skills, and Playwright QA workflows. Used findings from development history to address recurring mock-data and false-success issues.

### VectorNW · Web/Game Developer

**October 2024–March 2026 · Spokane, Washington**

- Collaborated as one of two web developers building lomp.ai; served as sole developer of Fetch, its browser game.

### JAIK Solutions · Full Stack Web Developer

**May 2022–May 2023 · Spokane, Washington**

- Developed React components and pages from an existing prototype, implemented Node.js API methods, and collaborated with teammates on application behavior and fixes.

**Additional experience:** Guitar Instructor, Rock School NW · August 2024–March 2026. Taught guitar, bass, and ukulele to students ages seven and older alongside the VectorNW role.

## Selected Projects

### Mended Strands · Godot, C#

Developing Bough, a procedural body system connecting branching geometry, rigs, hitboxes, animation, and textures. Supplied geometric join specifications; integrated shared main-thread work budgets and texture-backed appearance data.

### Heart of the Witch King · TypeScript, Node.js, Local AI

Developing a fantasy RPG that separates deterministic game rules from an AI referee acting through validated tools. Built an HTTP adapter for local and hosted models, Zod-backed validation, and automated tests using Node’s test runner. Earlier RPG work includes local image generation and model fine-tuning.

### Necromyth · C++, Vulkan, SDL3

Building a voxel game on a custom Vulkan engine. Procedural bodies derive mesh skin weights from the same scalar field that generates their surface, with role-based animation across body types.

### MyriadCode · Python, FastAPI, SQLite, Agent Orchestration

Built a self-hosted coding agent with script-defined tools, peer-session messaging, and configurable subagent tiers. Preserved tool-call ordering through queued message delivery and coordinated cancellation.

### Assistant · Python, Agent Tools, Accessibility

Created a coding agent with file, command, and browser tools, voice interaction, and desktop installer workflows. Designed it for people who may not use a terminal or mouse. [Project website](https://tristan367.github.io/basicagent/).

## Skills

**Web and data:** React, Node.js, REST APIs, Azure Functions, SQL Server, Cosmos DB / MongoDB API, Mongoose, Knex.  
**Languages and systems:** JavaScript, TypeScript, Python, C#, C++, Godot, Vulkan, Linux, Git.  
**Engineering and AI:** Jest, Testing Library, Playwright, Azure DevOps, authentication and permissions, local model inference, fine-tuning, AI agent tooling.

## Education

**Bachelor of Applied Science in DevOps Engineering**

Spokane Community College · Spokane, Washington · June 2026


**Associate of Applied Science in Software Development**

Spokane Community College · Spokane, Washington · March 2022


---

# Store administration, across the stack

**JAIK Solutions · Client project · June–October 2026**

## The assignment

An internal store administration app needed to connect staff workflows to an existing member storefront. Its early React prototype relied on mock data. The underlying SQL Server database and infrastructure were already in place, with ownership shared across other team members.

From June 2026, I was the sole developer on the administration platform. I rebuilt most of the frontend and developed its Node.js backend almost entirely from scratch. My scope covered the application and its integrations; database schema and production infrastructure permissions remained with their existing owners.

## What I built

- A React interface and an Azure Functions API with approximately 66 HTTP endpoints.
- Product editing, persistent drafts, autosave, version history, and publishing to the records used by the member storefront.
- Order placement and servicing for support staff, including order history, cancellations, refunds, and re-ships.
- Store reporting, product statistics, and settings.
- An administrative data layer in Azure Cosmos DB using its MongoDB API, integrated with the existing SQL Server system of record and NetSuite-fed catalog data.
- Authentication and permission-aware workflows, maintained with the company’s Microsoft identity infrastructure.

## The integration problem

Saving an administrative draft and publishing a change to the storefront are different operations. The administration app held editorial and workflow data in its own store, while the member-facing application consumed shared SQL records.

I traced that path across the applications and implemented publishing behavior that moved the intended changes into the storefront’s data, including cache invalidation when appropriate. I coordinated dependencies and environment changes with the teammates who controlled those systems.

## Keeping temporary behavior visible

Some dependencies were still being built, so mock data helped unblock interface development. Over a long development cycle, however, a temporary fallback can start to look like a working integration.

I replaced prototype seed-data paths with persistent storage and real data sources. I also made failure behavior explicit: local development could use a fallback, while deployed database failures needed to surface as failures rather than silently return demonstration data.

That lesson informed a separate internal agent kit I created for the team. It brought together repository guidance, reusable skills, and Playwright QA workflows, with explicit attention to mock data and operations that appeared successful without completing their work.

## Delivery and collaboration

I worked with the client’s QA process and maintained automated coverage in an application containing approximately 780 Jest tests. When I needed database or deployment changes, I prepared specific handoffs for the people with the required permissions.

By October 2026, the application was feature-complete and in QA. The result was an integrated administration platform in place of the disconnected prototype, with the frontend, API, and data workflows brought together under my development ownership.

## Technology

React 18 · Node.js · Azure Functions · Azure API Management · SQL Server · Azure Cosmos DB / MongoDB API · Mongoose · Knex · Microsoft Entra ID / MSAL · Jest · Testing Library · Playwright · Azure DevOps

*This summary describes my technical contributions at a high level. It omits client identity, private source code, customer data, and internal schema and endpoint details.*


---

# Engineering decisions behind the projects

The interesting part of a project is often the decision that makes several systems work together. These are selected examples from my independent work, alongside the professional application described in my client case study.

## Mended Strands: one body description, several connected systems

**Godot · C# · Procedural geometry · In development**

Bough describes branching forms such as creatures and trees. Geometry, rigs, collision shapes, animation, and surface patterns are connected through that representation. Changing a body needs to produce a usable result across those systems.

I worked out geometric join rules in drawn specifications: limbs leaving faces or edges, branching end faces, insets, and curved limbs. The implementation includes explicit rules for building those connections. This keeps the shape system extensible beyond a small collection of fixed creature templates.

Performance is another design constraint. Main-thread construction and uploads share a named frame budget. Per-body appearance values live in a texture-backed table, avoiding the engine’s limited instance-uniform allocation for that data. Seeded world generation and delta saves keep generated content separate from changes made during play.

## Heart of the Witch King: a model can narrate without owning the rules

**TypeScript · Node.js · Zod · Local and hosted models · In development**

A language model can describe a room or decide what an innkeeper says. Combat, inventory, travel, and the effects of actions still need consistent rules. The AI referee interacts through tools; the engine owns the resulting state changes.

The TypeScript project connects to models over a configurable HTTP adapter using a common chat-completions format. That supports local servers such as Ollama or llama.cpp as well as hosted providers. It does not require a TypeScript-native inference binding.

Content loads through a common mod pipeline with explicit define, replace, patch, and remove operations. Zod schemas, dependency checks, and reference validation catch malformed content before play. World-generation randomness is separate from live game rolls, so exploring a generated location does not consume the dice stream reserved for later actions. Node’s test runner and dedicated simulation tools support the growing rules engine.

My earlier RPG experiments include local image generation and model fine-tuning; those should be distinguished from features currently integrated into this TypeScript version.

## Necromyth: generate skinning from the same field as the body

**C++ · Vulkan · SDL3 · Procedural animation · In development**

A parameterized skeleton contributes to a scalar field. Marching cubes turns that field into a connected surface, and the contributions of the bones provide the skin weights. The mesh and the rig share the same underlying construction.

Animation uses bone roles, such as thigh, foot, spine, or wing, so behavior can apply across differently shaped bodies. The wider game combines streaming density-field terrain with cubic construction blocks and saves player edits as differences from the generated world.

The Vulkan renderer is a separate engine project. The game’s simulation has also been separated from rendering in several systems. Multiplayer remains an architectural direction; the project status document explicitly identifies the server as a stub, so I do not present it as a working multiplayer game.

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

Soapbox runs local Whisper dictation and types into other applications. Packaging has to account for different desktop input mechanisms, including X11 and Wayland. Windows and Linux distributions are described in the project; the macOS code path is not presented as a verified release.

My RC-car firmware uses an ATmega328P for receiver pulse measurement, two-motor mixing, and motor control. It includes receiver-loss handling and battery voltage states with warning, cutoff, and hysteresis. That work complements my interests in electronics and physical prototyping.

## How I work with AI

I use coding agents throughout development. My role includes choosing the problem and constraints, designing system behavior, supplying geometric and interaction specifications, evaluating results, and deciding which changes earn their place in the project. These examples show the decisions I can discuss and demonstrate in an interview.
