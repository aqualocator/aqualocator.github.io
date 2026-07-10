# Updating employees.json — AQUALocator

`employees.json` is the static data file served at  
`https://aqualocator.github.io/employees.json`  
and consumed by the `lookup_employee` MCP tool in Claude.

It is pulled from the **Firebase Firestore** collection  
`artifacts/default-app-id/public/data/employees` in the  
`aqualocator-23714` project.

---

## Automatic Update (GitHub Actions)

A workflow at `.github/workflows/update-employees.yml` runs every day at  
**2:00 AM Central (7:00 AM UTC)** and commits a fresh `employees.json`  
automatically if anything changed.

No manual steps are needed under normal circumstances — just keep the  
workflow enabled in the GitHub Actions tab.

You can also trigger it manually at any time (see below).

---

## Manual Update — Trigger GitHub Actions

To force a refresh between scheduled runs — no Node.js or local setup required.

1. Go to the repository on GitHub:  
   `https://github.com/aqualocator/aqualocator.github.io`

2. Click the **Actions** tab.

3. In the left sidebar, click **"Update employees.json"**.

4. Click the **"Run workflow"** dropdown on the right, then **"Run workflow"**.

5. GitHub runs the same script that normally runs at 2 AM, commits the  
   updated file, and pushes it automatically.

6. GitHub Pages will reflect the new `employees.json` within ~1 minute.

> **The `lookup_employee` MCP tool caches the file for 10 minutes.**  
> After the file updates, wait ~10 minutes, or force an immediate refresh
> by running these commands on the aquagit server:

```powershell
cd F:\mcp
pm2 restart aqua-sql-mcp --update-env
pm2 save
```

---

## Fields Included in employees.json

| Field | Description |
|---|---|
| `name` | Full name (display) |
| `First` | First name |
| `Last` | Last name |
| `title` | Job title |
| `initials` | Initials (e.g. `CK`) |
| `ext` | Phone extension |
| `dept` | Department |
| `email` | Email address |
| `responsibilities` | Area of responsibility / notes |

Employees with `responsibilities === 'XXX'` or `name === 'N/A'` are excluded.

---

## How Claude Uses This File

The `lookup_employee` tool in the `aqua-sql-mcp` MCP server fetches  
`https://aqualocator.github.io/employees.json` over HTTP and caches it  
for **10 minutes** in memory. Claude can then answer questions like:

- *"Look up Mike Hevey"*
- *"Who's in Field Services?"*
- *"What's the extension for the HR department?"*
- *"Find everyone named Smith"*

The MCP server is running on the aquagit server under PM2 as the  
`aqua-sql-mcp` service. No changes to Claude Desktop are needed after  
updating `employees.json` — the next tool call fetches the refreshed file  
automatically.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| GitHub Actions run fails | Check the Actions tab for error logs; usually a Firebase auth issue or transient network error. Re-run manually. |
| `employees.json` looks stale in Claude | The tool caches for 10 min. Wait, or restart `aqua-sql-mcp` with `pm2 restart aqua-sql-mcp --update-env` on aquagit. |
| `npm install firebase` fails locally | Ensure Node 18+ is installed: `node --version`. |
| Git push rejected | Pull first: `git pull --rebase` then retry. |
