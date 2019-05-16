import MockAdapter from 'axios-mock-adapter'

const shopInfo = {
    "account": "16612345678",
    "password": "e10adc3949ba59abbe56e057f20f883e",
    "accountBalance": "0",
    "auditStatus": "3",
    "custId": "EFAD2C1757EA418BABA8D58D49B9DDFB",
    "isDrawMoney": "0",
    "isInWBusiness": "1",
    "isOpenK": "0",
    "isOpenP": "1",
    "isOpenT": "1",
    "isOpenW": "1",
    "lastLoginType": "1",
    "wStatus": "1",
    "tStatus": "0",
    "pStatus": "2",
    "kStatus": "3",
    "logo": "https://img.58xfcs.com/7e6953a7c5a79f818d2eaebf43346a37?p=0",
    "sStatus": "0",
    "shopAddress": "江苏省无锡市江阴市华士镇凝秀华庭",
    "shopId": "878CDAC9D787481BE053191EA8C02E8D",
    "shopName": "蛋糕店",
    "status": 1,
    "userKey": "878CDAC9D786481BE053191EA8C02E8D",
    "wBHours": "00:00--00:00",
    "wBStatus": "1",
};

//首页数据
const windexData = {
    "afterSaleCount": "0",
    "avgScore": " 5.0",
    "bannerList": [{
        title: "a",
        banner: 'https://img.qiyuns.com/f32823322116b632d5d4fd762e9ee275',
        bannerUrl: 'http://www.baidu.com'
    }, {
        title: "ab",
        banner: 'https://img.qiyuns.com/cff2ac65bc447dbbfbe41759667016f0',
        bannerUrl: 'http://www.baidu.com'
    }],
    "businessStatus": "1",
    "custId": "EFAD2C1757EA418BABA8D58D49B9DDFB",
    "evaluateCount": "0",
    "isInWBusiness": "1",
    "logo": "https://img.58xfcs.com/890ebee2eab13443b551eb6f6d781436",
    "orderBean": {
        "boxAmount": "1.11",
        "boxComm": "0.00",
        "freight": "0.00",
        "goodsAmount": "15.00",
        "goodsComm": "0.00",
        "payAmount": "0.00",
        "payCount": "0",
        "refundAmount": "0.00",
        "refundCount": "0",
        "shopDiscount": "0.00",
        "orderData": "1.52",
        "orderCount": "169",
        "turnData": "--",
        "turnover": "0.00"
    },
    "platformStatus": "1",
    "shopName": "薛大厨1号",
    "time": "2019-05-16 08:33:10",
    "todayOrderIncome": "0.00",
    "todayValidOrder": "0",
    "typeName": "特色早点",
    "waitCount": "11",
    "waitSendCount": "0",
    "refundingCount": "1"
}
const tindexData = {}
const pindexData = {}
const kindexData = {}

export default {
    mockData(axios) {
        const mock = new MockAdapter(axios);

        //1.获得商家所有信息
        const shopInfoRsp = {
            "result": shopInfo,
            "resultcode": "0",
            "resultdesc": "success"
        };
        mock.onPost('/readShop/queryPcShopInfo').reply(200, shopInfoRsp);

        //2.
        const windexDataRsp = {
            "result": windexData,
            "resultcode": "0",
            "resultdesc": "success"
        };
        mock.onPost('/home/queryWaiMaiBusinessInfo').reply(200, windexDataRsp);


    }
}




