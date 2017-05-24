<template>
	<div class="fc-fill">
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="fc-title navbar-brand">Flash Cards</div>
		</nav>
		<div class="fc-home-buttons fc-fill fc-content">
			<router-link to="search"
				class="fc-home-btn btn btn-primary btn-lg">Search</router-link>
			<router-link to="details/new"
				class="fc-home-btn btn btn-primary btn-lg">New</router-link>
			<router-link to="settings"
				class="fc-home-btn btn btn-primary btn-lg">Settings</router-link>
			<router-link :to="{ name: 'play', params: { id: 1 } }"
				class="fc-home-btn btn btn-primary btn-lg">Play (testing)</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'home'
};
</script>

<style scoped>
.fc-home-buttons {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.fc-home-btn {
	min-width: 10em;
}
</style>
