<template>
    <div class="shopBusinessInfo">
        <el-image :src="shopIcon" style="width: 110px; height: 110px; vertical-align: top;"></el-image>
        <div class="shopInfoBlock">
            <h2>{{shopName}}</h2>
            <p v-show="score">
                <el-rate v-model="scoreFloat" disabled show-score :allow-half="true" text-color="#ff9900" score-template="{value} 分"></el-rate>
            </p>
            <p v-show="sale">已售：{{sale}}</p>
            <p class="typenamePart">
                <small v-for="tname in typeNames" :key="tname">{{tname}}</small>
            </p>
        </div>
    </div>
</template>

<script>

const default_shop_icon = require('@/assets/img/default_shop_icon.png')

export default {
    props: {
        shopName: {
            type: String, 
            required: true
        },
        typeName: {
            type: String, 
            required: true
        },
        shopIcon: {
            type: String,
            default: default_shop_icon
        },
        score: {
            validator(value) {
                return parseFloat(value) && parseFloat(value) <= 5;
            }
        },
        sale: {
            validator(value) {
                return parseInt(value) == value;
            }
        }
    },
    computed: {
        typeNames() {
            return this.typeName.split(',');
        },
        scoreFloat() {
            return parseFloat(this.score);
        }
    },
    mounted() {
        this.$nextTick(function(){

        });
    }   
}
</script>

<style scoped>
    .shopBusinessInfo{position: relative;}

    .shopInfoBlock{
        display: inline-block; 
        margin-left: 10px;
    }
    .shopInfoBlock > p{
        height: 25px;
        line-height: 25px;
    }

    .typenamePart > small{
        display: inline-block;
        border: 1px solid #ff9900;
        margin-right: 10px;
        padding: 1px 6px;
        border-radius: 3px;
        color: #ff9900;
    }
</style>