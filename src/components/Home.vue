<template>
	<div>
		<div class="fc-btn-box">
			<router-link to="search" class="fc-home-btn btn btn-primary">Search</router-link>
		</div>
		<div class="fc-btn-box">
			<router-link to="new" class="fc-home-btn btn btn-primary">New</router-link>
		</div>
		<div class="fc-btn-box">
			<router-link :to="{ name: 'play', params: { id: 1 } }"
				class="fc-home-btn btn btn-primary">Play (testing)</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'home'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fc-btn-box {
	margin: 2em;
}
.fc-home-btn {
	min-width: 10em;
}
</style>
