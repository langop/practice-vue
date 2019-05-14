<template>
  <div class="hello">
    <nav>
      <div class="head_left">
        <router-link :to="currentBusinessIndexUrl" tag="img" class="headLogo" :src="logo" title="logo" alt="LOGO" height="50"></router-link>
      </div>
      <div class="head_middle">
        <router-link v-if="shopInfo.isOpenW==1" to="/takeout" class="menu" @click.native="changeLastLoginType('1')">外卖{{wStatusStr}}</router-link>
        <router-link v-if="shopInfo.isOpenT==1" to="/groupBuy" class="menu" @click.native="changeLastLoginType('2')">团购{{tStatusStr}}</router-link>
        <router-link v-if="shopInfo.isOpenP==1" to="/collage" class="menu" @click.native="changeLastLoginType('4')">拼团砍价{{pStatusStr}}</router-link>
        <router-link v-if="shopInfo.isOpenK==1" to="/bargain" class="menu" @click.native="changeLastLoginType('5')">砍价{{kStatusStr}}</router-link>
      </div>
      <div class="head_right">
        <ul class="right_menu">
          <li v-for="item in rightMenus" :key="item.name" :data-url="item.url"><i :class="item.iconclass"></i> {{item.name}}</li>
          <li class="userinfo">
             <img :src="shopInfo.logo" class="accountImg" alt="">
             <span>{{shopInfo.shopName}}</span>
             <!-- 用户信息 -->
             <section>
                <p v-for="info of functions" :key="info.name">
                  <router-link :to="info.url">{{info.name}}</router-link>
                </p>   
             </section>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: 'TakeoutBusiness',
  data () {
    const rightMenus = [
      {"name":"入驻申请", "iconclass": "fa fa-male", "url":"321"},
      {"name":"联系BD", "iconclass": "fa fa-phone", "url":"123"},
      {"name":"消息", "iconclass": "fa fa-bell-o", "url":"321"}
    ];

    const functions = [
      {name:"店铺信息", url: "/"},
      {name:"业务信息", url: "/"},
      {name:"账号密码设置", url: "/"},
      {name:"幸福学院", url: "/"}
    ];

    return {
      logo: 'static/images/logo.png',
      rightMenus,
      functions
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.queryPcShopInfo();
    });
  },
  computed: {
    ...mapState(['currentBusinessIndexUrl', 'shopInfo']),
    ...mapGetters(['getBusinessStatus', 'wStatusStr', 'pStatusStr', 'tStatusStr', 'kStatusStr']),
    
  },
  methods: {
      ...mapActions(['queryPcShopInfo']),
      ...mapMutations(['changeLastLoginType'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  nav{
    display: flex;
    background: #22282f;
  }
  nav .head_middle{
    flex-grow: 1;
  }
  nav .head_left{
    flex-basis: 200px;
  }
  .headLogo{
    margin-top: 5px;
  }

  /* 业务导航选中 */
  nav .head_middle a.menu{
    display: inline-block;
    color: white !important;
    font-size: 16px;
    font-weight: 600;
    min-width: 120px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin: 0 5px;
    cursor: pointer;
    padding:0 10px;
  }
  nav .head_middle a.menu.router-link-active{
    background: #1c95e4;
  }

  nav .head_right .right_menu li{
    display: block;
    float: left;
    color: white;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    cursor: pointer;
  }
  nav .head_right .right_menu li + li{
    border-left: 1px dotted #353d46;
  }

  nav .head_right .right_menu li:not(:last-child):hover{
    background: #353d46;
  }

  /* 用户信息 */
  nav>.head_right>.right_menu>li.userinfo{
    position: relative;
    display: flex;
    align-items: center;
    color: white!important;
    cursor: initial;
  }
  nav>.head_right>.right_menu>li.userinfo>section{
    position: absolute;
    display: none;
    width: 100%;
    top: 60px;
    right: 0px;
    background: white;
    border-top: 2px solid red;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    box-shadow: 0 0 1px #919191;
  }
  nav>.head_right>.right_menu>li.userinfo>section p{    
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 13px;
    border-bottom: 1px solid #e2e2e2;
  }
  a{
    color: #1c95e4;
  }
  nav .head_right>.right_menu>li.userinfo:hover>section{
    display: block;
  }
  li.userinfo>img.accountImg{
    display: inline-block;
    width: 36px;
    height: 36px;
    margin-right: 10px; 
    border-radius: 5px;
    box-shadow: 0px 0px 4px #fbfbfb;
  }

</style>
