# Tristan Johnson

Spokane, Washington · t_johnson367@outlook.com · 509-944-0379 · [GitHub](https://github.com/Tristan367) · [Portfolio](https://tristan367.github.io/portfolio/)

Full-stack developer. Most recently the sole developer of a company's internal store administration platform: React frontend, Node.js API, and the integration with a production SQL Server database owned by other people. I've been writing software for about ten years, three of them professionally. On my own time I build game engines, procedural systems, and AI developer tools.

## Experience

### JAIK Solutions · Full-Stack Developer (Contract)

**March 2026–October 2026 · Spokane, Washington**

Sole developer from June 2026 on a client's Store Admin platform, which staff use to run a membership storefront's catalog, orders, and reporting. Took over a mock-data prototype, rebuilt most of the frontend, and wrote nearly all of the backend (about 390 of 490 frontend and 165 of 190 backend commits).

- Built a Node.js API on Azure Functions (66 endpoints behind Azure API Management) and moved all 15 of its data layers from seed data to Cosmos DB/Mongoose, with optimistic locking for concurrent edits.
- Built the publish path from admin drafts into the SQL Server tables the live storefront reads, covering products, prices, variations, bundles, and visibility rules, and invalidated the storefront's Redis cache only when members would see the change.
- Designed price and stock resolution as admin override, then SQL, then "unknown," never zero, so items without a stock record weren't silently pulled from sale.
- Made deployed failures visible: a database outage returns a 503 instead of quietly serving demo data. Tracked down a Cosmos DB retryable-writes incompatibility that was breaking every save.
- Fixed an inverted wildcard check in the permission logic and restricted the developer auth bypass to local environments. Maintained Entra ID/MSAL sign-in and JWT validation.
- Wrote the team's agent instructions and Playwright QA tooling for AI-assisted development, aimed at a failure I kept seeing: generated code that reports success without actually doing the work.

### VectorNW · Web/Game Developer

**October 2024–March 2026 · Spokane, Washington**

- Built the frontend of lomp.ai, an early-stage AI marketplace, in Next.js and React from the designer's specs and mockups, deployed on AWS Amplify.
- Wrote Fetch, the site's browser game, in vanilla JavaScript rendered entirely with CSS, with no canvas: a dog with drag, friction, and skid animations, pixel-perfect collisions, timed levels, and lives.
- Made pickups cheap by checking only nearby cells of a spatial grid, using a precomputed circle of tile offsets around the player instead of measuring the distance to every bone each frame.

### JAIK Solutions · Full-Stack Web Developer

**May 2022–May 2023 · Spokane, Washington**

- Built React pages from an existing prototype and implemented Node.js API methods on a small team.

**Also:** Guitar Instructor, Rock School NW, August 2024–March 2026. Taught students from age seven to their sixties.

## Projects

**Mended Strands** · Godot, C#. A game built around procedural creatures: one branching body description generates each creature's mesh, skeleton, hitboxes, animation, and textures, so they stay consistent.

**Heart of the Witch King** · TypeScript, Node.js, local LLMs. An RPG where a language model narrates but can't cheat: it acts only through validated tools, and a deterministic rules engine decides what actually happens. Runs on local or hosted models.

**Necromyth** · C++, Vulkan, SDL3. A voxel game on my own Vulkan engine. Creature skin weights come from the same scalar field that generates the body's surface.

**AI tooling** · Python, FastAPI. MyriadCode, a self-hosted multi-agent coding tool that keeps tool calls ordered across messaging and cancellation, and [Assistant](https://tristan367.github.io/basicagent/), a voice-driven coding agent for people who don't use a terminal or mouse.

## Skills

**Web and data:** React, Node.js, REST APIs, Azure Functions, API Management, SQL Server, Cosmos DB/MongoDB, Mongoose, Knex, Redis

**Languages and tools:** JavaScript, TypeScript, Python, C#, C++, Jest, Playwright, Azure DevOps CI, Git, Linux, Godot, Vulkan

## Education

**BAS, DevOps Engineering** (2026) and **AAS, Software Development** (2022) · Spokane Community College
