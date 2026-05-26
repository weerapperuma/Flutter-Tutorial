export const technologies = [
  {
    id: 'flutter',
    name: 'Flutter',
    role: 'Mobile app architecture',
    summary: 'Project creation flow, reusable folder structures, clean layers, Bloc/Cubit boundaries, and production-ready app setup.',
    stack: ['Dart', 'Flutter', 'Bloc', 'Dio', 'GetIt', 'GoRouter'],
    actions: ['Create project', 'Select structure', 'Build feature', 'Connect API']
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    role: 'Native Android modules',
    summary: 'Used for native Android integrations, platform channels, background services, POS devices, and hardware-level support.',
    stack: ['Kotlin', 'Android SDK', 'Room', 'Coroutines'],
    actions: ['Platform channel', 'Device API', 'Background task']
  },
  {
    id: 'express',
    name: 'Express',
    role: 'Backend API layer',
    summary: 'REST APIs for auth, inventory, reports, mobile sync, dashboard metrics, and admin-side integrations.',
    stack: ['Node.js', 'Express', 'JWT', 'MySQL'],
    actions: ['Auth API', 'Reports API', 'Sync API']
  },
  {
    id: 'react',
    name: 'React',
    role: 'Admin dashboards',
    summary: 'Clean responsive dashboard UI for project management, reporting screens, analytics, and internal tools.',
    stack: ['React', 'Vite', 'Charts', 'REST API'],
    actions: ['Dashboard UI', 'Reusable cards', 'Data tables']
  },
  {
    id: 'next',
    name: 'Next.js',
    role: 'Production web apps',
    summary: 'Full web products with routing, server rendering, API routes, auth pages, and SEO-ready public screens.',
    stack: ['Next.js', 'React', 'API Routes', 'Tailwind'],
    actions: ['App router', 'SSR pages', 'Admin portal']
  }
];

