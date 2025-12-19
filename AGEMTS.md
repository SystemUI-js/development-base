# AGEMTS

AI/agent checklist for working on this repository.

## 1. Project snapshot
- Package: `@system-ui-js/development-base` (ESLint base config), version `0.0.4`.
- Tooling: Node 20, Yarn 1 (corepack-enabled), TypeScript 5, ESLint 8, Prettier 3.
- Scripts: `yarn lint` runs ESLint against the repo.
- Repo type: ESM (`"type": "module"` in `package.json`).

## 2. Local setup
- Ensure Node 20 is active (`node -v` should report 20.x). Use `corepack enable` then `yarn install --frozen-lockfile`.
- Do not switch package managers; keep `yarn.lock` intact unless updating dependencies intentionally.
- Lint locally with `yarn lint` before committing changes.

## 3. Code style and linting
- ESLint/TypeScript stack is defined by devDependencies; add rule changes in an ESM config file (e.g., `eslint.config.js`) if needed.
- Prettier config extends `prettier-config-standard` (see `prettier.config.cjs`); follow that formatting or run `npx prettier .` when touching multiple files.
- Keep files ASCII by default; prefer concise comments only when logic is non-obvious.

## 4. Testing
- Jest is preconfigured for `ts-jest` and looks for tests under `src/**/__tests__/*.test.ts` (see `jest.config.cjs`). If you add source files, mirror that structure or update the config accordingly.
- No tests currently exist; add targeted unit tests when introducing logic to avoid regressions.

## 5. Publishing & release flow
- GitHub Actions workflow `.github/workflows/publish.yml` publishes on tag pushes only.
- Tag rules:
  - `vX.Y.Z` → expected on `main`, publishes to npm with dist-tag `latest`.
  - `vX.Y.Z-dev.N` → expected on `dev`, publishes with dist-tag `dev` and also ensures `dev` tag points to that version.
- The job skips publishing if the tagged version already exists on npm or if the tag is not contained in the expected branch.
- Requires `NPM_TOKEN` secret with publish rights.

## 6. Common tasks for agents
- Adding/adjusting lint rules: create or update `eslint.config.js` (ESM) exporting the config for consumers; keep defaults minimal and well-commented.
- Extending Prettier: adjust `prettier.config.cjs` only if necessary and document rationale in the file.
- Dependency updates: prefer `yarn upgrade-interactive --latest` for grouped updates; run lint afterwards.
- Sample fixtures: `test.ts` is a placeholder; replace it when adding real examples or tests.

## 7. Contribution hygiene
- Keep commits scoped and descriptive; avoid force-pushing published tags.
- Maintain MIT license headers where appropriate; do not strip existing comments without reason.
- If CI is failing on tag builds, verify branch containment and tag pattern before republishing.

## 8. Version & CHANGELOG workflow
- For any code change, decide the appropriate semantic bump (major/minor/patch) based on impact; prefer patch for lint-rule tweaks, minor for new exported options, major for breaking config changes.
- Bump `package.json`:`version` first according to that decision.
- Update `CHANGELOG.md` immediately after the version bump: add a new top entry with the new version and short bullet points describing the changes.
- If unreleased changes already exist under a previous version heading but the bump level needs to change, edit the existing heading to the new version so the notes stay aligned with the published version.
- Keep tag names consistent with `vX.Y.Z`/`vX.Y.Z-dev.N` rules from §5 so that the CHANGELOG, tags, and `package.json` version always match before publishing.
