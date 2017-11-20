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
})