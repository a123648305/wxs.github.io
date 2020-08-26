<style lang="less" scoped>
.movie-list {
    background-color: #fff;
    overflow: auto;
    height: 99%;
    .download-header {
        background: #fff;
        height: 60px;
        width: 100%;
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
        .logo-img {
            margin-left: 11px;
            margin-right: 6px;
            min-width: 42px;
            height: 42px;
            background: url(//p0.meituan.net/moviemachine/08d3ecf9c6fa9964c85d1f23b8d8fcb87541.png)
                no-repeat;
            background-size: contain;
        }
        .info-wrapper {
            -webkit-box-flex: 1;
            flex-grow: 1;
            text-align: left;
            .title {
                font-size: 15px;
                color: #333;
                line-height: 23px;
                margin-bottom: 1px;
                font-weight: 600;
            }
            .content {
                font-size: 11px;
                color: #666;
                letter-spacing: 0;
            }
        }
        .link-btn {
            display: flex;

            justify-content: center;

            align-items: center;
            min-width: 96px;
            height: 42px;
            margin-right: 6px;
            border-radius: 22px;
            background: #f03d37;
            color: #fff;
            font-size: 13px;
            &::after {
                content: '';
                width: 19px;
                height: 19px;
                margin-left: 5px;
                background: url(//p0.meituan.net/moviemachine/89857785f50685578fa61e1883251da95640.png)
                    no-repeat;
                background-size: contain;
                animation: changeScale 3s ease-in-out infinite;
            }
        }
    }
    .movie-list-item {
        padding: 12px 14px;
        display: flex;
        .item-img {
            height: 90px;
            width: 64px;
            padding-top: 3px;
        }
        .item-content {
            flex: 3;
            margin-left: 10px;
            position: relative;
            border-bottom: 1px solid #ccc;
            padding-bottom: 3px;
            .item-content-info {
                float: left;
                width: 200px;
                p {
                    font-size: 13px;
                    color: #666;
                    margin: 0 0 6px 0;
                    text-align: left;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    &:nth-child(1) {
                        font-size: 17px;
                        color: #333;
                        font-weight: 700;
                        padding-right: 5px;
                        flex-shrink: 1;
                        margin-top: 0;
                        margin-bottom: 7px;
                    }
                }
            }
            .item-content-operator {
                height: 100%;
                align-items: center;
                display: flex;
                justify-content: center;
                margin-right: 14px;
                .item-book {
                    width: 47px;
                    height: 27px;
                    line-height: 28px;
                    text-align: center;
                    box-sizing: border-box;
                    background-color: #f03d37;
                    color: #fff;
                    border-radius: 4px;
                    white-space: nowrap;
                    font-size: 12px;
                    cursor: pointer;
                    border: none;
                }
            }
        }
    }
    @keyframes changeScale {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.26);
        }
        to {
            transform: scale(1);
        }
    }
    .top-bar {
        height: 45px;
        // border-top: 1px solid #ccc;
        border-bottom: 1px solid #e8e8e8;
        display: flex;
        box-sizing: border-box;
        .top-bar-left {
            width: 80px;
            position: relative;
            .area-name {
                line-height: 45px;
                font-size: 15px;
                color: #666;
            }
            .area-name::after {
                content: '';
                width: 0;
                height: 0;
                border-width: 6px;
                border-style: solid;
                border-color: #b0b0b0 transparent transparent transparent;
                position: absolute;
                top: 19px;
                right: 10px;
            }
        }
        .top-bar-mid {
            flex: 1;
            position: sticky;
            top: 60px;
            .mid-bar-title {
                font-size: 15px;
                // color: #666;
                text-align: center;
                font-weight: 700;
            }
        }
        .top-bar-right {
            width: 80px;

            .icon-Search {
                font-size: 20px;
                line-height: 45px;
                color: red;
            }
        }
    }
    .fixTop {
        position: fixed;
        top: 50px;
        width: 100%;
        z-index: 100;
        background-color: white;
    }
    .content {
        height: 100%;
        .coming-list-item {
            flex-direction: column;
        }
        .coming-title {
            font-size: 14px;
            color: #333;
            text-align: left;
            margin-bottom: 12px;
        }
        .coming-content {
            flex-direction: row;
            display: flex;
            .wish-font {
                color: #faaf00;
                font-size: 15px;
                font-weight: 600;
            }
        }
    }
    .mt-50 {
        margin-top: 50px;
    }
}
</style>

