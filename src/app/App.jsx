import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  Boxes,
  CheckCircle2,
  Code2,
  FileText,
  Folder,
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
import { completedProjects, flutterSetupSteps, projectVersions, technologies } from '../data/architecture.js';

const icons = {
  flutter: Smartphone,
  kotlin: MonitorSmartphone,
  express: Server,
  react: Gauge,
  next: Sparkles
};

function TechOrb({ tech, active, onClick }) {
  const Icon = icons[tech.id] || Code2;

  return (
    <button
      className={`absolute inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-black shadow-sm transition hover:-translate-y-1 hover:bg-slate-950 hover:text-white ${
        active ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-200 bg-white/90 text-slate-800'
      } tech-orb-${tech.id}`}
      onClick={onClick}
    >
      <Icon size={18} />
      {tech.name}
    </button>
  );
}

function DashboardHome({ onSelectTech, selectedTech }) {
  return (
    <main className="min-h-dvh overflow-x-hidden bg-[#edf3ef] p-4 text-slate-950">
      <section className="grid min-h-0 grid-cols-[220px_minmax(0,1fr)_260px] items-start gap-4 max-[1050px]:grid-cols-[88px_minmax(0,1fr)] max-[760px]:grid-cols-1">
        <aside className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm max-[760px]:flex max-[760px]:items-center max-[760px]:gap-4">
          <div className="mb-5 flex items-center gap-3 border-b border-slate-100 pb-4 max-[760px]:mb-0 max-[760px]:border-b-0 max-[760px]:pb-0">
            <div className="grid size-10 place-items-center rounded-xl bg-emerald-700 font-black text-white">MC</div>
            <strong className="truncate max-[1050px]:hidden max-[760px]:block">Mobile Craft</strong>
          </div>
          <nav className="grid gap-2 max-[760px]:flex max-[760px]:overflow-x-auto">
            {technologies.map((tech) => {
              const Icon = icons[tech.id] || Code2;
              return (
                <button
                  className={`flex min-h-11 items-center gap-3 rounded-xl px-3 text-left font-extrabold transition hover:bg-slate-950 hover:text-white max-[1050px]:justify-center max-[760px]:min-w-max ${
                    selectedTech === tech.id ? 'bg-slate-950 text-white' : 'text-slate-700'
                  }`}
                  key={tech.id}
                  onClick={() => onSelectTech(tech.id)}
                >
                  <Icon size={18} />
                  <span className="max-[1050px]:hidden max-[760px]:block">{tech.name}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        <section className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)] gap-4 max-[760px]:grid-rows-none">
          <header className="grid grid-cols-[minmax(0,1fr)_320px] items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-sm max-[1180px]:grid-cols-1">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700">Developer Dashboard</span>
              <h1 className="mt-1 text-2xl font-black leading-tight tracking-normal max-[760px]:text-3xl">
                Stack launcher for real project architecture.
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-2 max-[520px]:grid-cols-1">
              <Stat label="Stacks" value={technologies.length} />
              <Stat label="Projects" value={completedProjects.length} />
              <Stat label="Flutter" value="V1-V3" />
            </div>
          </header>

          <div className="relative min-h-[470px] overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm max-[760px]:overflow-visible">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
            {technologies.map((tech) => (
              <TechOrb
                active={selectedTech === tech.id}
                key={tech.id}
                tech={tech}
                onClick={() => onSelectTech(tech.id)}
              />
            ))}
            <div className="relative z-10 grid min-h-[430px] grid-cols-[minmax(240px,0.65fr)_minmax(0,1.35fr)] gap-4 pt-20 max-[900px]:grid-cols-1 max-[760px]:pt-4">
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-sm">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-700">Start Here</span>
                <h2 className="mt-3 text-4xl font-black leading-none tracking-normal max-[760px]:text-4xl">
                  Click a stack to open its page.
                </h2>
                <p className="mt-5 max-w-md text-slate-600">
                  The dashboard stays simple. The selected stack opens as a clean scrollable web page with its own structure,
                  projects, and responsibilities.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 max-[1180px]:grid-cols-2 max-[620px]:grid-cols-1">
                {technologies.map((tech) => {
                  const Icon = icons[tech.id] || Code2;
                  return (
                    <button
                      className="group rounded-2xl border border-slate-200 bg-white/90 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:bg-slate-950 hover:text-white"
                      key={tech.id}
                      onClick={() => onSelectTech(tech.id)}
                    >
                      <Icon className="mb-4 text-emerald-700 group-hover:text-white" size={22} />
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-700 group-hover:text-white">
                        {tech.name}
                      </span>
                      <strong className="mt-2 block text-sm leading-snug">{tech.role}</strong>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <aside className="grid content-start gap-4 max-[1050px]:col-span-2 max-[760px]:col-span-1">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-emerald-700">Completed</span>
                <h2 className="text-2xl font-black leading-none">Projects</h2>
              </div>
              <Boxes size={22} />
            </div>
            <div className="grid gap-2">
              {completedProjects.map((project) => (
                <button
                  className="flex min-w-0 items-center justify-between gap-2 rounded-xl bg-slate-50 p-3 text-left transition hover:bg-emerald-50"
                  key={project.name}
                  onClick={() => onSelectTech(project.stack.includes('Flutter') ? 'flutter' : 'react')}
                >
                  <div className="min-w-0">
                    <strong className="block truncate text-sm">{project.name}</strong>
                    <span className="block truncate text-xs text-slate-500">{project.client}</span>
                  </div>
                  <small className="shrink-0 rounded-full bg-emerald-100 px-2 py-1 text-xs font-black text-emerald-700">
                    {project.version.toUpperCase()}
                  </small>
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-slate-950 p-5 text-white shadow-sm">
            <ShieldCheck size={24} />
            <h3 className="mt-5 text-lg font-black leading-tight">Flutter V3 is current standard</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              V1 fits early service apps. V2 fits POS/offline apps. V3 is best for new production work.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-2.5">
      <span className="text-xs font-black uppercase tracking-wider text-emerald-700">{label}</span>
      <strong className="mt-1 block text-base font-black">{value}</strong>
    </div>
  );
}

function PageHeader({ tech, onBack }) {
  const Icon = icons[tech.id] || Code2;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#edf3ef]/90 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <button className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-black shadow-sm" onClick={onBack}>
          <ArrowLeft size={18} />
          Dashboard
        </button>
        <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
          <Icon className="text-emerald-700" size={20} />
          <strong>{tech.name}</strong>
        </div>
      </div>
    </header>
  );
}

function FlutterPage({ activeVersion, setActiveVersion, onBack }) {
  const flutterTech = technologies.find((tech) => tech.id === 'flutter');
  const flutterProjects = completedProjects.filter((project) => project.stack.includes('Flutter'));

  return (
    <main className="min-h-dvh bg-[#edf3ef] text-slate-950">
      <PageHeader tech={flutterTech} onBack={onBack} />
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] gap-6 max-[940px]:grid-cols-1">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700">Flutter Workspace</span>
            <h1 className="mt-4 max-w-3xl text-6xl font-black leading-none tracking-normal max-[760px]:text-4xl">
              Create project, choose structure, build clean layers.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              This page documents how our Flutter apps are started, which real projects use each structure version, and what
              each mandatory folder is responsible for.
            </p>
          </div>
          <div className="grid gap-3">
            {flutterProjects.map((project) => (
              <button
                className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-300"
                key={project.name}
                onClick={() => {
                  const version = projectVersions.find((item) => item.id === project.version);
                  if (version) setActiveVersion(version);
                }}
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-700">{project.client}</span>
                  <strong className="mt-1 block text-xl">{project.name}</strong>
                </div>
                <small className="rounded-full bg-emerald-100 px-3 py-2 text-sm font-black text-emerald-700">
                  {project.version.toUpperCase()}
                </small>
              </button>
            ))}
          </div>
        </div>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700">First Things After Create</span>
              <h2 className="text-3xl font-black tracking-normal">Project setup flow</h2>
            </div>
            <Rocket className="text-emerald-700" size={26} />
          </div>
          <div className="grid grid-cols-3 gap-3 max-[840px]:grid-cols-2 max-[560px]:grid-cols-1">
            {flutterSetupSteps.map(([title, copy], index) => (
              <article className="rounded-2xl bg-slate-50 p-4" key={title}>
                <span className="text-xs font-black text-emerald-700">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700">Project Structures</span>
              <h2 className="text-3xl font-black tracking-normal">Select version</h2>
            </div>
            <Layers3 className="text-emerald-700" size={26} />
          </div>
          <div className="grid grid-cols-3 gap-3 max-[760px]:grid-cols-1">
            {projectVersions.map((version) => (
              <button
                className={`rounded-2xl border p-5 text-left transition hover:-translate-y-1 ${
                  activeVersion.id === version.id
                    ? 'border-emerald-700 bg-emerald-700 text-white'
                    : 'border-slate-200 bg-slate-50'
                }`}
                key={version.id}
                onClick={() => setActiveVersion(version)}
              >
                <span className={`text-sm font-black ${activeVersion.id === version.id ? 'text-white' : 'text-emerald-700'}`}>
                  {version.label}
                </span>
                <strong className="mt-3 block text-2xl">{version.project}</strong>
                <small className={activeVersion.id === version.id ? 'text-emerald-50' : 'text-slate-500'}>{version.client}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6 grid grid-cols-[minmax(0,0.92fr)_minmax(360px,1.08fr)] gap-6 max-[980px]:grid-cols-1">
          <article className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-emerald-300">{activeVersion.label} Structure</span>
                <h2 className="text-3xl font-black tracking-normal">{activeVersion.project}</h2>
              </div>
              <FolderTree size={26} />
            </div>
            <StructureTree structure={activeVersion.structure} />
          </article>

          <div className="grid gap-6">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700">Why This Version</span>
              <p className="mt-3 text-lg leading-8 text-slate-600">{activeVersion.purpose}</p>
            </article>
            <ResponsibilityCard icon={Layers3} items={activeVersion.layers} title="Layer Responsibility" />
            <ResponsibilityCard icon={ShieldCheck} items={activeVersion.mandatoryFolders} title="Mandatory Folders" />
          </div>
        </section>
      </section>
    </main>
  );
}

function ResponsibilityCard({ title, icon: Icon, items }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-emerald-700">{title}</span>
          <h2 className="text-2xl font-black tracking-normal">{items.length} responsibilities</h2>
        </div>
        <Icon className="text-emerald-700" size={24} />
      </div>
      <div className="grid gap-3">
        {items.map(([name, copy]) => (
          <div className="grid grid-cols-[auto_1fr] gap-3 rounded-2xl bg-slate-50 p-4" key={name}>
            <CheckCircle2 className="mt-1 text-emerald-700" size={18} />
            <div>
              <h3 className="font-black">{name}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{copy}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function StructureTree({ structure }) {
  const rows = structure.split('\n').map((line) => {
    const prefix = line.match(/^[|`\-\s]*/)?.[0] || '';
    const name = line.replace(/^[|`\-\s]+/, '').trim();
    const depth = Math.max(0, Math.floor(prefix.length / 4));
    const isFolder = name.endsWith('/');

    return {
      depth,
      isFolder,
      name: name.replace(/\/$/, '')
    };
  });

  return (
    <div className="rounded-2xl bg-black/30 p-4">
      <div className="grid gap-1">
        {rows.map((row, index) => {
          const Icon = row.isFolder ? Folder : FileText;
          const isRoot = row.depth === 0;
          const isDirectChild = row.depth === 1;

          return (
            <div
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm ${
                isRoot
                  ? 'mb-2 bg-emerald-400/20 text-base font-black text-white ring-1 ring-emerald-300/30'
                  : isDirectChild
                    ? 'mt-1 bg-white/10 font-black text-white'
                    : 'text-emerald-50/95 hover:bg-white/5'
              }`}
              key={`${row.name}-${index}`}
              style={{ paddingLeft: `${12 + row.depth * 22}px` }}
            >
              <Icon className={row.isFolder ? 'text-emerald-300' : 'text-slate-300'} size={16} />
              <span>{row.name}</span>
              {isRoot && <span className="ml-auto rounded-full bg-emerald-300/20 px-3 py-1 text-xs text-emerald-100">root</span>}
              {isDirectChild && <span className="ml-auto rounded-full bg-white/10 px-2 py-1 text-xs text-emerald-100">lib child</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GenericTechPage({ tech, onBack }) {
  const Icon = icons[tech.id] || Code2;

  return (
    <main className="min-h-dvh bg-[#edf3ef] text-slate-950">
      <PageHeader tech={tech} onBack={onBack} />
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <Icon className="text-emerald-700" size={34} />
          <span className="mt-8 block text-xs font-black uppercase tracking-wider text-emerald-700">Technology Page</span>
          <h1 className="mt-3 text-6xl font-black leading-none tracking-normal max-[760px]:text-4xl">{tech.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{tech.summary}</p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6 max-[760px]:grid-cols-1">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700">Main Stack</span>
            <h2 className="mt-2 text-3xl font-black">{tech.role}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {tech.stack.map((item) => (
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-700" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700">Actions</span>
            <div className="mt-5 grid gap-3">
              {tech.actions.map((action) => (
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-black" key={action}>
                  <Rocket className="text-emerald-700" size={18} />
                  {action}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export function App() {
  const [activeTechId, setActiveTechId] = useState(null);
  const [activeVersion, setActiveVersion] = useState(projectVersions[2]);
  const activeTech = useMemo(() => technologies.find((tech) => tech.id === activeTechId), [activeTechId]);

  if (activeTech?.id === 'flutter') {
    return <FlutterPage activeVersion={activeVersion} onBack={() => setActiveTechId(null)} setActiveVersion={setActiveVersion} />;
  }

  if (activeTech) {
    return <GenericTechPage tech={activeTech} onBack={() => setActiveTechId(null)} />;
  }

  return <DashboardHome onSelectTech={setActiveTechId} selectedTech={activeTechId} />;
}
