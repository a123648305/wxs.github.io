<template>
    <content-loader :height="475" :speed="1" :width="407" primaryColor="#ebfcfc" secondaryColor="#f3e4e4">
        <rect height="42" rx="0" ry="0" width="382.32" x="8.69" y="13.67"/>
        <rect height="44" rx="0" ry="0" width="382.59" x="10.69" y="59.67"/>
        <rect height="101" rx="0" ry="0" width="118.72" x="10.69" y="119.67"/>
        <rect height="27" rx="0" ry="0" width="81.34" x="148.69" y="124.67"/>
        <rect height="27" rx="0" ry="0" width="103.95" x="145.69" y="159.67"/>
        <rect height="22" rx="0" ry="0" width="120.78" x="143.69" y="199.67"/>
        <rect height="29" rx="0" ry="0" width="70.8" x="313.69" y="152.67"/>
        <rect height="0" rx="0" ry="0" width="0" x="14.69" y="133.67"/>
        <circle cx="110.69" cy="345.67" r="1"/>
    </content-loader>
</template>
<script lang="ts">
import { ContentLoader } from 'vue-content-loader'
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {
        ContentLoader
    }
})
export default class previewTemplate extends Vue {}
</script>