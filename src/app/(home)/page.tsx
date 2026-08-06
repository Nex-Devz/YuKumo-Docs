import {
  Activity,
  ArrowRight,
  BookOpen,
  Boxes,
  Captions,
  Database,
  Gauge,
  GitFork,
  History,
  ListMusic,
  Package,
  Plug,
  Puzzle,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  Shuffle,
  Sparkles,
  Terminal,
} from "lucide-react";
import Link from "next/link";

const badges = [
  { label: "npm v1.7.0", color: "#7c3aed" },
  { label: "60 KB minzip", color: "#6366f1" },
  { label: "MIT License", color: "#ec4899" },
  { label: "TypeScript Strict", color: "#2563eb" },
  { label: "Minimal Deps (ws only)", color: "#16a34a" },
];

const features = [
  {
    icon: RefreshCw,
    accent: "text-violet-500",
    title: "Restart-Proof Sessions",
    description:
      "Session resuming + player snapshots: redeploy your bot and the music keeps playing. Live players are adopted silently with zero audio gap.",
  },
  {
    icon: Gauge,
    accent: "text-blue-500",
    title: "High Performance Engine",
    description:
      "Player creation in ~1.8ms. Queue operations at ~9.3M ops/sec. Event dispatch at ~663k ops/sec.",
  },
  {
    icon: Shuffle,
    accent: "text-fuchsia-500",
    title: "Source-Aware Autoplay",
    description:
      "Per-source recommendations — YouTube RD mixes, Spotify sprec, Deezer, Yandex, SoundCloud — with played-track dedupe to prevent loops.",
  },
  {
    icon: Database,
    accent: "text-emerald-500",
    title: "Queue Persistence",
    description:
      "Queues auto-save to Memory/Redis storage on every change and restore after a restart — playlists survive redeploys.",
  },
  {
    icon: Captions,
    accent: "text-pink-500",
    title: "SponsorBlock & Live Lyrics",
    description:
      "Server-side sponsor skipping and timestamped live lyric lines via the SponsorBlock and LavaLyrics node plugins.",
  },
  {
    icon: Activity,
    accent: "text-rose-500",
    title: "Self-Healing Connections",
    description:
      "WS heartbeats detect half-open dead nodes, error-rate guards destroy runaway players, and every destroy carries a reason.",
  },
  {
    icon: Plug,
    accent: "text-orange-500",
    title: "NodeLink Ready",
    description:
      "Auto-detected NodeLink nodes: gapless preload, fading curves, mixer layers, voice receive, chapters, and built-in lyrics.",
  },
  {
    icon: ShieldCheck,
    accent: "text-sky-500",
    title: "100% Strict Type Safety",
    description:
      "Full TypeScript support with strict typings across nodes, players, search, filters, and events.",
  },
  {
    icon: Package,
    accent: "text-amber-500",
    title: "Minimal Dependencies",
    description:
      "Only one runtime dependency (ws). Lightweight footprint with native Bun WebSocket support.",
  },
  {
    icon: Boxes,
    accent: "text-cyan-500",
    title: "Framework Agnostic",
    description:
      "Native support for discord.js, Seyfert, Eris, Oceanic.js, and Discordeno.",
  },
  {
    icon: ListMusic,
    accent: "text-indigo-500",
    title: "Built-in Queue Manager",
    description:
      "Repeat modes, Fisher-Yates shuffle, history navigation, sortBy, removeTrack, unique, lock, and range manipulation.",
  },
  {
    icon: Puzzle,
    accent: "text-teal-500",
    title: "Modular Plugin Lifecycle",
    description:
      "Hook into search queries, voice connections, track playback, player destruction, and node selection.",
  },
];

const stats = [
  { value: "1.8ms", label: "Player creation" },
  { value: "9.3M", label: "Queue ops / sec" },
  { value: "663k", label: "Events / sec" },
  { value: "60KB", label: "Bundle size" },
  { value: "1", label: "Runtime dep (ws)" },
];

