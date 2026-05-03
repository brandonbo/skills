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

Each skill is licensed independently. See `skills/<skill-name>/LICENSE`.


## Imported Skills

The initial Vue skills are imported from `vuejs-ai/skills` at commit
`c9d355ff23f654309dd02006be671859df0a134c`.

- `vue` is imported from `antfu/skills` at commit
  `50deaeb269d80d92db7a2c5a677290309ae307fc`.
- `create-adaptable-composable`
- `vue-best-practices`
- `vue-debug-guides`
- `vue-pinia-best-practices`
- `vue-router-best-practices`
- `vue-testing-best-practices`

## Maintenance

- Keep third-party license files inside each imported skill directory.
- Add or update `NOTICE.md` when a skill is imported, modified, or rewritten from an upstream source.
- Track upstream source details in `legal/sources.yml`.
- Keep submodules pinned to the commit recorded in `legal/sources.yml` when importing direct copies.
- Run validation before committing:

```bash
npm run validate
```
