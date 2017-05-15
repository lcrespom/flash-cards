import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Play from '@/components/Play';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/play/:id',
			name: 'play',
			component: Play
		}
	]
});
