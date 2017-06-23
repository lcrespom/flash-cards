<template>
	<div class="fc-fill">
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="fc-title navbar-brand">Search</div>
		</nav>
		<div class="input-group fc-content">
		    <input class="form-control" v-model="search" v-focus>
			<span class="input-group-addon">
				<button class="fc-search-but">
					<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
				</button>
			</span>
		</div>
	</div>
</template>

<script>
import { listCards } from '../app/cards';
import focus from '../directives/focus';


export default {
	name: 'card-search',
	directives: { focus },
	data() {
		return {
			search: ''
		};
	},
	mounted() {
		listCards()
		.then(cards => {
			console.log(cards);
		});
	},
	methods: {
	}
};
</script>

<style scoped>
.fc-search-but {
	border: 0;
	background: transparent;
}
</style>
