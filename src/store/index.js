import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
    shopInfo: {},
    currentMenus: [],
    currentBusinessIndexUrl: '', //当前业务的首页地址
    currentAnalysisUrl: '', //首页更多跳转链接
}

export default {
    state,
    getters,
    mutations,
    actions
};