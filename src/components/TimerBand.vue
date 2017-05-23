<template>
	<div class="fc-timer-band"
		:class="computeClass()"
		:style="{ width: '' + width + '%' }">
	</div>
</template>

<script>
export default {
	name: 'timer-band',
	props: ['time'],
	data() {
		return {
			width: 100,
			running: false
		};
	},
	methods: {
		start() {
			this.running = true;
			this.startTime = Date.now();
			this.loop();
		},
		stop() {
			this.running = false;
			this.width = 0;
		},
		loop() {
			window.requestAnimationFrame(_ => {
				if (!this.running) return;
				this.elapsed = Date.now() - this.startTime;
				let w = 100 * this.elapsed / this.time;
				this.width = w <= 100 ? 100 - w : 0;
				if (this.elapsed < this.time)
					this.loop();
				else
					this.$emit('done');
			});
		},
		computeClass() {
			if (this.width < 15) return { 'fc-timer-danger': true };
			if (this.width < 35) return { 'fc-timer-warning': true };
			return {};
		}
	}
};
</script>

<style scoped>
.fc-timer-band {
	height: 10px;
	background-color: green;
	border-radius: 5px;
	transition: background-color 0.5s;
}
.fc-timer-warning {
	background-color: orange;
}
.fc-timer-danger {
	background-color: red;
}
</style>
