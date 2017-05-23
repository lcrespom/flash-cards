<template>
	<div class="fc-game fc-fill">
		<!-- Status -->
		<game-status :stats="stats" :cards="cards" :cardNum="cardNum" />
		<!-- Cards -->
		<div class="fc-card-box">
			<transition name="swipe">
				<div class="fc-card fc-fill" :key="cardNum">
					<div class="fc-card-flipper fc-fill"
						:class="{ flipped: flipped }"
						@click="flip">
						<div class="fc-card-front">{{ card.front }}</div>
						<div class="fc-card-back">{{ card.back }}</div>
					</div>
				</div>
			</transition>
		</div>
		<!-- Buttons -->
		<game-buttons :show-flip="false"
			@card-ok="cardOK" @card-fail="cardFail" @card-unknown="cardUnknown" />
	</div>
</template>

<script>
import GameStatus from './GameStatus';
import GameButtons from './GameButtons';
import { loadCards } from '../app/cards';

const INITIAL_STATS = {
	ok: 0, fail: 0, unknown: 0
};

function shuffleArray(a) {
	let r = a.slice();
	let max = r.length;
	for (let i = 0; i < max - 1; i++) {
		let pos = Math.floor(Math.random() * (max - i));
		let temp = r[pos];
		r[pos] = r[max - i - 1];
		r[max - i - 1] = temp;
	}
	return r;
}

export default {
	name: 'play',
	components: { GameStatus, GameButtons },
	data() {
		return {
			flipped: false,
			cards: [],
			stats: Object.assign({}, INITIAL_STATS),
			card: { front: 'Loading...', back: 'Loading...' },
			cardNum: 0
		};
	},
	mounted() {
		loadCards(this.$route.params.id)
		.then(cards => {
			this.cards = this.$root.settings.shuffle ? shuffleArray(cards) : cards;
			this.stats = Object.assign({}, INITIAL_STATS);
			this.card = this.cards[0];
			this.cardNum = -1;
			this.nextCard();
		});
	},
	methods: {
		flip() {
			this.flipped = !this.flipped;
		},
		cardOK() {
			this.stats.ok++;
			this.nextCard();
		},
		cardFail() {
			this.stats.fail++;
			this.nextCard();
		},
		cardUnknown() {
			this.stats.unknown++;
			this.nextCard();
		},
		nextCard() {
			if (this.cardNum < this.cards.length - 1) {
				this.cardNum++;
				this.card = this.cards[this.cardNum];
				this.flipped = false;
				if (!this.$root.settings.front) {
					let f = this.card.front;
					this.card.front = this.card.back;
					this.card.back = f;
					// ToDo: swap colors too
				}
			}
			else {
				this.$root.stats = this.stats;
				this.$router.push('/results');
			}
		}
	}
};
</script>

<style scoped>
.fc-game {
	display: flex;
	flex-direction: column;
	overflow: hidden;
}
.fc-card-box {
	margin: 7px;
	flex: 1;
	position: relative;
}
.fc-card {
	perspective: 1000px;
	position: absolute;
}

.swipe-enter-active, .swipe-leave-active {
	transition: transform 0.5s;
}
.swipe-enter {
	transform: translateX(110%);
}
.swipe-leave-to {
	transform: translateX(-110%);
}

/* Card flipping obtained from https://davidwalsh.name/css-flip */
.fc-card-flipper {
	transition: 0.5s;
	transform-style: preserve-3d;
}
.fc-card-flipper.flipped {
	transform: rotateY(-180deg);
}
.fc-card-front, .fc-card-back {
	backface-visibility: hidden;
	position: absolute;
	top: 0; left: 0; bottom: 0; right: 0;
	border: 2px solid #888;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	font-size: 300%;
}
.fc-card-front {
	z-index: 2;
	background: #ffc;
}
.fc-card-back {
	background: #aa8;
	color: white;
	transform: rotateY(180deg);
}
</style>
