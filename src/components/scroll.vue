<template>
	<div class="scroll">
		<ul>
			<li v-for="(item,index) in arr" :key="index">
				<router-link :to="{name:'categories',params:{uid:item.id,cname:item.cname}}"><img :src="item.imageUrl" :id="item.id"/></router-link>
				<p>{{item.cname}}</p>
			</li>			
		</ul>
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		data(){
			return{
				arr:[],
			}
		},
		created(){
			const url="http://youhui.lukou.com/api/category"
			axios.get(url).then(res=>{
				this.arr=res.data.data.list[0].categories
			})
		}
	}
</script>

<style scoped>
	.scroll{
		width: 100%;
		height: 4.7rem;
		background: #f5f5f5;
		overflow-x: scroll;	
	}
	.scroll ul{
		margin-top: 0.55rem;
		width: 18.6rem;
		display: flex;
		justify-content: space-around;		
	}
	.scroll ul li{
		width: 2.8rem;
		list-style: none;
		text-align: center;
	}
	.scroll ul li img{
		display: block;
		width: 2.8rem;
		height: 2.8rem;
	}
	.scroll ul li p{
		font-size: 0.36rem;
		line-height: 1.08rem;
		color: #707070;
	}
</style>