<!--
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-11-01 15:10:18
 * @LastEditTime: 2022-11-01 15:17:13
-->
<template>
    <div class="btns rounded download">
        <a class="button" :href="link" title="title" target="_blank"><i class="fas fa-download"></i>{{title}}</a>
    </div>
</template>

<script>
    export default {
        name: 'LDownload',
        props: ['link', 'title']
    }
</script>
<style scoped>
    .download{
        display: flex;
        justify-content: center;
    }
</style>