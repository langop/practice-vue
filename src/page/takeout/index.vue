<template>
    <div class="padding15">
        <el-row :gutter="20">
            <!-- 左边 -->
            <el-col :span="12">
                <!-- 运营配置广告展示 -->
                <div class="padding15 bgWhite" v-if="bannerList.length>0">
                    <el-carousel :interval="5000" height="300px">
                        <el-carousel-item v-for="item in bannerList" :key="item.title">
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
                            {{time}}更新
                        </small>

                        <small class="index_more">
                            <router-link :to="currentAnalysisUrl">更多 &gt;</router-link>
                        </small>
                    </p>
                    <el-divider></el-divider>

                    <!-- 同比数据展示 -->
                    <el-row>
                        <el-col :span="12">
                            <ComparedData tp="0" dt="16" per="1.66"></ComparedData>
                        </el-col>
                        <el-col :span="12">
                            <ComparedData tp="1" dt="156" per="-1.66"></ComparedData>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>

                    <!-- 具体数据展示 -->
                    <div style="margin-bottom: 50px;">
                        <el-row style="text-align: center;">
                            <el-col :span="6">
                                <h2><small>￥</small>1256.3</h2>
                                <p>砍价支付金额</p>
                            </el-col>
                            <el-col :span="6">
                                <h2>125</h2>
                                <p>砍价订单</p>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>

            <!-- 右边 -->
            <el-col :span="12">
                <div class="padding15 bgWhite">
                    <div style="border: 1px solid red;">
                    </div>

                    <p>代办事项</p>
                    <el-divider></el-divider>
                    <div class="todoBlock">
                        <el-row style="text-align: center;">
                            <el-col :span="12">
                                <h3>0</h3>
                                <p>待接单</p>
                                <el-button>去查看</el-button>
                            </el-col>
                            <el-col :span="12">
                                <h3>1</h3>
                                <p>待接单</p>
                                <el-button type="primary">去查看</el-button>
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
export default {
    components: {
        ComparedData
    },
    data() {
        return {
            bannerList: [{
                title: "a",
                banner: 'https://img.qiyuns.com/f32823322116b632d5d4fd762e9ee275',
                bannerUrl: 'http://www.baidu.com'
            }, {
                title: "ab",
                banner: 'https://img.qiyuns.com/cff2ac65bc447dbbfbe41759667016f0',
                bannerUrl: 'http://www.baidu.com'
            }],
            time: '2019-05-15 12:47:13'
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

    .todoBlock p{margin-bottom: 10px;}

</style>
