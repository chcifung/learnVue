var container= new Vue({
	el: "#container",
	methods:{
		onClick:function(){
			console.log("mouose click");
		},
		onEnter:function(){
			console.log('mouse enter');
		},
		onOut:function(){
			console.log("mouse leave");
		},
		onSubmit:function(){
			console.log("submit");
		},
		keyUp:function(){
			console.log('keyup');
		}
	},
	data:{
		sex: 'male',
		name: "ff",
		url:"http://readhub.me",
		img: "http://g.hiphotos.baidu.com/image/h%3D300/sign=827213cf3afa828bce239be3cd1e41cd/0eb30f2442a7d933f6d973b9a44bd11372f00182.jpg",
		cls: "btn btn-default"
	}
})