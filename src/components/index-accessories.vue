<template>
	<div class="main" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">		
		<div class="list2-con">
			<ul>
				<li v-for="(item,index) in arr_list2" :key="index">
					<router-link :to="{name:'categories',params:{uid:item.id,cname:item.cname}}"><img :src="item.imageUrl"/></router-link>
					<p>{{item.cname}}</p>
				</li>
			</ul>
		</div>
		<div class="head">
			<div class="line"></div>
			<div class="center">
				<div class="left"></div>
				<div class="text">每日20点更新</div>
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

	import axios from "axios"
	
	
	export default{
		data(){
			return{
				list:[],
				arr_list2:[],
				num:0		
			}
		},		
		methods:{
			loadMore() {
				this.loading = true;			    
		    	var url="http://youhui.lukou.com/api/commodity?start="+(this.num*20)+"&word=&cid=5&topic=0"
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
		},
		mounted(){			
			const url_banner="http://youhui.lukou.com/api/category";
			axios.get(url_banner).then(res=>{				
				this.arr_list2=res.data.data.list[4].categories;				
			})
		}
	}
</script>

<style scoped>
	.main{
		padding-top: 0.2rem;
		width: 100%;
		background: #f5f5f5;
		overflow: hidden;
	}
	.list2-con{
		width: 100%;
		height: 4.7rem;
		background: #f5f5f5;
	} 
	.list2-con ul{
		overflow: hidden;
		padding-top: 0.56rem;
	}
	.list2-con ul li{
		list-style: none;
		float: left;
		width: 2.8rem;
		margin-left: 0.2rem;
		text-align: center;
	}
	.list2-con ul li img{
		display: block;
		width: 2.8rem;
		height: 2.8rem;
	}
	.list2-con ul li p{
		font-size: 0.36rem;
		line-height: 1.08rem;
		color: #707070;
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