<template>
    <div>
        <van-nav-bar
            title="手提包系列"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
    </div>
</template>
<script>
import Vue from "vue";
import { Card, NavBar } from "vant";

Vue.use(Card);
Vue.use(NavBar);
export default {
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
    },
};
</script>