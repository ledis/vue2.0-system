<template>
	<div class="wrapper">
		<v-header></v-header>
		<v-sidebar></v-sidebar>
		<div class="content">
			<transition name="move">
				<router-view></router-view>
			</transition>
		</div>
	</div>	
</template>
<script>
	import vHeader from '../common/Header.vue'
	import vSidebar from '../common/Sidebar.vue'
	export default {
		components:{vHeader,vSidebar}
	}
</script>
<style>
.move-enter-active,.move-leave-active{
	transition: all .5s ease;
}
.move-enter,.move-leave{
	opacity: 0;
}
.content{
	position:absolute;
	top:70px;
	left:250px;
	bottom:0;
	right:0;
	width:auto;
	padding:40px;
	overflow-y:auto;
}
</style>