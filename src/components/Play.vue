<template>
	<div class="fc-game">
		<!-- Game number {{ $route.params.id }} -->
		<div class="fc-game-status">
			<span>00:00</span>
			<span>1/10</span>
		</div>
		<div class="fc-card">
			<div class="fc-card-flipper"
				:class="{ flipped: flipped }"
				@click="flip">
				<div class="fc-card-front">Front</div>
				<div class="fc-card-back">Back</div>
			</div>
		</div>
		<game-buttons @card-turn="flip"/>
	</div>
</template>

<script>
import GameButtons from './GameButtons';

export default {
	name: 'play',
	components: { GameButtons },
	data() {
		return {
			flipped: false
		};
	},
	methods: {
		flip() {
			this.flipped = !this.flipped;
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
