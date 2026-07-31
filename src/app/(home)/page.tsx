import {
  ArrowRight,
  BookOpen,
  Boxes,
  Gauge,
  GitFork,
  ListMusic,
  Package,
  Puzzle,
  Rocket,
  Server,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const badges = [
  { label: "npm v1.0.0", color: "#7c3aed" },
  { label: "60 KB minzip", color: "#6366f1" },
  { label: "MIT License", color: "#ec4899" },
  { label: "TypeScript Strict", color: "#2563eb" },
  { label: "Zero Dependencies", color: "#16a34a" },
];

const features = [
  {
    icon: Gauge,
    title: "High Performance Engine",
    description:
      "Player creation in ~1.8ms. Queue operations at ~9.3M ops/sec. Event dispatch at ~663k ops/sec.",
  },
  {
    icon: ShieldCheck,
    title: "100% Strict Type Safety",
    description:
      "Full TypeScript support with strict typings across nodes, players, search, filters, and events.",
  },
  {
    icon: Package,
    title: "Zero Dependencies",
    description:
      "No third-party runtime dependencies. Uses native Node.js and Bun WebSocket/HTTP primitives.",
  },
  {
    icon: Boxes,
    title: "Framework Agnostic",
    description:
      "Native support for discord.js, Seyfert, Eris, Oceanic.js, and Discordeno.",
  },
  {
    icon: ListMusic,
    title: "Built-in Queue Manager",
    description:
      "Queue repeat modes, Fisher-Yates shuffle, playback history navigation, and index range manipulation.",
  },
  {
    icon: Puzzle,
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
  { value: "0", label: "Runtime deps" },
];

const frameworks = [
  "discord.js",
  "Seyfert",
  "Eris",
  "Oceanic.js",
  "Discordeno",
];

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      {/* Hero */}
      <section className="relative flex flex-col items-center text-center px-6 pt-20 pb-16">
        <Link
          href="/docs/getting-started"
          className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/50 px-3 py-1 text-xs text-fd-muted-foreground transition-colors hover:text-fd-foreground"
        >
          <span className="size-1.5 rounded-full bg-fd-info" />
          Lavalink v4 client — ready for production
          <ArrowRight className="size-3" />
        </Link>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl">
          YuKumo
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-fd-muted-foreground">
          A modern, lightweight, production-ready{" "}
          <span className="font-medium text-fd-foreground">
            Lavalink v4 client
          </span>{" "}
          engineered for TypeScript and JavaScript. Zero runtime dependencies,
          full strict type safety, and a framework-agnostic architecture.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 rounded-md bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            <Rocket className="size-4" />
            Get Started
          </Link>
          <Link
            href="/docs/api-reference"
            className="inline-flex items-center gap-2 rounded-md border border-fd-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-fd-secondary"
          >
            <BookOpen className="size-4" />
            API Reference
          </Link>
          <Link
            href="https://github.com/Nex-Devz/YuKumo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-fd-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-fd-secondary"
          >
            <GitFork className="size-4" />
            GitHub
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
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
              className="rounded-md border border-fd-border bg-fd-card px-3 py-1.5 text-sm text-fd-muted-foreground"
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
            dependency-free out of the box.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-fd-border bg-fd-card/40 p-5 transition-colors hover:border-fd-ring"
            >
              <feature.icon className="size-5 text-fd-muted-foreground transition-colors group-hover:text-fd-foreground" />
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
              <div className="text-3xl font-extrabold tracking-tight">
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
        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/docs/getting-started"
            className="group rounded-lg border border-fd-border bg-fd-card/40 p-5 transition-colors hover:border-fd-ring"
          >
            <Rocket className="size-5 text-fd-muted-foreground transition-colors group-hover:text-fd-foreground" />
            <h3 className="mt-3 font-semibold">Getting Started</h3>
            <p className="mt-1.5 text-sm text-fd-muted-foreground">
              Build a music bot with YuKumo in a few minutes.
            </p>
          </Link>
          <Link
            href="/docs/api-reference"
            className="group rounded-lg border border-fd-border bg-fd-card/40 p-5 transition-colors hover:border-fd-ring"
          >
            <BookOpen className="size-5 text-fd-muted-foreground transition-colors group-hover:text-fd-foreground" />
            <h3 className="mt-3 font-semibold">API Reference</h3>
            <p className="mt-1.5 text-sm text-fd-muted-foreground">
              Comprehensive reference for every public export.
            </p>
          </Link>
          <Link
            href="/docs/node-deployment"
            className="group rounded-lg border border-fd-border bg-fd-card/40 p-5 transition-colors hover:border-fd-ring"
          >
            <Server className="size-5 text-fd-muted-foreground transition-colors group-hover:text-fd-foreground" />
            <h3 className="mt-3 font-semibold">Node Deployment</h3>
            <p className="mt-1.5 text-sm text-fd-muted-foreground">
              Setup Lavalink v4 nodes for production.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
