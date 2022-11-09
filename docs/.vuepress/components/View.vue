<!--
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-11-01 16:18:52
 * @LastEditTime: 2022-11-01 16:19:00
-->
<template>
    <div class="btns rounded download">
        <a class="button" :href="link" title="title" target="_blank"><i class="fas fa-book-open"></i>{{title}}</a>
    </div>
</template>

<script>
    export default {
        name: 'LView',
        props: ['link', 'title']
    }
</script>
<style scoped>
    .download{
        display: flex;
        justify-content: center;
    }
</style>