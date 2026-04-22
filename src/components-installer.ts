import type { App, Plugin } from 'vue'

/** 批量注册全局组件方法 */
export function makeInstaller(components: Plugin[] = []) {
  const install = {
    install(app: App) {
      components.forEach((comp) => {
        if (comp.install)
          app.use(comp)
      })
    },
  }
  return install
}

export default makeInstaller
