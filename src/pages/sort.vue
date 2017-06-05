<template>
	<div>
		<div class="content">
			<v-search></v-search>
			<div class="header">
				<img v-for="item in arr_header" :src="item.imageUrl"/>
			</div>
			<div class="all_sort">
				<p>全部分类</p>
			</div>
			<div class="women">
				<h2>女装</h2>
				<p>·早春上新，剁手不停·</p>
			</div>
			<v-scroll></v-scroll>
			<div class="list1">
				<ul>
					<li v-for="(item,index) in arr_list1"><router-link :to="{name:'categories',params:{uid:item.id,cname:item.cname}}"><p>{{item.cname}}</p></router-link></li>				
				</ul>
			</div>
			<div class="list2">
				<h2>鞋包配饰</h2>
				<div class="list2-con">
					<ul>
						<li v-for="item in arr_list2">
							<router-link :to="{name:'categories',params:{uid:item.id,cname:item.cname}}"><img :src="item.imageUrl"/></router-link>
							<p>{{item.cname}}</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="list3">
				<ul>
					<li v-for="(item,index) in arr_list3"><router-link :to="{name:'categories',params:{uid:item.id,cname:item.cname}}"><p>{{item.cname}}</p></router-link></li>				
				</ul>
			</div>
		</div>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import Search from "../components/search"
	import Footer from "../components/footer"
	import Scroll from "../components/scroll"
	import axios from "axios"
	export default {
		data(){
			return{
				arr_header:[],
				arr_list1:[],
				arr_list2:[],
				arr_list3:[]
			}
		},
		components:{
			"v-search":Search,
			"v-footer":Footer,
			"v-scroll":Scroll
		},
		mounted(){			
			const url_banner="http://youhui.lukou.com/api/category";
			axios.get(url_banner).then(res=>{
				this.arr_header=res.data.data.banners;
				for(var i=1;i<=3;i++){
					this.arr_list1.push(res.data.data.list[i])
				}
				this.arr_list2=res.data.data.list[4].categories;
				for(var i=5;i<=9;i++){
					this.arr_list3.push(res.data.data.list[i])
				}
			})
		}
	}
</script>

<style scoped>
	a{
		text-decoration: none;
	}
	.content{
		margin-bottom: 2.05rem;
	}
	.header{
		width: 100%;
		height: 4.4rem;
		overflow: hidden;
	}
	.header img{
		width: 6.55rem;
		height: 3.28rem;
		border-radius: 0.2rem;
		float: left;
		margin-left: 0.4rem;
		margin-top: 0.56rem;
	}
	.all_sort{
		width: 100%;
		height: 1.87rem;
		background-color: #f5f5f5;
		background-image: url(../img/all-sort.png);
		background-repeat: no-repeat;
		background-size: 0.7rem 0.7rem;
		background-position: 0.56rem center;
	}
	.all_sort p{
		padding-left: 1.5rem;
		font-size: 0.5rem;
		line-height: 1.87rem;
		color: #43240c;
	}
	.women{
		width: 100%;
		height: 1.7rem;
		padding-top: 0.2rem;
		text-align: center;
		background-image: url(../img/arrow-right.png);
		background-repeat: no-repeat;
		background-size: 0.5rem 0.5rem;
		background-position: 13.5rem center;
	}
	.women h2{
		font-size: 0.5rem;
		line-height: 1rem;
		color: #43240c;
		font-weight: 100;
	}
	.women p{
		font-size: 0.4rem;
		line-height: 0.4rem;
		color: #a19185;
	}
	.list1 ul{
		display: flex;
		flex: 1;
	}
	.list1 ul li{
		list-style: none;
		width: 4.78rem;
		height: 4.78rem;		
		border-right: 1px solid #f5f5f5;
	}
	.list1 ul li p{
		width: 100%;
		height: 100%;
		font-size: 0.46rem;
		line-height: 4.78rem;
		text-align: center;
		color: #43240c;
	}
	.list2{
		border-top: 1px solid #F5F5F5;
		width: 100%;
	}
	.list2 h2{
		height: 1.9rem;
		font-size: 0.5rem;
		line-height: 1.32rem;
		color: #43240c;
		text-align: center;
		background-image: url(../img/arrow-right.png);
		background-repeat: no-repeat;
		background-size: 0.7rem 0.7rem;
		background-position: 13.5rem center;
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
	.list3 ul{
		display: flex;
		flex-wrap: wrap;
	}
	.list3 ul li{
		list-style: none;
		width: 4.76rem;
		height: 4.78rem;		
		border-right: 1px solid #f5f5f5;
		border-bottom: 1px solid #f5f5f5;
	}
	.list3 ul li p{
		width: 100%;
		height: 100%;
		font-size: 0.46rem;
		line-height: 4.78rem;
		text-align: center;
		color: #43240c;
	}
</style>