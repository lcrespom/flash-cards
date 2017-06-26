<template>
	<div class="fc-fill">
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="fc-title navbar-brand">Search</div>
		</nav>
		<div class="fc-search-main">
			<div class="input-group fc-content">
				<input class="form-control" v-model="searchText" v-focus
					@input="filterSearch">
				<span class="input-group-addon">
					<button class="fc-search-but">
						<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
					</button>
				</span>
			</div>
			<div class="fc-search-result">
				<div v-for="card of cards" :key="card._id"
					@click="selectCard(card)" class="fc-cards-item">
					<div class="fc-cards-name">{{card.meta.name}}</div>
					<div class="fc-cards-tags">{{card.meta.tags}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { listCards } from '../app/cards';
import focus from '../directives/focus';

function filterCards(cards, searchText) {
	const cardText = c => (c.meta.name + ' / ' + c.meta.tags).toLowerCase();
	const isValidCard = c => cardText(c).indexOf(searchText.toLowerCase()) >= 0;
	return cards.filter(isValidCard);
}

export default {
	name: 'card-search',
	directives: { focus },
	data() {
		return {
			searchText: '',
			cards: [],
		};
	},
	mounted() {
		listCards()
		.then(cards => {
			this.fullCards = cards;
			this.cards = cards;
		});
	},
	methods: {
		filterSearch() {
			this.cards = filterCards(this.fullCards, this.searchText);
		},
		selectCard(card) {
			console.log(card);
		}
	}
};
</script>

<style scoped>
.fc-search-main {
	height: 100%;
	display: flex;
	flex-direction: column;
}
.fc-search-but {
	border: 0;
	background: transparent;
}
.fc-search-result {
	flex: 1;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
}
.fc-cards-item {
	padding: 5px;
	margin: 7px;
	box-shadow: 0px 5px 8px -5px rgba(0,0,0,0.5)
}
.fc-cards-name {
	font-weight: bold;
}
.fc-cards-tags {
	color: #888;
}
</style>
