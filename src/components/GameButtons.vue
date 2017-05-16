<template>
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
</template>

<script>
export default {
	name: 'game-buttons'
};
</script>

<style scoped>
.fc-button-row {
	display: flex;
	justify-content: space-around;
	margin-top: 5px;
	margin-bottom: 7px;
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
