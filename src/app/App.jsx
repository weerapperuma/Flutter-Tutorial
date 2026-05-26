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
  PlayCircle,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles
} from 'lucide-react';
import { completedProjects, flutterSetupSteps, projectVersions, technologies } from '../data/architecture.js';

const icons = {
  flutter: Smartphone,
  kotlin: MonitorSmartphone,
  express: Server,
  react: Gauge,
  next: Sparkles
};

function MiniStat({ label, value }) {
  return (
    <div className="mini-stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function TechButton({ tech, active, onClick }) {
  const Icon = icons[tech.id] || Code2;

  return (
    <button className={`tech-button tech-button--${tech.id} ${active ? 'is-active' : ''}`} onClick={onClick}>
      <Icon size={18} />
      <span>{tech.name}</span>
    </button>
  );
}

function InfoList({ title, icon: Icon, items }) {
  return (
    <div className="info-list">
      <div className="card-title card-title--small">
        <div>
          <span>{title}</span>
          <h3>{items.length} items</h3>
        </div>
        <Icon size={20} />
      </div>
      <div className="info-list__items">
        {items.map(([name, copy]) => (
          <article key={name}>
            <CheckCircle2 size={14} />
            <div>
              <h4>{name}</h4>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProjectRow({ project, onOpenVersion, compact = false }) {
  return (
    <button className={`project-row ${compact ? 'project-row--compact' : ''}`} onClick={() => onOpenVersion(project.version)}>
      <div>
        <strong>{project.name}</strong>
        <span>{project.client}</span>
      </div>
      <small>{project.version.toUpperCase()}</small>
      <ChevronRight size={16} />
    </button>
  );
}

function VersionCard({ version, active, onClick }) {
  return (
    <button className={`version-card ${active ? 'is-active' : ''}`} onClick={onClick}>
      <span>{version.label}</span>
      <strong>{version.project}</strong>
      <small>{version.client}</small>
    </button>
  );
}

function DashboardHome({ activeTechId, setActiveTechId }) {
  return (
    <section className="home-dashboard">
      <div className="hero-card">
        <span>Start Here</span>
        <h2>Pick a stack to load its project dashboard.</h2>
        <p>Flutter opens used projects, setup steps, architecture versions, mandatory folders, and layer responsibility.</p>
      </div>
      <div className="overview-grid">
        {technologies.map((tech) => {
          const Icon = icons[tech.id] || Code2;
          return (
            <button className="overview-card" key={tech.id} onClick={() => setActiveTechId(tech.id)}>
              <Icon size={22} />
              <span>{tech.name}</span>
              <strong>{tech.role}</strong>
            </button>
          );
        })}
      </div>
      <div className="home-footer-card">
        <PlayCircle size={22} />
        <div>
          <strong>{activeTechId ? 'Dashboard loaded' : 'No stack selected'}</strong>
          <span>Use the spread buttons above or the side navigation.</span>
        </div>
      </div>
    </section>
  );
}

function FlutterWorkspace({ activeVersion, setActiveVersion, onOpenVersion }) {
  const flutterProjects = completedProjects.filter((project) => project.stack.includes('Flutter'));

  return (
    <section className="flutter-workspace">
      <div className="main-card used-projects-card">
        <div className="card-title">
          <div>
            <span>Flutter Used Projects</span>
            <h2>Project examples</h2>
          </div>
          <Smartphone size={22} />
        </div>
        <div className="used-project-grid">
          {flutterProjects.map((project) => (
            <ProjectRow compact key={project.name} project={project} onOpenVersion={onOpenVersion} />
          ))}
        </div>
      </div>

      <div className="main-card setup-card">
        <div className="card-title">
          <div>
            <span>First Things After Create</span>
            <h2>Setup flow</h2>
          </div>
          <Rocket size={22} />
        </div>
        <div className="setup-flow">
          {flutterSetupSteps.map(([title, copy]) => (
            <article key={title}>
              <span>{title}</span>
              <strong>{copy}</strong>
            </article>
          ))}
        </div>
      </div>

      <div className="main-card version-picker-card">
        <div className="card-title">
          <div>
            <span>Project Structures</span>
            <h2>Choose V1, V2, or V3</h2>
          </div>
          <Layers3 size={22} />
        </div>
        <div className="version-grid">
          {projectVersions.map((version) => (
            <VersionCard
              active={activeVersion.id === version.id}
              key={version.id}
              version={version}
              onClick={() => setActiveVersion(version)}
            />
          ))}
        </div>
      </div>

      <div className="main-card structure-card">
        <div className="card-title">
          <div>
            <span>{activeVersion.label} Structure</span>
            <h2>{activeVersion.project}</h2>
          </div>
          <FolderTree size={22} />
        </div>
        <div className="structure-preview">
          <pre>
            <code>{activeVersion.structure}</code>
          </pre>
        </div>
      </div>

      <div className="main-card detail-card">
        <p className="quiet">{activeVersion.purpose}</p>
        <InfoList icon={Layers3} items={activeVersion.layers} title="Layer Responsibility" />
        <InfoList icon={ShieldCheck} items={activeVersion.mandatoryFolders} title="Mandatory Folders" />
      </div>
    </section>
  );
}

function TechnologyWorkspace({ tech }) {
  return (
    <section className="technology-workspace">
      <div className="main-card tech-focus-card">
        <div className="card-title">
          <div>
            <span>Technology Dashboard</span>
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

      <div className="main-card stack-card">
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
  const [activeTechId, setActiveTechId] = useState(null);
  const [activeVersion, setActiveVersion] = useState(projectVersions[2]);

  const activeTech = useMemo(
    () => technologies.find((technology) => technology.id === activeTechId),
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
            <h1>{activeTech ? `${activeTech.name} workspace` : 'Mobile stack dashboard'}</h1>
          </div>
          <div className="header-stats">
            <MiniStat label="Stacks" value={technologies.length} />
            <MiniStat label="Projects" value={completedProjects.length} />
            <MiniStat label="Flutter" value="V1 / V2 / V3" />
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

        {!activeTech ? (
          <DashboardHome activeTechId={activeTechId} setActiveTechId={setActiveTechId} />
        ) : activeTech.id === 'flutter' ? (
          <FlutterWorkspace
            activeVersion={activeVersion}
            onOpenVersion={openProjectVersion}
            setActiveVersion={setActiveVersion}
          />
        ) : (
          <TechnologyWorkspace tech={activeTech} />
        )}
      </section>

      <aside className="project-panel">
        <div className="panel-card">
          <div className="card-title card-title--small">
            <div>
              <span>Completed</span>
              <h2>Projects</h2>
            </div>
            <Database size={20} />
          </div>
          <div className="project-list">
            {completedProjects.map((project) => (
              <ProjectRow key={project.name} project={project} onOpenVersion={openProjectVersion} />
            ))}
          </div>
        </div>

        <div className="panel-card panel-card--guide">
          <ShieldCheck size={22} />
          <h3>V3 for new apps</h3>
          <p>V1 fits early service apps. V2 fits POS/offline systems. V3 is the current production standard.</p>
        </div>
      </aside>
    </main>
  );
}
