import "./component/div_cpn.js"
import "utils/util"

console.log(juwenzhang)
// 开始实现我们的配置 vue 渲染文件
import { createApp } from "vue"
import App from "./vue/main.vue"
createApp(App).mount("#app")  // 注册组件并且挂在组件


if (module.hot) {
    module.hot.accept("utils/util.js", () => {
        console.log("模块发生了替换")
    })
}