//各个业务的功能菜单
const MenuMap = [
    null, //0
    [
        {title: '控制台', link: '/takeout/index'},
        {title: '订单管理', link: '/takeout/order'},
        {title: '商品管理', link: '/takeout/product'},
        {title: '评价管理', link: '/takeout/comment', small: true},
        {title: '营业设置', link: '/takeout/businessTimeSet', small: true}
    ],
    [
        {title: '控制台t', link: '/groupBuy/index'},
        {title: '订单管理t', link: '/groupBuy/order'},
        {title: '商品管理t', link: '/groupBuy/product'},
    ],
    null, //3
    [
        {title: '控制台pt', link: '/collage/index'},
        {title: '订单管理pt', link: '/collage/order'},
        {title: '商品管理pt', link: '/collage/product'},
    ],
    [
        {title: '控制台kj', link: '/bargain/index'},
        {title: '订单管理kj', link: '/bargain/order'},
        {title: '商品管理kj', link: '/bargain/product'},
    ]
];

const mutations = {
    queryPcShopInfo(state, shopInfo) {
        state.shopInfo = shopInfo;
        
        const isOpenW = shopInfo.isOpenW,
              isOpenT = shopInfo.isOpenT,
              isOpenP = shopInfo.isOpenP,
              isOpenK = shopInfo.isOpenK;
        let firstLoginType = isOpenW==1?1:(isOpenT==1?2:(isOpenP==1?4:(isOpenK==1?5:0)));
        let menuMap = shopInfo.lastLoginType ? MenuMap[shopInfo.lastLoginType] : MenuMap[firstLoginType];
        if(menuMap){
            state.currentMenus = menuMap;
            state.currentBusinessIndexUrl = menuMap[0].link;
            state.currentAnalysisUrl = menuMap[2].link;
        }else{
            console.log("未开通业务");
        }
    },
    changeLastLoginType(state, type) {
        if(type){
            state.shopInfo.lastLoginType = type;
            state.currentMenus = MenuMap[type];
            state.currentBusinessIndexUrl = MenuMap[type][0].link;
            state.currentAnalysisUrl = MenuMap[type][2].link;
        }else{
            console.log("切换业务失败");
        }
    }
   
}

export default mutations;