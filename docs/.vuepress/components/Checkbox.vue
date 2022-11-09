<!--
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-11-01 16:12:23
 * @LastEditTime: 2022-11-01 16:15:04
-->
<template>
    <div class="checkbox" :class="[color, Boolean(checked) ? 'checked' : '']"><input type="checkbox" :checked="Boolean(checked)"><p>{{content}}</p></div>
</template>

<script>
    export default {
        name: 'LCheckbox',
        props: ['color', 'checked', 'content']
    }
</script>
<style scoped>
    .download{
        display: flex;
        justify-content: center;
    }
</style>