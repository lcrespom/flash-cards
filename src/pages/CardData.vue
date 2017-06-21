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
			<div class="form-group fc-group fc-btn-row">
				<router-link to="/" class="btn btn-default">Home</router-link>
				<router-link v-if="!isNew"
					class="btn btn-primary"
					:to="{ name: 'play', params: { id: $root.cardId } }">
					play
				</router-link>
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
		// ToDo: if (this.$route.params.id) loadCards(this.$route.params.id)
		let meta = this.$root.cardMeta || {
			name: '',
			tags: '',
			description: ''
		};
		return {
			meta,
			isNew: true
		};
	},
	mounted() {
		if (this.$route.name == 'details-new') {
			this.$root.cardId = null;
			this.$root.cardMeta = null;
		}
		else {
			this.isNew = false;
		}
	},
	methods: {
		edit(evt) {
			if (!this.$refs.form.checkValidity()) return;
			evt.preventDefault();
			saveCards(this.$root.cardId, this.meta, this.$root.cards)
			.then(id => {
				this.$root.cardId = id;
				this.$root.cardMeta = this.meta;
				this.$router.push({ name: 'edit', params: { id }});
			});
		}
	}
};
</script>

<style scoped>
.fc-btn-row > .btn {
	width: 5em;
}
</style>
