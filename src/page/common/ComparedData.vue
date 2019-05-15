<template>
    <div class="comparedDataBlock">
        <el-image :src="typeIconUrl[tp]" style="width: 110px; height: 110px; vertical-align: bottom;"></el-image>
        <div class="dataBlock">
            <h1><small v-if="tp==='1'">￥</small>{{dt}}</h1>
            <p>{{typeDesc[tp]}}</p>
            <p>
                <small :class="{increase:isIncrease, reduce:isReduce}">{{displayPer}}</small>
            </p>
        </div>
    </div>
</template>

<script>

const orderIcon = require('@/assets/img/dd_s1.png')
const turnIcon = require('@/assets/img/dd_s2.png')

export default {
    props: {
        tp: {
            type: String,  //0订单数  1净收入
            required: true
        },
        dt: {
            type: String, 
            required: true
        },
        per: {
            type: String, 
            required: true
        }
    },
    data() {
        return {
            typeDesc: ['已完成订单', '净收入'],
            typeIconUrl: [orderIcon, turnIcon]
        }
    },
    computed: {
        displayPer() {
            let html = '';
            if(this.per==='--') html=this.per;
            else if(parseFloat(this.per) >= 0){
                html='+'+this.per+'%';
            }
            else if(parseFloat(this.per) < 0) {
                html=this.per+'%';
            }
            return html;
        },
        isIncrease() {
            return parseFloat(this.per) > 0;
        },
        isReduce() {
            return parseFloat(this.per) < 0;
        }
    }
}
</script>

<style scoped>
    .comparedDataBlock{
        width: 210px;
        height: 135px;
        margin: 0 auto;
    }
    .dataBlock{
        display: inline-block; 
        margin-left: 10px;
    }
    .dataBlock > p{
        height: 25px;
        line-height: 25px;
    }

    small.increase{
        color: green
    }
    small.reduce{
        color: red;
    }
</style>


