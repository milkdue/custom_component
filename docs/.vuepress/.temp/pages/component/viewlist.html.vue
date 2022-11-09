<template><div><!--
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-11-08 14:09:48
 * @LastEditTime: 2022-11-09 17:11:55
-->
<h1 id="自开发数据选择通用组件" tabindex="-1"><a class="header-anchor" href="#自开发数据选择通用组件" aria-hidden="true">#</a> 自开发数据选择通用组件</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<l-checkbox color="green" :checked="true" content="1. 一个类似于数据选择组件的模拟组件" /><l-checkbox color="green" :checked="true" content="2. 支持接口配置（返回json有所要求）" /><l-checkbox color="green" :checked="true" content="3. 支持主、子表单搜索条件带入" /><l-checkbox color="green" :checked="true" content="4. 支持选中结果带出主、子表单" /><l-checkbox color="green" :checked="true" content="5. 支持前、后端分页" /><l-checkbox color="green" :checked="true" content="6. 支持表格内简单编辑" /><l-checkbox color="green" :checked="true" content="7. 支持简单的插槽" /><h2 id="预览效果" tabindex="-1"><a class="header-anchor" href="#预览效果" aria-hidden="true">#</a> 预览效果</h2>
<p><img src="/component/1.jpg" alt="image"></p>
<h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2>
<h3 id="总体配置" tabindex="-1"><a class="header-anchor" href="#总体配置" aria-hidden="true">#</a> 总体配置</h3>
<p>该配置会被放入自开发组件的标题说明中</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"seqType"</span><span class="token operator">:</span> <span class="token string">"checkbox"</span><span class="token punctuation">,</span>
    <span class="token property">"mode"</span><span class="token operator">:</span> <span class="token string">"main | son"</span><span class="token punctuation">,</span>
    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"商品1"</span><span class="token punctuation">,</span>
    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"includeEdit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://www.fastmock.site/mock/da0602cc6250419cf12afcd90b70751e/menu/api/menu"</span><span class="token punctuation">,</span>
        <span class="token property">"method"</span><span class="token operator">:</span> <span class="token string">"get"</span><span class="token punctuation">,</span>
        <span class="token property">"disableSuccessMsg"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"params"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"filed"</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"value"</span><span class="token punctuation">,</span>
            <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"【字段名称】"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"componentType"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
            <span class="token property">"sonTable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">"filed"</span><span class="token operator">:</span> <span class="token string">"type"</span><span class="token punctuation">,</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"model"</span><span class="token punctuation">,</span>
            <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">""</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"searchList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"component"</span><span class="token operator">:</span> <span class="token string">"SearchInput"</span><span class="token punctuation">,</span>
            <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"商品ID"</span><span class="token punctuation">,</span>
            <span class="token property">"disable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">"searchKey"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
            <span class="token property">"searchValue"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"extraConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"component"</span><span class="token operator">:</span> <span class="token string">"SearchInput"</span><span class="token punctuation">,</span>
            <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"商品名称"</span><span class="token punctuation">,</span>
            <span class="token property">"disable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">"searchKey"</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span>
            <span class="token property">"searchValue"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"extraConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"component"</span><span class="token operator">:</span> <span class="token string">"SearchSelect"</span><span class="token punctuation">,</span>
            <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"是否出库"</span><span class="token punctuation">,</span>
            <span class="token property">"disable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">"searchKey"</span><span class="token operator">:</span> <span class="token string">"chu"</span><span class="token punctuation">,</span>
            <span class="token property">"searchValue"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"extraConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"multiple"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token property">"api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://www.fastmock.site/mock/da0602cc6250419cf12afcd90b70751e/menu/api/menu"</span><span class="token punctuation">,</span>
                    <span class="token property">"method"</span><span class="token operator">:</span> <span class="token string">"get"</span><span class="token punctuation">,</span>
                    <span class="token property">"disableSuccessMsg"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">"params"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"selectOptions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"111"</span><span class="token punctuation">,</span>
                        <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"是"</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"222"</span><span class="token punctuation">,</span>
                        <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"否"</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"headerConfig"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
            <span class="token property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
            <span class="token property">"visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">"attribute"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"供应商银行户主名"</span><span class="token punctuation">,</span>
            <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">"supplierName"</span><span class="token punctuation">,</span>
            <span class="token property">"readOnly"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">"required"</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"paginationType"</span><span class="token operator">:</span> <span class="token string">"front-end ｜ back-end"</span><span class="token punctuation">,</span>
    <span class="token property">"output(1)"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"mode"</span><span class="token operator">:</span> <span class="token string">"push"</span><span class="token punctuation">,</span>
        <span class="token property">"sonTable"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"tableModelCode"</span><span class="token operator">:</span> <span class="token string">""</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"config"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
                <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">"supplierName"</span><span class="token punctuation">,</span>
                <span class="token property">"model"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"child"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">""</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"output(2)"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"mode"</span><span class="token operator">:</span> <span class="token string">"full"</span><span class="token punctuation">,</span>
        <span class="token property">"sonTable"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"tableModelCode"</span><span class="token operator">:</span> <span class="token string">""</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"config"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
                <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">"supplierName"</span><span class="token punctuation">,</span>
                <span class="token property">"model"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"child"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">""</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"output(3)"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"mode"</span><span class="token operator">:</span> <span class="token string">"part"</span><span class="token punctuation">,</span>
        <span class="token property">"config"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
                <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">"supplierName"</span><span class="token punctuation">,</span>
                <span class="token property">"to"</span><span class="token operator">:</span> <span class="token string">"main"</span><span class="token punctuation">,</span>
                <span class="token property">"model"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"child"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">""</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
                <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">"supplierName"</span><span class="token punctuation">,</span>
                <span class="token property">"to"</span><span class="token operator">:</span> <span class="token string">"son"</span><span class="token punctuation">,</span>
                <span class="token property">"tableModelCode"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"model"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"child"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">""</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"config"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
                        <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">"supplierName"</span><span class="token punctuation">,</span>
                        <span class="token property">"model"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                        <span class="token property">"child"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">""</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"output(4)"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"mode"</span><span class="token operator">:</span> <span class="token string">"assign"</span><span class="token punctuation">,</span>
        <span class="token property">"config"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
                <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">"supplierName"</span><span class="token punctuation">,</span>
                <span class="token property">"model"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"child"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">""</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
                <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">"supplierName"</span><span class="token punctuation">,</span>
                <span class="token property">"model"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"child"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">""</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1、seqtype" tabindex="-1"><a class="header-anchor" href="#_1、seqtype" aria-hidden="true">#</a> 1、<code v-pre>seqType</code></h3>
