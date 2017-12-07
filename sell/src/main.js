// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
// import router from './router';
import VueRouter from 'vue-router';
import Goods from './components/goods/goods';
import Ratings from './components/ratings/ratings';
import Sells from './components/sells/sells';
import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.config.debug = true;

/*
let app = Vue.extend(App);
let router = new VueRouter();

router.map({
'/goods': {
	component: goods
	}
});

router.start(app,'#app');

let Goods = {
	template: `
	<div>I am goods</div>
	`
};

let Ratings = {
	template: `
	<div>I ama ratings</div>
	`
};

let Sells = {
	template: `
	<div>I am sells</div>
	`
};
*/

let routes = [{
	path: '/goods',
	component: Goods
}, {
	path: '/ratings',
	component: Ratings
}, {
	path: '/sells',
	component: Sells
}];

let router = new VueRouter({
	routes: routes,
	linkActiveClass: 'active'
});

let app = new Vue({
	router
}).$mount('#app');

// eslint-disable no-new
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
});