<template>
    <div class="movie-list" ref="movieDom">
        <div class="download-header" v-show="!isTop">
            <div class="logo-img"></div>
            <div class="info-wrapper">
                <div class="title">猫眼</div>
                <div class="content">0 元看电影，天天领现金</div>
            </div>
            <div class="link-btn">立即领取</div>
        </div>
        <div :class="isTop?'fixTop':''" class="top-bar">
            <div class="top-bar-left">
                <span class="area-name">惠州</span>
            </div>
            <div class="top-bar-mid">
                <van-tabs @change="tabChange" title-active-color="#ef4238" v-model="active">
                    <van-tab>
                        <div class="mid-bar-title" slot="title">正在热映</div>
                    </van-tab>
                    <van-tab>
                        <div class="mid-bar-title" slot="title">即将上映</div>
                    </van-tab>
                </van-tabs>
            </div>
            <div class="top-bar-right">
                <i class="iconfont icon-Search"></i>
            </div>
        </div>
        <div :class="isTop?'mt-50':''" class="content">
            <div class="content-list-now" v-if="active===0">
                <div :key="item.id" class="movie-list-item" v-for="item in movieList">
                    <div class="item-img">
                        <img :src="item.img" alt height="100%" width="100%">
                    </div>
                    <div class="item-content">
                        <div class="item-content-info">
                            <p>{{item.nm}}</p>
                            <p>观众评:{{item.sc}}</p>
                            <p>主演:{{item.star}}</p>
                            <p>{{item.showInfo}}</p>
                        </div>
                        <div class="item-content-operator">
                            <button @click="book(item)" class="item-book">book</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-list-just" v-if="active===1">
                <div :key="item.id" class="movie-list-item coming-list-item" v-for="item in movieCommingList">
                    <div class="coming-title">{{item.comingTitle}}</div>
                    <div class="coming-content">
                        <div class="item-img">
                            <img :src="item.img" alt height="100%" width="100%">
                        </div>
                        <div class="item-content">
                            <div class="item-content-info">
                                <p>{{item.nm}}</p>
                                <p>
                                    <span class="wish-font">{{item.wish}}</span>
                                    想看
                                </p>
                                <p>主演:{{item.star}}</p>
                                <p>{{item.rt}}上映</p>
                            </div>
                            <div class="item-content-operator">
                                <button @click="book(item)" class="item-book">book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Tab, Tabs } from 'vant'
import { Component, Prop, Vue, Ref } from 'vue-property-decorator'
import { Action } from 'vuex-class'
@Component({
    components: {
        [Tab.name]: Tab,
        [Tabs.name]: Tabs
    }
})
export default class HelloWorld extends Vue {
    @Prop({ default: '999' }) private msg!: string
    @Action('getList') getMovieList!: Function
    @Action('getComingList') getComingList!: Function
    private movieList: any = []
    private movieCommingList: any = []
    private active: number = 0
    isTop: boolean = false
    private book(item: any) {
        console.log(item, '11111')
    }
    private created() {
        console.log('start')
        // this.currentMovieList()
        // this.ComingList()
    }

    @Ref() readonly movieDom!: HTMLButtonElement
    mounted() {
        // scroll
        this.movieDom.onscroll = () => {
            // console.log('on scroll', this.movieDom.scrollTop)
            let top = this.movieDom.scrollTop //获取滚动条的滚动高度
            if (top > 50) {
                this.isTop = true
            } else {
                this.isTop = false
            }
        }
    }
    /**
     * currentMovieList 定义成公共方法 其他文件引用此组件时 可调用
     */
    public currentMovieList() {
        return new Promise((resolve, reject) => {
            this.getMovieList().then((res: any) => {
                console.log(res, '888')

                res.movieList.map((item: any) => {
                    item.img = item.img.replace(/w.h/g, '128.180')
                })
                this.movieList = res.movieList
                resolve()
            })
        })
    }
    // 获取即将上映列表
    private ComingList() {
        this.getComingList({ ci: 281, token: '', limit: 10 }).then(
            (res: any) => {
                console.log(res, '999')
                res.coming.map((item: any) => {
                    item.img = item.img.replace(/w.h/g, '128.180')
                })
                this.movieCommingList = res.coming
            }
        )
    }
    private tabChange(e: number) {
        if (this.movieCommingList.length > 0 || e == 0) {
            return
        } else {
            this.ComingList()
        }
    }
}
</script>
