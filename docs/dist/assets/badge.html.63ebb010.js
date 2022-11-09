import{_ as o,r as n,o as u,c,b as e,d as s,a as i,e as a,f as l}from"./app.467aa1ef.js";const k="/component/4.jpeg",r={},d=i('<h1 id="自开发徽章组件" tabindex="-1"><a class="header-anchor" href="#自开发徽章组件" aria-hidden="true">#</a> 自开发徽章组件</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>一个根据字段生成右上角徽标的组件</li><li>支持自定义徽标(需在任意开发包内上传对应的 <code>svg</code>)</li><li>支持识别的字段目前有单行输入、下拉框(数据字典格式)、数据选择和虚拟字段</li></ul><h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h2><p><img src="'+k+`" alt="image"></p><h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2><p>完整配置(?表示可选属性)</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;componentType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;FORM_TEXT_INPUT | FORM_SELECT_INPUT | FORM_VIRTUAL_FIELD ｜ FORM_DATA_SELECTOR&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;model?&quot;</span><span class="token operator">:</span> <span class="token string">&quot;模型字段&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;uuid?&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">&quot;COMPLETED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已完成&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;APPROVING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;审批中&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;REJECTED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已拒绝&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;WITHDRAWN&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已撤回&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;TERMINATED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已终止&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;UNDONE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已撤销&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;ARCHIVED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已归档&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;DECLARE_DEADLINE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;申报截止&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;DECLARING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;申报中&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;REVIEWING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;评审中&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;UNSTART&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;未开始&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;PASS&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;通过&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;NORMAL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;普通&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;URGENT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;加急&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;EMERGENCY&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;紧急&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;NOSCORE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;未评分&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;SCORE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已评分&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;CHECKING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;待审核&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;CHECK_ERROR&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;验证失败&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;APPLYING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;申请中&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;CHECKED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已审核&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;APPLIED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已申请&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;ONJOB&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;在职&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;DISPOSED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已办结&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;REPLIED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已回复&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;APPLYSUCCESS&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;申请成功&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;UNPUBLISH&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;未发布&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;READ&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已读&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;UNREAD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;未读&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;BACK&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;回退&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;WAITREPLY&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;待回复&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;PUBLISHING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;公示中&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;NOPASS&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;未通过&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;DISPOSING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;处理中&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;extraConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">&quot;w-todo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;待办&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1、componenttype" tabindex="-1"><a class="header-anchor" href="#_1、componenttype" aria-hidden="true">#</a> 1、<code>componentType</code></h3><p><code>componentType</code> 需要识别字段的组件类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ComponentType</span> <span class="token operator">=</span> <span class="token string">&quot;FORM_TEXT_INPUT&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;FORM_SELECT_INPUT&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;FORM_VIRTUAL_FIELD&quot;</span> ｜ <span class="token string">&quot;FORM_DATA_SELECTOR&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、model" tabindex="-1"><a class="header-anchor" href="#_2、model" aria-hidden="true">#</a> 2、<code>model</code></h3><p><code>model</code> 模型编码(<code>modeField</code>)，当组件类型不是虚拟字段时必须存在</p><h3 id="_3、uuid" tabindex="-1"><a class="header-anchor" href="#_3、uuid" aria-hidden="true">#</a> 3、<code>uuid</code></h3><p><code>uuid</code>，当组件类型是虚拟字段的时候必须指定 <code>uuid</code>，因为不存在模型编码</p><h3 id="_4、config" tabindex="-1"><a class="header-anchor" href="#_4、config" aria-hidden="true">#</a> 4、<code>config</code></h3><p><code>config</code>，一些预设的配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;COMPLETED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已完成&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;APPROVING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;审批中&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;REJECTED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已拒绝&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;WITHDRAWN&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已撤回&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;TERMINATED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已终止&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;UNDONE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已撤销&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;ARCHIVED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已归档&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;DECLARE_DEADLINE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;申报截止&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;DECLARING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;申报中&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;REVIEWING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;评审中&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;UNSTART&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;未开始&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;PASS&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;通过&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;NORMAL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;普通&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;URGENT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;加急&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;EMERGENCY&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;紧急&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;NOSCORE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;未评分&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;SCORE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已评分&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;CHECKING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;待审核&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;CHECK_ERROR&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;验证失败&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;APPLYING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;申请中&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;CHECKED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已审核&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;APPLIED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已申请&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;ONJOB&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;在职&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;DISPOSED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已办结&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;REPLIED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已回复&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;APPLYSUCCESS&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;申请成功&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;UNPUBLISH&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;未发布&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;READ&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已读&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;UNREAD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;未读&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;BACK&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;回退&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;WAITREPLY&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;待回复&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;PUBLISHING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;公示中&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;NOPASS&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;未通过&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;DISPOSING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;处理中&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>它将被用作 <code>map</code> 输出，所以 <code>key</code> 不能重复，否则会被覆盖</li><li><code>key</code> 表示上方的预设(<code>preset</code>)，<code>value</code> 表示该 <code>model</code> 对应字段的数据，例如单行输入是普通的时候，详细会加上普通(NORMAL)徽标</li><li>需要注意的是，如果是下拉框识别的是选项编码，所以对应的 <code>value</code> 也应该是选项编码</li><li>上述都是预设，本身自开发组件已存在图标</li></ul><h3 id="_5、extraconfig" tabindex="-1"><a class="header-anchor" href="#_5、extraconfig" aria-hidden="true">#</a> 5、<code>extraConfig</code></h3><p><code>extraConfig</code>，额外的配置，这里是指你可以自定义徽标的形式，只需要在任意自开发包中上传对应的 <code>svg</code> 即可。当然需要注意下面的规则 👇</p><ul><li>因为是自定义那么 <code>key</code> 就是你的 <code>svg</code> 文件的文件名，<code>value</code> 依然是对应 <code>model</code> 可能取到的值，如果是这个值，显示对应的徽标</li><li>在其他自开发包中如果需要上传自己的 <code>svg</code> 使用，请在 <code>custom/index.js</code> 中添加以下代码</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;@/icons/index&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> todo</h2>`,24),q=a("h2",{id:"下载",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#下载","aria-hidden":"true"},"#"),l(" 下载")],-1);function v(g,m){const t=n("l-checkbox"),p=n("l-download");return u(),c("div",null,[e(`
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-11-08 14:09:52
 * @LastEditTime: 2022-11-09 10:06:52
`),d,s(t,{color:"red",content:"还没想好......"}),q,s(p,{title:"自开发包下载",link:"https://share.weiyun.com/56BeVbTj"})])}const E=o(r,[["render",v],["__file","badge.html.vue"]]);export{E as default};
