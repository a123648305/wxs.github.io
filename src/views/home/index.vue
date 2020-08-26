<style lang="less" scoped>
.home {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: fixed;
    width: 100%;
    .home-header {
        height: 50px;
        background-color: #e54847;
        color: white;
        line-height: 50px;
        font-size: 18px;
        font-weight: 400;
    }
    .home-content {
        flex: 1;
        overflow: auto;
    }
    .home-footer {
        height: 40px;
    }
}
</style>


<template>
    <div>
        <div class="home" v-show="active">
            <div class="home-header">{{title}}</div>
            <div class="home-content" ref="content">
                <homeContent :msg="title" ref="movedContent" v-if="title=='电影'"/>
                <cinema v-if="title=='影院'"/>
            </div>
            <div class="home-footer">
                <tabbar @emit-tab="tabChange"/>
            </div>
        </div>
        <previewTemplate v-show="!active"/>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import homeContent from './home-content.vue'
import tabbar from './tabbar.vue'
import previewTemplate from '@/components/previewTemplate.vue'
import cinema from '../cinema/index.vue'
@Component({
    components: {
        homeContent,
        tabbar,
        previewTemplate,
        cinema
    }
})
export default class Home extends Vue {
    radio: string = '1'
    private title: string = '电影'
    private list: number = 3
    private active: boolean = false
    private tabChange(e: any) {
        this.title = e
    }
    private test(e: any) {
        console.info(e, 'scroll')
    }
    @Ref() readonly movedContent!: homeContent
    mounted() {
        this.movedContent.currentMovieList().then(() => {
            this.active = true
        })
        // setTimeout(() => {
        //     this.active = true
        // }, 200)
    }
}
</script>

