import hljsVuePlugin from '@highlightjs/vue-plugin'

import { createApp } from 'vue'
import FLoading from '@/components/loading'

import FMessage from '@/components/message'
import App from './document/App.vue'
import Ftpl from './document/tpl'
// 文档入口
import './styles/index.scss'

import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common'

// import VConsole from 'vconsole'
// new VConsole()

const app = createApp(App)
app.use(hljsVuePlugin)

// 用法1: 全局引入
app.use(FMessage)
  .use(FLoading)

// 用法2: 按需导入
app.use(Ftpl)

app.mount('#app')
