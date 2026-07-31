# YuKumo Docs

Official documentation website for [YuKumo](https://github.com/Nex-Devz/YuKumo) — a modern, lightweight, production-ready Lavalink v4 client built with [Fumadocs](https://fumadocs.dev) and [Next.js](https://nextjs.org).

<div align="center">

[![CI](https://img.shields.io/github/actions/workflow/status/Nex-Devz/YuKumo-Docs/ci.yml?style=flat-square)](https://github.com/Nex-Devz/YuKumo-Docs/actions)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square)](https://nextjs.org)
[![Fumadocs](https://img.shields.io/badge/Fumadocs-16-7c3aed?style=flat-square)](https://fumadocs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square)](https://www.typescriptlang.org)
[![License](https://img.shields.io/github/license/Nex-Devz/YuKumo-Docs?style=flat-square)](LICENSE)

</div>

## Documentation

- **Getting Started** — build a music bot with YuKumo in minutes
- **API Reference** — comprehensive reference for every public export
- **Plugin Development** — extend YuKumo with lifecycle hooks
- **Node Deployment** — production Lavalink v4 setup
- **Migration Guide** — upgrade from Lavalink v3 clients
- **FAQ** — common questions and troubleshooting

## Getting Started

Prerequisites: [Node.js](https://nodejs.org) 20.9+ (or Bun 1.0+) and npm.

```bash
npm install
npm run dev
```

Open <http://localhost:3000> in your browser.

### Scripts

| Script             | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start the development server             |
| `npm run build`    | Create an optimized production build     |
| `npm run start`    | Serve the production build               |
| `npm run lint`     | Lint and format-check with Biome         |
| `npm run format`   | Auto-format the codebase with Biome      |
| `npm run types:check` | Generate route types and type-check   |

## Project Structure

```
src/
├── app/
│   ├── (home)/          # Landing page
│   └── docs/            # Documentation layout and pages
├── components/          # MDX component registry
└── lib/                 # Content source and shared config
content/
└── docs/                # MDX documentation source
.github/
├── workflows/           # CI pipeline
└── ISSUE_TEMPLATE/      # Issue forms
```

## Writing Documentation

Documentation is written in MDX and lives in [`content/docs`](content/docs). See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide, conventions, and workflow.

## Contributing

Contributions are welcome! Read the [contribution guide](CONTRIBUTING.md) to get started.

## Security

If you discover a security vulnerability, please follow the disclosure steps in [SECURITY.md](SECURITY.md).

## License

MIT © [Nex-Devz](LICENSE)
