export interface VendorSkillMeta {
  source: string
  skills: Record<string, string>
}

/**
 * Repositories to clone as submodules and generate skills from source
 */
export const submodules = {
  vue: 'https://github.com/vuejs/docs',
  // Planned (not yet cloned):
  // nestjs: 'https://github.com/nestjs/docs.nestjs.com',
  // vite: 'https://github.com/vitejs/vite',
  // UnoCSS skill is synced from vendor/antfu-skills (antfu/skills), not generated here.
}

/**
 * Already maintained skills, sync with their `skills/` directory
 */
export const vendors: Record<string, VendorSkillMeta> = {
  'vuejs-ai': {
    source: 'https://github.com/vuejs-ai/skills',
    skills: {
      'create-adaptable-composable': 'create-adaptable-composable',
      'vue-best-practices': 'vue-best-practices',
      'vue-debug-guides': 'vue-debug-guides',
      'vue-pinia-best-practices': 'vue-pinia-best-practices',
      'vue-router-best-practices': 'vue-router-best-practices',
      'vue-testing-best-practices': 'vue-testing-best-practices',
    },
  },
  'antfu-skills': {
    source: 'https://github.com/antfu/skills',
    skills: {
      unocss: 'unocss',
    },
  },
  // Planned:
  // 'vueuse': {
  //   source: 'https://github.com/vueuse/vueuse',
  //   skills: { 'vueuse-functions': 'vueuse-functions' },
  // },
}

/**
 * Hand-maintained skills (including forks modified locally)
 */
export const manual = [
  'uniapp',
]
