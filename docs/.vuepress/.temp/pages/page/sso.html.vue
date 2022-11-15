<template><div><!--
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-11-15 11:39:55
 * @LastEditTime: 2022-11-15 14:07:28
-->
<h1 id="自开发模拟单点登录页" tabindex="-1"><a class="header-anchor" href="#自开发模拟单点登录页" aria-hidden="true">#</a> 自开发模拟单点登录页</h1>
<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2>
<ol>
<li>在 <code v-pre>localStorage</code> 中添加用户信息</li>
</ol>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<ol>
<li>一个单点登录页面，根据地址栏上的参数的信息获取对应的</li>
<li>自定义 <code v-pre>api</code>，<code v-pre>header</code>等</li>
<li>指定重定向地址</li>
<li>指定错误发生时跳转地址</li>
<li>地址 <code v-pre>base64</code> 编码</li>
<li>错误时是否弹窗显示错误信息</li>
</ol>
<h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://localhost:9095/sso"</span><span class="token punctuation">,</span>
        <span class="token property">"method"</span><span class="token operator">:</span> <span class="token string">"get"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"params"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"token"</span><span class="token punctuation">,</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"query"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"appId"</span><span class="token punctuation">,</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"fixed"</span><span class="token punctuation">,</span>
            <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"BBeerfFeer"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"token"</span><span class="token punctuation">,</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"query"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"appId"</span><span class="token punctuation">,</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"fixed"</span><span class="token punctuation">,</span>
            <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"BBeerfFeer"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"oriToken"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"response | query"</span><span class="token punctuation">,</span>
        <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">"token"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"redirect"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"base64"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"default | response"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"error"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"base64"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"default | response"</span><span class="token punctuation">,</span>
        <span class="token property">"isPopover"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">"popoverMessage"</span><span class="token operator">:</span> <span class="token string">"default | response"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"theme"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"red"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1、api" tabindex="-1"><a class="header-anchor" href="#_1、api" aria-hidden="true">#</a> 1、<code v-pre>api</code></h3>
