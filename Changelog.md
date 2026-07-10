# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.8] - 2026-07-10

### Added
- **URL search parameter support** (`index.html`) — Visiting `https://aqualocator.github.io/?search=konkol` now pre-fills the search box and automatically shows matching results on page load. Supports any search term (names, titles, departments, etc.). The clear (✕) button also appears correctly when a term is passed via URL.

## [3.7] - 2026-07-10

### Added
- **`employees.json`** — Static JSON export of the Firestore employee database served at `https://aqualocator.github.io/employees.json`. Fields: `name`, `First`, `Last`, `title`, `initials`, `ext`, `dept`, `email`, `responsibilities`. Employees flagged `responsibilities === 'XXX'` or `name === 'N/A'` are excluded. Results sorted by last name.
- **GitHub Actions auto-update** — `.github/workflows/update-employees.yml` refreshes `employees.json` daily at 2:00 AM Central (7:00 AM UTC) by pulling fresh data from Firestore and auto-committing. Can also be triggered manually from the Actions tab at any time.
- **Claude MCP integration** — `lookup_employee` tool added to the `aqua-sql-mcp` MCP server (`\\aqua94\mcp\src\index.js`), allowing Claude to search employees by name, department, or extension using the cached `employees.json`. Cache TTL: 10 minutes.
- **`UpdateAqualocatorJson.md`** — Step-by-step guide for manually refreshing `employees.json` between scheduled runs, either via GitHub Actions (no local tools needed) or by running the Node.js extraction script locally.

## [3.6] - 2026-06-22

### Changed

- Updated app subtitle from "An Aqua employee office locator" to "The Aqua employee directory & location finder"
- Updated `<title>` tag from "AQUALocator - Employee Office Locator" to "AQUALocator - The Aqua Employee Directory & Location Finder"
