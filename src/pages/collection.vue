<template>
	<div>		
		<div class="header">
			{{msg}}
		</div>
		<router-link to="/login" v-if = "onOff"><button>登录吧，少年 !</button></router-link>
		<button v-if = "!onOff">查看高人气商品</button>
		<v-footer></v-footer>
		{{getStatus}}
	</div>
</template>

<script>
	import Footer from "../components/footer"
	export default {
		data(){
			return{
				msg:"收藏",
				onOff:true
			}
		},
		components:{
			"v-footer":Footer
		},
		computed:{
			getStatus(){
				if(this.$store.state.username){
					this.onOff=false
				}else{
					this.onOff=true
				}
			}
		}
	}
</script>

<style scoped>
	a{
		text-decoration: none;
	}
	.header{
		width: 100%;
		padding-top: 0.87rem;
		background: #fde25c;
		font-size: 0.58rem;
		line-height: 1.64rem;
		text-align: center;
		color: #43240c;
	}
	button{
		display: block;
		margin: 0 auto;
		width: 8.4rem;
		height: 1.67rem;
		background: #fde25c;
		font-size: 0.5rem;
		line-height: 1.67rem;
		border-radius: 0.835rem;
		border: 0;
		margin-top: 8.15rem;
	}
</style>