import Api from '@/api/request'

const actions = {
    //请求修改lastLoginType
    queryPcShopInfo(context) {
        Api.ajaxReadPost('/readShop/queryPcShopInfo', null, function(result){
            console.log('mock queryPcShopInfo: ', result);
            context.commit('queryPcShopInfo', result.result);
        });
    }

}

export default actions;