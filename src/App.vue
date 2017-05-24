<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
const settings = {
	shuffle: true,
	timer: 0,
	front: true
};

export default {
	name: 'app',
	mounted() {
		this.$root.settings = settings;
	}
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
@media (min-width: 768px) {
	#app {
		margin: auto;
		width: 400px;
		height: 600px;
	}
}

.fc-fill {
	height: 100%;
	width: 100%;
}
.fc-title {
	width: 100%;
	text-align: center;
	color: #444;
	font-weight: bold;
	font-size: 140%;
}
.fc-content {
	padding: 60px 10px 10px;
}
.fc-btn-row {
	display: flex;
	justify-content: space-around;
	width: 100%;
}
</style>
