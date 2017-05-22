<template>
	<div class="fc-fill">
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="fc-title navbar-brand">Results</div>
		</nav>
		<div class="fc-content">
			OK: {{ $root.stats.ok }}<br/>
			Unknown: {{ $root.stats.unknown }}</br>
			Fail: {{ $root.stats.fail }}<br/>
			<router-link :to="{ name: 'play', params: { id: 1 } }"
				class="btn btn-primary">Again</router-link>
			<router-link to="/"
				class="btn btn-primary">Home</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'results'
};
</script>

<style scoped>
.fc-group {
	margin-top: 30px;
}
.fc-btn-row {
	display: flex;
	justify-content: space-around;
	width: 100%;
}
.fc-btn-row > button {
	width: 5em;
}
</style>
