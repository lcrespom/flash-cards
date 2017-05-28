<template>
	<div class="fc-fill">
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="fc-title navbar-brand">Card set details</div>
		</nav>
		<div class="fc-fill fc-content">
			<div class="form-group fc-group">
				<label for="card-name">Question (front)</label>
				<textarea class="form-control" rows="3"
					v-model="front" v-focus></textarea>
			</div>
			<div class="form-group fc-group">
				<label for="card-name">Answer (back)</label>
				<textarea class="form-control" rows="3"
					v-model="back"></textarea>
			</div>

			<div class="form-group fc-group fc-edit-buttons">
				<div>
					<button @click="move(-1)" class="btn btn-info"
						:disabled="cardNum == 0">
						<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					</button>
					&nbsp;
					<span class="fc-card-num">
						{{ cardNum + 1 }}/{{ cards.length }}
					</span>
					&nbsp;
					<button @click="move(1)" class="btn btn-info">
						<span :class="`glyphicon glyphicon-${nextIcon}`" aria-hidden="true"></span>
					</button>
				</div>
				<button @click="remove" class="btn btn-warning"
					:disabled="cards.length <= 1">
					<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
				</button>
				<button @click="save" class="btn btn-primary">
					<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { saveCards } from '../app/cards';
import focus from '../directives/focus';

export default {
	name: 'edit-cards',
	directives: { focus },
	data() {
		return {
			front: '',
			back: '',
			cards: [{ front: '', back: '' }],
			cardNum: 0,
			nextIcon: 'plus'
		};
	},
	methods: {
		move(num) {
			this.storeCard();
			this.cardNum += num;
			this.update();
		},
		remove() {
			this.cards.splice(this.cardNum, 1);
			if (this.cardNum >= this.cards.length)
				this.cardNum--;
			this.update();
		},
		save() {
			saveCards(this.$root.cardMeta, this.cards);
			this.$router.back();
		},
		storeCard() {
			this.cards[this.cardNum] = { front: this.front, back: this.back };
		},
		update() {
			if (this.cardNum >= this.cards.length)
				this.cards.push({ front: '', back: '' });
			let card = this.cards[this.cardNum];
			this.front = card.front;
			this.back = card.back;
			this.nextIcon = this.cardNum < this.cards.length - 1
				? 'chevron-right'
				: 'plus';
		}
	}
};
</script>

<style scoped>
.fc-btn-row > .btn {
	width: 3em;
}
.fc-card-num {
	font-size: 150%;
	vertical-align: middle;
}
.fc-edit-buttons {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
textarea {
	font-size: 120%;
}
</style>
