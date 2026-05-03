import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const skillsDir = join(root, 'skills')
const namePattern = /^[a-z0-9][a-z0-9-]*$/
const errors = []

if (!existsSync(skillsDir)) {
  errors.push('Missing skills/ directory')
} else {
  const skillNames = readdirSync(skillsDir)
    .filter((name) => !name.startsWith('.'))
    .filter((name) => statSync(join(skillsDir, name)).isDirectory())

  for (const dirName of skillNames) {
    const skillDir = join(skillsDir, dirName)
    const skillPath = join(skillDir, 'SKILL.md')
    const licensePath = join(skillDir, 'LICENSE')
    const noticePath = join(skillDir, 'NOTICE.md')

    if (!namePattern.test(dirName)) {
      errors.push(`${dirName}: directory name must use lowercase letters, digits, and hyphens`)
    }

    if (!existsSync(skillPath)) {
      errors.push(`${dirName}: missing SKILL.md`)
      continue
    }

    if (!existsSync(licensePath)) {
      errors.push(`${dirName}: missing LICENSE`)
    }

    if (!existsSync(noticePath)) {
      errors.push(`${dirName}: missing NOTICE.md`)
    }

    const content = readFileSync(skillPath, 'utf8')
    const match = content.match(/^---\n([\s\S]*?)\n---/)
    if (!match) {
      errors.push(`${dirName}: SKILL.md missing YAML frontmatter`)
      continue
    }

    const frontmatter = match[1]
    const name = frontmatter.match(/^name:\s*["']?([^"'\n]+)["']?\s*$/m)?.[1]?.trim()
    const description = frontmatter.match(/^description:\s*(.+)$/m)?.[1]?.trim()

    if (!name) {
      errors.push(`${dirName}: frontmatter missing name`)
    } else if (name !== dirName) {
      errors.push(`${dirName}: frontmatter name "${name}" does not match directory`)
    }

    if (!description) {
      errors.push(`${dirName}: frontmatter missing description`)
    }
  }
}

if (errors.length > 0) {
  console.error('Skill validation failed:')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log('Skill validation passed')

