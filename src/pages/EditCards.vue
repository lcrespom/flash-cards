<template>
	<div class="fc-fill">
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="fc-title navbar-brand">Card set details</div>
		</nav>
		<div class="fc-fill fc-content">
			<div class="form-group fc-group">
				<label for="card-name">Question (front)</label>
				<textarea class="form-control" rows="3"
					v-model="front"></textarea>
			</div>
			<div class="form-group fc-group">
				<label for="card-name">Answer (back)</label>
				<textarea class="form-control" rows="3"
					v-model="back"></textarea>
			</div>

			<div class="form-group fc-group fc-prev-next">
				<button @click="move(-1)" class="btn btn-primary"
					:disabled="cardNum == 0">
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				</button>
				&nbsp;
				<span class="fc-card-num">
					{{ cardNum + 1 }} / {{ cards.length }}
				</span>
				&nbsp;
				<button @click="move(1)" class="btn btn-primary">
					<span :class="`glyphicon glyphicon-${nextIcon}`" aria-hidden="true"></span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'edit-cards',
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
		save() {
			//ToDo: save card and navigate back to card details
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
	/* ToDo: vertically center text */
}
.fc-prev-next {
	text-align: center;
}
</style>
