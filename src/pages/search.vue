<template>
	<div class="main">		
		<div class="header">
			<span @click="goBack"></span>
			<input type="text" placeholder="搜索商品，发现更多优惠" ref="inp"/>
			<button @click="search">搜索</button>
		</div>
		<div class="hot">
			<p>热门搜索</p>
			<ul>
				<li v-for="(item,index) in list"><router-link :to="{name:'result',params:{uid:item}}">{{item}}</router-link></li>
			</ul>
		</div>				
	</div>		
</template>

<script type="text/javascript">
	import axios from "axios"
	export default{
		data(){
			return{
				list:[]
			}
		},
		created(){
			const url="http://youhui.lukou.com/api/hotWords"
			axios.get(url).then(res=>{
				this.list=res.data.data
			})
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			},
			search(){
				var val=this.$refs.inp.value
				if(val){
					this.$router.push({name:'result',params:{uid:val}})
				}else{
					return
				}
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	a{
		text-decoration: none;
		color: #877a73;
	}
	.header{
		width: 100%;
		height: 1.4rem;
		background: #fde25c;
		padding-top: 1.12rem;
		overflow: hidden;
	}
	.header span{
		display: block;
		float: left;
		width: 0.8rem;
		height: 0.8rem;
		background-image: url(../img/arrow-left.png);
		background-repeat: no-repeat;
		background-size: 0.8rem 0.8rem;
		margin-left: 0.7rem;
		margin-right: 0.7rem;
		margin-top: 0.2rem;
	}
	.header input{
		display: block;
		float: left;
		width: 9.51rem;
		height: 1.1rem;
		border-radius: 0.3rem;
		border: 0;
		font-size: 0.4rem;
		line-height: 1.1rem;
		color: #b1a9a5;
		background: #f5f5f5;
		padding-left: 0.9rem;
		background-image: url(../img/search.png);
		background-repeat: no-repeat;
		background-size: 0.6rem 0.6rem;
		background-position: 0.15rem center;
		
	}
	.header button{
		display: block;
		float: left;
		font-size: 0.48rem;
		line-height: 1.1rem;
		color: #43240c;
		border: 0;
		background: #fde25c;
		margin-left: 0.45rem;
	}
	.hot{
		padding-left: 0.56rem;
	}
	.hot p{
		font-size: 0.44rem;
		line-height: 2.12rem;
		color: #43240c;
	}
	.hot ul{
		overflow: hidden;
	}
	.hot ul li{
		list-style: none;
		float: left;
		padding: 0 0.45rem;
		height: 0.94rem;
		border: 0.05rem;
		background: #f5f5f5;
		font-size: 0.45rem;
		line-height: 0.94rem;
		color: #877a73;
		text-align: center;
		margin-right: 0.42rem;
		margin-bottom: 0.42rem;
	}
	
</style>