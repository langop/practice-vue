<template>
    <div class="padding15">
        <el-row :gutter="15">
            <!-- 左边 -->
            <el-col :span="14">
                <!-- 运营配置广告展示 -->
                <div class="padding15 bgWhite" v-if="indexData.bannerList&&indexData.bannerList.length>0">
                    <el-carousel :interval="5000" height="300px">
                        <el-carousel-item v-for="item in indexData.bannerList" :key="item.title">
                            <a class="bannerLink" :style="bg(item.banner)" :href="item.bannerUrl" target="_blank"></a>
                        </el-carousel-item>        
                    </el-carousel>
                </div>

                <div class="padding15 bgWhite">
                    <p>
                        今日经营数据   
                        <el-tooltip effect="dark" placement="right-start">
                            <div slot="content">
                                <small class="tipContent">
                                    <span><span class="leftHead">净收入：</span><span class="rightHead">指已完成订单产生的收入，等于商品金额+餐盒费-商品佣金-餐盒佣金-活动成本+自行配送费-售后退款金额；</span></span>
                                    <span><span class="leftHead">商品金额：</span><span class="rightHead">按照商品原价计算的订单商品金额；</span></span>
                                    <span><span class="leftHead">餐盒费： </span><span class="rightHead">订单中包含的餐盒费；</span></span>
                                    <span><span class="leftHead">商品佣金： </span><span class="rightHead">商品金额（原价或实收金额）x佣金率，实收金额等于原价-商家承担的活动成本；</span></span>
                                    <span><span class="leftHead">餐盒佣金： </span><span class="rightHead">餐盒费（原价或实收金额）x佣金率，实收金额等于原价-商家承担的活动成本；</span></span>
                                    <span><span class="leftHead">活动成本： </span><span class="rightHead">商家活动成本+平台活动分摊部分，详细说明参见【营销活动】详情；</span></span>
                                    <span><span class="leftHead">自行配送费：</span><span class="rightHead"> 商家使用自行配送所获得的收入。</span></span>
                                </small>    
                            </div>
                            <i class="el-icon-question"></i>
                        </el-tooltip>
                        <small class="latestTime">
                            {{indexData.time}}更新
                        </small>

                        <small class="index_more">
                            <router-link :to="currentAnalysisUrl">更多 &gt;</router-link>
                        </small>
                    </p>
                    <el-divider></el-divider>

                    <!-- 同比数据展示 -->
                    <el-row>
                        <el-col :span="12">
                            <ComparedData tp="0" :dt="indexData.orderBean.orderCount" :per="indexData.orderBean.orderData"></ComparedData>
                        </el-col>
                        <el-col :span="12">
                            <ComparedData tp="1" :dt="indexData.orderBean.turnover" :per="indexData.orderBean.turnData"></ComparedData>
                        </el-col>
                    </el-row>

                    <!-- 具体数据展示 -->
                    <div class="detailData">
                        <el-row :gutter="15">
                            <el-col :span="8">
                                <el-card shadow="hover">
                                    <h2><small>￥</small>{{indexData.orderBean.goodsAmount}}</h2>
                                    <p>商品金额</p>
                                </el-card>
                            </el-col>
                            <el-col :span="8" v-show="indexData.orderBean.boxAmount!='0.00'">
                                <el-card shadow="hover">
                                    <h2><small>￥</small>{{indexData.orderBean.boxAmount}}</h2>
                                    <p>餐盒费</p>
                                </el-card>
                            </el-col>
                            <el-col :span="8">
                                <el-card shadow="hover">
                                    <h2><small>￥</small>{{indexData.orderBean.shopDiscount}}</h2>
                                    <p>活动成本</p>
                                </el-card>
                            </el-col>
                            <el-col :span="8">
                                <el-card shadow="hover">
                                    <h2><small>￥</small>{{indexData.orderBean.goodsComm}}</h2>
                                    <p>商品佣金</p>
                                </el-card>
                            </el-col>
                            <el-col :span="8" v-show="indexData.orderBean.boxComm!='0.00'">
                                <el-card shadow="hover">
                                    <h2><small>￥</small>{{indexData.orderBean.boxComm}}</h2>
                                    <p>餐盒佣金</p>
                                </el-card>
                            </el-col>
                            <el-col :span="8" v-show="indexData.orderBean.freight!='0.00'">
                                <el-card shadow="hover">
                                    <h2><small>￥</small>{{indexData.orderBean.freight}}</h2>
                                    <p>自行配送费</p>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>

            <!-- 右边 -->
            <el-col :span="10">
                <div class="padding15 bgWhite">
                    <ShopBusinessInfo v-if="indexData.avgScore"
                        :shop-name="indexData.shopName" :type-name="indexData.typeName" 
                        :shop-icon="indexData.logo" 
                        :score="indexData.avgScore"
                        style="margin-bottom:25px"></ShopBusinessInfo>

                    <p>代办事项</p>
                    <el-divider></el-divider>
                    <div class="todoBlock">
                        <el-row style="text-align: center;">
                            <el-col :span="8">
                                <h3>{{indexData.waitCount}}</h3>
                                <p>待接单</p>
                                <el-button v-if="indexData.waitCount=='0'">去查看</el-button>
                                <el-button type="primary" v-else>去处理</el-button>
                            </el-col>
                            <el-col :span="8">
                                <h3>{{indexData.waitSendCount}}</h3>
                                <p>待发货订单</p>
                                <el-button v-if="indexData.waitSendCount=='0'">去查看</el-button>
                                <el-button type="primary" v-else>去处理</el-button>
                            </el-col>
                            <el-col :span="8">
                                <h3>{{indexData.refundingCount}}</h3>
                                <p>待退款订单</p>
                                <el-button v-if="indexData.refundingCount=='0'">去查看</el-button>
                                <el-button type="primary" v-else>去处理</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import ComparedData from '@/page/common/ComparedData';
