var routes = [
	{
		path:'/',
		component:{
			template:`
				<div>
					<h1>首页</h1>
				</div>
				`
		}
	},
	{
		path:'/login',
		component:{
			template:`
				<div>
					<h1>登录</h1>
					<p>分公司对发生古风歌</p>
					<input type="text">
				</div>
				`
		}
	},
	{
		path:'/post',
		component:{
			template:`
				<div>
					<ul>
					<li>帖子列表</li>
					<li>标签管理</li>
					</ul>
				</div>

				`
			},
	},	
];

var router = new VueRouter({
	routes: routes,
});

router.beforeEach(function(to,form,next){
	var logged_in = false;
	if(!logged_in&&to.path=="/post"){
		next('/login');
	}else{
		next();
	}
	
});

router.afterEach(function(to,from){
	console.log(to);
	console.log(from);
})

new Vue({
	el: "#container",
	router : router,
	methods:{
		surf:function(){
			setTimeout(function(){
				this.router.push('/about');
				setTimeout(function(){
					this.router.push({name:'user',params:{name:'wanghuahua'}});
				},1000);
			},1000);
		}
	}
})