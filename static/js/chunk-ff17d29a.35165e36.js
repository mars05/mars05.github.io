(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff17d29a"],{"09f4":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(t,e,a){var r=o(),l=t-r,u=20,c=0;e="undefined"===typeof e?500:e;var s=function t(){c+=u;var o=Math.easeInOutQuad(c,r,l,e);i(o),c<e?n(t):a&&"function"===typeof a&&a()};s()}},"24d2":function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return l}));var n=a("b775");function i(t){return Object(n["a"])({url:"/api/crud-hub/project/generateProject",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/api/crud-hub/project/generateCode",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/api/crud-hub/project/downloadProject",method:"post",data:t,responseType:"blob"})}function l(t){return Object(n["a"])({url:"/api/crud-hub/project/downloadCode",method:"post",data:t,responseType:"blob"})}},"7b3f":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"f",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return u})),a.d(e,"e",(function(){return c}));var n=a("b775");function i(t){return Object(n["a"])({url:"/api/crud-hub/myProjectTemplate/create",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/api/crud-hub/myProjectTemplate/update",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/api/crud-hub/myProjectTemplate/list",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/api/crud-hub/myProjectTemplate/get",method:"get",params:{id:t}})}function u(t){return Object(n["a"])({url:"/api/crud-hub/myProjectTemplate/delete",method:"post",params:{id:t}})}function c(){return Object(n["a"])({url:"/api/crud-hub/myProjectTemplate/refreshAccessToken",method:"post"})}},c062:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"e",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return u}));var n=a("b775");function i(t){return Object(n["a"])({url:"/api/crud-hub/myOrganization/create",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/api/crud-hub/myOrganization/update",method:"post",data:t})}function r(){return Object(n["a"])({url:"/api/crud-hub/myOrganization/listAll",method:"get"})}function l(t){return Object(n["a"])({url:"/api/crud-hub/myOrganization/list",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/api/crud-hub/myOrganization/delete",method:"post",params:{id:t}})}},e1c8:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"关键字"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}}),a("el-select",{staticClass:"filter-item",staticStyle:{"margin-left":"10px",width:"110px"},attrs:{placeholder:"项目类型",clearable:""},model:{value:t.listQuery.projectType,callback:function(e){t.$set(t.listQuery,"projectType",e)},expression:"listQuery.projectType"}},t._l(t.projectTypeOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("el-input",{staticClass:"filter-item",staticStyle:{width:"110px","margin-left":"10px"},attrs:{placeholder:"所属组织"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.organizationName,callback:function(e){t.$set(t.listQuery,"organizationName",e)},expression:"listQuery.organizationName"}}),a("el-select",{staticClass:"filter-item",staticStyle:{"margin-left":"10px",width:"110px"},attrs:{placeholder:"是否公开",clearable:""},model:{value:t.listQuery.publicFlag,callback:function(e){t.$set(t.listQuery,"publicFlag",e)},expression:"listQuery.publicFlag"}},t._l(t.publicFlagOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("el-input",{staticClass:"filter-item",staticStyle:{width:"110px","margin-left":"10px"},attrs:{placeholder:"创建人"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.createName,callback:function(e){t.$set(t.listQuery,"createName",e)},expression:"listQuery.createName"}}),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(" 搜索 ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"项目模板名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.name))])]}}])}),a("el-table-column",{attrs:{label:"项目类型",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.projectTypeLabel))])]}}])}),a("el-table-column",{attrs:{label:"所属组织",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.organizationName))])]}}])}),a("el-table-column",{attrs:{label:"是否公开",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.publicFlagDesc))])]}}])}),a("el-table-column",{attrs:{label:"创建时间",align:"center",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.createTime))])]}}])}),a("el-table-column",{attrs:{label:"修改时间",align:"center",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.updateTime))])]}}])}),a("el-table-column",{attrs:{label:"创建人",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.createName))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return t.handleProject(n)}}},[t._v(" 项目生成 ")]),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return t.handleCode(n)}}},[t._v(" 代码生成 ")]),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return t.saveAs(n)}}},[t._v(" 另存为 ")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.find(n)}}},[t._v(" 查看 ")]),"deleted"!=n.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleDelete(n)}}},[t._v(" 删除 ")]):t._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),a("el-dialog",{attrs:{"close-on-press-escape":!1,"close-on-click-modal":!1,width:"95%",top:"saveAs"==t.dialogStatus?"15vh":"0.5vh",title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("TemplateEditor",{ref:"TemplateEditor",attrs:{organizations:t.organizations,projectTypeOptions:t.projectTypeOptions,publicFlagOptions:t.publicFlagOptions}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" 取消 ")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"find"!=t.dialogStatus,expression:"dialogStatus != 'find'"}],attrs:{type:"primary"},on:{click:function(e){"update"===t.dialogStatus?t.updateData():t.createData()}}},[t._v(" 确定 ")])],1)],1),a("ProjectDialog",{ref:"ProjectDialog",attrs:{projectTemplate:t.dataRow}}),a("CodeDialog",{ref:"CodeDialog",attrs:{projectTemplate:t.dataRow}})],1)},i=[],o=(a("d3b7"),a("159b"),a("4de4"),a("b775"));function r(t){return Object(o["a"])({url:"/api/crud-hub/projectTemplate/list",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/api/crud-hub/projectTemplate/get",method:"get",params:{id:t}})}function u(t){return Object(o["a"])({url:"/api/crud-hub/projectTemplate/delete",method:"post",params:{id:t}})}var c=a("7b3f"),s=a("c062"),d=a("333d"),p=a("5b50"),f=a("eea3"),m=a("2f67"),b={name:"ComplexTable",components:{Pagination:d["a"],ProjectDialog:p["a"],CodeDialog:f["a"],TemplateEditor:m["a"]},data:function(){return{tableKey:0,list:[],total:0,listLoading:!0,listQuery:{page:1,limit:10,keyword:"",projectType:void 0,organizationName:void 0,publicFlag:void 0,createName:void 0},projectTypeOptions:[{value:1,label:"Java项目"},{value:2,label:"Maven项目"}],publicFlagOptions:[{value:0,label:"否"},{value:1,label:"是"}],fileTemplateTypeOptions:[{value:1,label:"普通模板"},{value:2,label:"代码模板"}],organizations:[],dataRow:null,dialogFormVisible:!1,dialogStatus:"",textMap:{find:"查看",update:"编辑",create:"添加",saveAs:"另存为"}}},created:function(){this.getList()},methods:{handleProject:function(t){var e=this;l(t.id).then((function(t){e.dataRow=t.data,e.$refs.ProjectDialog.dialogVisible=!0}))},handleCode:function(t){var e=this;l(t.id).then((function(t){e.dataRow=t.data,e.$refs.CodeDialog.dialogVisible=!0}))},find:function(t){var e=this;l(t.id).then((function(t){e.dialogStatus="find",e.dialogFormVisible=!0,e.$nextTick((function(){t.data.organizationId=t.data.organizationName,e.$refs.TemplateEditor.setProjectTemplate(t.data,!0)}))}))},saveAs:function(t){var e=this;l(t.id).then((function(t){e.dialogStatus="saveAs",e.dialogFormVisible=!0,e.$nextTick((function(){t.data.id=void 0,t.data.accessToken=null,t.data.organizationId=null,t.data.publicFlag=0,e.$refs.TemplateEditor.setProjectTemplate(t.data,!1,!0)}))}))},getList:function(){var t=this;this.listLoading=!0,r({keyword:this.listQuery.keyword,projectType:this.listQuery.projectType,organizationName:this.listQuery.organizationName,createName:this.listQuery.createName,publicFlag:this.listQuery.publicFlag,pageNumber:this.listQuery.page,pageSize:this.listQuery.limit}).then((function(e){t.list=e.data.list,t.list.forEach((function(e){var a=t.projectTypeOptions.filter((function(t){return t.value==e.projectType}))[0];e.projectTypeLabel=a&&a.label,a=t.publicFlagOptions.filter((function(t){return t.value==e.publicFlag}))[0],e.publicFlagDesc=a&&a.label})),t.total=e.data.totalNumber,t.listLoading=!1})),s["d"]().then((function(e){t.organizations=e.data}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleCreate:function(){var t=this;this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs.TemplateEditor.setProjectTemplate({id:void 0,name:null,projectType:null,publicFlag:0,accessToken:null,organizationId:null,fileTemplateList:[]})}))},createData:function(){var t=this;this.$refs.TemplateEditor.validate((function(e){e&&Object(c["a"])(t.$refs.TemplateEditor.getProjectTemplate()).then((function(){t.dialogFormVisible=!1,t.$message({type:"success",message:"添加成功"}),t.getList()}))}))},handleUpdate:function(t){var e=this;l(t.id).then((function(t){e.dialogStatus="update",e.dialogFormVisible=!0,e.$nextTick((function(){e.$refs.TemplateEditor.setProjectTemplate(t.data)}))}))},updateData:function(){var t=this;this.$refs.TemplateEditor.validate((function(e){e&&update(t.$refs.TemplateEditor.getProjectTemplate()).then((function(){t.dialogFormVisible=!1,t.$message({type:"success",message:"编辑成功"}),t.getList()}))}))},handleDelete:function(t){var e=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){u(t.id).then((function(){e.$message({type:"success",message:"删除成功!"}),e.getList()}))})).catch((function(){}))}}},g=b,h=a("2877"),y=Object(h["a"])(g,n,i,!1,null,null,null);e["default"]=y.exports}}]);