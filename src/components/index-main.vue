<template>
	<div class="main" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
		<v-banner></v-banner>
		<div class="head">
			<div class="line"></div>
			<div class="center">
				<div class="left"></div>
				<div class="text">每日7/12/17/20点更新</div>
				<div class="right"></div>
			</div>
		</div>
		<div class="content">
			<ul>
				<li v-for="(item,index) in list" :key="index">
					<a :href="item.url"><img v-lazy="item.image"/></a>
					<div class="detail">
						<p>{{item.title}}</p>
						<span class="price">￥{{item.price}}</span><span class="originPrice">￥{{item.originPrice}}</span><span class="mail">包邮</span>
					</div>
				</li>				
			</ul>			
		</div>
	</div>
</template>

<script>
	import Banner from "./banner"
	import axios from "axios"
	
	
	export default{
		data(){
			return{
				list:[],
				num:0		
			}
		},
		components:{
			"v-banner":Banner
		},
		methods:{
			loadMore() {
				this.loading = true;			    
		    	var url="http://youhui.lukou.com/api/commodity?start="+(this.num*20)+"&word=&cid=0&topic=0"
				axios.get(url)
				.then(res=>{
					let arr=[];
					arr=res.data.data.list;
					for(let i=0;i<arr.length;i++){
						this.list.push(arr[i])
					}						
				})
				this.loading = false;
				this.num+=1
			}
		}
	}
</script>

<style scoped>
	.main{
		width: 100%;
		background: #f5f5f5;
		overflow: hidden;
	}
	.head{
		height: 1.65rem;
		position: relative;
	}
	.line{
		width: 9.92rem;
		border-bottom: 1px solid #fa585a;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -4.96rem;
	}
	.center{
		width: 7.1rem;
		height: 0.45rem;
		background: #f5f5f5;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -3.55rem;
		margin-top: -0.225rem;
	}
	.left{
		width: 0.2rem;
		height: 0.2rem;
		background-image: url(../img/index-main-1.png);
		background-size: 0.2rem 0.2rem;
		background-position: 0 0;
		position: absolute;
		left: 0.28rem;
		top: 0.1rem;
	}
	.right{
		width: 0.2rem;
		height: 0.2rem;
		background-image: url(../img/index-main-1.png);
		background-size: 0.2rem 0.2rem;
		background-position: 0 0;
		position: absolute;
		right: 0.28rem;
		top: 0.1rem;
	}
	.text{
		font-size: 0.45rem;
		line-height: 0.45rem;
		color: #43240c;
		text-align: center;
	}
	.content ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.content li{
		width: 6.9rem;
		list-style: none;
		margin-bottom: 0.28rem;	
	}
	.content img{
		display: block;
		width: 100%;
		height: 5.77rem;
	}
	.detail{
		padding-left: 0.3rem;
		background: #fff;
		padding-bottom: 0.4rem;
	}
	.detail p{
		font-size: 0.38rem;
		line-height: 1.14rem;
		color: #444;		
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.price{
		font-size: 0.38rem;
		line-height: 0.38rem;
		color: #f35540;
		font-weight: 900;		
	}
	.originPrice{
		text-decoration: line-through;
		font-size: 0.3rem;
		line-height: 0.38rem;
		color: #979797;
		margin-left: 0.16rem;
	}
	.mail{
		display: inline-block;
		padding: 0 0.1rem;
		height: 0.53rem;
		border-radius: 0.14rem;
		border: 0.04rem solid #f34f39;
		font-size: 0.32rem;
		line-height: 0.53rem;
		text-align: center;
		color: #f34f39;
		margin-left: 0.16rem;
	}
	img[lazy=loading] {
	    width: 1.5rem;
	    height: 5.73rem;
	    margin: auto;
	}
</style>