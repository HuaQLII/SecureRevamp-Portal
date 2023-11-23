import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 获取应用实例对象
const app = createApp(App)
// 引入element-plus组件库
app.use(ElementPlus, {
    locale: zhCn,
});
// 引入自定义插件对象：注册svg图标
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components/index.ts'
// 引入自定义插件对象：注册全局指令
app.use(globalComponent);

// 将应用实例对象挂载到指定节点
app.mount('#app')

