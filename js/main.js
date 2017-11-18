Vue.directive('pin',function(el,binding){
	var pinned = binding.value;
	var position = binding.modifiers;
	var warning = binding.arg;
	if(pinned){
		el.style.position = 'fixed';
		for(var key in position){
			if(position[key]){
				el.style[key] = "10px";
			}
		}
		if(warning==='true'){
			el.style.backgroundColor= "#935";
			el.style.color= "yellow";
		}
		
	}else{
		el.style.position = 'static';
	}
})

Vue.component('tooltip',{});
Vue.component('popup',{
	template: `<div>
		<button @click="toggle">显示或隐藏</button>
		<div v-if="visible">
			<h4>3636</h4>
			<p>今后捷豹路虎
一定会与中国公司百度、阿里巴巴和腾讯（下称 BAT）合作 ... 在中国，捷豹路虎计划引入路虎揽胜运动版插电混合动力车型，并且会在 2019 年左右推出本土化生产新能源产品 ... 他透露，捷豹路虎不会像大众、福特等公司一样另寻合作伙伴，而是会参与现有合作伙伴奇瑞汽车正在进行的新能源项目。</p>
		</div>
	</div>`,
	data:function(){
		return {
			visible:false,
		}
	},
	methods:{
		toggle:function(){
			this.visible = !this.visible;
		}
	}
});

new Vue({
	el:"#container",
	data:{
		price:10,
		length:134,
		card1:{
			pinned:true,
		},
		card2:{
			pinned:false,
		}
	}
});