# Skills

Personal agent skills collection.

## Install

Install all published skills:

```bash
npx skills add brandonbo/skills --skill '*'
```

Install from a local checkout while developing:

```bash
npx skills add ./ --list
npx skills add ./ --skill '*'
```

## Structure

Skills are organized into three types (see `meta.ts` for the canonical project list):

| Type | Description | Tracking File |
|------|-------------|---------------|
| **Generated** (Type 1) | Created from OSS project documentation in `sources/` | `GENERATION.md` |
| **Synced** (Type 2) | Copied from vendor repos in `vendor/` | `SYNC.md` |
| **Hand-written** (Type 3) | Manually maintained, including local forks | Neither |

Each skill is licensed independently. See `skills/<skill-name>/LICENSE`.

## Current Skills

### Generated (Type 1)

| Skill | Source |
|-------|--------|
| `vue` | `sources/vue` (vuejs/docs) |

### Synced (Type 2)

| Skill | Vendor |
|-------|--------|
| `create-adaptable-composable` | vuejs-ai/skills |
| `vue-best-practices` | vuejs-ai/skills |
| `vue-debug-guides` | vuejs-ai/skills |
| `vue-pinia-best-practices` | vuejs-ai/skills |
| `vue-router-best-practices` | vuejs-ai/skills |
| `vue-testing-best-practices` | vuejs-ai/skills |

### Hand-written (Type 3)

| Skill | Origin |
|-------|--------|
| `uniapp` | Forked from uni-helper/skills |

## Maintenance

- Keep third-party license files inside each imported skill directory.
- Add or update `NOTICE.md` when a skill is imported, modified, or rewritten from an upstream source.
- Track upstream source details in `legal/sources.yml`.
- Run validation before committing:

```bash
npm run validate
```