<p>显示的表格类型，可选值<code v-pre>radio</code>, <code v-pre>checkbox</code>, <code v-pre>seq</code>, <code v-pre>none</code>，类型为字符串</p>
<table>
<thead>
<tr>
<th style="text-align:center">seqType</th>
<th style="text-align:center">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">radio</td>
<td style="text-align:center">单选</td>
</tr>
<tr>
<td style="text-align:center">checkbox</td>
<td style="text-align:center">多选</td>
</tr>
<tr>
<td style="text-align:center">seq</td>
<td style="text-align:center">序号</td>
</tr>
<tr>
<td style="text-align:center">none</td>
<td style="text-align:center">无</td>
</tr>
</tbody>
</table>
<div class="tip">
<p>该组件可以用在<u>子表或主表</u>中，如果在子表中，<code v-pre>seqType</code> 必须是 <code v-pre>radio</code>，如果是主表上，<code v-pre>seqType</code> 可以是 <code v-pre>checkbox</code> 和 <code v-pre>radio</code>。</p>
<p>对于其他两种类型 <code v-pre>seq</code>、<code v-pre>none</code> 暂无用处，或者你需要展示其他东西的时候会有用处</p>
</div>
<h3 id="_2、-mode" tabindex="-1"><a class="header-anchor" href="#_2、-mode" aria-hidden="true">#</a> 2、 <code v-pre>mode</code></h3>
<p>模式，表示该组件用在哪里？可选值 <code v-pre>main</code>、<code v-pre>son</code>，类型为字符串</p>
<emp>组件会自动校验当前组件所处位置，如和配置不一致，后续逻辑将不再执行</emp><table>
<thead>
<tr>
<th style="text-align:center">mode</th>
<th style="text-align:center">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">main</td>
<td style="text-align:center">主表</td>
</tr>
<tr>
<td style="text-align:center">son</td>
<td style="text-align:center">子表</td>
</tr>
</tbody>
</table>
<h3 id="_3、title" tabindex="-1"><a class="header-anchor" href="#_3、title" aria-hidden="true">#</a> 3、<code v-pre>title</code></h3>
<p>标题，控制弹出 <code v-pre>modal</code> 的标题，遵循 <code v-pre>x-modal</code> 的配置</p>
<h3 id="_4、width" tabindex="-1"><a class="header-anchor" href="#_4、width" aria-hidden="true">#</a> 4、<code v-pre>width</code></h3>
<p>宽度，控制弹出 <code v-pre>modal</code> 的宽度，遵循 <code v-pre>x-modal</code> 的配置</p>
<table>
<thead>
<tr>
<th style="text-align:center">width</th>
<th style="text-align:center">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">small</td>
<td style="text-align:center">小</td>
</tr>
<tr>
<td style="text-align:center">middle</td>
<td style="text-align:center">中</td>
</tr>
<tr>
<td style="text-align:center">large</td>
<td style="text-align:center">大</td>
</tr>
<tr>
<td style="text-align:center">1200</td>
<td style="text-align:center">随意正数</td>
</tr>
</tbody>
</table>
<h3 id="_5、includeedit" tabindex="-1"><a class="header-anchor" href="#_5、includeedit" aria-hidden="true">#</a> 5、<code v-pre>includeEdit</code></h3>
<p>表格是否有编辑的字段，<wavy>布尔类型</wavy></p>
<div class="tip warning">
<p><code v-pre>includeEdit</code> 为 <code v-pre>true</code> 时，表格取消移入高亮和单击行默认选中，为 <code v-pre>false</code> 时，移入高亮且单击行默认选中</p>
<p><code v-pre>includeEdit</code> 不会判断你后续的列是否有编辑的列，如果你写了是，默认取消移入高亮和单击行默认选中，即使你没有编辑的列。当然你也可以通过它来取消单击行默认选中的功能</p>
</div>
<h3 id="_6、api" tabindex="-1"><a class="header-anchor" href="#_6、api" aria-hidden="true">#</a> 6、<code v-pre>api</code></h3>
<p><code v-pre>api</code>，表格加载数据的接口，自定义接口地址和请求方式，由 <code v-pre>this.$request</code> 发送该请求，数据类型如下：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Api</span> <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    method<span class="token operator">:</span> <span class="token string">"get"</span> <span class="token operator">|</span> <span class="token string">"post"</span> <span class="token operator">|</span> <span class="token string">"..."</span><span class="token punctuation">;</span>
    disableSuccessMsg<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于返回类型，基本遵循倚天的 <code v-pre>com.definesys.mpaas.common.http.Response</code> 类型，<del>当然你可以不遵循这个规范</del>，但下面的必须属性必须遵循，可选属性可忽略</p>
