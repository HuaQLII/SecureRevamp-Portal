// Desc: 对外暴露全部的全局注册组件
import SvgIcon from './SvgIcon/index.vue';
import Pagination from './Pagination/index.vue';
import { App, Component } from 'vue';

// 全局对象
const allGlobalComponents: Record<string, Component> = {
    SvgIcon,
    Pagination
};

// 对外暴露的对象
export default {
    install(app: App): void {
        Object.keys(allGlobalComponents).forEach((key) => {
            app.component(key, allGlobalComponents[key]);
        });
    }
};
