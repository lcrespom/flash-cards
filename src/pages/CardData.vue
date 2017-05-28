<template>
	<div class="fc-fill">
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="fc-title navbar-brand">Card set details</div>
		</nav>
		<form class="fc-fill fc-content" ref="form">
			<div class="form-group fc-group">
				<label for="card-name">Card set name</label>
				<input class="form-control" required v-model="meta.name" v-focus>
			</div>
			<div class="form-group fc-group">
				<label for="card-name">Tags</label>
				<input class="form-control" v-model="meta.tags">
			</div>
			<div class="form-group fc-group">
				<label for="card-name">Description</label>
				<textarea class="form-control" rows="3"
					v-model="meta.description"></textarea>
			</div>
			<!-- ToDo: select buttons depending on route,
				add a "play" button if route is not .../new -->
			<div class="form-group fc-group fc-btn-row">
				<a @click="back" class="btn btn-default">Back</a>
				<button type="submit" @click="edit($event)"
					class="btn btn-primary">Edit</button>
			</div>
		</form>
	</div>
</template>

<script>
import { saveCards } from '../app/cards';
import focus from '../directives/focus';

export default {
	name: 'card-data',
	directives: { focus },
	data() {
		let meta = this.$root.cardMeta || {
			_id: '',
			name: '',
			tags: '',
			description: ''
		};
		return {
			meta
		};
	},
	methods: {
		back() {
			this.$router.back();
		},
		edit(evt) {
			if (!this.$refs.form.checkValidity()) return;
			evt.preventDefault();
			let id = saveCards(this.meta);
			this.$root.cardMeta = this.meta;
			this.$router.push({ name: 'edit', params: { id }});
		}
	}
};
</script>

<style scoped>
.fc-btn-row > .btn {
	width: 5em;
}
</style>
