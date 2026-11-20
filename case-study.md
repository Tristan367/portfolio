# The store admin platform at JAIK

**JAIK Solutions · Client project · June–October 2026**

## What I walked into

A client needed an internal app for their staff to run a membership storefront: products, prices, orders, and reports. When I took it over in June 2026, it was a React prototype running on mock data. The real SQL Server database and the Azure infrastructure already existed and were in production.

From June on I was the only developer. I rebuilt most of the frontend and wrote nearly all of the backend, about 390 of 490 frontend commits and 165 of 190 backend commits. I didn't have permission to change the database schema or production infrastructure, so when I needed something there, I wrote up exactly what and handed it to the person who did.

## What I built

- A Node.js API on Azure Functions, 66 endpoints behind Azure API Management.
- Product editing with drafts, autosave, version history, and publishing to the live store.
- Order tools for support staff: history, cancellations, refunds, and re-ships.
- Store reports, product stats, and settings.
- An admin data layer in Cosmos DB (MongoDB API) with optimistic locking, so two people editing the same product don't overwrite each other.
- Sign-in and permissions through the company's Microsoft Entra ID setup.

## Publishing to the live store's database

Saving a draft and publishing it are two different things. Drafts lived in the admin app's own Cosmos DB. The storefront read from SQL Server tables. Publishing meant writing products, prices, variations, bundles, and visibility rules into those tables, then clearing the storefront's Redis cache, but only when the change was something members would actually see.

Price and stock were a small version of the same problem. I set it up so the app checks an admin override first, then SQL, and if it still has nothing, it says "unknown." It never falls back to zero, because zero stock quietly pulls an item off the store.

## The bugs I'm proudest of

**Every save was failing.** Cosmos DB's MongoDB API doesn't support retryable writes, and the driver had them on by default. Turning that off fixed every save in the app at once.

**A login shortcut could reach real servers.** The developer bypass that skips sign-in is handy on your own machine and a security hole anywhere else. I locked it to local only.

**Outages looked like a working app.** If the database went down, the deployed app quietly served demo data, so it looked fine while being completely wrong. Now a deployed outage returns a 503. Local development can still use sample data.

## The agent kit

That last bug kept showing up in different forms: mock data that stuck around too long, and AI-written code that reported success without doing the work. So I wrote the team's agent kit, which included instructions for the coding agents, reusable skills, and Playwright QA checks aimed at exactly those two problems.

## Where it ended up

The app has about 780 Jest tests. By October 2026 it was feature-complete and in the client's QA.

## Tech

React 18 · Node.js · Azure Functions · Azure API Management · SQL Server · Cosmos DB (MongoDB API) · Mongoose · Knex · Redis · Entra ID / MSAL · Jest · Testing Library · Playwright · Azure DevOps

*Client name, source code, customer data, and internal schema details are left out on purpose.*
