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
		path:'/a',
		meta:{
			login_required: false,
		},
		component:{
			template:`
				<div>
					<h1>A</h1>
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
		meta:{
			login_required:false,
		},
		component:{
			template:`
				<div>
					<ul>
					<li>帖子列表</li>
					<li>标签管理</li>
					</ul>
					<router-link to="rain" append>后座</router-link>
					<router-view></router-view>
				</div>

				`
			},
			children:[{
				path: 'rain',
				component:{
					template:`
						<div>
							<h2>我喜欢下雨天的自行车后座</h2>
						</div>
					`
				}
			}]
	},	
];

var router = new VueRouter({
	routes: routes,
});

router.beforeEach(function(to,form,next){
	var logged_in = false;
	if(!logged_in&&to.matched.some(function(item){
		return item.meta.login_required;
	})){
		next('/login');
	}else{
		next();
	}
	
});

router.afterEach(function(to,from){
	console.log(to);
	console.log(from);
	console.log(to.matched);
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