const getBusinessStatusStr = function(sts){
    let oriSts = '';
    switch(sts){
        case "1": 
            oriSts = "";
            break;
        case "2": 
            oriSts = "(冻结)";
            break;
        case "3": 
            oriSts = "(全局关店)";
            break;
        default: 
            oriSts = "(审核中)";
            break;
    }
    return oriSts;
}

const getters = {
    wStatusStr(state) {
        return getBusinessStatusStr(state.shopInfo.wStatus);
    },
    tStatusStr(state) {
        return getBusinessStatusStr(state.shopInfo.tStatus);
    },
    pStatusStr(state) {
        return getBusinessStatusStr(state.shopInfo.pStatus);
    },
    kStatusStr(state) {
        return getBusinessStatusStr(state.shopInfo.kStatus);
    }
}

export default getters;