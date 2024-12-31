import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 每个 Vue 引用都是通过 createApp 创建的一个新的应用实例
// 传入的 App 对象实际上是一个组件，也就是应用的 “根组件”
// 应用实例创建出来之后需要被挂载一个实际的 DOM 元素上才能进行渲染，也就是 .mount('#app')
// mount() 函数接收一个“容器”参数，可以是实际的 DOM 元素 也可以是一个 CSS 选择器字符串
createApp(App).mount('#app')
