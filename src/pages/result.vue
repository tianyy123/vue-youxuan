<template>
	<div class="main">
		<div class="header">
			<h2>搜索: {{title}}</h2>
			<span @click="goBack"></span>
		</div>
		<div class="con">
			<ul class="sort" ref="sort">
				<li v-for="(item,index) in list_sort" @click="change" :index="index">{{item}}</li>
			</ul>
		</div>
		<div class="list">
			<ul class="clear" ref="list">
				<li><v-default :title="title"></v-default></li>
				<li><v-cheap :title="title"></v-cheap></li>
				<li><v-sales :title="title"></v-sales></li>
			</ul>
		</div>
	</div>	
</template>


<script type="text/javascript">
	import axios from "axios"
	import Default from "../components/result-default"
	import Cheap from "../components/result-cheap"
	import Sales from "../components/result-sales"
	export default{
		data(){
			return{
				title:"",
				list_sort:["默认排序","价格最低","销量最高"]
			}
		},
		created(){			
			this.title=this.$route.params.uid;			
		},
		mounted(){
			this.$refs.sort.firstChild.style.color="#fa585a"
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			},
			change(ev){
				ev.target.style.color="#fa585a",
				this.siblings(ev.target).forEach(function(val,index){
					val.style.color="#43240c"
				})
				var index=ev.target.getAttribute("index")
				this.$refs.list.style.left=-index*14.4+"rem";
			},
			siblings(elm){
				var a = [];
				var p = elm.parentNode.children;
				for(var i =0,pl= p.length;i<pl;i++) {					
					if(p[i] != elm){
						a.push(p[i]);
					}					
				}
				return a;
			}
		},
		components:{
			"v-default":Default,
			"v-cheap":Cheap,
			"v-sales":Sales
		}
	}
</script>

<style scoped>
	.clear:after{
		display:block;
		clear:both;
		content:"";
		visibility:hidden;
		height:0;
	}
	.clear{
		zoom:1;	
	} 
	.header{
		padding-top: 0.88rem;
		height: 1.64rem;
		background: #fde25c;
		position: relative;
	}
	.header h2{
		font-size: 0.53rem;
		line-height: 1.64rem;
		color: #43240c;
		text-align: center;
	}
	.header span{
		position: absolute;
		width: 0.7rem;
		height: 0.7rem;
		background-image: url(../img/arrow-left.png);
		background-repeat: no-repeat;
		background-size: 0.7rem 0.7rem;
		left: 0.77rem;
		top: 1.34rem;
	}
	.sort{
		display: flex;
		justify-content: space-around;
		box-shadow: 0 0.1rem 0.1rem #f5f5f5;
	}
	.sort li{
		width: ;
		list-style: none;
		text-align: center;
		font-size: 0.44rem;
		line-height: 1.7rem;
		color: #43240c;
	}
	.list{
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	.list ul{
		width: 43.2rem;		
		position: relative;
		left: 0;
		top: 0;
		transition: all 200ms;
	}
	.list ul li{
		list-style: none;
		float: left;
		width: 14.4rem;
		overflow: hidden;
	}
</style>