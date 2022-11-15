<!--
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-11-15 11:39:55
 * @LastEditTime: 2022-11-15 14:07:28
-->
# 自开发模拟单点登录页

## 原理

1. 在 `localStorage` 中添加用户信息

## 介绍

1. 一个单点登录页面，根据地址栏上的参数的信息获取对应的
2. 自定义 `api`，`header`等
3. 指定重定向地址
4. 指定错误发生时跳转地址
5. 地址 `base64` 编码
6. 错误时是否弹窗显示错误信息

## 基本配置

```json
{
    "api": {
        "url": "https://localhost:9095/sso",
        "method": "get"
    },
    "params": [
        {
            "field": "token",
            "type": "query"
        },
        {
            "field": "appId",
            "type": "fixed",
            "value": "BBeerfFeer"
        }
    ],
    "headers": [
        {
            "field": "token",
            "type": "query"
        },
        {
            "field": "appId",
            "type": "fixed",
            "value": "BBeerfFeer"
        }
    ],
    "oriToken": {
        "type": "response | query",
        "prop": "token"
    },
    "redirect": {
        "base64": true,
        "type": "default | response"
    },
    "error": {
        "base64": true,
        "type": "default | response",
        "isPopover": true,
        "popoverMessage": "default | response"
    },
    "theme": {
        "color": "red"
    }
}
```

### 1、`api`

获取用户 `token` 的接口，它将被 `axios` 所调用

- `url`，接口地址
- `method`，请求类型
- 接口的返回类型应该是如下的类型(遵循倚天的 `Response`)

```ts
// 通过runtimeService中的方法可以获取到这个类型
type UserInfo = com.xdap.api.moudle.user.vo.LoginUserVo;

type ResponseInfo = {
    userInfo: UserInfo;
    redirectUrl: string;
    errorUrl: string;
    oriToken?: string;
}

interface Response {
    code: "ok" || '200';
    message: string;
    total?: number;
    data: ResponseInfo;
    requestid?: string;
}
```

### 2、`params`

接口的请求参数

- `field` 参数名
- `type`
    - `query`，取地址栏上的参数
    - `fixed`，固定值，取一个固定值
- `value`
    - 当类型是 `fixed` 的时候，写入的固定值

### 3、`headers`

同上，这里不做解释

### 4、`oriToken`

`oriToken`，如果有 `oriToken` 的话，写入进去
    - `type`
        - `response`，返回值的中默认是 `oriToken`
        - `query`，在地址栏上，根据下方的 `prop` 获取
    - `prop` 如果是 `query` 的话必填

### 5、`redirect`

成功后重定向的配置

- `type`
    - `default`，默认的调转至 `app` 页面
    - `response`，由返回的重定向地址决定，由配置决定是否后端做了地址的 `base64` 加密
- `base64`
    - 是否 `base64` 加密

### 6、`error`

- `type`
    - `default`，默认的调转至 `417` 页面
    - `response`，由返回的重定向地址决定，由配置决定是否后端做了地址的 `base64` 加密
- `base64`
    - 是否 `base64` 加密
- `isPopover`
    - 是否弹窗提醒
- `popoverMessage`
    - `default`，默认的就是 <u>登录失败，请检查接口是否正确！</u>
    - `response`，取的是 `Response` 里面的 `message`

### 7、`theme`

`theme` `loading` 的主题

- `color` 颜色

## 下载

<l-download title="自开发包下载" link="https://share.weiyun.com/yBzwEtcY" />

## 压缩 `zip`

```bash
npm i archiver -D
```

```js
/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-10-08 14:50:18
 * @LastEditTime: 2022-10-17 16:30:36
 */
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

/**
 * @description: zip文件夹
 * @param {string} sourceFolder 待压缩文件夹
 * @param {string} distZip 压缩后的zip文件
 * @param {function} cb 回调函数
 * @param {boolean} subdir 是否需要包一层
 * @return {void}
 */
function zipFolder(sourceFolder, distZip, cb, subdir){
    let output = fs.createWriteStream(distZip);

    let archive = archiver('zip', {
        zlib: {level: 9}
    });

    output.on('close', function(){
        cb(null, 'zip folder success!');
    })

    archive.on('error', function(err){
        cb(err);
    })

    archive.pipe(output);
    archive.directory(sourceFolder, subdir || false);
    archive.finalize()
}

function startZip(){
    let sourceFolder = path.resolve(__dirname, 'build');
    let distZip = 'sso.zip';

    zipFolder(sourceFolder, distZip, function(err, msg){
        if(err){
            console.error(err);
        }else{
            console.log(msg);
        }
    })
}

startZip();
```

