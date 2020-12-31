<template>
    <div>
        <van-tabbar v-model="active" @change="changeTab">
            <van-tabbar-item>
                <van-icon
                    size="1.2rem"
                    slot="icon"
                    class="iconfont icon-meiyan"
                />
                <span>美吧</span>
            </van-tabbar-item>
            <van-tabbar-item>
                <van-icon
                    size="1.2rem"
                    slot="icon"
                    class="iconfont icon-dingdan"
                />
                <span>订单</span>
            </van-tabbar-item>
            <van-tabbar-item>
                <van-icon
                    size="1.2rem"
                    slot="icon"
                    class="iconfont icon-faxian"
                />
                <span>发现</span>
            </van-tabbar-item>
            <van-tabbar-item>
                <van-icon
                    size="1.2rem"
                    slot="icon"
                    class="iconfont icon-icon-test"
                />
                <span>我的</span>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem, Icon } from "vant";
import "@/assets/icon/iconfont.css";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
    data() {
        return {
            active: 0,
            url: ["/home", "/order", "/find", "/center"],
        };
    },
    created() {
        this.active =
            this.url.indexOf(this.$route.path) > 0
                ? this.url.indexOf(this.$route.path)
                : 0;
    },
    methods: {
        changeTab(index) {
            this.$router.push(this.url[index]);
        },
    },
};
</script>