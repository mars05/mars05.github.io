import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as l,c as s,b as r,d as t,w as o,a as d,e as i}from"./app.0b647c9d.js";var c="/docs/assets/fjmb.4a54bbc9.jpg";const m={},v=d(`<h1 id="\u6587\u4EF6\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u6A21\u677F" aria-hidden="true">#</a> \u6587\u4EF6\u6A21\u677F</h1><p>\u6587\u4EF6\u6A21\u677F\u5206\u7C7B\u4E24\u79CD\uFF0C\u666E\u901A\u6A21\u677F\u548C\u4EE3\u7801\u6A21\u677F\uFF0C\u91C7\u7528 <strong>FreeMarker</strong> \u6A21\u677F\u5F15\u64CE\u5904\u7406</p><ul><li><strong>\u666E\u901A\u6A21\u677F:</strong> \u9879\u76EE\u751F\u6210\u65F6\uFF0C\u6BCF\u4E2A\u666E\u901A\u6A21\u677F\u53EA\u4F1A\u751F\u6210\u4E00\u4E2A\u76EE\u6807\u6587\u4EF6\uFF0C\u9002\u7528\u4E8E\u542F\u52A8\u7C7B\u3001\u914D\u7F6E\u7C7B\u3001\u914D\u7F6E\u6587\u4EF6\u7B49\u3002</li></ul><p><code>src/main/java/\${basePackageDir}/Application.java</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>package \${basePackage};

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@MapperScan(&quot;\${basePackage}.dao&quot;)
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u4EE3\u7801\u6A21\u677F:</strong> \u9879\u76EE\u751F\u6210\u65F6\uFF0C\u4F1A\u6839\u636E\u8868\u7ED3\u6784\u7684\u591A\u5C11\u5FAA\u73AF\u751F\u6210\u76EE\u6807\u6587\u4EF6\uFF0C\u9002\u7528\u4E8E\u5E38\u89C4\u7684\u4E1A\u52A1\u4EE3\u7801\uFF0C\u5982controller\u3001service\u3001serviceImpl\u3001dao\u3001model\u7B49\u3002</li></ul><p><code>src/main/java/\${basePackageDir}/model/\${table.upperCamelName}.java</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>package \${basePackage}.model;

import lombok.Data;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableField;
&lt;#assign columns=table.columns /&gt;

&lt;#list columns as column&gt;
&lt;#if !importedDate?? &amp;&amp; column.javaTypeClass.simpleName==&#39;Date&#39;&gt;
import java.util.Date;
&lt;#assign importedDate=true /&gt;
&lt;/#if&gt;
&lt;/#list&gt;
/**
* \${table.remarks}
*/
@Data
@TableName(&quot;\${table.tableName}&quot;)
public class \${table.upperCamelName} {
&lt;#list columns as column&gt;
    /**
    * \${column.remarks}
    */
    &lt;#if column.primaryKey&gt;
    @TableId
    &lt;/#if&gt;
    @TableField(&quot;\${column.columnName}&quot;)
    private \${column.javaTypeClass.simpleName} \${column.lowerCamelName};
&lt;/#list&gt;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5177\u4F53\u6A21\u677F\u5B9E\u4F8B\u53EF\u4E0A <a href="https://crud-hub.top/#/marketplace/index" target="_blank" rel="noopener noreferrer">\u6A21\u677F\u5E02\u573A</a> \u67E5\u770B</p><hr><p><img src="`+c+'" alt=""></p><p><strong>\u63D0\u793A:</strong></p><ol><li>\u8DEF\u5F84: \u76F8\u5BF9\u4E8E\u9879\u76EE\u7684\u8DEF\u5F84\uFF0C\u5F53\u9879\u76EE\u751F\u6210\u7684\u65F6\u5019\uFF0C\u4F1A\u5BF9\u8DEF\u5F84\u8FDB\u884C\u6A21\u677F\u5316\u5904\u7406\uFF0C\u5F97\u5230\u6700\u7EC8\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u8DEF\u5F84\u4E2D\u652F\u6301\u4F7F\u7528\u6A21\u677F\u53D8\u91CF\u3002</li><li>\u540D\u79F0: \u5BF9\u6587\u4EF6\u6A21\u677F\u8D77\u4E00\u4E2A\u522B\u540D\uFF0C\u4E0D\u5F71\u54CD\u751F\u6210\u7684\u76EE\u6807\u6587\u4EF6\u5185\u5BB9\u3002</li></ol>',13),u=i("\u9879\u76EE\u751F\u6210\u6216\u4EE3\u7801\u751F\u6210\u65F6\uFF0C\u4F1A\u5BF9\u6587\u4EF6\u8DEF\u5F84\u548C\u6587\u4EF6\u5185\u5BB9\u8FDB\u884C\u6A21\u677F\u5904\u7406\uFF0C\u56E0\u6B64\u6A21\u677F\u53D8\u91CF\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u8BE6\u60C5\u8BF7\u770B "),p=i("\u6A21\u677F\u53D8\u91CF");function b(g,f){const e=a("RouterLink");return l(),s("div",null,[v,r("p",null,[u,t(e,{to:"/template/var.html"},{default:o(()=>[p]),_:1})])])}var k=n(m,[["render",b],["__file","file.html.vue"]]);export{k as default};
