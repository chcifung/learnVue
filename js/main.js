Vue.component('balance',{
	template:
	`
	<div>
		<show @show-balance="show_balance"></show>
		<div v-if="show">
		您的余额：38.22元</div>
	</div>
	`
	,
	methods:{
		show_balance:function(data){
			this.show=true;
			console.log(data);
		}
	},
	data:function(){
		return {
			show: false,
		};
	}
});

Vue.component('show',{
	template: "<button @click='on_click()'>显示余额</button>",
	methods:{
		on_click:function(){
			this.$emit('show-balance',{a:1,b:2});
		}
	}
})

Vue.component('like',{
	template:"#like-component-tpl",
	data:function(){
		return {
			like_count:10,
			liked:false,
		}
	},
	methods: {
		toggle_like:function(){
			if(!this.liked){
				this.like_count++;
			}else{
				this.like_count--;
			};
			this.liked=!this.liked;
			
		}
	}
});

new Vue({
	el:"#container",
});