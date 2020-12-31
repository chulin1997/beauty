<template>
    <div>
        <van-nav-bar
            title="真我系列"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
            <van-card v-for="(item, index) in list" :key="index">
                <template #title>
                    <div>{{ item.product_name }}</div>
                </template>
                <template #desc>
                    <div>{{ item.product_desc }}</div>
                </template>
                <template #price>
                    <div>￥{{item.default_price}}</div>
                </template>
                <template #thumb>
                    <van-image :src="item.kv_image"/>
                </template>
            </van-card>
    </div>
</template>
<script>
import Vue from "vue";
import { Card, NavBar, Image } from "vant";
import uri from "@/config/uri";

Vue.use(Card);
Vue.use(NavBar);
Vue.use(Image);
export default {
    data() {
        return {
            list: [],
        };
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
    },
    created() {
        this.$http.get(uri.getTrueMe).then((ret) => {
            console.log(ret.data);
            // console.log(ret.result.itemlist[0].img_url);
            this.list = ret.data.list;
        });
    },
};
</script>