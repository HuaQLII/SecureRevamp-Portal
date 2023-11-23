// Desc: 对外暴露全部的全局注册组件
import SvgIcon from './SvgIcon/index.vue';
import Pagination from './Pagination/index.vue';
// 全局对象
const allGlobalComponents = {
    SvgIcon,
    Pagination
};
export default {
    install(app){
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key, allGlobalComponents[key])
        })

    }
};