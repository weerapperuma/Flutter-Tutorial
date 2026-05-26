export const architectureTree = `lib/
├── main.dart
├── main_dev.dart
├── main_staging.dart
├── main_prod.dart
│
├── app/
│   ├── app.dart
│   ├── router/
│   │   ├── app_router.dart
│   │   └── app_routes.dart
│   ├── theme/
│   │   ├── app_theme.dart
│   │   ├── app_colors.dart
│   │   └── app_text_styles.dart
│   └── di/
│       ├── injection.dart
│       └── injection.config.dart
│
├── core/
│   ├── network/
│   │   ├── api_client.dart
│   │   ├── auth_interceptor.dart
│   │   └── error_interceptor.dart
│   ├── storage/
│   │   ├── secure_storage.dart
│   │   └── local_storage.dart
│   ├── error/
│   │   ├── failures.dart
│   │   └── exceptions.dart
│   ├── utils/
│   │   ├── date_utils.dart
│   │   └── number_formatter.dart
│   └── constants/
│       ├── api_constants.dart
│       └── app_constants.dart
│
├── shared/
│   ├── widgets/
│   │   ├── health_score_ring.dart
│   │   ├── stat_card.dart
│   │   ├── alert_badge.dart
│   │   ├── kpi_progress_bar.dart
│   │   ├── business_card.dart
│   │   ├── section_header.dart
│   │   └── loading_shimmer.dart
│   └── models/
│       ├── business.dart
│       └── health_score.dart
│
└── features/
    ├── auth/
    ├── home/
    ├── analytics/
    ├── operations/
    ├── alerts/
    ├── ai/
    └── profile/`;

export const modules = [
  {
    key: 'app',
    name: 'App Shell',
    description: 'Bootstraps router, theme, dependency injection, and app-wide state.',
    items: ['MaterialApp', 'GoRouter', 'ThemeData']
  },
  {
    key: 'network',
    name: 'Core Network',
    description: 'Owns Dio setup, JWT attachment, token refresh, and API error normalization.',
    items: ['Dio client', 'Interceptors', 'Failure mapping']
  },
  {
    key: 'shared',
    name: 'Design System',
    description: 'Reusable UI primitives that keep every feature visually consistent.',
    items: ['Score ring', 'Stat cards', 'Alert badges']
  },
  {
    key: 'auth',
    name: 'Auth Feature',
    description: 'Login, biometrics, session state, tenant switching, and refresh token flow.',
    items: ['Bloc state', 'Secure token', 'Biometric prompt']
  },
  {
    key: 'home',
    name: 'Home Feature',
    description: 'Business summaries, AI digest, and CEO-ready KPI overview.',
    items: ['Usecases', 'Repository', 'Remote data source']
  },
  {
    key: 'operations',
    name: 'Operations',
    description: 'Live operational views for pumps, riders, alerts, and business health.',
    items: ['Live status', 'Maps-ready data', 'Alert stream']
  }
];

export const featureLayers = [
  {
    badge: '01',
    title: 'Presentation',
    copy: 'Pages, widgets, Bloc/Cubit, events, and states. This layer talks in UI language and asks usecases for work.'
  },
  {
    badge: '02',
    title: 'Domain',
    copy: 'Entities, repository contracts, and usecases. Pure Dart. No JSON annotations, no HTTP client, no Flutter widgets.'
  },
  {
    badge: '03',
    title: 'Data',
    copy: 'Remote/local data sources, DTO models, repository implementations, and mapping from API shape to domain shape.'
  }
];

export const highlights = [
  {
    title: 'Environment Entry Points',
    copy: 'Use main_dev.dart, main_staging.dart, and main_prod.dart so API URLs, logging, and feature flags never get hardcoded.'
  },
  {
    title: 'Auth Is A Feature',
    copy: 'CEO login, biometrics, refresh tokens, and tenant session rules are business behavior, not utility code.'
  },
  {
    title: 'Shared Widgets Stay Shared',
    copy: 'Health rings, KPI cards, alert pills, and business cards belong in shared/widgets so features do not import sideways.'
  },
  {
    title: 'Domain Stays Pure',
    copy: 'Business logic depends on repository contracts and entities. API changes stay contained in data models and mappers.'
  }
];

