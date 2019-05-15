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
const windexData = {}
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

    }
}




