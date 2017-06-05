<template>
	<div class="banner">
		<mt-swipe :auto="3000" :show-indicators="false">
		  <mt-swipe-item>
		  	<img src="../img/banner-1.png"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../img/banner-2.png"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../img/banner-3.png"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../img/banner-4.png"/>
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				arr:[]
			}
		}
	}
</script>

<style scoped>	
	.banner{
		height: 5.3rem;
	}
	img{
		width: 100%;
		height: 100%;
	}
</style>