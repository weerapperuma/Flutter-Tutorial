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
    ]
  },
  {
    id: 'v3',
    label: 'V3',
    project: 'Current Standard',
    client: 'New Flutter Apps',
    purpose: 'Industry-grade clean architecture for complex apps with environments, shared design system, auth, analytics, AI, alerts, and operations.',
    structure: `lib/
|-- main.dart
|-- main_dev.dart
|-- main_staging.dart
|-- main_prod.dart
|-- app/
|   |-- app.dart
|   |-- router/
|   |   |-- app_router.dart
|   |   \`-- app_routes.dart
|   |-- theme/
|   |   |-- app_theme.dart
|   |   |-- app_colors.dart
|   |   \`-- app_text_styles.dart
|   \`-- di/
|       |-- injection.dart
|       \`-- injection.config.dart
|-- core/
|   |-- network/
|   |   |-- api_client.dart
|   |   |-- auth_interceptor.dart
|   |   \`-- error_interceptor.dart
|   |-- storage/
|   |   |-- secure_storage.dart
|   |   \`-- local_storage.dart
|   |-- error/
|   |   |-- failures.dart
|   |   \`-- exceptions.dart
|   |-- utils/
|   \`-- constants/
|-- shared/
|   |-- widgets/
|   \`-- models/
\`-- features/
    |-- auth/
    |   |-- data/
    |   |-- domain/
    |   \`-- presentation/
    |-- home/
    |   |-- data/
    |   |-- domain/
    |   \`-- presentation/
    |-- analytics/
    |-- operations/
    |-- alerts/
    |-- ai/
    \`-- profile/`,
    layers: [
      ['main_*', 'Environment bootstrap for dev, staging, and production with different API URLs and feature flags.'],
      ['app', 'App shell: MaterialApp, router, theme tokens, route constants, and dependency injection setup.'],
      ['core', 'Reusable technical services: network, storage, error handling, constants, utilities, and interceptors.'],
      ['shared', 'Design system and shared models used across many features. No business-specific page logic.'],
      ['features/*/domain', 'Pure Dart entities, repository contracts, and usecases. No JSON, no widgets, no Dio.'],
      ['features/*/data', 'Remote/local data sources, DTO models, repository implementations, and API-to-domain mapping.'],
      ['features/*/presentation', 'Pages, feature widgets, Bloc/Cubit, events, states, and screen-specific interactions.']
    ]
  }
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
