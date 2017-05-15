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
.fc-card {
	position: absolute;
	top: 25px; left: 10px; bottom: 140px; right: 10px;
	border: 2px solid #888;
	border-radius: 15px;
}
</style>
