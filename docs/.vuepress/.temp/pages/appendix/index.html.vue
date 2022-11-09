<template><div><h1 id="组件对应值" tabindex="-1"><a class="header-anchor" href="#组件对应值" aria-hidden="true">#</a> 组件对应值</h1>
<p>FORM_TEXT_INPUT                                     单行输入</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token string">"11"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_TEXTAREA_INPUT                                 多行输入</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token string">"222"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_NUMBER_INPUT                                   数字输入</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token number">333</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_DATEPICK_INPUT                                 日期时间</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token string">"2022-11-02"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_PEOPLE_SELECT                                  人员选择</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"010011000058"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">"邢彦"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">account</span><span class="token operator">:</span> <span class="token string">"010011000058"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_DEPARTMENT_SELECT                              部门选择</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">departmentCode</span><span class="token operator">:</span> <span class="token string">"D_001"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"111111"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">leafNodeFlag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"部门A"</span>
        <span class="token literal-property property">structureCode</span><span class="token operator">:</span> <span class="token string">'111111'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">structureName</span><span class="token operator">:</span> <span class="token string">'部门A'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_PHONE_INPUT                                    手机号码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token string">"13243244323"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_EMAIL_INPUT                                    电子邮箱</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token string">"1534@11.com"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_IDCARD_INPUT                                   证件号</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token string">"210203197503102721"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_RADIO_INPUT                                    单选框</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 数据格式</span>
<span class="token punctuation">[</span><span class="token string">"puZ5Z"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_CHECKBOX_INPUT                                 多选框</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 数据格式</span>
<span class="token punctuation">[</span><span class="token string">"vTP7N"</span><span class="token punctuation">,</span> <span class="token string">"smzh8"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_SELECT_INPUT                                   下拉框</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 数据格式</span>
<span class="token punctuation">[</span><span class="token string">"puZ5Z"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_MONEY_INPUT                                    金额</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token string">"11"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_FILE_UPLOAD                                    附件上传</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">creationDate</span><span class="token operator">:</span> <span class="token string">"2022-11-01 17:12:19"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">creatorName</span><span class="token operator">:</span> <span class="token string">"李佩"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">"logo.jpeg"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">27409</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fileSizeStr</span><span class="token operator">:</span> <span class="token string">"26.8 KB"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fileType</span><span class="token operator">:</span> <span class="token string">"image"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"375331234156384256"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ossObjectName</span><span class="token operator">:</span> <span class="token string">"6119f8c1-8c1a-492a-afb1-0b45cd239871"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tenantId</span><span class="token operator">:</span> <span class="token string">"332938032653008897"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://172.19.11.93:30615/"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_RICH_TEXT                                      富文本</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token string">"&lt;p>1111&lt;/p>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_WIDGET_AREA                                    地区地址</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token punctuation">{</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token literal-property property">area</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">"1505240000"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"库伦旗"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">"1505000000"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"通辽市"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">"1500000000"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"内蒙古自治区"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_WIDGET_LOCATION                                定位
FORM_HYPERLINK_INPUT                                超链接</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token string">"https://www.baidu.com"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_SWITCH_SELECT                                  开关</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token string">"TRUE"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_DOCUMENT_NUMBER                                单据号</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token string">"0001"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_DATA_SELECTOR                                  数据选择</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'32234234234'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王武'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_ASSOCIATION                                    关联表单</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 数据格式</span>
<span class="token keyword">undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_DATA_STATISTICS                                数据统计</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 数据格式</span>
<span class="token string">"0"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_OTHER_TABLE_FIELD                              他表字段</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token string">"王武"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_WIDGET_SON_TABLE                               子表</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">_X_ID</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">uuid</span><span class="token operator">:</span> <span class="token string">'value'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_EVENT_BUTTON                                   表单按钮</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 数据格式</span>
<span class="token keyword">undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_VIRTUAL_FIELD                                  虚拟字段</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>数据格式
<span class="token string">"11"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>FORM_CUSTOM_WIDGET_WRAPPER                          自开发组件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 数据格式</span>
<span class="token keyword">undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


