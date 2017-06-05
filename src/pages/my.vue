<template>
	<div>
		<div class="header">
			<img src="../img/head.png"/>
			<router-link to="/login" v-if = "onOff"><p>快速登录</p></router-link>
			<p v-if = "!onOff">{{username}}</p>
			<span>设置</span>
		</div>
		<div class="choices">
			<ul>
				<li class="collection">
					<span></span>
					<p>收藏</p>
				</li>				
				<li class="order">
					<span></span>
					<p>我的订单</p>
				</li>				
				<li class="cart">
					<span></span>
					<p>购物车</p>
				</li>
			</ul>
		</div>
		<v-footer></v-footer>
		{{getStatus}}
	</div>
</template>

<script>
	import Footer from "../components/footer"
	export default {
		data(){
			return{
				msg:"我的",
				onOff:true,
				username:""
			}
		},
		components:{
			"v-footer":Footer
		},
		computed:{
			getStatus(){
				if(this.$store.state.username){
					this.onOff=false
					this.username = this.$store.state.username
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
		height: 7.02rem;
		background: #fde25c;
		text-align: center;
		position: relative;
	}
	.header img{
		margin-top: 2.52rem;
		width: 2.8rem;
		height: 2.8rem;
	}
	.header p{
		font-size: 0.44rem;
		line-height: 1.54rem;
		color: #43240c;
	}
	.header span{
		width: 2.22rem;
		height: 1.2rem;
		background: #f3c612;
		border-radius: 0.6rem 0 0 0.6rem;
		font-size: 0.45rem;
		line-height: 1.2rem;
		text-align: center;
		color: #73530d;
		position: absolute;
		right: 0;
		top: 1.97rem;
	}
	.choices{
		padding-top: 1.1rem;
	}
	.choices ul{
		overflow: hidden;
	}
	.choices ul li{
		list-style: none;
		float: left;
		height: 1.8rem;
	}	
	.choices span{
		display: block;
		width: 0.9rem;
		height: 0.9rem;
		margin: 0 auto;		
		background-repeat: no-repeat;
		background-size: 0.9rem 0.9rem;		
	}
	.choices p{
		font-size: 0.48rem;
		line-height: 0.48rem;
		margin-top: 0.3rem;
	}
	.collection{
		padding-left: 1.15rem;
		padding-right: 1.94rem;
	}
	.collection span{
		background-image: url(../img/collection.png);
	}
	.order{
		padding-left: 1.95rem;
		padding-right: 1.95rem;
		border-left: 1px solid #e6e6e6;
		border-right: 1px solid #e6e6e6;
	}
	.order span{
		background-image: url(../img/order.png);
	}
	.cart{
		padding-left: 1.92rem;		
	}
	.cart span{
		background-image: url(../img/cart.png);
	}
</style>