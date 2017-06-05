<template>
	<div class="main">
		<div class="header">
			<i @click="goBack"></i>
			<span>{{msg}}</span>
		</div>
		<div class="content" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
			<ul>
				<li v-for="(item,index) in list" :key="index">
					<a :href="item.url"><img :src="item.image"/></a>
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
	import axios from "axios"
	export default{
		data(){
			return{
				msg:"熊猫优选",
				list:[],
				num:0
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			},
			loadMore() {
				this.loading = true;
				if(this.$route.params.cname){
					this.msg=this.$route.params.cname;
				}			
				let id=this.$route.params.uid;	
		    	var url="http://youhui.lukou.com/api/commodity?start="+(this.num*20)+"&word=&cid="+id+"&topic=0"
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
		margin-top: 2.52rem;
	}
	.header{
		width: 100%;
		padding-top: 0.87rem;		
		font-size: 0.58rem;
		line-height: 1.64rem;
		text-align: center;
		color: #43240c;
		background-color: #fde25c;		
		position: fixed;
		top: 0;
		left: 0;
	}
	.header i{
		display: block;
		width: 0.7rem;
		height: 0.7rem;
		background-image: url(../img/arrow-left.png);
		background-repeat: no-repeat;
		background-size: 0.7rem 0.7rem;
		position: absolute;
		left: 0.7rem;
		top: 1.3rem;
	}
	.content ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding-top: 0.2rem;
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
</style>