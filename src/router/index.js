import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Settings from '@/components/Settings';
import Play from '@/components/Play';
import Results from '@/components/Results';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/settings',
			name: 'settings',
			component: Settings
		},
		{
			path: '/play/:id',
			name: 'play',
			component: Play
		},
		{
			path: '/results',
			name: 'results',
			component: Results
		}
	]
});
