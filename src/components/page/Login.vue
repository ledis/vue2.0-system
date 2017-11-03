<template>
	<div class="login-wrap">
		<div class="ms-title">
			后台管理系统
		</div>
		<div class="ms-login">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
				<el-form-item prop="username">
			    <el-input type="text" v-model="ruleForm.username"></el-input>
			  </el-form-item>
			  <el-form-item  prop="password">
			    <el-input type="password" v-model="ruleForm.password" @click="submitForm('ruleForm')"></el-input>
			  </el-form-item>
			  <div class="login-btn">
			  	<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
			  </div>
			  <p class="tip-p">密码不为空就可以登陆进去</p>
			</el-form>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				ruleForm:{
					username:'',
					password:''
				},
				rules:{
					username:[
						{required:true,message:'请输入用户名',trigger: 'blur'}
					],
					password:[
						{required:true,message:'请输入密码',trigger: 'blur'}
					]
				}
			}
		},
		methods:{
			submitForm(formName){
				let self=this;
				self.$refs[formName].validate((valid) => {
          if (valid) {
            localStorage.setItem('ms_username',self.ruleForm.username);
            self.$router.push('/home');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
			}
		}
	}
</script>
<style scoped>
	.login-wrap{
		width:100%;
		height:100%;
		position:relative;
		background:#324157;
	}
	.ms-title{
		position:absolute;
		top:50%;
		width: 100%;
		text-align: center;
		font-size:30px;
		color:#fff;
		margin-top:-230px;
	}
	.ms-login{
		position:absolute;
		left:50%;
		top:50%;
		width:380px;
		height:240px;
		padding:40px;
		margin:-150px 0 0 -190px;
		background:#fff;
	}
  .login-btn button{
    width:100%;
    height:36px;
    text-align: center;
  }
  .tip-p{
  	padding-top:8px;
  	color:#bbb;
  }
</style>