# TinyWins

![TinyWins banner](./assets/tinywins-banner.svg)

TinyWins is a habit tracker with a Go API, PostgreSQL database, and Next.js frontend.

## Preview

![TinyWins product demo](./assets/tinywins-demo.gif)

## Requirements

- Go 1.26.1
- Bun
- PostgreSQL

## Run Locally

1. Configure the API. `backend/.env` must exist before starting it.

```bash
cp backend/.env.example backend/.env
```

Set `DATABASE_URL` in `backend/.env` to your local `squares` database. The default API address is `http://localhost:8800`.

2. Configure and start the frontend.

```bash
cp frontend/.env.example frontend/.env.local
cd frontend && bun install && bun dev
```

`NEXT_PUBLIC_BACKEND_URL` must point to the API and `NEXT_PUBLIC_COOKIE_NAME` must match the backend `COOKIE_NAME`.

3. Start the API in another terminal.

```bash
cd backend && go run .
```

Open `http://localhost:3000`.

## Deploy With Docker

The root `docker-compose.yaml` builds the API and frontend images and runs them
alongside PostgreSQL.

1. Create a root `.env` from the example and set your public URLs.

```bash
cp .env.example .env
```

`NEXT_PUBLIC_BACKEND_URL` is baked into the frontend at build time, so set it to
the URL the browser uses to reach the API before building. Set `COOKIE_SECURE=false`
when serving over plain HTTP.

2. Build and start the stack.

```bash
docker compose up -d --build
```

The frontend is served on port 3000 and the API on port 8800. Database ports are
bound to `127.0.0.1` so they are not exposed publicly.

## Seed Data

The seeder migrates the database and clears existing application data.

```bash
cd backend && go run ./cmd/seed
```

Sign in with `john@example.com` and `password123`.

## Verify

```bash
cd backend && go test -count=1 ./...
cd frontend && bun run build
```

Backend tests require an isolated PostgreSQL database configured by `DATABASE_TEST_URL`.
