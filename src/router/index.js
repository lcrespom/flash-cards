import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Settings from '@/pages/Settings';
import Play from '@/pages/Play';
import Results from '@/pages/Results';
import CardData from '@/pages/CardData';
import EditCards from '@/pages/EditCards';
import Search from '@/pages/Search';

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
		},
		{
			path: '/details/new',
			name: 'details-new',
			component: CardData
		},
		{
			path: '/details',
			name: 'details',
			component: CardData
		},
		{
			path: '/edit/:id',
			name: 'edit',
			component: EditCards
		},
		{
			name: 'search',
			path: '/search',
			component: Search
		}
	]
});
