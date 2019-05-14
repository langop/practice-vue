<template>
    <div class="padding15">
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="padding15 bgWhite">
                <el-carousel interval="5000" height="300px">
                    <el-carousel-item v-for="item in bannerList" :key="item.title">
                        <a class="bannerLink" :style="bg(item.banner)" :href="item.bannerUrl" target="_blank"></a>
                    </el-carousel-item>        
                </el-carousel>
            </div>
        </el-col>
        <el-col :span="12">
            <div style="border: 1px solid red;">
                2222
            </div>
        </el-col>
    </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bannerList: [{
                title: "a",
                banner: 'http://localhost:8080/xtwl_shop_platform/img/dd_s1.png',
                bannerUrl: 'http://www.baidu.com'
            }, {
                title: "ab",
                banner: 'http://localhost:8080/xtwl_shop_platform/img/dd_s2.png',
                bannerUrl: 'http://www.baidu.com'
            }]
        }
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
</style>
