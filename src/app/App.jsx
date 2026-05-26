import { useMemo, useState } from 'react';
import {
  Boxes,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  FolderTree,
  Gauge,
  Layers3,
  MonitorSmartphone,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles
} from 'lucide-react';
import { completedProjects, projectVersions, technologies } from '../data/architecture.js';

const icons = {
  flutter: Smartphone,
  kotlin: MonitorSmartphone,
  express: Server,
  react: Gauge,
  next: Sparkles
};

function TechButton({ tech, active, onClick }) {
  const Icon = icons[tech.id] || Code2;

  return (
    <button className={`tech-button tech-button--${tech.id} ${active ? 'is-active' : ''}`} onClick={onClick}>
      <Icon size={18} />
      <span>{tech.name}</span>
    </button>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="mini-stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function LayerList({ layers }) {
  return (
    <div className="layer-list">
      {layers.map(([title, copy]) => (
        <article key={title}>
          <CheckCircle2 size={15} />
          <div>
            <h4>{title}</h4>
            <p>{copy}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function VersionTabs({ activeVersion, onChange }) {
  return (
    <div className="version-tabs">
      {projectVersions.map((version) => (
        <button
          className={activeVersion.id === version.id ? 'is-active' : ''}
          key={version.id}
          onClick={() => onChange(version)}
        >
          <span>{version.label}</span>
          {version.project}
        </button>
      ))}
    </div>
  );
}

function ProjectRow({ project, onOpenVersion }) {
  return (
    <button className="project-row" onClick={() => onOpenVersion(project.version)}>
      <div>
        <strong>{project.name}</strong>
        <span>{project.client}</span>
      </div>
      <small>{project.version.toUpperCase()}</small>
      <ChevronRight size={16} />
    </button>
  );
}

function FlutterWorkspace({ activeVersion, setActiveVersion }) {
  const setupSteps = ['flutter create app_name', 'add environments', 'build first feature'];

  return (
    <section className="workspace-grid">
      <div className="main-card main-card--structure">
        <div className="card-title">
          <div>
            <span>Flutter Architecture</span>
            <h2>{activeVersion.label} project structure</h2>
          </div>
          <FolderTree size={24} />
        </div>
        <VersionTabs activeVersion={activeVersion} onChange={setActiveVersion} />
        <div className="structure-preview">
          <pre>
            <code>{activeVersion.structure}</code>
          </pre>
        </div>
      </div>

      <div className="main-card">
        <div className="card-title">
          <div>
            <span>Layer Responsibility</span>
            <h2>{activeVersion.project}</h2>
          </div>
          <Layers3 size={24} />
        </div>
        <p className="quiet">{activeVersion.purpose}</p>
        <div className="setup-steps">
          {setupSteps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
        <LayerList layers={activeVersion.layers} />
      </div>
    </section>
  );
}

function TechnologyWorkspace({ tech }) {
  return (
    <section className="workspace-grid">
      <div className="main-card">
        <div className="card-title">
          <div>
            <span>Technology Page</span>
            <h2>{tech.name}</h2>
          </div>
          <Code2 size={24} />
        </div>
        <p className="quiet">{tech.summary}</p>
        <div className="action-grid">
          {tech.actions.map((action) => (
            <button key={action}>
              <Rocket size={16} />
              {action}
            </button>
          ))}
        </div>
      </div>

      <div className="main-card">
        <div className="card-title">
          <div>
            <span>Main Stack</span>
            <h2>{tech.role}</h2>
          </div>
          <Boxes size={24} />
        </div>
        <div className="stack-list">
          {tech.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function App() {
  const [activeTechId, setActiveTechId] = useState('flutter');
  const [activeVersion, setActiveVersion] = useState(projectVersions[2]);

  const activeTech = useMemo(
    () => technologies.find((technology) => technology.id === activeTechId) || technologies[0],
    [activeTechId]
  );

  const openProjectVersion = (versionId) => {
    const version = projectVersions.find((item) => item.id === versionId);
    setActiveTechId('flutter');
    if (version) {
      setActiveVersion(version);
    }
  };

  return (
    <main className="dashboard-shell">
      <aside className="side-nav">
        <div className="brand">
          <div>MC</div>
          <span>Mobile Craft</span>
        </div>
        <nav>
          {technologies.map((tech) => {
            const Icon = icons[tech.id] || Code2;
            return (
              <button
                className={activeTechId === tech.id ? 'is-active' : ''}
                key={tech.id}
                onClick={() => setActiveTechId(tech.id)}
              >
                <Icon size={18} />
                {tech.name}
              </button>
            );
          })}
        </nav>
      </aside>

      <section className="dashboard">
        <header className="dashboard-header">
          <div>
            <span>Developer Dashboard</span>
            <h1>Mobile stack dashboard.</h1>
          </div>
          <div className="header-stats">
            <MiniStat label="Structures" value="V1 / V2 / V3" />
            <MiniStat label="Projects" value={completedProjects.length} />
            <MiniStat label="Mode" value="Clean UI" />
          </div>
        </header>

        <div className="tech-cloud" aria-label="Technology shortcuts">
          {technologies.map((tech) => (
            <TechButton
              active={activeTechId === tech.id}
              key={tech.id}
              tech={tech}
              onClick={() => setActiveTechId(tech.id)}
            />
          ))}
        </div>

        {activeTech.id === 'flutter' ? (
          <FlutterWorkspace activeVersion={activeVersion} setActiveVersion={setActiveVersion} />
        ) : (
          <TechnologyWorkspace tech={activeTech} />
        )}
      </section>

      <aside className="project-panel">
        <div className="panel-card">
          <div className="card-title">
            <div>
              <span>Completed Projects</span>
              <h2>Open version</h2>
            </div>
            <Database size={22} />
          </div>
          <div className="project-list">
            {completedProjects.map((project) => (
              <ProjectRow key={project.name} project={project} onOpenVersion={openProjectVersion} />
            ))}
          </div>
        </div>

        <div className="panel-card panel-card--guide">
          <ShieldCheck size={24} />
          <h3>Current standard is V3</h3>
          <p>
            Use V3 for new apps. V1 fits early service apps, V2 fits POS/offline systems, and V3 fits complex production
            products.
          </p>
        </div>
      </aside>
    </main>
  );
}