import ShopBusinessInfo from '@/page/common/ShopBusinessInfo';
export default {
    components: {
        ComparedData,
        ShopBusinessInfo
    },
    data() {
        return {
            indexData: {
                "afterSaleCount": "",
                "avgScore": "",
                "bannerList": [],
                "businessStatus": "",
                "custId": "",
                "evaluateCount": "",
                "isInWBusiness": "",
                "logo": "",
                "orderBean": {
                    "boxAmount": "",
                    "boxComm": "",
                    "freight": "",
                    "goodsAmount": "",
                    "goodsComm": "",
                    "payAmount": "",
                    "payCount": "",
                    "refundAmount": "",
                    "refundCount": "",
                    "shopDiscount": "",
                    "orderData": "",
                    "orderCount": "",
                    "turnData": "",
                    "turnover": ""
                },
                "platformStatus": "",
                "shopName": "",
                "time": "",
                "todayOrderIncome": "",
                "todayValidOrder": "",
                "typeName": "",
                "waitCount": "",
                "waitSendCount": "",
                "refundingCount": ""
            }
        }
    },
    computed: {
        ...mapState(['currentAnalysisUrl'])
    },
    methods: {
        bg(url) {
            return `background: url(${url}) no-repeat; background-size: 100% 100%`;
        }
    },
    created() {
        let _this = this;
        _this.$api.ajaxReadPost('/home/queryWaiMaiBusinessInfo', null, function(result){
            if(result && result.resultcode==0){
                _this.indexData = result.result;
            }else{

            }
        });
    },
    mounted() {
        this.$nextTick(function(){
            
        });
    }
}
</script>

<style scoped>
    a.bannerLink{
        display: block;
        width: 100%;
        height: 100%;
    }

    .tipContent > span{
        display: block;
        line-height: 20px;
    }
    .tipContent > span:after{
        content: "";
        display: block;
        clear: both;
    }
    .tipContent > span > .leftHead{
        float: left;
        width: 85px;
    }
    .tipContent > span > .rightHead{
        float: left;
        width: 220px;
    }

    .latestTime{
        color: darkgrey; 
        margin-left: 20px;
    }

    .index_more{
        float: right
    }
    .index_more > a{
        color: #1c95e4;
    }
    .index_more > a:hover{
        text-decoration: underline;
    }

    .todoBlock, .todoBlock p{
        margin-bottom: 15px;
    }

    .detailData{
        margin-bottom: 50px;
        text-align: center;
    }
    .detailData .el-col{
        margin-bottom: 15px;
    }
</style>