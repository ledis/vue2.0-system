<template>
  <div>
	<div class="crumbs">
      <el-breadcrumb separator="/">
          <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
          <el-breadcrumb-item>图片上传</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content-title">支持拖拽</div>
    <div class="plugins-tips">
      Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。
      访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
	  </div>
		<el-upload
		  class="upload-demo"
		  drag
		  action="https://jsonplaceholder.typicode.com/posts/"
		  multiple>
		  <i class="el-icon-upload"></i>
		  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
		</el-upload>
	  <div class="content-title">支持裁剪</div>
    <div class="plugins-tips">
        Vue-Core-Image-Upload：一款轻量级的vue上传插件，支持裁剪。
        访问地址：<a href="https://github.com/Vanthink-UED/vue-core-image-upload" target="_blank">Vue-Core-Image-Upload</a>
    </div>
    <img class="pre-img" :src="src" alt="">
        <vue-core-image-upload :class="['pure-button','pure-button-primary','js-btn-crop']"
                               :crop="true"
                               text="上传图片"
                               url="/api/posts/"
                               extensions="png,gif,jpeg,jpg"
                               @:imageuploaded="imageuploaded"
                               @:errorhandle="handleError"></vue-core-image-upload>
  </div>
</template>
<script>
	import VueCoreImageUpload  from 'vue-core-image-upload';
    export default {
        data: function(){
            return {
                src: './static/headPic.png',
                fileList: []
            }
        },
        components: {
                VueCoreImageUpload
        },
        methods:{
            imageuploaded(res) {
                console.log(res)
            },
            handleError(){
                this.$notify.error({
                    title: '上传失败',
                    message: '图片上传接口上传失败，可更改为自己的服务器接口'
                });
            }
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
.content-title{
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
.pre-img{
    width:250px;
    height: 250px;
    margin-bottom: 20px;
}
.pure-button{
    width:150px;
    height:40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 3px;
    background:#20a0ff;
}
.g-core-image-corp-container .info-aside{
    height:45px;
}
.el-upload--text {
    background-color: #fff;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    box-sizing: border-box;
    width: 360px;
    height: 180px;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.el-upload--text .el-icon-upload {
    font-size: 67px;
    color: #97a8be;
    margin: 40px 0 16px;
    line-height: 50px;
}
.el-upload--text {
    color: #97a8be;
    font-size: 14px;
    text-align: center;
}
.el-upload--text em {
    font-style: normal;
}
</style>