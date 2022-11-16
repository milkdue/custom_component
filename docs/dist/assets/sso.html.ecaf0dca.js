import{_ as a,r as e,o as t,c as p,b as o,d as c,a as n}from"./app.2cb19b59.js";const i={},l=n(`<h1 id="自开发模拟单点登录页" tabindex="-1"><a class="header-anchor" href="#自开发模拟单点登录页" aria-hidden="true">#</a> 自开发模拟单点登录页</h1><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><ol><li>在 <code>localStorage</code> 中添加用户信息</li></ol><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ol><li>一个单点登录页面</li><li>自定义 <code>api</code></li><li>指定重定向地址</li><li>指定错误发生时跳转地址</li><li>错误时弹窗显示错误信息</li></ol><h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:9095/sso&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;oriTokenType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;response | query&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;oriTokenProp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;token&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default | response&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default | response&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1、url" tabindex="-1"><a class="header-anchor" href="#_1、url" aria-hidden="true">#</a> 1、<code>url</code></h3><p>获取用户 <code>token</code> 的接口，它将被 <code>axios</code> 所调用</p><ul><li>接口的返回类型应该是如下的类型(遵循倚天的 <code>Response</code>)</li><li>接口的参数为地址栏上的所有信息</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 通过runtimeService中的方法可以获取到这个类型</span>
<span class="token keyword">type</span> <span class="token class-name">UserInfo</span> <span class="token operator">=</span> com<span class="token punctuation">.</span>xdap<span class="token punctuation">.</span>api<span class="token punctuation">.</span>moudle<span class="token punctuation">.</span>user<span class="token punctuation">.</span>vo<span class="token punctuation">.</span>LoginUserVo<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">ResponseInfo</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    userInfo<span class="token operator">:</span> UserInfo<span class="token punctuation">;</span>
    redirectUrl<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    errorUrl<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    oriToken<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Response</span> <span class="token punctuation">{</span>
    code<span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span> <span class="token operator">||</span> <span class="token string">&#39;200&#39;</span><span class="token punctuation">;</span>
    message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    total<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    data<span class="token operator">:</span> ResponseInfo<span class="token punctuation">;</span>
    requestid<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、method" tabindex="-1"><a class="header-anchor" href="#_2、method" aria-hidden="true">#</a> 2、<code>method</code></h3><p>接口的请求类型</p><h3 id="_3、oritokentype" tabindex="-1"><a class="header-anchor" href="#_3、oritokentype" aria-hidden="true">#</a> 3、<code>oriTokenType</code></h3><p>指定 <code>oriToken</code> 的值</p><ul><li><code>response</code>，由后台返回</li><li><code>query</code>，从地址栏上取到</li></ul><h3 id="_4、oritokenprop" tabindex="-1"><a class="header-anchor" href="#_4、oritokenprop" aria-hidden="true">#</a> 4、<code>oriTokenProp</code></h3><p><code>oriTokenProp</code>，如果 <code>oriTokenType</code> 是 <code>query</code> 的话，指定取哪一个值</p><h3 id="_5、redirect" tabindex="-1"><a class="header-anchor" href="#_5、redirect" aria-hidden="true">#</a> 5、<code>redirect</code></h3><p>成功后重定向的配置</p><ul><li><code>default</code>，默认的调转至 <code>app</code> 页面</li><li><code>response</code>，由返回的重定向地址决定，返回的地址必须使用 <code>base64</code> 加密</li></ul><h3 id="_6、error" tabindex="-1"><a class="header-anchor" href="#_6、error" aria-hidden="true">#</a> 6、<code>error</code></h3><p>同上</p><h3 id="_7、color" tabindex="-1"><a class="header-anchor" href="#_7、color" aria-hidden="true">#</a> 7、<code>color</code></h3><p><code>color</code> <code>loading</code> 的颜色</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><ol><li>配置书写的位置在前端自定义环境变量中，但要注意使用转义字符</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">{</span>\\&quot;url\\&quot;<span class="token operator">:</span>\\&quot;http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">172.19</span><span class="token number">.11</span><span class="token number">.93</span><span class="token operator">:</span><span class="token number">30614</span><span class="token operator">/</span>test<span class="token operator">/</span>user\\&quot;<span class="token punctuation">,</span>\\&quot;method\\&quot;<span class="token operator">:</span>\\&quot;get\\&quot;<span class="token punctuation">,</span>\\&quot;oriTokenType\\&quot;<span class="token operator">:</span>\\&quot;query\\&quot;<span class="token punctuation">,</span>\\&quot;oriTokenProp\\&quot;<span class="token operator">:</span>\\&quot;token\\&quot;<span class="token punctuation">,</span>\\&quot;redirect\\&quot;<span class="token operator">:</span>\\&quot;<span class="token keyword">default</span>\\&quot;<span class="token punctuation">,</span>\\&quot;error\\&quot;<span class="token operator">:</span>\\&quot;<span class="token keyword">default</span>\\&quot;<span class="token punctuation">,</span>\\&quot;color\\&quot;<span class="token operator">:</span>\\&quot;red\\&quot;<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2>`,29),u=n(`<h2 id="压缩-zip" tabindex="-1"><a class="header-anchor" href="#压缩-zip" aria-hidden="true">#</a> 压缩 <code>zip</code></h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i archiver <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-10-08 14:50:18
 * @LastEditTime: 2022-10-17 16:30:36
 */</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> archiver <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;archiver&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

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

    <span class="token keyword">let</span> archive <span class="token operator">=</span> <span class="token function">archiver</span><span class="token punctuation">(</span><span class="token string">&#39;zip&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">zlib</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    output<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;zip folder success!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    archive<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    archive<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">;</span>
    archive<span class="token punctuation">.</span><span class="token function">directory</span><span class="token punctuation">(</span>sourceFolder<span class="token punctuation">,</span> subdir <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    archive<span class="token punctuation">.</span><span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">startZip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> sourceFolder <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> distZip <span class="token operator">=</span> <span class="token string">&#39;sso.zip&#39;</span><span class="token punctuation">;</span>

    <span class="token function">zipFolder</span><span class="token punctuation">(</span>sourceFolder<span class="token punctuation">,</span> distZip<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> msg</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">startZip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function r(d,k){const s=e("l-download");return t(),p("div",null,[o(`
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-11-15 11:39:55
 * @LastEditTime: 2022-11-16 14:03:08
`),l,c(s,{title:"自开发包下载",link:"https://share.weiyun.com/5Z00E1w0"}),u])}const m=a(i,[["render",r],["__file","sso.html.vue"]]);export{m as default};