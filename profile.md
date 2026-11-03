# Tristan Johnson

Spokane, Washington · t_johnson367@outlook.com · 509-944-0379 · [GitHub](https://github.com/Tristan367)

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

## Selected Projects

### Bead Game · Godot, C#

Developing a procedural game with Bough, a system that generates branching bodies such as creatures and trees, along with rigging, hitboxes, animation, and textures.

### Heart of the Witch King · TypeScript, Node.js, Local AI

Developing a fantasy RPG that separates deterministic game rules from an AI referee acting through validated tools. Built an HTTP adapter for local and hosted models, Zod-backed validation, and automated tests using Node’s test runner. Earlier RPG work includes local image generation and model fine-tuning.

### Necromyth · C++, Vulkan, SDL3

Building a voxel game on a custom Vulkan engine, extending earlier independent graphics and game development work.

### Assistant · Python, Agent Tools, Accessibility

Created a coding agent with file, command, and browser tools, voice interaction, and desktop installer workflows. Designed it for people who may not use a terminal or mouse. [Project website](https://tristan367.github.io/basicagent/).

## Skills

**Web and data:** React, Node.js, REST APIs, Azure Functions, SQL Server, Cosmos DB / MongoDB API, Mongoose, Knex.  
**Languages and systems:** JavaScript, TypeScript, Python, C#, C++, Godot, Vulkan, Linux, Git.  
**Engineering and AI:** Jest, Testing Library, Playwright, Azure DevOps, authentication and permissions, local model inference, fine-tuning, AI agent tooling.

## Education

**Bachelor of Applied Science in DevOps Engineering**

Spokane Community College · Spokane, Washington · June 2026


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
