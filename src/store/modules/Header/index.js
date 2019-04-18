const ATTRA

const state = {
    shopInfo: {
        shopId:'1',
        account:'18862486248',
        lastLoginType:'1', //1外卖，2团购，3商城
    },
    shopBusinessInfo: {
        isOpenW:'0', //	是否开通外卖：1是，0否 空为模块未开放
        isOpenT:'0', //	是否开通团购：1是，0否 空为模块未开放
        isOpenP:'0', //	是否开通拼团：1是，0否 空为模块未开放           
    }
}

/* const getters = {

} */

const mutations = {
    //切换业务
    changeLoginType(state, params) {
        state.shopInfo.lastLoginType = params[shop.SHOP_ID]
    }
   
}

const actions = {
    //请求修改lastLoginType
    changeLastLoginType(context) {
        //TODO axios

    }

}

export default {
    state,
    getters,
    mutations,
    actions
};