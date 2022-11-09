<!--
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-11-09 16:50:43
 * @LastEditTime: 2022-11-09 17:11:36
-->
# 自定义锚点

## 介绍

- 自定义节点可以用到的自定义锚点

## 原理

- 基于 `eventBus`

## 用法

1. 在业务时间中选择自定义节点(前端事件)

    ```js
    window.APaaSSDK.context.globalVueContext.$root.$bus.$emit("APAAS-CUSTOM-NODE", callback);
    ```

2. `callback`，回调函数，传入组件的实例，这意味着你可以使用实例上及其原型链上的所有属性和方法，例如混入的 `formData`、`formEngine`、`widget`、`$request`...



## 举个🌰

```js
window.APaaSSDK.context.globalVueContext.$root.$bus.$emit("APAAS-CUSTOM-NODE", function({formData}){
    console.log(formData);
});
```

## 其他

1. 组件内置清空子表的方法

    ```js
    window.APaaSSDK.context.globalVueContext.$root.$bus.$emit("APAAS-CUSTOM-NODE", function({clearSonTable}){
        clearSonTable("子表表名")
    });
    ```

2. 组件内置根据 `modelField` 获取组件配置的方法

    ```js
    window.APaaSSDK.context.globalVueContext.$root.$bus.$emit("APAAS-CUSTOM-NODE", function({getComponetConfigByModel}){
        var component = getComponetConfigByModel(null, "modelField");
        console.log(component);
    });
    ```

## todo

<l-checkbox color="red" content="还没想好......" />

## 下载包

<l-download title="自开发包下载" link="https://share.weiyun.com/BYWzX64H" />