<template>
	<div class="fc-game-status">
		<span>{{ time }}</span>
		<span>
			<span class="glyphicon glyphicon-ok"></span> {{ stats.ok }}
			&nbsp;
			<span class="glyphicon glyphicon-question-sign"></span> {{ stats.unknown }}
			&nbsp;
			<span class="glyphicon glyphicon-remove"></span> {{ stats.fail }}
		</span>
		<span>{{ cardNum + 1 }}/{{ cards.length }}</span>
	</div>
</template>

<script>
function formatInterval(ms) {
	let secs = Math.round(ms / 1000);
	let mins = Math.round(secs / 60);
	secs = '' + (secs % 60);
	if (secs.length < 2) secs = '0' + secs;
	return `${mins}:${secs}`;
}

export default {
	name: 'game-status',
	props: ['stats', 'cardNum', 'cards'],
	data() {
		return {
			time: '0:00'
		};
	},
	mounted() {
		this.initialTime = Date.now();
		this.interval = setInterval(
			_ => this.time = formatInterval(Date.now() - this.initialTime), 1000);
	},
	destroyed() {
		clearInterval(this.interval);
	}
};
</script>

<style scoped>
.fc-game-status {
	display: flex;
	justify-content: space-between;
	margin: 3px 7px -3px 7px;
	font-size: 150%;
}
</style>
