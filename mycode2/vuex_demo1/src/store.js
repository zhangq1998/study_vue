import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/*
    Vuex 是一个专为 Vue.js 应用程序开发的`状态管理模式`。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
*/
export default new Vuex.Store({
    // 数据
    state: {
        count: 0
    },
    mutations: {

    },
    actions: {

    },
    // 类似计算属性 实时监听state的变化
    getters: {
        getCount(state) {   // 接收state参数
            return state.count;
        }
    },
    // 更新state
    mutations: {
        addCount(state, num) {
            state.count += num;
        },
        delCount(state, num) {
            state.count -= num;
        }
    }
})