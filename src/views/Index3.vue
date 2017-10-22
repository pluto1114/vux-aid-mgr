<style lang="less" scoped>
@import '../styles/flex.css';


.bg {
    height: 15em;
    background-color: #33aaFF;
    opacity: 0.8;

    color: white;
    .common {
        padding-top: 1em;
        display: flex;
        align-items: center;
        height: 9em;
        &>img {
            margin-left: 2em;
            height: 5em;
        }
        .user-info {
            margin-left: 1.5em;
        }
        .day-sign {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            .link {
                padding-left: 1em;
                padding-right: 0.5em;
                border-top-left-radius: 0.8em;
                border-bottom-left-radius: 0.8em;
                background-color: rgba(255, 255, 255, 0.25);
            }
        }
    }

    .points {
        height: 5em;
        background-color: rgba(0, 0, 0, 0.2);
        text-align: center;
    }
}

.marquee-info {
    padding: 0.4em 0.5em;
    background: #ffffdd;
    i {
        width: 3em;
        text-align: center;
        color: #2255dd;
    }
}

.group {
    i {
        width: 1.5em;
    }
}
</style>
<template>
    <div class="index3">
        <div class="bg">
            <div class="common">
                <img src="static/image/photo.png">
                <a class="user-info">登 录</a>
                <div class="day-sign">
                    <div class="link">每日签到</div>
                </div>
            </div>
            <div class="points ub uc">
                <div class="uf-1 ub-v">
                    <div>发新闻</div>
                    <div>0</div>
                </div>
                <div class="uf-1 ub-v">
                    <div>写日志</div>
                    <div>0</div>
                </div>
                <div class="uf-1 ub-v">
                    <div>发通知</div>
                    <div>0</div>
                </div>

            </div>
        </div>
        <div class="marquee-info ub">
            <i class="fa fa-cog fa-fw fa-spin"></i>
            <marquee style="font-size:0.9em;">
                <marquee-item v-for="i in marqueeInfo" :key="i" class="align-middle">{{i}}</marquee-item>
            </marquee>
        </div>
        <div class="bar"></div>
        <div class="group">
            <cell :title="x.title" is-link v-for="(x,i) of group1" :key="i">
                <i slot="icon" class="fa" :class="x.icon"></i>
            </cell>
            <x-switch title="<i class='fa fa-envelope-o'></i>&nbsp;&nbsp;推送"></x-switch>
          
        </div>
        
    </div>
</template>
<script>
import { Marquee, MarqueeItem, Cell,XSwitch } from 'vux'
export default {
    data() {
        return {
            marqueeInfo: [Mock.mock("@csentence"), Mock.mock("@csentence")],
            group1: [
                { title: "我的点评", icon: "fa-comment-o" },
                { title: "上传下达", icon: "fa-heart-o" },
               
            ],
            group2: [
                { title: "您的意见", icon: "fa-edit" },
                { title: "分享给好友", icon: "fa-share-alt" },
                { title: "客服电话", icon: "fa-phone" },
            ],
        }
    },
    computed: {
    },
    created() {

    },
    mounted() {
    },
    methods: {

    },
    components: {
        Marquee, MarqueeItem,
        Cell,
        XSwitch
    }
}
</script>
