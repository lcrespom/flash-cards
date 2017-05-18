<template>
	<div class="fc-game">
		<!-- Game number {{ $route.params.id }} -->
		<div class="fc-game-status">
			<span>{{ time }}</span>
			<span>
				<span class="glyphicon glyphicon-ok"></span>: {{ stats.ok }} -
				<span class="glyphicon glyphicon-remove"></span>: {{ stats.fail }} -
				<span class="glyphicon glyphicon-question-sign"></span>: {{ stats.unknown }}
			</span>
			<span>{{ cardNum + 1 }}/{{ cards.length }}</span>
		</div>
		<div class="fc-card">
			<div class="fc-card-flipper"
				:class="{ flipped: flipped }"
				@click="flip">
				<div class="fc-card-front">{{ card.front }}</div>
				<div class="fc-card-back">{{ card.back }}</div>
			</div>
		</div>
		<game-buttons @card-turn="flip"
			@card-ok="cardOK" @card-fail="cardFail" @card-unknown="cardUnknown" />
	</div>
</template>

<script>
import GameButtons from './GameButtons';
import { loadCards } from '../app/cards';

const INITIAL_STATS = {
	ok: 0, fail: 0, unknown: 0
};

function formatInterval(ms) {
	let secs = Math.round(ms / 1000);
	let mins = Math.round(secs / 60);
	secs = '' + (secs % 60);
	if (secs.length < 2) secs = '0' + secs;
	return `${mins}:${secs}`;
}


export default {
	name: 'play',
	components: { GameButtons },
	data() {
		return {
			flipped: false,
			cards: [],
			stats: INITIAL_STATS,
			card: { front: 'Loading...', back: 'Loading...' },
			cardNum: 0,
			time: '0:00',
		};
	},
	mounted() {
		loadCards(this.$route.params.id)
		.then(cards => {
			this.cards = cards;
			this.stats = INITIAL_STATS;
			this.card = cards[0];
			this.cardNum = 0;
		});
		this.initialTime = Date.now();
		this.interval = setInterval(
			_ => this.time = formatInterval(Date.now() - this.initialTime), 1000);
	},
	destroyed() {
		clearInterval(this.interval);
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
			}
			else {
				//ToDo: finish game
			}
		}
	}
};
</script>

<style scoped>
.fc-game {
	position: absolute;
	top: 0; left: 0; bottom: 0; right: 0;
	display: flex;
	flex-direction: column;
}
.fc-game-status {
	display: flex;
	justify-content: space-between;
	margin: 0 7px;
	font-size: 150%;
}
.fc-card {
	margin: 7px;
	flex: 1;
	perspective: 1000px;
}
.fc-card-flipper {
	/* Card flipping obtained from https://davidwalsh.name/css-flip */
	height: 100%;
	width: 100%;
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