<p>获取用户 <code v-pre>token</code> 的接口，它将被 <code v-pre>axios</code> 所调用</p>
<ul>
<li><code v-pre>url</code>，接口地址</li>
<li><code v-pre>method</code>，请求类型</li>
<li>接口的返回类型应该是如下的类型(遵循倚天的 <code v-pre>Response</code>)</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 通过runtimeService中的方法可以获取到这个类型</span>
<span class="token keyword">type</span> <span class="token class-name">UserInfo</span> <span class="token operator">=</span> com<span class="token punctuation">.</span>xdap<span class="token punctuation">.</span>api<span class="token punctuation">.</span>moudle<span class="token punctuation">.</span>user<span class="token punctuation">.</span>vo<span class="token punctuation">.</span>LoginUserVo<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">ResponseInfo</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    userInfo<span class="token operator">:</span> UserInfo<span class="token punctuation">;</span>
    redirectUrl<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    errorUrl<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    oriToken<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Response</span> <span class="token punctuation">{</span>
    code<span class="token operator">:</span> <span class="token string">"ok"</span> <span class="token operator">||</span> <span class="token string">'200'</span><span class="token punctuation">;</span>
    message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    total<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    data<span class="token operator">:</span> ResponseInfo<span class="token punctuation">;</span>
    requestid<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、params" tabindex="-1"><a class="header-anchor" href="#_2、params" aria-hidden="true">#</a> 2、<code v-pre>params</code></h3>
<p>接口的请求参数</p>
<ul>
<li><code v-pre>field</code> 参数名</li>
<li><code v-pre>type</code>
<ul>
<li><code v-pre>query</code>，取地址栏上的参数</li>
<li><code v-pre>fixed</code>，固定值，取一个固定值</li>
</ul>
</li>
<li><code v-pre>value</code>
<ul>
<li>当类型是 <code v-pre>fixed</code> 的时候，写入的固定值</li>
</ul>
</li>
</ul>
<h3 id="_3、headers" tabindex="-1"><a class="header-anchor" href="#_3、headers" aria-hidden="true">#</a> 3、<code v-pre>headers</code></h3>
<p>同上，这里不做解释</p>
<h3 id="_4、oritoken" tabindex="-1"><a class="header-anchor" href="#_4、oritoken" aria-hidden="true">#</a> 4、<code v-pre>oriToken</code></h3>
<p><code v-pre>oriToken</code>，如果有 <code v-pre>oriToken</code> 的话，写入进去
- <code v-pre>type</code>
- <code v-pre>response</code>，返回值的中默认是 <code v-pre>oriToken</code>
- <code v-pre>query</code>，在地址栏上，根据下方的 <code v-pre>prop</code> 获取
- <code v-pre>prop</code> 如果是 <code v-pre>query</code> 的话必填</p>
<h3 id="_5、redirect" tabindex="-1"><a class="header-anchor" href="#_5、redirect" aria-hidden="true">#</a> 5、<code v-pre>redirect</code></h3>
<p>成功后重定向的配置</p>
<ul>
<li><code v-pre>type</code>
<ul>
<li><code v-pre>default</code>，默认的调转至 <code v-pre>app</code> 页面</li>
<li><code v-pre>response</code>，由返回的重定向地址决定，由配置决定是否后端做了地址的 <code v-pre>base64</code> 加密</li>
</ul>
</li>
<li><code v-pre>base64</code>
<ul>
<li>是否 <code v-pre>base64</code> 加密</li>
</ul>
</li>
</ul>
<h3 id="_6、error" tabindex="-1"><a class="header-anchor" href="#_6、error" aria-hidden="true">#</a> 6、<code v-pre>error</code></h3>
<ul>
<li><code v-pre>type</code>
<ul>
<li><code v-pre>default</code>，默认的调转至 <code v-pre>417</code> 页面</li>
<li><code v-pre>response</code>，由返回的重定向地址决定，由配置决定是否后端做了地址的 <code v-pre>base64</code> 加密</li>
</ul>
</li>
<li><code v-pre>base64</code>
<ul>
<li>是否 <code v-pre>base64</code> 加密</li>
</ul>
</li>
<li><code v-pre>isPopover</code>
<ul>
<li>是否弹窗提醒</li>
</ul>
</li>
<li><code v-pre>popoverMessage</code>
<ul>
<li><code v-pre>default</code>，默认的就是 <u>登录失败，请检查接口是否正确！</u></li>
<li><code v-pre>response</code>，取的是 <code v-pre>Response</code> 里面的 <code v-pre>message</code></li>
</ul>
</li>
</ul>
<h3 id="_7、theme" tabindex="-1"><a class="header-anchor" href="#_7、theme" aria-hidden="true">#</a> 7、<code v-pre>theme</code></h3>
<p><code v-pre>theme</code> <code v-pre>loading</code> 的主题</p>
<ul>
<li><code v-pre>color</code> 颜色</li>
</ul>
<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2>
<l-download title="自开发包下载" link="https://share.weiyun.com/yBzwEtcY" /><h2 id="压缩-zip" tabindex="-1"><a class="header-anchor" href="#压缩-zip" aria-hidden="true">#</a> 压缩 <code v-pre>zip</code></h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i archiver <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-10-08 14:50:18
 * @LastEditTime: 2022-10-17 16:30:36
 */</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> archiver <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'archiver'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: zip文件夹
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">sourceFolder</span> 待压缩文件夹
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">distZip</span> 压缩后的zip文件
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">}</span></span> <span class="token parameter">cb</span> 回调函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> <span class="token parameter">subdir</span> 是否需要包一层
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">zipFolder</span><span class="token punctuation">(</span><span class="token parameter">sourceFolder<span class="token punctuation">,</span> distZip<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> subdir</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> output <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span>distZip<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> archive <span class="token operator">=</span> <span class="token function">archiver</span><span class="token punctuation">(</span><span class="token string">'zip'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">zlib</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    output<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'close'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">'zip folder success!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    archive<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    archive<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">;</span>
    archive<span class="token punctuation">.</span><span class="token function">directory</span><span class="token punctuation">(</span>sourceFolder<span class="token punctuation">,</span> subdir <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    archive<span class="token punctuation">.</span><span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">startZip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> sourceFolder <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'build'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> distZip <span class="token operator">=</span> <span class="token string">'sso.zip'</span><span class="token punctuation">;</span>

    <span class="token function">zipFolder</span><span class="token punctuation">(</span>sourceFolder<span class="token punctuation">,</span> distZip<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> msg</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">startZip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


