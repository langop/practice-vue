import MockAdapter from 'axios-mock-adapter'

export default {
    mockData(axios) {
        const mock = new MockAdapter(axios);

        //1.获得商家所有信息
        const shopInfo = {
            "result": {
                "account": "16612345678",
                "accountBalance": "0",
                "auditStatus": "3",
                "custId": "EFAD2C1757EA418BABA8D58D49B9DDFB",
                "icon": "https://img.58xfcs.com/1bf802e21de4d90ee329ad76bab80e26?p=0,https://img.58xfcs.com/99c6178f18072b024c64b715dea60f5d?p=0",
                "isDrawMoney": "0",
                "isInWBusiness": "1",
                "isOpenK": "0",
                "isOpenP": "0",
                "isOpenT": "0",
                "isOpenW": "1",
                "kStatus": "0",
                "lastLoginType": "1",
                "logo": "https://img.58xfcs.com/7e6953a7c5a79f818d2eaebf43346a37?p=0",
                "pStatus": "0",
                "password": "e10adc3949ba59abbe56e057f20f883e",
                "sStatus": "0",
                "shopAddress": "江苏省无锡市江阴市华士镇凝秀华庭",
                "shopId": "878CDAC9D787481BE053191EA8C02E8D",
                "shopName": "蛋糕店",
                "status": 1,
                "tStatus": "0",
                "userKey": "878CDAC9D786481BE053191EA8C02E8D",
                "wBHours": "00:00--00:00",
                "wBStatus": "1",
                "wStatus": "1"
            },
            "resultcode": "0",
            "resultdesc": "success"
        };
        mock.onPost('/readShop/queryPcShopInfo').reply(200, shopInfo);

        //2.

    }
}




