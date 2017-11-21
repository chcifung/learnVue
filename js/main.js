var routes = [
	{
		path:'/',
		component:{
			template:`
				<div>
					<h1>HOME</h1>
				</div>
				`
		}
	},
	{
		path:'/user',
		components:{
			sidebar:{
				template:`
				<div>
					<ul>
					<li>用户列表</li>
					<li>权限管理</li>
					</ul>
				</div>

				`
			},
			content:{
				template:`
				<div>啊那老大是哦对就是哦i附件是哦对房价</div>
				`
			}
		}
	},
	{
		path:'/post',
		components:{
			sidebar:{
				template:`
				<div>
					<ul>
					<li>帖子列表</li>
					<li>标签管理</li>
					</ul>
				</div>

				`
			},
			content:{
				template:`
				<div>啊那老大是哦对就是哦i附件是哦对房价</div>
				`
			}
		}
	},
	{
		path:'/about',
		component:{
			template:`
				<div>
					<h1>About US</h1>
				</div>
				`
		}
	},
	{
		path:'/user/:name',
		name: 'user',
		component:{
			template:`
				<div>
					<h1>大家好，我叫{{$route.params.name}}</h1>
					<p>我今年{{$route.query.age}}岁了</p>
					<router-link to="more" append>更多信息</router-link>
					<router-view></router-view>
				</div>
				`
		},
		children: [
		{
			path:'more',
			component:{
				template:`
					<div>
					用户：{{$route.params.name}}的详细信息
					饭还哦发货速度发货速度就发货速度加快和好的说法个电话关机的咖啡馆货到付款</div>
				`
			}
		}
		],
	},
	
];

var router = new VueRouter({
	routes: routes,
});

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