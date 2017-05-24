<template>
	<div class="fc-fill">
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="fc-title navbar-brand">Settings</div>
		</nav>
		<form class="fc-content">
			<div class="form-group fc-group">
				<label for="settings-shuffle">Shuffle</label>
				<div class="checkbox" id="settings-shuffle"  style="margin-top: 0">
					<label>
						<input type="checkbox" v-model="settings.shuffle">Shuffle cards
					</label>
				</div>
			</div>

			<div class="form-group fc-group">
				<label for="settings-timer">Time per card</label>
				<select class="form-control" id="settings-timer"
					v-model="settings.timer">
					<option v-for="t of [5, 10, 15, 20, 30, 40, 60]" :value="t">
						{{ t }} s
					</option>
					<option value="0">No time limit</option>
				</select>
			</div>

			<div class="form-group fc-group">
				<label>Which side to show</label>
				<div class="radio" style="margin-top: 0">
					<label>
						<input type="radio" name="frontback" :value="true"
							v-model="settings.front">
						Show card front
					</label>
				</div>
				<div class="radio">
					<label>
						<input type="radio" name="frontback" :value="false"
							v-model="settings.front">
						Show card back
					</label>
				</div>
			</div>

			<div class="form-group fc-group fc-btn-row">
				<router-link to="/" class="btn btn-default">Cancel</router-link>
				<a @click="save" class="btn btn-primary">Save</a>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'settings',
	data() {
		return {
			// Clone global settings, so they are not overridden if user cancels
			settings: Object.assign({}, this.$root.settings)
		};
	},
	methods: {
		save() {
			this.$root.settings = this.settings;
			this.$router.push('/');
		}
	}
};
</script>

<style scoped>
.fc-group {
	margin-top: 30px;
}
.fc-btn-row > .btn {
	width: 5em;
}
</style>
