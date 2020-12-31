<template>
    <div class="box">
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img
                    class="img"
                    src="https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1440/FSH-1604310199016-heroimage.jpg"
                    alt=""
                />
            </van-swipe-item>
            <van-swipe-item>
                <img
                    class="img"
                    src="https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1440/FSH-1604310184577-campaign01.jpg"
                    alt=""
                />
            </van-swipe-item>
            <van-swipe-item>
                <img
                    class="img"
                    src="https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1440/FSH-1604310186519-campaign02.jpg"
                    alt=""
                />
            </van-swipe-item>
        </van-swipe>
        <!-- 宫格 -->
        <van-grid :border="false" :column-num="2">
            <van-grid-item v-for="(item, index) in images" :key="index" @click="goToDetail(index)">
                <div>
                    <van-image width="150px" :src="item.src" />
                    <p>{{ item.desc }}</p>
                </div>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Grid, GridItem, Image } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);
export default {
    data() {
        return {
            images: [
                {
                    desc: "真我系列",
                    src:
                        "https://www.dior.cn/couture/var/dior/storage/images/21651440/5-chi-CN/pcd-j%E2%80%99adore-eau-de-parfum-infinissime-noel2_1440_1200.jpg",
                },
                {
                    desc: "金艳幻彩系列",
                    src:
                        "https://www.dior.cn/couture/var/dior/storage/images/horizon/woman/pushs-sous-cover-femme/pcd-diorific-golden-nights-collection-limited-edition-y0185000/17502571-31-chi-CN/pcd-diorific-golden-nights-collection-limited-edition-y0185000_1440_1200.jpg",
                },
                {
                    desc: "手提包",
                    src:
                        "https://www.dior.cn/couture/var/dior/storage/images/15798768/124-chi-CN/cdc-sacs39_1440_1200.png",
                },
                {
                    desc: "首饰",
                    src:
                        "https://www.dior.cn/couture/var/dior/storage/images/16815493/32-chi-CN/cdc-bijoux6_1440_1200.png",
                },
            ],
            url:[
                '/home/trueme',
                '/home/colorful',
                '/home/handbag',
                '/home/jewelry',
            ]
        };
    },
    methods: {
        goToDetail(index){
            this.$router.push(this.url[index])
        }
    },
};
</script>
<style lang="scss" scoped>
.img {
    width: 100%;
    height: 200px;
    vertical-align: middle;
}
.box {
    margin-bottom: 50px;
    font-size: 25px;
}
p {
    text-align: center;
    line-height: 25px;
    margin: 0;
}
</style>