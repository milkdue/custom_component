<!--
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-11-15 11:39:55
 * @LastEditTime: 2022-11-16 14:03:08
-->
# 自开发模拟单点登录页

## 原理

1. 在 `localStorage` 中添加用户信息

## 介绍

1. 一个单点登录页面
2. 自定义 `api`
3. 指定重定向地址
4. 指定错误发生时跳转地址
5. 错误时弹窗显示错误信息

## 基本配置

```json
{
    "url": "https://localhost:9095/sso",
    "method": "get",
    "oriTokenType": "response | query",
    "oriTokenProp": "token",
    "redirect": "default | response",
    "error": "default | response",
    "color": "red"
}
```

### 1、`url`

获取用户 `token` 的接口，它将被 `axios` 所调用

- 接口的返回类型应该是如下的类型(遵循倚天的 `Response`)
- 接口的参数为地址栏上的所有信息

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

### 2、`method`

接口的请求类型

### 3、`oriTokenType`

指定 `oriToken` 的值

- `response`，由后台返回
- `query`，从地址栏上取到

### 4、`oriTokenProp`

`oriTokenProp`，如果 `oriTokenType` 是 `query` 的话，指定取哪一个值

### 5、`redirect`

成功后重定向的配置

- `default`，默认的调转至 `app` 页面
- `response`，由返回的重定向地址决定，返回的地址必须使用 `base64` 加密

### 6、`error`

同上

### 7、`color`

`color` `loading` 的颜色

## 配置

1. 配置书写的位置在前端自定义环境变量中，但要注意使用转义字符

```java
{\"url\":\"http://172.19.11.93:30614/test/user\",\"method\":\"get\",\"oriTokenType\":\"query\",\"oriTokenProp\":\"token\",\"redirect\":\"default\",\"error\":\"default\",\"color\":\"red\"}
```

## 下载

<l-download title="自开发包下载" link="https://share.weiyun.com/5Z00E1w0" />

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

