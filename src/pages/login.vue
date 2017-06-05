<template>
	<div class="login">
		<div class="header">
			<img src="../img/logo.png"/>
			<p>熊猫优选</p>
		</div>
		<div class="table">
			<input type="text" placeholder="请输入手机号" class="phone" v-model="phone" @keyup="inpNum"/>
			<div class="box">
				<input type="text" placeholder="请输入验证码" class="test" v-model="pwd" @keyup="inpPwd"/>
				<span ref="yzm">{{yzm}}</span>
			</div>			
			<button ref="log" @click="login">快速登录</button>
		</div>
		<div class="back" @click="goBack">
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				phone:"",
				pwd:"",
				yzm:"",
				status_phone:false,
				status_pwd:false
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			},
			inpNum(){
				var reg=/^\d{11}$/;
				if(reg.test(this.phone)){
					this.$refs.yzm.style.backgroundColor="#fde25c";
					this.status_phone=true
					if(this.status_pwd){
						this.$refs.log.style.backgroundColor="#fde25c";
						this.$refs.log.style.color="#000";
					}
				}else if(!reg.test(this.phone)){
					this.$refs.yzm.style.backgroundColor="#f5f5f5";
					this.$refs.log.style.backgroundColor="#f5f5f5";
					this.status_phone=false
				}
			},
			inpPwd(){					
				if(this.pwd==this.yzm&&this.status_phone){
					this.status_pwd=true
					this.$refs.log.style.backgroundColor="#fde25c";
					this.$refs.log.style.color="#000";
				}else if(this.pwd!=this.yzm){
					this.status_pwd=false
					this.$refs.log.style.backgroundColor="#f5f5f5";
				}												
			},
			login(){
				if(this.status_phone&&this.status_pwd){
					var username = this.phone
					this.$store.commit("setUsername",username)
					this.$router.go(-1)
				}
			}
		},
		created(){
			var arr=[0,1,2,3,4,5,6,7,8,9];
			var str=""
			for(var i=0;i<4;i++){
				var random=parseInt(Math.random()*arr.length)
				str+=arr[random]
			}
			this.yzm=str
		}		
	}
</script>

<style scoped>
	.login{
		position: relative;
	}
	.header{
		width: 100%;
		text-align: center;
		padding-top: 2.66rem;
		padding-bottom: 0.8rem;
	}
	.header img{
		display: block;
		margin: 0 auto;
		width: 1.68rem;
		height: 1.68rem;
	}
	.header p{
		font-size: 0.48rem;
		line-height: 1.76rem;
		color: #757575;
	}
	.table{
		text-align: center;
	}
	.table input{
		
		width: 10.24rem;
		height: 1.8rem;
		border: 1px solid #f0f0f0;
		border-radius: 0.9rem;
		margin: 0 auto;
		padding-left: 1.9rem;
		margin-bottom: 0.5rem;
		font-size: 0.46rem;
		line-height: 1.8rem;
		color: #9e9e9e;
	}
	.phone{
		background-image: url(../img/phone.png);
		background-repeat: no-repeat;
		background-size: 0.9rem 0.9rem;
		background-position: 0.7rem center;
	}
	.test{
		background-image: url(../img/lock.png);
		background-repeat: no-repeat;
		background-size: 0.9rem 0.9rem;
		background-position: 0.7rem center;
	}
	.box{
		position: relative;
	}
	.box span{
		display: block;
		width: 3.45rem;
		height: 1.14rem;
		background: #f5f5f5;
		font-size: 0.4rem;
		line-height: 1.14rem;
		text-align: center;
		border-radius: 0.507rem;
		position: absolute;
		right: 1.67rem;
		top: 0.4rem;
	}
	button{
		width: 12.14rem;
		height: 1.3rem;
		border-radius: 0.65rem;
		background: #f5f5f5;
		font-size: 0.52rem;
		line-height: 1.3rem;
		text-align: center;
		border: 0;
		color: #b1a9a5;
	}
	.back{
		width: 0.9rem;
		height: 0.9rem;
		background-image: url(../img/error.png);
		background-repeat: no-repeat;
		background-size: 0.9rem 0.9rem;
		position: absolute;
		top: 1.95rem;
		right: 1.1rem;
	}
</style>