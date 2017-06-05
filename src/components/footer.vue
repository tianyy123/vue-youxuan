<template>
	<div class="footer">		
		<router-link to="/index" activeClass="active">		
			<span class="icon icon-home"></span>
			<p>首页</p>
			<i></i>
		</router-link>		
		<router-link to="/sort" activeClass="active">
			<span class="icon icon-sort"></span>
			<p>分类</p>
			<i></i>
		</router-link>
		<router-link to="/collection" activeClass="active">
			<span class="icon icon-collection"></span>
			<p>收藏</p>
			<i></i>
		</router-link>
		<router-link to="/my" activeClass="active">
			<span class="icon icon-my"></span>
			<p>我的</p>
			<i></i>
		</router-link>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 2.05rem;
		background: #fff;
		display: flex;
		justify-content: space-around;
	}
	a{
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: center;
		text-decoration: none;
		position: relative;
	}
	.active i{
		display: block;
		width: 0.7rem;
		height: 0.7rem;
		background: rgba(253,226,92,0.8);
		border-radius: 50%;
		position: absolute;
		top: 0.15rem;
		right: 0;
	}
	.icon{
		display: inline-block;
		width: 0.9rem;
		height: 0.9rem;
	}
	.icon-home{
		background-image: url(../img/home.png);
		background-size: 0.9rem 0.9rem;
		background-repeat:no-repeat;
	}
	.icon-sort{
		background-image: url(../img/sort.png);
		background-size: 0.9rem 0.9rem;
		background-repeat:no-repeat;
	}
	.icon-collection{
		background-image: url(../img/collection.png);
		background-size: 0.9rem 0.9rem;
		background-repeat:no-repeat;
	}
	.icon-my{
		background-image: url(../img/my.png);
		background-size: 0.9rem 0.9rem;
		background-repeat:no-repeat;
	}
	p{
		font-size: 0.36rem;
		line-height: 0.78rem;
		color: #757575;
	}
</style>