<psw>最好还是遵循</psw><div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Response<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
    code<span class="token operator">:</span> <span class="token string">"ok"</span> <span class="token operator">||</span> <span class="token string">'200'</span><span class="token punctuation">;</span>
    message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    total<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    data<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    table<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    requestid<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、params" tabindex="-1"><a class="header-anchor" href="#_7、params" aria-hidden="true">#</a> 7、<code v-pre>params</code></h3>
<p><code v-pre>params</code>，需要带入到搜索条件的参数，它会被用到上述 <code v-pre>api</code> 的请求参数中，数据类型如下：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Param</span> <span class="token punctuation">{</span>
    componentType<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span> <span class="token operator">|</span> <span class="token string">"FORM_NUMBER_INPUT"</span> <span class="token operator">|</span> <span class="token string">"..."</span><span class="token punctuation">;</span>
    sonTable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    filed<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    type<span class="token operator">:</span> <span class="token string">"model"</span> <span class="token operator">|</span> <span class="token string">"value"</span><span class="token punctuation">;</span>
    value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Params</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>Param<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="tip warning">
<p><code v-pre>componentType</code>，目前只适配了 <code v-pre>FORM_TEXT_INPUT</code>，其他的 <code v-pre>TODO</code>，表示这个参数需要从哪种类型的组件中取值</p>
<p><code v-pre>sonTable</code>，表示是否是从子表中取的值，如果该组件用在主表，即 <code v-pre>mode = main</code>，<code v-pre>sonTable</code> 一定是 <code v-pre>false</code>，如果你写 <code v-pre>true</code> 也会被忽略掉（当然它也不会带入到搜索条件中），如果在组件用在子表，即 <code v-pre>mode = son</code>，这个参数不做限制，你可以取主表里面的值带入，也可以取子表里面的值带入</p>
<p><code v-pre>filed</code> 字段标识，和下方的 <code v-pre>searchList</code> 中的 <code v-pre>searchKey</code> 一一对应</p>
<p><code v-pre>type</code> 文字类型，<code v-pre>model</code> 表示模型字段，根据模型字段来获取带入的值，<code v-pre>value</code> 表示固定值，可以是固定值，当然也可以使用平台的表单字段（组件配置中的标题说明，可以带入表单字段，公示规则和链接，这些值都是可以的）  <del>推荐统一使用model</del></p>
<p><code v-pre>value</code>，如果 <code v-pre>type</code> 是 <code v-pre>model</code> 那么就是模型编码(带表名(modelField))，如果是 <code v-pre>value</code>，填入固定值即可</p>
</div>
<h3 id="_8、searchlist" tabindex="-1"><a class="header-anchor" href="#_8、searchlist" aria-hidden="true">#</a> 8、<code v-pre>searchList</code></h3>
<p><code v-pre>searchList</code>，<code v-pre>api</code> 发送请求时携带的参数，如果和 <code v-pre>params</code> 里携带的值对应上了(对应关系是 <code v-pre>field === searchKey</code>)，就会被带入进去，数据类型如下：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ExtraConfig</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SearchList</span> <span class="token punctuation">{</span>
    component<span class="token operator">:</span> <span class="token string">"SearchInput"</span> <span class="token operator">|</span> <span class="token string">"SearchSelect"</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    disable<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    searchKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    searchValue<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    extraConfig<span class="token operator">:</span> ExtraConfig
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>componet</code> 目前适配了 单行输入（<code v-pre>SearchInput</code>）和下拉框 (<code v-pre>SearchSelect</code>)，对于下拉框，<code v-pre>searchKey</code> 和 <code v-pre>field</code> 必须对应(可以不带入值)，因为需要这个对应关系根据 <code v-pre>model</code> 找到它的<wavy>下拉选项</wavy></li>
<li><code v-pre>label</code> 是搜索条件展示的说明文字</li>
<li><code v-pre>disable</code> 是该搜索条件是否是禁填的，对于带入的值还是会带入，禁止之后，即使点击重置按钮，依然不会清空</li>
<li><code v-pre>searchKey</code> 是和 <code v-pre>field</code> 对应的，当然可以不需要对应，可以是用户自己填写的</li>
<li><code v-pre>searchValue</code> 如果不是带入的，可以规定默认值，如果是带入的还是指定了该值则该值无效</li>
<li><code v-pre>extraConfig</code> 额外的配置，目前只有组件是下拉框时需要指定，当然也可以不指定(下面以下拉框配置解释)
<ul>
<li><code v-pre>multiple</code> 是否多选，如果对应了 <code v-pre>field</code> 那么会根据带入的组件的多选还是单选决定，人为指定无效</li>
<li><code v-pre>api</code> 如果和 <code v-pre>field</code> 不对应，可以使用 <code v-pre>api</code> 动态获取，当然这一点暂时没做 (<u>TODO项</u>)</li>
<li><code v-pre>selectOptions</code> 如果对应了 <code v-pre>field</code> 那么会根据带入的组件的选项，人为指定无效</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token string-property property">"extraConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"multiple"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">"api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"url"</span><span class="token operator">:</span> <span class="token string">"https://www.fastmock.site/mock/da0602cc6250419cf12afcd90b70751e/menu/api/menu"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"method"</span><span class="token operator">:</span> <span class="token string">"get"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"disableSuccessMsg"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string-property property">"params"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"selectOptions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"111"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"label"</span><span class="token operator">:</span> <span class="token string">"是"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"222"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"label"</span><span class="token operator">:</span> <span class="token string">"否"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、headerconfig" tabindex="-1"><a class="header-anchor" href="#_9、headerconfig" aria-hidden="true">#</a> 9、<code v-pre>headerConfig</code></h3>
<p><code v-pre>headerConfig</code> 表格的列表字段配置，数据类型如下：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Attribute</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">HeaderConfigItem</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span> <span class="token operator">|</span> <span class="token string">"..."</span><span class="token punctuation">;</span>
    align<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">"center"</span> <span class="token operator">|</span> <span class="token string">"left"</span> <span class="token operator">|</span> <span class="token string">"right"</span><span class="token punctuation">;</span>
    visible<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    attribute<span class="token operator">?</span><span class="token operator">:</span> Attribute<span class="token punctuation">;</span>
    label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    showOverflowTooltip<span class="token operator">?</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    customSlot<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    slotTemplate<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    readOnly<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    required<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">HeaderConfig</span> <span class="token operator">=</span> HeaderConfigItem<span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>type</code> 组件类型，暂时只做了 <code v-pre>FORM_TEXT_INPUT</code>，后续将新增其他类型(🐦)</li>
<li><code v-pre>align</code> 字段的位置，可选</li>
<li><code v-pre>visible</code> 字段是否可见</li>
<li><code v-pre>attribute</code> 其他属性，还没想好怎么用，预留，可选</li>
<li><code v-pre>label</code> 表头说明文字</li>
<li><code v-pre>prop</code> 接口返回的字段对应的属性名</li>
<li><code v-pre>showOverflowTooltip</code> 是否在字数过多时显示...</li>
<li><code v-pre>customSlot</code> 自定义插槽名，可选</li>
<li><code v-pre>slotTemplate</code> 插槽模版，可选</li>
<li><code v-pre>readOnly</code> 是否只读，暂时无用，可选</li>
<li><code v-pre>required</code> 是否必填，暂时无用，可选</li>
</ul>
<h3 id="_10、paginationtype" tabindex="-1"><a class="header-anchor" href="#_10、paginationtype" aria-hidden="true">#</a> 10、<code v-pre>paginationType</code></h3>
<p><code v-pre>paginationType</code>，前端分页还是后端分页</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">PaginationType</span> <span class="token operator">=</span> <span class="token string">"front-end"</span> ｜ <span class="token string">"back-end"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11、output" tabindex="-1"><a class="header-anchor" href="#_11、output" aria-hidden="true">#</a> 11、<code v-pre>output</code></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Child</span> <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    child<span class="token operator">?</span><span class="token operator">:</span> Child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">ConfigItem</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span> <span class="token operator">|</span> <span class="token string">"..."</span><span class="token punctuation">;</span>
    prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    to<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">"main"</span> <span class="token operator">|</span> <span class="token string">"son"</span><span class="token punctuation">;</span>
    model<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    child<span class="token operator">?</span><span class="token operator">:</span> Child<span class="token punctuation">;</span>
    config<span class="token operator">?</span><span class="token operator">:</span> ConfigItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Output</span> <span class="token punctuation">{</span>
    mode<span class="token operator">:</span> <span class="token string">"push"</span> <span class="token operator">||</span> <span class="token string">"full"</span> <span class="token operator">||</span> <span class="token string">"part"</span> <span class="token operator">||</span> <span class="token string">"assign"</span><span class="token punctuation">;</span>
    sonTable<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        tableModelCode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    config<span class="token operator">:</span> ConfigItem<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="tip bolt">
<p>关于带出的描述 <code v-pre>mode</code> 属性</p>
<p>默认带出的模式是下面这样设计的</p>
<p>如果是多选，那么带出的模式只能是带出到子表中去（<code v-pre>mode是push、full</code>），如果是单选：组件在主表上使用的话，某些属性可以带入到子表（这个属性必须是数组形式的）和主表上(<code v-pre>mode是part</code>),或者全部代入到主表中去（<code v-pre>mode是assign</code>），如果组件是在子表中使用，那么只能带入到子表的属性上去，不可代入到主表上去(<code v-pre>mode是assign</code>)</p>
</div>
<ul>
<li><code v-pre>mode</code>，模式，带出的模式
<ul>
<li><code v-pre>push</code>，增量带出，不会影响到之前的子表数据</li>
<li><code v-pre>full</code>，全量带出，影响之前的子表数据，会被覆盖</li>
<li><code v-pre>part</code>，部分带出，设计是不影响子表数据，一部分带入主表，一部分带入子表(还没做，🐦了)</li>
<li><code v-pre>assign</code>，仅赋值，被带入主表中或子表中</li>
</ul>
</li>
<li><code v-pre>sonTable</code>
<ul>
<li><code v-pre>tableModelCode</code>，如果需要带入到子表中，提供子表的表名(数据模型的子表编码值)</li>
</ul>
</li>
<li><code v-pre>config</code>
<ul>
<li><code v-pre>type</code>，带出的组件类型，目前只是 <code v-pre>&quot;FORM_TEXT_INPUT&quot;</code></li>
<li><code v-pre>prop</code>，对应数据的 <code v-pre>prop</code></li>
<li><code v-pre>to</code>，带出到子表还是主表</li>
<li><code v-pre>model</code>，带出到哪个字段的模型编码(<code v-pre>modelField</code>)</li>
<li><code v-pre>child</code>
<ul>
<li>属性可能是对象，要带出的是它里面的属性</li>
<li><code v-pre>prop</code>，属性字段名</li>
<li><code v-pre>child</code> 同理</li>
</ul>
</li>
<li><code v-pre>config</code>，如果是部分赋值，那么需要提供它下面的属性和子表的对应关系(同样，🐦了)</li>
</ul>
</li>
</ul>
<h2 id="自定义简单插槽" tabindex="-1"><a class="header-anchor" href="#自定义简单插槽" aria-hidden="true">#</a> 自定义简单插槽</h2>
<p>举个🌰(完整配置)</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">"seqType"</span><span class="token operator">:</span> <span class="token string">"checkbox"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"mode"</span><span class="token operator">:</span> <span class="token string">"main"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"项目列表"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"width"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token string-property property">"includeEdit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"url"</span><span class="token operator">:</span> <span class="token string">"http://172.19.11.93:30614/project/all"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"method"</span><span class="token operator">:</span> <span class="token string">"get"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"disableSuccessMsg"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"params"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"filed"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"value"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"14923"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"componentType"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"sonTable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"filed"</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"model"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"production.pname"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"componentType"</span><span class="token operator">:</span> <span class="token string">"FORM_SELECT_INPUT"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"sonTable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"filed"</span><span class="token operator">:</span> <span class="token string">"chu"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"model"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"production.chu"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"searchList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"component"</span><span class="token operator">:</span> <span class="token string">"SearchInput"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"label"</span><span class="token operator">:</span> <span class="token string">"商品ID"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"disable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token string-property property">"searchKey"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"searchValue"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token string-property property">"extraConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"component"</span><span class="token operator">:</span> <span class="token string">"SearchInput"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"label"</span><span class="token operator">:</span> <span class="token string">"商品名称"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"disable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"searchKey"</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"searchValue"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token string-property property">"extraConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"component"</span><span class="token operator">:</span> <span class="token string">"SearchSelect"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"label"</span><span class="token operator">:</span> <span class="token string">"是否出库"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"disable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"searchKey"</span><span class="token operator">:</span> <span class="token string">"chu"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"searchValue"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token string-property property">"extraConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">"multiple"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token string-property property">"selectOptions"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"headerConfig"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token string-property property">"editable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"label"</span><span class="token operator">:</span> <span class="token string">"项目编码"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"prop"</span><span class="token operator">:</span> <span class="token string">"projectCode"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"readOnly"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"required"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"showOverflowTooltip"</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token string-property property">"editable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"label"</span><span class="token operator">:</span> <span class="token string">"项目名称"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"prop"</span><span class="token operator">:</span> <span class="token string">"projectName"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"readOnly"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"required"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"showOverflowTooltip"</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token string-property property">"editable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"label"</span><span class="token operator">:</span> <span class="token string">"责任人"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"prop"</span><span class="token operator">:</span> <span class="token string">"responsiblePerson"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"readOnly"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"required"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"showOverflowTooltip"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token string-property property">"customSlot"</span><span class="token operator">:</span> <span class="token string">"person"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"slotTemplate"</span><span class="token operator">:</span> <span class="token string">"&lt;x-person-tag :personName={row.responsiblePerson.username} :avatarUrl={row.responsiblePerson.avatarUrl}>&lt;/x-person-tag>"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token string-property property">"editable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"label"</span><span class="token operator">:</span> <span class="token string">"项目类型"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"prop"</span><span class="token operator">:</span> <span class="token string">"projectType"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"readOnly"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"required"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"showOverflowTooltip"</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token string-property property">"editable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"label"</span><span class="token operator">:</span> <span class="token string">"项目开始时间"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"prop"</span><span class="token operator">:</span> <span class="token string">"projectStartTime"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"readOnly"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"required"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"showOverflowTooltip"</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token string-property property">"editable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"label"</span><span class="token operator">:</span> <span class="token string">"项目结束时间"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"prop"</span><span class="token operator">:</span> <span class="token string">"projectEndTime"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"readOnly"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"required"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"showOverflowTooltip"</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token string-property property">"editable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"label"</span><span class="token operator">:</span> <span class="token string">"测试输入"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"prop"</span><span class="token operator">:</span> <span class="token string">"finput"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"readOnly"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"required"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">"customSlot"</span><span class="token operator">:</span> <span class="token string">"finput1"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"slotTemplate"</span><span class="token operator">:</span> <span class="token string">"&lt;div class={form-widget form-text-input}> &lt;div class={widget-item}>&lt;div class={x-proxy-form-item}>&lt;div class={el-form-item}>&lt;div class={el-form-item__content}>&lt;el-input v-model={row[column.property]} placeholder={请输入内容}>&lt;/el-input>&lt;/div>&lt;/div>&lt;/div>&lt;/div>&lt;/div>"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"paginationType"</span><span class="token operator">:</span> <span class="token string">"front-end"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"output"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"mode"</span><span class="token operator">:</span> <span class="token string">"push"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"sonTable"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">"tableModelCode"</span><span class="token operator">:</span> <span class="token string">"pro_info"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">"config"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"prop"</span><span class="token operator">:</span> <span class="token string">"projectName"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"model"</span><span class="token operator">:</span> <span class="token string">"pro_info.person_id1"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"prop"</span><span class="token operator">:</span> <span class="token string">"finput"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"model"</span><span class="token operator">:</span> <span class="token string">"pro_info.infomation_1"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部分配置</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
    <span class="token property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
    <span class="token property">"visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"测试输入"</span><span class="token punctuation">,</span>
    <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">"finput"</span><span class="token punctuation">,</span>
    <span class="token property">"readOnly"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"required"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"customSlot"</span><span class="token operator">:</span> <span class="token string">"finput1"</span><span class="token punctuation">,</span>
    <span class="token property">"slotTemplate"</span><span class="token operator">:</span> <span class="token string">"&lt;x-person-tag :personName={row.responsiblePerson.username} :avatarUrl={row.responsiblePerson.avatarUrl}>&lt;/x-person-tag>"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>customSlot</code> 插槽名</li>
<li><code v-pre>slotTemplate</code> 插槽模版(可以使用<code v-pre>xui</code>、<code v-pre>element-ui</code>)
<ul>
<li>插槽是作用域插槽</li>
<li>默认暴露4个属性
<ul>
<li><code v-pre>row</code> 这行数据的数据值</li>
<li><code v-pre>index</code> 这行数据的索引</li>
<li><code v-pre>column</code> 这列的配置，包括以下属性
<ul>
<li><code v-pre>property</code>，就是 <code v-pre>prop</code></li>
<li><code v-pre>label</code> 表头说明</li>
<li><code v-pre>realWidth</code> 真实宽度</li>
</ul>
</li>
<li><code v-pre>colIndex</code> 列索引</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-person-tag</span>
    <span class="token attr-name">:personName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{row.responsiblePerson.username}</span>
    <span class="token attr-name">:avatarUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{row.responsiblePerson.avatarUrl}</span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-person-tag</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="tip warning">
<p>注意，组件的 <code v-pre>props</code>，请用 <code v-pre>{}</code> 大括号括起来，例如上面的一段 <code v-pre>html</code></p>
</div>
<h2 id="表格的简单编辑" tabindex="-1"><a class="header-anchor" href="#表格的简单编辑" aria-hidden="true">#</a> 表格的简单编辑</h2>
<p>表格的简单编辑依赖于上述的简单插槽，具体配置如下</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"FORM_TEXT_INPUT"</span><span class="token punctuation">,</span>
    <span class="token property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
    <span class="token property">"visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"editable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"测试输入"</span><span class="token punctuation">,</span>
    <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">"finput"</span><span class="token punctuation">,</span>
    <span class="token property">"readOnly"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"required"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"customSlot"</span><span class="token operator">:</span> <span class="token string">"finput1"</span><span class="token punctuation">,</span>
    <span class="token property">"slotTemplate"</span><span class="token operator">:</span> <span class="token string">"&lt;div class={form-widget form-text-input}> &lt;div class={widget-item}>&lt;div class={x-proxy-form-item}>&lt;div class={el-form-item}>&lt;div class={el-form-item__content}>&lt;el-input v-model={row[column.property]} placeholder={请输入内容}>&lt;/el-input>&lt;/div>&lt;/div>&lt;/div>&lt;/div>&lt;/div>"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{form-widget</span> <span class="token attr-name">form-text-input}</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{widget-item}</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{x-proxy-form-item}</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{el-form-item}</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{el-form-item__content}</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{row[column.property]}</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{请输入内容}</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下</p>
<p><img src="/component/2.jpg" alt="image"></p>
<h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2>
<p>因为是需要将配置写入标题说明中，所以需要将 <code v-pre>json</code> 合并行</p>
<p><code v-pre>vscode</code> 合并行: 查看 -&gt; 命令面板 -&gt; 合并行(join line)</p>
<p>配置书写的位置如下图：</p>
<p><img src="/component/3.jpeg" alt="image"></p>
<h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> todo</h2>
<l-checkbox color="red" content="带入参数增加其他类型组件，详细见附录" /><l-checkbox color="red" content="serachList增加更多类型组件，例如：SearchPersonSelect等" /><l-checkbox color="red" content="允许勾选自定义方法，如何增加配置" /><l-checkbox color="red" content="插槽模版增加自定义逻辑..." /><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2>
<l-download title="自开发包下载" link="https://share.weiyun.com/dAB7ijHB" /></div></template>