const frameworks = [
  "discord.js",
  "Seyfert",
  "Eris",
  "Oceanic.js",
  "Discordeno",
];

const heroSnippet = `const yukumo = new YuKumo({
  nodes: [{ host: "localhost", port: 2333, password: "..." }],
  resuming: { enabled: true },   // audio survives bot restarts
  queueOptions: { persist: true },
});

const player = await yukumo.createPlayer({ guildId, voiceChannelId });
const { tracks } = await yukumo.search("never gonna give you up");
await player.play(tracks[0], { volume: 80 });`;

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 overflow-hidden">
      {/* Hero */}
      <section className="relative flex flex-col items-center text-center px-6 pt-20 pb-16">
        {/* background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.16),transparent_65%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(120,120,140,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,140,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />

        <Link
          href="/docs/changelog/v1-7-0"
          className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/50 px-3 py-1 text-xs text-fd-muted-foreground backdrop-blur transition-colors hover:border-violet-500/40 hover:text-fd-foreground"
        >
          <Sparkles className="size-3 text-violet-500" />
          New in v1.7 — restart-proof sessions, source-aware autoplay, NodeLink
          <ArrowRight className="size-3" />
        </Link>

        <h1 className="mt-8 bg-gradient-to-br from-fd-foreground via-fd-foreground to-violet-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          YuKumo
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-fd-muted-foreground">
          A modern, lightweight, production-ready{" "}
          <span className="font-medium text-fd-foreground">
            Lavalink v4 client
          </span>{" "}
          engineered for TypeScript and JavaScript. Minimal dependencies (only
          ws), full strict type safety, and a framework-agnostic architecture.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 rounded-md bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground shadow-lg shadow-violet-500/10 transition-all hover:opacity-90 hover:shadow-violet-500/20"
          >
            <Rocket className="size-4" />
            Get Started
          </Link>
          <Link
            href="/docs/api-reference"
            className="inline-flex items-center gap-2 rounded-md border border-fd-border bg-fd-card/50 px-5 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:bg-fd-secondary"
          >
            <BookOpen className="size-4" />
            API Reference
          </Link>
          <Link
            href="https://github.com/Nex-Devz/YuKumo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-fd-border bg-fd-card/50 px-5 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:bg-fd-secondary"
          >
            <GitFork className="size-4" />
            GitHub
          </Link>
        </div>

        {/* install + snippet */}
        <div className="mt-12 w-full max-w-2xl text-left">
          <div className="flex items-center gap-2 rounded-t-lg border border-b-0 border-fd-border bg-fd-card px-4 py-2.5 font-mono text-sm">
            <Terminal className="size-4 shrink-0 text-fd-muted-foreground" />
            <span className="select-none text-fd-muted-foreground">$</span>
            <span>npm install yukumo</span>
          </div>
          <pre className="overflow-x-auto rounded-b-lg border border-fd-border bg-fd-card/60 p-4 font-mono text-xs leading-relaxed text-fd-muted-foreground sm:text-sm">
            {heroSnippet}
          </pre>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className="rounded-full border px-2.5 py-1 text-xs font-medium"
              style={{ color: badge.color, borderColor: `${badge.color}55` }}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </section>

      {/* Frameworks */}
      <section className="border-y border-fd-border px-6 py-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-fd-muted-foreground">
          Works with your favorite Discord library
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {frameworks.map((framework) => (
            <span
              key={framework}
              className="rounded-md border border-fd-border bg-fd-card px-3 py-1.5 text-sm text-fd-muted-foreground transition-colors hover:border-fd-ring hover:text-fd-foreground"
            >
              {framework}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Built for scale, designed for speed
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-fd-muted-foreground">
            Every subsystem in YuKumo is engineered to be fast, type-safe, and
            lightweight out of the box.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-fd-border bg-fd-card/40 p-5 transition-all hover:-translate-y-0.5 hover:border-fd-ring hover:shadow-lg hover:shadow-black/5"
            >
              <feature.icon
                className={`size-5 ${feature.accent} opacity-80 transition-opacity group-hover:opacity-100`}
              />
              <h3 className="mt-3 font-semibold">{feature.title}</h3>
              <p className="mt-1.5 text-sm text-fd-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-fd-border bg-fd-card/30 px-6 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-gradient-to-br from-fd-foreground to-violet-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-fd-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Docs CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Everything you need to ship
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-fd-muted-foreground">
            Guides, references, and release notes — kept in lockstep with every
            version.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/docs/getting-started"
            className="group rounded-lg border border-fd-border bg-fd-card/40 p-5 transition-all hover:-translate-y-0.5 hover:border-fd-ring hover:shadow-lg hover:shadow-black/5"
          >
            <Rocket className="size-5 text-violet-500 opacity-80 transition-opacity group-hover:opacity-100" />
            <h3 className="mt-3 font-semibold">Getting Started</h3>
            <p className="mt-1.5 text-sm text-fd-muted-foreground">
              Build a music bot with YuKumo in a few minutes.
            </p>
          </Link>
          <Link
            href="/docs/session-resuming"
            className="group rounded-lg border border-fd-border bg-fd-card/40 p-5 transition-all hover:-translate-y-0.5 hover:border-fd-ring hover:shadow-lg hover:shadow-black/5"
          >
            <RefreshCw className="size-5 text-fuchsia-500 opacity-80 transition-opacity group-hover:opacity-100" />
            <h3 className="mt-3 font-semibold">Session Resuming</h3>
            <p className="mt-1.5 text-sm text-fd-muted-foreground">
              Keep audio playing through restarts and redeploys.
            </p>
          </Link>
          <Link
            href="/docs/advanced-features"
            className="group rounded-lg border border-fd-border bg-fd-card/40 p-5 transition-all hover:-translate-y-0.5 hover:border-fd-ring hover:shadow-lg hover:shadow-black/5"
          >
            <Sparkles className="size-5 text-pink-500 opacity-80 transition-opacity group-hover:opacity-100" />
            <h3 className="mt-3 font-semibold">Advanced Features</h3>
            <p className="mt-1.5 text-sm text-fd-muted-foreground">
              Persistence, SponsorBlock, live lyrics, and player protections.
            </p>
          </Link>
          <Link
            href="/docs/api-reference"
            className="group rounded-lg border border-fd-border bg-fd-card/40 p-5 transition-all hover:-translate-y-0.5 hover:border-fd-ring hover:shadow-lg hover:shadow-black/5"
          >
            <BookOpen className="size-5 text-blue-500 opacity-80 transition-opacity group-hover:opacity-100" />
            <h3 className="mt-3 font-semibold">API Reference</h3>
            <p className="mt-1.5 text-sm text-fd-muted-foreground">
              Comprehensive reference for every public export.
            </p>
          </Link>
          <Link
            href="/docs/node-deployment"
            className="group rounded-lg border border-fd-border bg-fd-card/40 p-5 transition-all hover:-translate-y-0.5 hover:border-fd-ring hover:shadow-lg hover:shadow-black/5"
          >
            <Server className="size-5 text-emerald-500 opacity-80 transition-opacity group-hover:opacity-100" />
            <h3 className="mt-3 font-semibold">Node Deployment</h3>
            <p className="mt-1.5 text-sm text-fd-muted-foreground">
              Setup Lavalink v4 nodes for production.
            </p>
          </Link>
          <Link
            href="/docs/changelog"
            className="group rounded-lg border border-fd-border bg-fd-card/40 p-5 transition-all hover:-translate-y-0.5 hover:border-fd-ring hover:shadow-lg hover:shadow-black/5"
          >
            <History className="size-5 text-amber-500 opacity-80 transition-opacity group-hover:opacity-100" />
            <h3 className="mt-3 font-semibold">Changelog</h3>
            <p className="mt-1.5 text-sm text-fd-muted-foreground">
              Release-by-release notes — v1.7.0, v1.6.0, and earlier.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
