import API from '@/api/request'

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
    },
    currentBusinessIndexUrl: '/takeout/index', //当前业务的首页地址
}

/* const getters = {

} */

const mutations = {
    //切换业务
    changeLoginType(state, lastLoginType) {
        state.shopInfo.lastLoginType = lastLoginType;
    }
   
}

const actions = {
    //请求修改lastLoginType
    changeLastLoginType(context, lastLoginType) {
        //TODO axios
        API.ajaxReadPost('/readShop/queryPcShopInfo', null, function(result){
            console.log("mock /readShop/queryPcShopInfo: ", result);
        });
        //context.commit("changeLoginType", lastLoginType);
    }

}

export default {
    state,
    // getters,
    mutations,
    actions
};