<template>
  <div class="hello">
    <nav>
      <div class="head_left">
        <router-link :to="currentBusinessIndexUrl" tag="img" class="headLogo" :src="logo" :title="logo" alt="LOGO" height="50"></router-link>
      </div>
      <div class="head_middle">
        <router-link to="/takeout" class="menu">外卖</router-link>
      </div>
      <div class="head_right">
        <ul class="right_menu">
          <li v-for="item in rightMenus" :key="item.name" :data-url="item.url"><i :class="item.iconclass"></i> {{item.name}}</li>
          <li class="userinfo">
             <img :src="user.shopIcon" class="accountImg" alt="">
             <span>{{user.account}}</span>
             <!-- 用户信息 -->
             <section>
                <p v-for="info of user.functions" :key="info.name">
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
import {mapState, mapActions} from 'vuex'
export default {
  name: 'TakeoutBusiness',
  data () {

    const rightMenus = [
      {"name":"入驻申请", "iconclass": "fa fa-male", "url":"321"},
      {"name":"联系BD", "iconclass": "fa fa-phone", "url":"123"},
      {"name":"消息", "iconclass": "fa fa-bell-o", "url":"321"}
    ];

    const user = {
      "shopIcon": "static/images/user8.jpg",
      "account": "卢晓杰" ,
      "functions": [
        {name:"店铺信息", url: "/"},
        {name:"业务信息", url: "/"},
        {name:"账号密码设置", url: "/"},
        {name:"幸福学院", url: "/"}
      ]
    };

    return {
      logo: 'static/images/logo.png',
      rightMenus,
      user,
    }
  },
  mounted() {
    this.changeLastLoginType();
  },
  computed: {
    ...mapState(['currentBusinessIndexUrl'])
  },
methods: {
    ...mapActions(['changeLastLoginType']),
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
  nav .head_middle .menu{
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
  }
  nav .head_middle .menu.router-link-active{
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
    border-left: 2px solid #353d46;
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
    box-shadow: 0 0 1px #919191;
  }
  nav>.head_right>.right_menu>li.userinfo>section p{    
    height: 45px;
    line-height: 45px;
    box-shadow: 0 0 1px #919191;
    text-align: center;
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
