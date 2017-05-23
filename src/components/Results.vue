<template>
	<div class="fc-fill">
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="fc-title navbar-brand">Results</div>
		</nav>
		<div class="fc-content">
			<div class="fc-group">
				<fc-stat icon="ok" text="OK" :value="$root.stats.ok" />
				<fc-stat icon="question-sign" text="Unknown" :value="$root.stats.unknown" />
				<fc-stat icon="remove" text="Fail" :value="$root.stats.fail" />
			</div>
			<div class="fc-btn-row fc-group">
				<router-link :to="{ name: 'play', params: { id: 1 } }"
					class="btn btn-primary btn-lg">Again</router-link>
				<router-link to="/"
					class="btn btn-primary btn-lg">Home</router-link>
			</div>
		</div>
	</div>
</template>

<script>
const FcStat = {
	props: ['icon', 'text', 'value'],
	template: `
		<div class="fc-stat">
			<span :class="'glyphicon glyphicon-' + icon"></span>
			{{ text }}: {{ value }}
		</div>
	`
};

export default {
	name: 'results',
	components: { FcStat }
};
</script>

<style scoped>
.fc-group {
	margin-top: 30px;
}
.fc-stat {
	font-size: 200%;
	text-align: center;
}
.fc-btn-row > button {
	width: 6em;
}
</style>
