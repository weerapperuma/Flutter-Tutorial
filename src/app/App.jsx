import {
  ArrowRight,
  Blocks,
  Braces,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Fingerprint,
  FolderTree,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  PackageCheck,
  Palette,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TerminalSquare,
  Workflow,
  Zap
} from 'lucide-react';
import { architectureTree, boilerplateFiles, featureLayers, highlights, modules } from '../data/architecture.js';

const iconMap = {
  app: Smartphone,
  router: Route,
  theme: Palette,
  di: GitBranch,
  network: Network,
  storage: LockKeyhole,
  error: ShieldCheck,
  utils: Cpu,
  shared: Blocks,
  auth: Fingerprint,
  home: Database,
  analytics: Sparkles,
  operations: Workflow,
  alerts: Zap,
  ai: Braces,
  profile: PackageCheck
};

function Stat({ value, label }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function ModuleCard({ module }) {
  const Icon = iconMap[module.key] || FolderTree;

  return (
    <article className="module-card">
      <div className="module-card__icon">
        <Icon size={22} />
      </div>
      <div>
        <h3>{module.name}</h3>
        <p>{module.description}</p>
      </div>
      <ul>
        {module.items.map((item) => (
          <li key={item}>
            <CheckCircle2 size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function LayerRow({ layer }) {
  return (
    <div className="layer-row">
      <div>
        <span>{layer.badge}</span>
        <h3>{layer.title}</h3>
      </div>
      <p>{layer.copy}</p>
    </div>
  );
}

function FileBlock({ file }) {
  return (
    <article className="file-block">
      <header>
        <span>{file.path}</span>
        <Code2 size={18} />
      </header>
      <pre>
        <code>{file.code}</code>
      </pre>
    </article>
  );
}

export function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero__visual" aria-hidden="true">
          <div className="phone-shell">
            <div className="phone-top" />
            <div className="phone-screen">
              <div className="screen-header">
                <span>CEO Dashboard</span>
                <strong>94</strong>
              </div>
              <div className="score-ring">
                <div>Health</div>
                <strong>88%</strong>
              </div>
              <div className="mini-grid">
                <span>Revenue</span>
                <b>+18.2%</b>
                <span>Alerts</span>
                <b>3</b>
                <span>Businesses</span>
                <b>12</b>
              </div>
              <div className="app-bars">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </div>

        <div className="hero__content">
          <div className="eyebrow">
            <Smartphone size={18} />
            Mobile app developer architecture
          </div>
          <h1>Industry-grade Flutter project structure for a serious app.</h1>
          <p>
            A web guide shaped like a production mobile dashboard: clean architecture, feature modules, shared design system,
            auth, dependency injection, routing, environments, and a complete Home feature boilerplate.
          </p>
          <div className="hero__actions">
            <a href="#structure" className="button button--primary">
              View structure
              <ArrowRight size={18} />
            </a>
            <a href="#boilerplate" className="button button--ghost">
              See boilerplate
              <TerminalSquare size={18} />
            </a>
          </div>
          <div className="stats">
            <Stat value="3" label="environments" />
            <Stat value="6" label="feature modules" />
            <Stat value="Clean" label="architecture" />
          </div>
        </div>
      </section>

      <section className="section" id="structure">
        <div className="section__heading">
          <span>Project Structure</span>
          <h2>Everything has a job, and every boundary is clear.</h2>
        </div>
        <div className="structure-layout">
          <div className="tree-panel">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <pre>
              <code>{architectureTree}</code>
            </pre>
          </div>
          <div className="module-grid">
            {modules.map((module) => (
              <ModuleCard key={module.name} module={module} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--split">
        <div className="section__heading">
          <span>Layering</span>
          <h2>Feature-first, clean inside each feature.</h2>
        </div>
        <div className="layers">
          {featureLayers.map((layer) => (
            <LayerRow key={layer.title} layer={layer} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <span>Architecture Notes</span>
          <h2>Production decisions that save the project later.</h2>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight" key={item.title}>
              <Layers3 size={22} />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="boilerplate">
        <div className="section__heading">
          <span>Home Feature Boilerplate</span>
          <h2>Bloc, repository, usecase, entity, model, and remote source.</h2>
        </div>
        <div className="code-grid">
          {boilerplateFiles.map((file) => (
            <FileBlock file={file} key={file.path} />
          ))}
        </div>
      </section>
    </main>
  );
}