export const projectVersions = [
  {
    id: 'v1',
    label: 'V1',
    project: 'MotoCare',
    client: 'MotoCare-LK-Pro-Mobile',
    purpose: 'Simple feature-first app for service workflows. Good when the app is growing but still easy to understand.',
    structure: `lib/
|-- main.dart
|-- core/
|   |-- constants/
|   |-- di/
|   |-- error/
|   |-- extensions/
|   |-- network/
|   |-- routing/
|   |-- storage/
|   |-- sync/
|   |-- themes/
|   |-- ui/
|   |-- widgets/
|   \`-- dio_base_options.dart
\`-- features/
    |-- auth/
    |-- dashboard/
    |   |-- data_layer/
    |   |-- domain_layer/
    |   \`-- presentation_layer/
    |-- live_tv/
    |-- mechanic_terminal/
    |-- quotation/
    \`-- reservations/
        |-- data_layer/
        |   \`-- data_source/
        |-- domain_layer/
        \`-- presentation_layer/`,
    layers: [
      ['core', 'Shared technical foundation: constants, dependency injection, routing, Dio setup, storage, sync, themes, and global widgets.'],
      ['features', 'Business modules grouped by app capability such as dashboard, quotation, reservations, and mechanic terminal.'],
      ['data_layer', 'API calls, local cache, DTO models, and mappers for each feature.'],
      ['domain_layer', 'Business rules, entities, repository contracts, and usecases.'],
      ['presentation_layer', 'Pages, widgets, Bloc/Cubit, states, and user interactions.']
    ],
    mandatoryFolders: [
      ['core/network', 'Required for API client, base options, interceptors, and normalized backend communication.'],
      ['core/routing', 'Required for central navigation rules and route guards.'],
      ['core/storage', 'Required for tokens, cached profile data, and persistent app state.'],
      ['features/*/data_layer', 'Required when a feature talks to API, local DB, or external service.'],
      ['features/*/presentation_layer', 'Required for pages, widgets, and feature state management.']
    ]
  },
  {
    id: 'v2',
    label: 'V2',
    project: 'Point of Sale',
    client: 'POS by HAT',
    purpose: 'Cleaner business separation for POS systems where receipts, payments, products, and reconciliation need stable boundaries.',
    structure: `lib/
|-- main.dart
|-- core/
|   |-- bloc/
|   |-- config/
|   |-- constants/
|   |-- local_db/
|   |-- services/
|   |-- sync/
|   |-- theme/
|   |-- utils/
|   \`-- widgets/
\`-- features/
    |-- auth/
    |   |-- domain/
    |   |   \`-- entities/
    |   \`-- presentation/
    |       |-- cubit/
    |       \`-- pages/
    |-- branch/
    |-- customers/
    |-- payments/
    |-- products/
    |-- receipts/
    |   |-- data/
    |   |-- domain/
    |   \`-- presentation/
    \`-- reconciliation/`,
    layers: [
      ['core/bloc', 'Global app state such as auth session, sync status, branch context, and shared loading/error states.'],
      ['core/local_db', 'Offline-first POS storage for receipts, products, payments, and pending sync queues.'],
      ['feature/domain', 'Pure POS rules: entities, totals, discounts, taxes, receipt validation, and repository contracts.'],
      ['feature/data', 'Database tables, API models, local/remote sources, and sync mapping.'],
      ['feature/presentation', 'Cashier pages, Cubit/Bloc state, dialogs, receipt UI, and payment flows.']
    ],
    mandatoryFolders: [
      ['core/local_db', 'Required because POS must continue working when internet is unavailable.'],
      ['core/sync', 'Required to push pending receipts, payments, stock updates, and branch changes.'],
      ['features/auth/domain', 'Required to keep user, branch, and permission rules independent from UI.'],
      ['features/receipts/data', 'Required for receipt persistence, API payloads, and offline queue mapping.'],
      ['features/payments', 'Required to isolate tender types, payment validation, and settlement logic.']
    ]
  },
  {
    id: 'v3',
    label: 'V3',
    project: 'Current Standard',
    client: 'New Flutter Apps',
    purpose: 'Lightweight clean architecture for apps that need room to grow without creating empty layers too early.',
    structure: `lib/
|-- main.dart
|-- app/
|   |-- config/
|   |   \`-- app_config.dart
|   |-- bloc/
|   |   \`-- app_bloc_observer.dart
|   |-- presentation/
|   |   \`-- pages/
|   |       \`-- app_shell.dart
|   \`-- routes/
|       \`-- app_routes.dart
|-- core/
|   |-- constants/
|   |   \`-- app_colors.dart
|   |-- theme/
|   |   \`-- app_theme.dart
|   |-- widgets/
|   |   |-- app_background.dart
|   |   |-- app_surface_card.dart
|   |   |-- control360_nav_bar.dart
|   |   \`-- dashboard_header.dart
|   |-- services/
|   |   \`-- device_id_service.dart
|   |-- config/
|   |   |-- env_config.dart
|   |   \`-- supabase_config.dart
|   |-- local_db/
|   |   \`-- local_database.dart
|   |-- sync/
|   |   |-- sync_engine.dart
|   |   |-- sync_cubit.dart
|   |   \`-- sync_models.dart
|   |-- utils/
|   |   \`-- currency_formatter.dart
|   \`-- README.md
|-- features/
    |-- home/
    |   \`-- presentation/
    |       |-- pages/
    |       |   \`-- home_dashboard_page.dart
    |       \`-- widgets/
    |           |-- health_score_widget.dart
    |           \`-- inventory_insights_widget.dart
    |-- analytics/
    |   \`-- presentation/
    |       |-- pages/
    |       |   \`-- analytics_dashboard_page.dart
    |       \`-- widgets/
    |           |-- analytics_kpi_grid.dart
    |           |-- branch_performance_card.dart
    |           |-- strategic_insights_card.dart
    |           \`-- global_status_card.dart
    |-- ai/
    |   \`-- presentation/
    |       |-- pages/
    |       \`-- widgets/
    |-- alerts/
    |   \`-- presentation/
    |       |-- pages/
    |       \`-- widgets/
    \`-- profile/
        \`-- presentation/
            |-- pages/
            \`-- widgets/`,
    layers: [
      ['app', 'App startup, app shell, app-level config, bloc observer, and routes when routing grows.'],
      ['core', 'Reusable shared tools, widgets, services, config, local database, sync, theme, constants, and utilities.'],
      ['features', 'Business areas such as home, analytics, AI, alerts, and profile.'],
      ['presentation', 'Pages, widgets, Cubit/Bloc, and UI-only feature logic. Home and analytics can start here.'],
      ['data', 'Add only when a feature needs API, database, models, or repository implementations.'],
      ['domain', 'Add only when a feature needs entities, repository contracts, or use cases.']
    ],
    mandatoryFolders: [
      ['app/config', 'Required for app-level configuration that belongs to startup rather than reusable core tools.'],
      ['app/presentation/pages/app_shell.dart', 'Required for the root shell that hosts navigation and page layout.'],
      ['core/widgets', 'Required for reusable UI primitives used across features. This replaces a separate shared layer.'],
      ['core/config', 'Required for environment and Supabase configuration.'],
      ['core/local_db', 'Required when offline storage or local persistence is part of the app.'],
      ['core/sync', 'Required when the app needs background sync, sync state, or sync models.'],
      ['features/*/presentation', 'Required for each business feature. Add data/domain later only when the feature needs them.']
    ]
  }
];

export const flutterSetupSteps = [
  ['Create', 'flutter create app_name'],
  ['Bootstrap', 'main.dart with selected environment config'],
  ['Packages', 'go_router, dio, get_it, injectable, flutter_bloc'],
  ['Theme', 'colors, typography, spacing, reusable components'],
  ['First Feature', 'data, domain, presentation, bloc/cubit'],
  ['Connect API', 'api_client, interceptors, failures, repositories']
];

export const completedProjects = [
  {
    name: 'MotoCare',
    client: 'MotoCare-LK-Pro-Mobile',
    version: 'v1',
    stack: ['Flutter', 'Dio', 'Bloc'],
    status: 'Completed'
  },
  {
    name: 'Point of Sale',
    client: 'POS by HAT',
    version: 'v2',
    stack: ['Flutter', 'Local DB', 'Sync'],
    status: 'Completed'
  },
  {
    name: 'Salesman Pro',
    client: 'Tharindu Farms',
    version: 'v2',
    stack: ['Flutter', 'Kotlin', 'Firebase'],
    status: 'Completed'
  },
  {
    name: 'Service Station Management System',
    client: 'Auto Service Operations',
    version: 'web',
    stack: ['React', 'Next.js', 'Express'],
    status: 'Completed'
  }
];
