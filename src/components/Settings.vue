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
						<input type="checkbox">Shuffle cards
					</label>
				</div>
			</div>

			<div class="form-group fc-group">
				<label for="settings-timer">Time per card</label>
				<select class="form-control" id="settings-timer">
					<option value="5">5 s</option>
					<option value="5">10 s</option>
					<option value="15">15 s</option>
					<option value="20">20 s</option>
					<option value="30">30 s</option>
					<option value="40">40 s</option>
					<option value="50">50 s</option>
					<option value="60">60 s</option>
					<option value="0">No time limit</option>
				</select>
			</div>

			<div class="form-group fc-group">
				<label>Which side to show</label>
				<div class="radio" style="margin-top: 0">
					<label>
						<input type="radio" name="frontback" value="front" checked>
						Show card front
					</label>
				</div>
				<div class="radio">
					<label>
						<input type="radio" name="frontback" value="back">
						Show card back
					</label>
				</div>
			</div>

			<div class="form-group fc-group fc-btn-row">
				<button class="btn btn-default">Cancel</button>
				<button class="btn btn-primary">Save</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'settings'
};
</script>

<style scoped>
.fc-title {
	width: 100%;
	text-align: center;
	color: #444;
}
.fc-content {
	padding: 60px 10px 10px;
}
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
