<template>
	<div>
		<div class="crumbs">
      <el-breadcrumb separator="/">
          <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
          <el-breadcrumb-item>markdown</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="plugins-tips">
      Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。
      访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
	  </div>
	  <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
	  <div class="plugins-tips2">
      <p>既然用了markdown语法了，那么就有一个很实际的问题了。要怎么在前台展示数据呢？</p>
      <br>
      <p>这个时候就需要解析markdown语法了。可以使用 <a href="https://github.com/miaolz123/vue-markdown" target="_blank">vue-markdown</a>：一个基于vue.js的markdown语法解析插件。</p>
	  </div>
	</div>
</template>
<script>
	import { markdownEditor } from 'vue-simplemde';
	import 'simplemde/dist/simplemde.min.css';
	export default{
		data(){
			return{
				content:'', // markdown编辑器内容
        configs: {                                    // markdown编辑器配置参数
          status: false, // 禁用底部状态栏
          initialValue: 'Hello BBK', // 设置初始值
          renderingConfig: {
            codeSyntaxHighlighting: true,
            //开启代码高亮
            highlightingTheme: 'atom-one-light' 
            // 自定义代码高亮主题
          }
        }
			}
		},
		components: {
      markdownEditor
    }
	}
</script>
<style scoped>
.crumbs{
	margin-bottom: 20px;
}
.plugins-tips,.plugins-tips2{
	background:#eef1f6;
	padding:20px 10px;
	margin-bottom:20px;
}
.plugins-tips2{
	margin-top:20px;
}
</style>