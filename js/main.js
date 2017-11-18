var Event = new Vue();


Vue.component('huahua',{
	template:`
	<div>我说的是<input @keyup="onchange()" v-model="isaid"> {{isaid}}</div>`,
	data: function(){
		return {
			isaid:'',
		}
	},
	methods:{
		onchange:function(){
			Event.$emit('huahua-said-something',this.isaid);
		}
	},
});

Vue.component('shuandan',{
	template: `
		<div>
		花花说：{{huahuasaid}}
		</div>
			`,
	data:function(){
		return {
			huahuasaid: '',
		};
	},
	mounted: function(){
		var me = this;
		Event.$on('huahua-said-something',function(data){
			console.log(data);
			me.huahuasaid = data;
		})
	}
});

new Vue({
	el:"#container",
});