# Contributing to YuKumo Docs

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to the YuKumo documentation. These are guidelines, not rules — use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Writing Documentation](#writing-documentation)
- [Code Style](#code-style)
- [Development Workflow](#development-workflow)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [License](#license)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the maintainers.

## How Can I Contribute?

### Reporting Bugs

Found a bug in the docs site (broken links, rendering issues, typos)? Check the [issue tracker](https://github.com/Nex-Devz/YuKumo-Docs/issues) to see if it's already reported, then [open a bug report](https://github.com/Nex-Devz/YuKumo-Docs/issues/new/choose) using the bug template.

### Suggesting Enhancements

Have an idea for new documentation, a guide, or an improvement to the site? Open a [feature request](https://github.com/Nex-Devz/YuKumo-Docs/issues/new/choose) with a clear description of the problem you want to solve.

### Improving Documentation

The most valuable contribution is fixing or expanding documentation. See [Writing Documentation](#writing-documentation) below.

## Getting Started

Prerequisites: [Node.js](https://nodejs.org) 20.9+ (or Bun 1.0+).

```bash
# 1. Fork the repository and clone your fork
git clone https://github.com/your-username/YuKumo-Docs.git
cd YuKumo-Docs

# 2. Add the upstream remote
git remote add upstream https://github.com/Nex-Devz/YuKumo-Docs.git

# 3. Install dependencies
npm install

# 4. Create a feature branch
git checkout -b feat/my-change

# 5. Start the dev server
npm run dev
```

## Project Structure

```
content/docs/            # MDX documentation source (the content you'll edit)
├── index.mdx            # Landing/intro page
├── meta.json            # Sidebar page ordering
├── getting-started.mdx
├── api-reference.mdx
├── plugin-development.mdx
├── node-deployment.mdx
├── migration.mdx
└── faq.mdx
src/
├── app/(home)/          # Landing page
├── app/docs/            # Documentation layout and pages
├── components/mdx.tsx   # MDX component registry
└── lib/                 # Content source and shared config
.github/                 # CI and issue/PR templates
```

## Writing Documentation

### Frontmatter

Every MDX page starts with frontmatter:

```mdx
---
title: Page Title
description: A short summary shown under the title and in search results.
icon: IconName
---
```

- `title` — **required**. Shown in the sidebar, heading, and page metadata.
- `description` — optional but recommended. Used for SEO and search.
- `icon` — optional. Any [Lucide icon](https://lucide.dev) name registered in the source plugin.

### Components

A curated set of components is available in MDX:

```mdx
<Callout type="info" title="Note">
  Content inside a callout.
</Callout>
```

```mdx
<Tabs items={['TypeScript', 'JavaScript']}>
  <Tab value="TypeScript">...code...</Tab>
  <Tab value="JavaScript">...code...</Tab>
</Tabs>
```

```mdx
<Cards>
  <Card title="Getting Started" href="/docs/getting-started" icon="Rocket" />
</Cards>
```

If you need a new component, register it in [`src/components/mdx.tsx`](src/components/mdx.tsx).

### Conventions

- Use **sentence case** for headings and titles.
- Wrap code languages in code fences with a language tag (e.g. `ts`, `bash`, `yaml`).
- Keep code examples runnable and complete enough to understand in isolation.
- Link between pages with the route path (e.g. `/docs/faq`).
- Prefer tables, lists, and callouts over walls of prose.

## Code Style

This project uses [Biome](https://biomejs.dev). Before submitting, ensure your changes pass:

```bash
npm run lint       # lint + format check
npm run format     # auto-format
npm run types:check
```

> Note: `npm run format` normalizes the whole repo. Prefer fixing only your changed files when opening a PR.

## Development Workflow

1. **Sync your branch** — keep your fork up to date with `main`.
2. **Make focused changes** — one logical change per branch.
3. **Test locally** — run `npm run dev` and verify the affected pages.
4. **Verify checks** — run `npm run lint` and `npm run types:check`.
5. **Open a pull request** — use the pull request template and reference related issues.

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org):

- `feat:` — new page, section, or feature
- `fix:` — typo, broken link, or rendering fix
- `docs:` — documentation-only changes
- `refactor:` — code restructuring without behavior changes
- `chore:` — build tooling, CI, dependencies

Example:

```
docs: add troubleshooting guide for voice reconnects
```

## Pull Request Process

1. Fill in the [pull request template](.github/PULL_REQUEST_TEMPLATE.md).
2. Ensure the CI pipeline passes (lint, typecheck, build).
3. Add screenshots for visual changes.
4. Update the README or relevant docs if your change affects them.
5. A maintainer will review; address any requested changes promptly.

## License

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE).
