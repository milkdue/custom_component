<template><div><!--
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-11-09 16:50:43
 * @LastEditTime: 2022-11-09 17:21:57
-->
<h1 id="自定义锚点" tabindex="-1"><a class="header-anchor" href="#自定义锚点" aria-hidden="true">#</a> 自定义锚点</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>自定义节点可以用到的自定义锚点</li>
</ul>
<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2>
<ul>
<li>基于 <code v-pre>eventBus</code></li>
</ul>
<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2>
<ol>
<li>在业务事件中选择自定义节点(前端事件)</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>APaaSSDK<span class="token punctuation">.</span>context<span class="token punctuation">.</span>globalVueContext<span class="token punctuation">.</span>$root<span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"APAAS-CUSTOM-NODE"</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>callback</code>，回调函数，传入组件的实例，这意味着你可以使用实例上及其原型链上的所有属性和方法，例如混入的 <code v-pre>formData</code>、<code v-pre>formEngine</code>、<code v-pre>widget</code>、<code v-pre>$request</code>...</li>
</ol>
<h2 id="举个🌰" tabindex="-1"><a class="header-anchor" href="#举个🌰" aria-hidden="true">#</a> 举个🌰</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>APaaSSDK<span class="token punctuation">.</span>context<span class="token punctuation">.</span>globalVueContext<span class="token punctuation">.</span>$root<span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"APAAS-CUSTOM-NODE"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>formData<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<ol>
<li>组件内置清空子表的方法</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>APaaSSDK<span class="token punctuation">.</span>context<span class="token punctuation">.</span>globalVueContext<span class="token punctuation">.</span>$root<span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"APAAS-CUSTOM-NODE"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>clearSonTable<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">clearSonTable</span><span class="token punctuation">(</span><span class="token string">"子表表名"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>组件内置根据 <code v-pre>modelField</code> 获取组件配置的方法</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>APaaSSDK<span class="token punctuation">.</span>context<span class="token punctuation">.</span>globalVueContext<span class="token punctuation">.</span>$root<span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"APAAS-CUSTOM-NODE"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>getComponetConfigByModel<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> component <span class="token operator">=</span> <span class="token function">getComponetConfigByModel</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">"modelField"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> todo</h2>
<l-checkbox color="red" content="还没想好......" /><h2 id="下载包" tabindex="-1"><a class="header-anchor" href="#下载包" aria-hidden="true">#</a> 下载包</h2>
<l-download title="自开发包下载" link="https://share.weiyun.com/BYWzX64H" /></div></template>


