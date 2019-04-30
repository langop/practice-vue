<template>
    <div id="businessMenus">
        <ul>
            <li v-for="menu in currentMenus" :key="menu.link">
                <router-link :to="menu.link">{{menu.title}}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(['currentMenus'])
    },
}
</script>

<style scoped>
    #businessMenus > ul{
        display: block;
        background: white;
        overflow: hidden;
        padding: 0 20px;
    }

    #businessMenus > ul > li{
        display: block;
        float: left;
        min-width: 100px;
        text-align: center;
        line-height: 36px;
    }

    a{
        color: #585858;
    }
    a:hover{
        color: #1c95e4;
    }
    a.router-link-active{
        color: #1c95e4;
    }
</style>

