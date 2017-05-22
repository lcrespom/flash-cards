<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app'
};
</script>

<style>
#app {
	position: absolute;
	top: 0; left: 0; bottom: 0; right: 0;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.fc-fill {
	height: 100%;
	width: 100%;
}
</style>
