
import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Index from "../pages/index"
import Sort from "../pages/sort"
import Collection from "../pages/collection"
import My from "../pages/my"
import Categories from "../pages/categories"
import Login from "../pages/login"
import Search from "../pages/search"
import Result from "../pages/result"
const routes=[
	{path:"/index",name:"index",component:Index},
	{path:"/sort",name:"sort",component:Sort},	
	{path:"/collection",name:"collection",component:Collection},
	{path:"/my",name:"my",component:My},	
	{path:"/categories/:uid",name:"categories",component:Categories},
	{path:"/login",name:"login",component:Login},
	{path:"/search",name:"search",component:Search},
	{path:"/result/:uid",name:"result",component:Result},
	{path:"*",redirect:"/index"},
]

const router=new VueRouter({
	routes,
	mode:"history"
})



export default router;