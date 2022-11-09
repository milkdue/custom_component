<!--
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-11-08 14:09:52
 * @LastEditTime: 2022-11-09 17:39:04
-->
# 自开发徽章组件

## 介绍

- 一个根据字段生成右上角徽标的组件
- 支持自定义徽标(需在任意开发包内上传对应的 `svg`)
- 支持识别的字段目前有单行输入、下拉框(数据字典格式)、数据选择和虚拟字段

## 预览

![image](/component/4.jpeg)

## 基本配置

完整配置(?表示可选属性)

```json
{
    "componentType": "FORM_TEXT_INPUT | FORM_SELECT_INPUT | FORM_VIRTUAL_FIELD ｜ FORM_DATA_SELECTOR",
    "model?": "模型字段",
    "uuid?": "",
    "config": [
        ["COMPLETED", "已完成"],
        ["APPROVING", "审批中"],
        ["REJECTED", "已拒绝"],
        ["WITHDRAWN", "已撤回"],
        ["TERMINATED", "已终止"],
        ["UNDONE", "已撤销"],
        ["ARCHIVED", "已归档"],
        ["DECLARE_DEADLINE", "申报截止"],
        ["DECLARING", "申报中"],
        ["REVIEWING", "评审中"],
        ["UNSTART", "未开始"],
        ["PASS", "通过"],
        ["NORMAL", "普通"],
        ["URGENT", "加急"],
        ["EMERGENCY", "紧急"],
        ["NOSCORE", "未评分"],
        ["SCORE", "已评分"],
        ["CHECKING", "待审核"],
        ["CHECK_ERROR", "验证失败"],
        ["APPLYING", "申请中"],
        ["CHECKED", "已审核"],
        ["APPLIED", "已申请"],
        ["ONJOB", "在职"],
        ["DISPOSED", "已办结"],
        ["REPLIED", "已回复"],
        ["APPLYSUCCESS", "申请成功"],
        ["UNPUBLISH", "未发布"],
        ["READ", "已读"],
        ["UNREAD", "未读"],
        ["BACK", "回退"],
        ["WAITREPLY", "待回复"],
        ["PUBLISHING", "公示中"],
        ["NOPASS", "未通过"],
        ["DISPOSING", "处理中"]
    ],
    "extraConfig": [
        ["w-todo", "待办"]
    ]
}
```

### 1、`componentType`

`componentType` 需要识别字段的组件类型

```ts
type ComponentType = "FORM_TEXT_INPUT" | "FORM_SELECT_INPUT" | "FORM_VIRTUAL_FIELD" ｜ "FORM_DATA_SELECTOR";
```

### 2、`model`

`model` 模型编码(`modeField`)，当组件类型不是虚拟字段时必须存在

### 3、`uuid`

`uuid`，当组件类型是虚拟字段的时候必须指定 `uuid`，因为不存在模型编码

### 4、`config`

`config`，一些预设的配置

```js
[
    ["COMPLETED", "已完成"],
    ["APPROVING", "审批中"],
    ["REJECTED", "已拒绝"],
    ["WITHDRAWN", "已撤回"],
    ["TERMINATED", "已终止"],
    ["UNDONE", "已撤销"],
    ["ARCHIVED", "已归档"],
    ["DECLARE_DEADLINE", "申报截止"],
    ["DECLARING", "申报中"],
    ["REVIEWING", "评审中"],
    ["UNSTART", "未开始"],
    ["PASS", "通过"],
    ["NORMAL", "普通"],
    ["URGENT", "加急"],
    ["EMERGENCY", "紧急"],
    ["NOSCORE", "未评分"],
    ["SCORE", "已评分"],
    ["CHECKING", "待审核"],
    ["CHECK_ERROR", "验证失败"],
    ["APPLYING", "申请中"],
    ["CHECKED", "已审核"],
    ["APPLIED", "已申请"],
    ["ONJOB", "在职"],
    ["DISPOSED", "已办结"],
    ["REPLIED", "已回复"],
    ["APPLYSUCCESS", "申请成功"],
    ["UNPUBLISH", "未发布"],
    ["READ", "已读"],
    ["UNREAD", "未读"],
    ["BACK", "回退"],
    ["WAITREPLY", "待回复"],
    ["PUBLISHING", "公示中"],
    ["NOPASS", "未通过"],
    ["DISPOSING", "处理中"]
]
```

- 它将被用作 `map` 输出，所以 `key` 不能重复，否则会被覆盖
- `key` 表示上方的预设(`preset`)，`value` 表示该 `model` 对应字段的数据，例如单行输入是普通的时候，详细会加上普通(NORMAL)徽标
- 需要注意的是，如果是下拉框识别的是选项编码，所以对应的 `value` 也应该是选项编码
- 上述都是预设，本身自开发组件已存在图标

### 5、`extraConfig`

`extraConfig`，额外的配置，这里是指你可以自定义徽标的形式，只需要在任意自开发包中上传对应的 `svg` 即可。当然需要注意下面的规则 👇

- 因为是自定义那么 `key` 就是你的 `svg` 文件的文件名，`value` 依然是对应 `model` 可能取到的值，如果是这个值，显示对应的徽标
- 额外的配置同样遵循 `key` 不重复原则，且不可和 `config` 里面的配置重复，实际上 `extraConfig` 里的配置也可以放入 `config` 中，这样设计只是为了区别原有的配置和自定义的配置
- 在其他自开发包中如果需要上传自己的 `svg` 使用，请在 `custom/index.js` 中添加以下代码

```js
import '@/icons/index';
```

## todo

<l-checkbox color="red" content="还没想好......" />


## 下载

<l-download title="自开发包下载" link="https://share.weiyun.com/56BeVbTj" />
