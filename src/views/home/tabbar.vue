<style lang="less" scoped>
.iconfont {
    font-size: 25px;
}
</style>
<template>
    <div>
        <van-tabbar @change="emitTab" active-color="#f03d37" v-model="active">
            <van-tabbar-item>
                <span>电影</span>
                <i class="iconfont icon-movie" slot="icon"></i>
            </van-tabbar-item>
            <van-tabbar-item>
                <span>影院</span>
                <i class="iconfont icon-cinema-" slot="icon"></i>
            </van-tabbar-item>
            <van-tabbar-item>
                <span>我的</span>
                <i class="iconfont icon-my" slot="icon"></i>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script lang="ts">
import { Circle, Tabbar, TabbarItem } from 'vant'
import { Component, Vue, Emit } from 'vue-property-decorator'
@Component({
    components: {
        [Circle.name]: Circle,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    }
})
export default class test extends Vue {
    @Emit()
    private emitTab(e: any) {
        // console.info(e)
        switch (e) {
            case 0:
                return '电影'
            case 1:
                return '影院'
            case 2:
                return '我的'
        }
    }
    active: number = 0
}
</script>
