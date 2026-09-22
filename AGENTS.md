# Repository Guide

## Project Boundaries

- The root is not a workspace or Git repository. `backend/` and `frontend/` are independent Git/dependency roots; run commands and inspect Git state in each one separately.
- Backend wiring is `internal/app` -> handlers -> services -> store interfaces/PostgreSQL. Routes and middleware are composed in `backend/internal/routes`.
- The frontend uses the Next.js App Router. Dashboard layouts/data loaders are Server Components that forward the session cookie manually; interactive components call the Go API directly with `credentials: "include"` and refresh Server Components with `router.refresh()`.

## Setup And Runtime

- Backend requires Go 1.26.1. `go run .` unconditionally loads `backend/.env` before reading configuration, so that file must exist even when variables are exported in the shell.
- From the repository root, start development PostgreSQL with `docker compose -f backend/docker-compose.yaml up -d db`. Compose creates database `squares` on port 5499, but `backend/.env.example` incorrectly uses `/habbittracker`; change `DATABASE_URL` to end in `/squares`.
- SQL migrations are embedded from `backend/migrations/*.sql` and run automatically on API, seeder, and test startup. Add numbered Goose SQL files directly in that directory; no Goose CLI step is needed.
- The seeder, `cd backend && go run ./cmd/seed`, migrates and then truncates application data. Its current login is `john@example.com` / `password123`; the README's seed email is stale.
- Frontend uses Bun and requires `NEXT_PUBLIC_BACKEND_URL`; `NEXT_PUBLIC_COOKIE_NAME` must equal backend `COOKIE_NAME`. The `NDOE_ENV` entry in `frontend/.env.example` is misspelled and unused.

## Verification

- Backend tests are PostgreSQL integration tests. Start the isolated database with `docker compose -f backend/docker-compose.yaml up -d db-test`, wait for PostgreSQL to accept connections, then run `cd backend && go test -count=1 ./...`.
- Tests read `DATABASE_TEST_URL` directly, default to `postgresql://postgres:postgres@localhost:5501/squares`, auto-migrate, and truncate shared tables. Never point them at the development database or run test packages concurrently against one database.
- Focus a test with, for example, `cd backend && go test -count=1 ./tests -run '^TestHabitServiceUndoHabit$'`. Other top-level test names are in `backend/tests/*_test.go`.
- The frontend has no lint or test script. Its repository-provided check is `cd frontend && bun run build`; run `bun install` first when dependencies are absent.

## Change Constraints

- Preserve habit ownership checks: store queries and service calls scope habit data by both `habit_id` and authenticated `user_id`.
- Keep record/undo mutations transactional: daily totals and immutable habit logs must change together. Habit deletion explicitly removes logs, then totals, then the habit because foreign keys do not cascade.
- API date strings are strict `YYYY-MM-DD`. Date behavior currently spans browser-local dates, UTC heatmap keys, and PostgreSQL `CURRENT_DATE`; coordinate all three when changing date logic.
- Backend CORS origins are hard-coded in `internal/routes/routes.go`; `FRONTEND_URL` and `FRONTEND_URL_DEV` are currently unused. Browser API calls depend on those origins and the shared cookie name.
- Do not assume account deletion works: the frontend sends `DELETE /users`, but the backend currently registers only `GET` and `PUT` for protected `/users`.
- Frontend formatting is four spaces with semicolons (`frontend/.prettierrc`); TypeScript is strict and `@/*` resolves from the frontend root.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
