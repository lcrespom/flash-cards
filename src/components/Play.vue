<template>
	<div class="fc-game">
		<!-- Game number {{ $route.params.id }} -->
		<div class="fc-game-status">
			<span>00:00</span>
			<span>1/10</span>
		</div>
		<div class="fc-card">
		</div>
		<div class="fc-game-buttons">
			<div class="fc-button-row">
				<button class="fc-game-btn btn btn-primary">
					<div class="fc-game-turn">↩️</div>
				</button>
			</div>
			<div class="fc-button-row">
				<button class="fc-game-btn btn btn-success">
					<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
				</button>
				<button class="fc-game-btn btn btn-danger">
					<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
				</button>
				<button class="fc-game-btn btn btn-warning">
					<span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'play'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fc-card {
	position: absolute;
	top: 25px; left: 10px; bottom: 140px; right: 10px;
	border: 2px solid #888;
	border-radius: 15px;
}

.fc-game-buttons {
	position: absolute;
	bottom: 10px;
	left: 0; right: 0;
}
.fc-button-row {
	display: flex;
	justify-content: space-around;
	margin-top: 15px;
}
.fc-game-btn {
	width: 50px;
	height: 50px;
	padding: 0;
}
.fc-game-btn > span {
	font-size: 170%;
}
.fc-game-turn {
  font-size: 300%;
  margin-top: -6px;
}
</style>
