<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## GitHub workflow

This repository uses a protected `main` branch. All changes go through pull requests.

- Do not push directly to `main`.
- Create one branch per logical change with a descriptive `feature/…`, `fix/…`, or `chore/…` name.
- Keep using the same branch for follow-up commits while its pull request is open.
- Open pull requests into `main` and complete `.github/pull_request_template.md`.
- Bring the branch up to date with `main` and rerun lint, typecheck, and build before requesting review.
- Obtain the required maintainer and code-owner approval. Resolve all review threads before merging.
- After merge, GitHub automatically deletes the remote branch. Delete it manually if automation does not.
