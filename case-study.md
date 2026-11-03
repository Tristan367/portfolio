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
