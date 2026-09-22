# Graph Report - squares  (2026-09-22)

## Corpus Check
- 68 files · ~144,114 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 3, .example 2, .ico 1)

## Summary
- 530 nodes · 1126 edges · 30 communities (22 shown, 8 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 74 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Backend Domain and Stores
- Backend App and Tests
- Frontend Dashboard Flow
- HTTP API and Routing
- Frontend Build and Theme
- TypeScript Configuration
- Feature Roadmap
- Dashboard UI Demo
- Landing Page UI
- Authentication UI Demo
- Database Schema Migrations
- Landing Page Visual
- Backend API Documentation
- Frontend Integration Docs
- Repository Operations
- Habit History Features
- PostgreSQL Environments
- File Icon Asset
- Graphify Plugin
- Browser Window Asset
- Next.js Brand Asset
- Vercel Brand Asset
- OpenCode Configuration
- Migration Embedding
- PostCSS Configuration
- Globe Icon Asset
- Go Module Identity

## God Nodes (most connected - your core abstractions)
1. `TinyWins Feature Roadmap` - 22 edges
2. `HabitService` - 19 edges
3. `ErrorJSON()` - 17 edges
4. `NewApplication()` - 17 edges
5. `getBackendUrl()` - 17 edges
6. `compilerOptions` - 16 edges
7. `SendJSON()` - 15 edges
8. `newTestApplication()` - 15 edges
9. `HabitHandler` - 14 edges
10. `PostgresStore` - 13 edges

## Surprising Connections (you probably didn't know these)
- `Database Seeder Reset Flow` --semantically_similar_to--> `Database Seeding`  [INFERRED] [semantically similar]
  AGENTS.md → backend/README.md
- `Embedded Goose Migration Lifecycle` --semantically_similar_to--> `Goose Migrations`  [INFERRED] [semantically similar]
  AGENTS.md → backend/README.md
- `Individual Log Editing and Undo` --semantically_similar_to--> `Transactional Record and Undo Mutations`  [INFERRED] [semantically similar]
  FEATURE_IDEAS.md → AGENTS.md
- `Backend Layered Architecture` --implements--> `Backend Go API`  [INFERRED]
  AGENTS.md → backend/README.md
- `Local Frontend CORS Origins` --conceptually_related_to--> `Habit Tracker Frontend`  [INFERRED]
  backend/README.md → frontend/README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Authentication Onboarding Flow** — backend_output_start_tracking_button, backend_output_sign_in_page, backend_output_create_account_link, backend_output_registration_page [EXTRACTED 1.00]
- **Cohesive Page Visual System** — backend_output_visual_system, backend_output_landing_page, backend_output_sign_in_page, backend_output_registration_page [EXTRACTED 1.00]
- **Landing Hero Composition** — backend_output_landing_page, backend_output_hero_message, backend_output_activity_board, backend_output_tracking_metrics, backend_output_start_tracking_button, backend_output_small_demo_button [EXTRACTED 1.00]
- **Activity Visualization** — backend_tinywinslanding_activity_board, backend_tinywinslanding_26_week_heatmap, backend_tinywinslanding_month_timeline, backend_tinywinslanding_intensity_legend [EXTRACTED 1.00]
- **Hero Conversion Content** — backend_tinywinslanding_streak_visibility_headline, backend_tinywinslanding_contribution_map_value_proposition, backend_tinywinslanding_start_tracking_cta, backend_tinywinslanding_view_demo_cta, backend_tinywinslanding_tracking_metrics [EXTRACTED 1.00]
- **Habit Dashboard Composition** — frontend_demo2_dashboard, frontend_demo2_overview_metrics, frontend_demo2_new_habit_cta, frontend_demo2_drink_water_habit_card [EXTRACTED 1.00]
- **Habit Activity Visualization System** — frontend_demo2_activity_board, frontend_demo2_habit_heatmap, frontend_demo2_goal_progress, frontend_demo2_streak_value_proposition [EXTRACTED 1.00]
- **Landing to Authenticated Dashboard Journey** — frontend_demo2_landing_hero, frontend_demo2_start_tracking_cta, frontend_demo2_sign_in_form, frontend_demo2_login_success_feedback, frontend_demo2_dashboard [EXTRACTED 1.00]
- **Activity Visualization Group** — frontend_tinywinslanding_activity_board, frontend_tinywinslanding_contribution_grid, frontend_tinywinslanding_six_month_timeline, frontend_tinywinslanding_last_26_weeks, frontend_tinywinslanding_intensity_legend [EXTRACTED 1.00]
- **Hero Content Group** — frontend_tinywinslanding_brand_label, frontend_tinywinslanding_headline, frontend_tinywinslanding_supporting_copy, frontend_tinywinslanding_start_tracking_cta, frontend_tinywinslanding_demo_cta, frontend_tinywinslanding_progress_metrics [EXTRACTED 1.00]
- **Isolated PostgreSQL Test Environment** — agents_postgresql_integration_tests, backend_docker_compose_development_postgresql, backend_docker_compose_test_postgresql [EXTRACTED 1.00]
- **Session-Authenticated Frontend API Flow** — agents_nextjs_server_client_data_flow, frontend_readme_session_protected_dashboard, frontend_readme_shared_cookie_name, backend_readme_session_cookie_auth [EXTRACTED 1.00]
- **Transactional Habit Logging Consistency** — agents_transactional_record_undo, agents_daily_totals, agents_immutable_habit_logs [EXTRACTED 1.00]

## Communities (30 total, 8 thin omitted)

### Community 0 - "Backend Domain and Stores"
Cohesion: 0.06
Nodes (29): GenerateToken(), HashPassword(), VerifyPassword(), HabitLog, Habit, NewHabitRequest, RecordHabitRequest, UpdateHabitRequest (+21 more)

### Community 1 - "Backend App and Tests"
Cohesion: 0.06
Nodes (75): main(), seed(), Migrate(), MigrateFS(), Open(), NewHabitHandler(), NewUserHandler(), Application (+67 more)

### Community 2 - "Frontend Dashboard Flow"
Cohesion: 0.05
Nodes (52): CreateAccountPage(), DashboardLayout(), DashboardPage(), LEVEL_CLASSES, LoginPage(), LEVEL_CLASSES, LEVEL_LABELS, DashboardMotion() (+44 more)

### Community 3 - "HTTP API and Routing"
Cohesion: 0.15
Nodes (23): HabitHandler, CreateCookie(), DecodeJSON(), DeleteCookie(), ErrorJSON(), SendJSON(), UserHandler, GetCookieName() (+15 more)

### Community 4 - "Frontend Build and Theme"
Cohesion: 0.05
Nodes (35): frontend_app_globals, ibmPlexMono, metadata, spaceGrotesk, ThemeToggle(), dependencies, gsap, @gsap/react (+27 more)

### Community 5 - "TypeScript Configuration"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 6 - "Feature Roadmap"
Cohesion: 0.13
Nodes (16): Calendar Integration, Habit Categories and Tags, Consistency Trends and Recovery Guidance, CSV and JSON History Export, Habit Data Import, Entry Notes and Mood, Flexible Habit Schedules, Activity-Based Goal Recommendations (+8 more)

### Community 7 - "Dashboard UI Demo"
Cohesion: 0.19
Nodes (16): Twenty-Week Activity Board, Email and Password Fields, John Doe Habit Dashboard, Drink Water Habit Card, Daily Goal Progress Indicator, Daily Habit Heatmap, Habit Tracker Landing Hero, Login Success Feedback (+8 more)

### Community 8 - "Landing Page UI"
Cohesion: 0.14
Nodes (16): TinyWins Activity Board, TinyWins Habit Tracker Label, 86 Percent Completion Rate, Contribution-Style Activity Grid, 182 Days Tracked, View Small Demo CTA, Build Streaks at a Glance Headline, Two-Column Hero Layout (+8 more)

### Community 9 - "Authentication UI Demo"
Cohesion: 0.23
Nodes (14): Twenty-Week Activity Board, Create Account Link, TinyWins Habit Tracker, Build Streaks Hero Message, Habit Tracker Landing Page, Name Email and Password Registration Form, Account Registration Page, Email and Password Sign-In Form (+6 more)

### Community 10 - "Database Schema Migrations"
Cohesion: 0.20
Nodes (6): users, sessions, habits, habit_entries, habit_daily_totals, idx_habit_entries_user_id_date

### Community 11 - "Landing Page Visual"
Cohesion: 0.21
Nodes (12): Last 26 Weeks Contribution Heatmap, TinyWins Activity Board, Daily Actions as a Living Contribution Map, Less-to-More Activity Intensity Legend, October to March Timeline, Start Tracking Primary CTA, Build Streaks You Can See at a Glance, TinyWins Habit Tracker Landing Page (+4 more)

### Community 12 - "Backend API Documentation"
Cohesion: 0.22
Nodes (11): Account Deletion API Gap, Backend Layered Architecture, Authentication, Backend Go API, Chi Router, Session-Protected API Routes, Public API Routes, Session Cookie Authentication (+3 more)

### Community 13 - "Frontend Integration Docs"
Cohesion: 0.22
Nodes (11): Browser CORS and Cookie Contract, Habit Management, Local Frontend CORS Origins, Habit Editing, Bun, Habit Creation Request, Habit List Request, Habit Tracker Frontend (+3 more)

### Community 14 - "Repository Operations"
Cohesion: 0.18
Nodes (11): Database Seeder Reset Flow, Cross-Layer Date Consistency, Embedded Goose Migration Lifecycle, Authenticated Habit Ownership Scope, Independent Backend and Frontend Roots, Next.js Server and Client Data Flow, PostgreSQL Integration Test Isolation, Repository Guide (+3 more)

### Community 15 - "Habit History Features"
Cohesion: 0.25
Nodes (9): Habit Daily Totals, Explicit Habit Deletion Order, Immutable Habit Logs, Transactional Record and Undo Mutations, Weekly and Monthly Completion Analytics, Daily History and Calendar Views, Habit Archiving with History Preservation, Individual Log Editing and Undo (+1 more)

### Community 16 - "PostgreSQL Environments"
Cohesion: 0.47
Nodes (6): Development PostgreSQL Service, Development PostgreSQL Volume, PostgreSQL 18.3 Alpine Image, Test PostgreSQL Service, Test PostgreSQL Volume, PostgreSQL

### Community 17 - "File Icon Asset"
Cohesion: 0.40
Nodes (5): Document Shape, File Icon, File UI Affordance, Folded Page Corner, Document Text Lines

### Community 18 - "Graphify Plugin"
Cohesion: 0.40
Nodes (3): IMPORTANT: keep the reminder string free of backticks and $(...) constructs., ref_fs, ref_path

### Community 19 - "Browser Window Asset"
Cohesion: 0.67
Nodes (4): Browser Window Frame, Browser Window Icon, Web Interface Representation, Window Control Dots

### Community 20 - "Next.js Brand Asset"
Cohesion: 0.67
Nodes (3): Next.js Framework Branding, Next.js SVG Asset, Next.js Wordmark

### Community 21 - "Vercel Brand Asset"
Cohesion: 1.00
Nodes (3): Vercel Logo Asset, Vercel Platform Branding, Vercel Triangle Mark

## Knowledge Gaps
- **115 isolated node(s):** `$schema`, `plugin`, `github.com/Fozzyack/habit-tracker`, `LEVEL_CLASSES`, `spaceGrotesk` (+110 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 152 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `HabitService` connect `Backend App and Tests` to `Backend Domain and Stores`, `HTTP API and Routing`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Why does `seed()` connect `Backend App and Tests` to `Backend Domain and Stores`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `next` connect `Frontend Dashboard Flow` to `Frontend Build and Theme`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `$schema`, `plugin`, `github.com/Fozzyack/habit-tracker` to the rest of the system?**
  _115 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Backend Domain and Stores` be split into smaller, more focused modules?**
  _Cohesion score 0.05767543859649123 - nodes in this community are weakly interconnected._
- **Should `Backend App and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.0626674912389198 - nodes in this community are weakly interconnected._
- **Should `Frontend Dashboard Flow` be split into smaller, more focused modules?**
  _Cohesion score 0.053923541247484906 - nodes in this community are weakly interconnected._