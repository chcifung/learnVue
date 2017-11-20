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
				</div>
				`
		}
	}
];

var router = new VueRouter({
	routes: routes,
});

new Vue({
	el: "#container",
	router : router,
})