<template>
	<div class="fc-game">
		<!-- Game number {{ $route.params.id }} -->
		<div class="fc-game-status">
			<span>00:00</span>
			<span>1/10</span>
		</div>
		<div class="fc-card">
		</div>
		<game-buttons />
	</div>
</template>

<script>
import GameButtons from './GameButtons';

export default {
	name: 'play',
	components: { GameButtons }
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
	border: 2px solid #888;
	border-radius: 15px;
	margin: 7px;
	flex: 1;
}
</style>