export const completedProjects = [
  {
    name: 'Salesman Pro',
    client: 'Tharindu Farms',
    status: 'Completed',
    summary: 'Field sales mobile app with customer routes, order capture, invoice summaries, and manager-ready daily reports.',
    metrics: [
      { label: 'Platform', value: 'Mobile' },
      { label: 'Modules', value: '8' },
      { label: 'UI', value: 'Dashboard' }
    ],
    technologies: ['Flutter', 'Kotlin', 'Firebase', 'REST API']
  },
  {
    name: 'Service Station Management System',
    client: 'Auto Service Operations',
    status: 'Completed',
    summary: 'Responsive admin dashboard for jobs, vehicle service history, billing, inventory, technicians, and daily revenue.',
    metrics: [
      { label: 'Platform', value: 'Web' },
      { label: 'Modules', value: '10' },
      { label: 'Reports', value: 'Live' }
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'MySQL']
  },
  {
    name: 'Business Health Dashboard',
    client: 'Multi Business CEO View',
    status: 'Completed',
    summary: 'Executive KPI dashboard with health score, alerts, revenue snapshots, AI digest, and branch-level performance.',
    metrics: [
      { label: 'Platform', value: 'Web + App' },
      { label: 'Score', value: '0-100' },
      { label: 'Alerts', value: 'Smart' }
    ],
    technologies: ['Flutter', 'React', 'Next.js', 'Dio']
  }
];

export const boilerplateFiles = [
  {
    path: 'features/home/domain/entities/business_summary.dart',
    code: `class BusinessSummary {
  const BusinessSummary({
    required this.id,
    required this.name,
    required this.revenue,
    required this.healthScore,
    required this.openAlerts,
  });

  final String id;
  final String name;
  final double revenue;
  final int healthScore;
  final int openAlerts;
}`
  },
  {
    path: 'features/home/domain/repositories/home_repository.dart',
    code: `import '../entities/business_summary.dart';

abstract class HomeRepository {
  Future<List<BusinessSummary>> getAllBusinesses();
  Future<String> getAiDigest();
}`
  },
  {
    path: 'features/home/domain/usecases/get_all_businesses.dart',
    code: `import '../entities/business_summary.dart';
import '../repositories/home_repository.dart';

class GetAllBusinesses {
  const GetAllBusinesses(this.repository);

  final HomeRepository repository;

  Future<List<BusinessSummary>> call() {
    return repository.getAllBusinesses();
  }
}`
  },
  {
    path: 'features/home/data/models/business_summary_model.dart',
    code: `import '../../domain/entities/business_summary.dart';

class BusinessSummaryModel extends BusinessSummary {
  const BusinessSummaryModel({
    required super.id,
    required super.name,
    required super.revenue,
    required super.healthScore,
    required super.openAlerts,
  });

  factory BusinessSummaryModel.fromJson(Map<String, dynamic> json) {
    return BusinessSummaryModel(
      id: json['id'] as String,
      name: json['name'] as String,
      revenue: (json['revenue'] as num).toDouble(),
      healthScore: json['health_score'] as int,
      openAlerts: json['open_alerts'] as int,
    );
  }
}`
  },
  {
    path: 'features/home/data/datasources/home_remote_ds.dart',
    code: `import '../../../../core/network/api_client.dart';
import '../models/business_summary_model.dart';

class HomeRemoteDataSource {
  const HomeRemoteDataSource(this.apiClient);

  final ApiClient apiClient;

  Future<List<BusinessSummaryModel>> getAllBusinesses() async {
    final response = await apiClient.get('/businesses/summary');
    final data = response.data as List<dynamic>;

    return data
        .map((item) => BusinessSummaryModel.fromJson(item))
        .toList();
  }
}`
  },
  {
    path: 'features/home/data/repositories/home_repo_impl.dart',
    code: `import '../../domain/entities/business_summary.dart';
import '../../domain/repositories/home_repository.dart';
import '../datasources/home_remote_ds.dart';

class HomeRepositoryImpl implements HomeRepository {
  const HomeRepositoryImpl(this.remoteDataSource);

  final HomeRemoteDataSource remoteDataSource;

  @override
  Future<List<BusinessSummary>> getAllBusinesses() {
    return remoteDataSource.getAllBusinesses();
  }

  @override
  Future<String> getAiDigest() async {
    return 'Revenue is trending up while alerts need review.';
  }
}`
  },
  {
    path: 'features/home/presentation/bloc/home_bloc.dart',
    code: `import 'package:flutter_bloc/flutter_bloc.dart';
import '../../domain/usecases/get_all_businesses.dart';

part 'home_event.dart';
part 'home_state.dart';

class HomeBloc extends Bloc<HomeEvent, HomeState> {
  HomeBloc(this.getAllBusinesses) : super(const HomeInitial()) {
    on<HomeStarted>(_onStarted);
  }

  final GetAllBusinesses getAllBusinesses;

  Future<void> _onStarted(
    HomeStarted event,
    Emitter<HomeState> emit,
  ) async {
    emit(const HomeLoading());
    final businesses = await getAllBusinesses();
    emit(HomeLoaded(businesses));
  }
}`
  }
];
