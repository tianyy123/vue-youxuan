<template>
	<div id="index">
		<div class="header">
			<v-search></v-search>
			<div class="choices">
				<ul ref="list">
					<li @click="change" v-for="(item,index) in arr" :index="index">{{item}}</li>
				</ul>
			</div>
		</div>
		<div class="con">		
			<ul ref="con_list">
				<li><v-main></v-main></li>
				<li><v-ladies></v-ladies></li>
				<li><v-makeup></v-makeup></li>
				<li><v-accessories></v-accessories></li>
				<li><v-man></v-man></li>
				<li><v-digit></v-digit></li>
				<li><v-household></v-household></li>
			</ul>					
		</div>
		
		
		<v-footer></v-footer>
	</div>
</template>


<script>
	import Footer from "../components/footer";
	import Search from "../components/search"
	import Banner from "../components/banner";
	import Index_Main from "../components/index-main";
	import Index_Ladies from "../components/index-ladies";
	import Index_Makeup from "../components/index-makeup";
	import Index_Accessories from "../components/index-accessories";
	import Index_Man from "../components/index-man";
	import Index_Digit from "../components/index-digit";
	import Index_Household from "../components/index-household";
	
	
	export default {
		data(){
			return{
				msg:"首页",
				arr:["今日推荐","女装","美妆护肤","鞋包配饰","男装","手机数码","日用家居"],
				onOff:false
			}
		},
		components:{
			"v-footer":Footer,			
			"v-main":Index_Main,
			"v-ladies":Index_Ladies,
			"v-makeup":Index_Makeup,
			"v-accessories":Index_Accessories,
			"v-man":Index_Man,
			"v-digit":Index_Digit,
			"v-household":Index_Household,
			"v-search":Search
		},
		methods:{
			change(ev){
				ev.target.style.backgroundColor="#442509";
				ev.target.style.color="#fde25c";				
				this.siblings(ev.target).forEach(function(val){
					val.style.backgroundColor="";
					val.style.color="#442509";
				})
				if(ev.target.getAttribute("index")<2){
					ev.target.parentNode.style.left=0
				}
				if(ev.target.getAttribute("index")>=2&&ev.target.getAttribute("index")<5){
					var left=-ev.target.offsetLeft+(ev.target.parentNode.parentNode.offsetWidth/2)-ev.target.offsetWidth/2+"px"
					ev.target.parentNode.style.left=left
				}
				if(ev.target.getAttribute("index")==5){
					var left=-ev.target.offsetLeft+(ev.target.parentNode.parentNode.offsetWidth/2)+"px"
					ev.target.parentNode.style.left=left
				}
				var index_con=ev.target.getAttribute("index");
				this.$refs.con_list.style.left=-index_con*14.4+"rem";
				window.scrollTo(0,0)
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
		mounted(){
			this.$refs.list.firstChild.style.color="#fde25c";
			this.$refs.list.firstChild.style.backgroundColor="#442509";
		}
	}
</script>
<style scoped>
	 *{
	 	margin: 0;
	 	padding: 0;
	 }
	 #index{
	 	width: 100%;
	 }
	 .header{
	 	width: 100%;
	 	height: 4.15rem;
	 	background: #fde25c;
	 	position: fixed;
	 	top: 0;
	 	left: 0;
	 	z-index: 2;
	 }
	 .choices{
	 	width: 100%;
	 	height: 1.6rem;
	 	overflow: hidden;
	 	position: relative;
	 }
	 .choices ul{
	 	width: 25.5rem;
	 	height: 100%;
	 	position: absolute;
	 	left: 0;
	 	top: 0;
	 	transition: all 300ms;
	 }
	 .choices ul li{
	 	float: left;
	 	list-style: none;
	 	font-size: 0.44rem;
	 	line-height: 1.05rem;
	 	padding: 0 0.57rem;
	 	color: #442509;	 	
	 	
	 	border-radius: 0.5rem;
	 	margin: 0 0.42rem;
	 	margin-top: 0.28rem;
	 }
	.con{
		width: 100%;		
		margin-top: 4.15rem;		
		overflow: hidden;
		margin-bottom: 2.05rem;
	}
	.con ul{		
		width: 100.8rem;
		position: relative;
		left: 0;
		top: 0;
		overflow: hidden;
		transition: all 300ms;
	}
	.con ul li{
		list-style: none;
		float: left;
		width: 14.4rem;
	}
</style>