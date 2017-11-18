var base = {
	methods:{
		show:function(){
			this.visible = true;
		},
		hide:function(){
			this.visible = false;
		},
		toggle:function(){
			this.visible = !this.visible;
		},
	},
	data:function(){
		return {
			visible: false,
		}
	},
}


Vue.component('tooltip',{
	template:`
	<div>
		<span @mouseenter="show" @mouseleave="hide">354</span>
		<div v-if="visible">
		今后捷豹路虎
一定会与中国公司百度、阿里巴巴
		</div>
	</div>`,
	mixins:[base],
	data:function(){
		return {
			visible:true,
		}
	}
	
});
Vue.component('popup',{
	template: `<div>
		<button @click="toggle">显示或隐藏</button>
		<div v-if="visible">
			<h4>3636</h4>
			<p>今后捷豹路虎
一定会与中国公司百度、阿里巴巴和腾讯（下称 BAT）合作 ... 在中国，捷豹路虎计划引入路虎揽胜运动版插电混合动力车型，并且会在 2019 年左右推出本土化生产新能源产品 ... 他透露，捷豹路虎不会像大众、福特等公司一样另寻合作伙伴，而是会参与现有合作伙伴奇瑞汽车正在进行的新能源项目。</p>
		</div>
	</div>`,
	mixins:[base],
});

new Vue({
	el:"#container",
});