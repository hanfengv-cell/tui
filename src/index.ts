// 建构 库 的入口文件

// 导出全局css
import '@/styles/index.scss'

// 导出 全部组件
export * from './components'

// 导出 批量注册全局组件方法
export { makeInstaller } from './components-installer'
