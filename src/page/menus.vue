<template>
    <div id="businessMenus">
        <ul>
            <li v-for="menu in currentMenus" :key="menu.link" :class="{smallMenu:menu.small}">
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
        text-align: center;
        line-height: 20px;
        padding: 0 20px;
        margin: 8px 0;
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

    #businessMenus .smallMenu {
        border-left: 1px solid #777777;
        font-size: 0.9em;
    }
    #businessMenus .smallMenu+.smallMenu{
        border: none;
        padding: 0 10px;
    }
</style>

