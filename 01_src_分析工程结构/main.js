// 引入的不再是Vue构造函数，而是一个名为createApp的函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象
createApp(App).mount('#app')
