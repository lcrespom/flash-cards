<template>
	<div class="fc-game-buttons">
		<div v-if="showFlip" class="fc-button-row">
			<button class="fc-game-btn btn btn-primary"
				@click="$emit('card-turn')">
				<span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
			</button>
		</div>
		<div class="fc-button-row">
			<button class="fc-game-btn btn btn-success"
				@click="$emit('card-ok')">
				<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
			</button>
			<button class="fc-game-btn btn btn-warning"
				@click="$emit('card-unknown')">
				<span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
			</button>
			<button class="fc-game-btn btn btn-danger"
				@click="$emit('card-fail')">
				<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'game-buttons',
	props: ['showFlip']
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
.fc-game-btn:focus {
	outline: 0;
}
.fc-game-btn > span {
	font-size: 170%;
}
</style>
