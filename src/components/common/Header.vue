<template>
	<div class="headerWrap">
		<div class="logo">
			后台管理系统
		</div>
		<div class="user-info">
			<el-dropdown trigger="click" @command="handleCommand">
	      <span class="el-dropdown-link">
	        <img class="user-logo" src="../../assets/images/headPic.png" height="352" width="352" alt="">
	        {{username}}
	      </span>
	      <el-dropdown-menu slot="dropdown">
	        <el-dropdown-item command="logout">退出</el-dropdown-item>
	      </el-dropdown-menu>
	    </el-dropdown>
		</div>
	</div>	
</template>
<script>
	export default {
		data(){
			return{
				name:'yjx'
			}
		},
		computed:{
			username(){
				let username=localStorage.getItem('ms_username');
				return username? username :this.name
			}
		},
		methods:{
			handleCommand(command){
				if(command=='logout'){
					localStorage.removeItem("ms_username");
					this.$router.push('/login');
				}
			}
		}
	}
</script>
<style scoped>
	.headerWrap{
		width:100%;
		height: 70px;
		line-height:70px;
		font-size: 20px;
		color:#fff;
		position:relative;
		background:#242f42;
	}
	.headerWrap .logo{
		float:left;
		width:250px;
		text-align: center;
	}
	.user-info{
		float:right;
		padding-right:50px;
		font-size: 16px;
		color:#fff;
		position:relative;
	}
	.user-info .user-logo{
    position: absolute;
    left:0;
    top:15px;
    width:40px;
    height:40px;
    border-radius: 50%;
  }
	.user-info .el-dropdown-link{
		color:#fff;
		display:inline-block;
		padding-left:50px;
		cursor: pointer;
	}
	.el-dropdown-menu__item{
      text-align: center;
  }
  .el-dropdown-menu{
  	top:68px !important;
  }
</style>