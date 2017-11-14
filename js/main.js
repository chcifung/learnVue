var container= new Vue({
	el: "#container",
	components: {
		'alert':{
			template: '<button @click="on_click">贪贪贪</button>',
			methods:{
			on_click:function(){
				alert('a');
				}
					}
		}
		
	}		
});
