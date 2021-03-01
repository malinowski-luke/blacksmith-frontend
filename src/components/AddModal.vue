<template>
	<b-modal
		:id="modalId"
		title="Add Item"
		ok-title="Add"
		ok-variant="danger"
		header-bg-variant="success"
		header-border-variant="success"
		header-text-variant="light"
		body-bg-variant="dark"
		body-text-variant="light"
		footer-bg-variant="dark"
		footer-border-variant="dark"
		@ok="test"
		@hidden="test"
	>
		<template>
			<h5>Please Enter a vaild Amazon Item URL</h5>
			<input
				placeholder="https://www.amazon.com/Hello_world"
				class="url-input"
				v-model="url"
				@change="handleInput"
			/>
			<div class="mt-4">
				<b-button
					class="mr-2"
					variant="primary"
					@click="fetch"
					:disabled="product._id !== ''"
				>
					<span v-if="loading">
						<b-spinner small></b-spinner>
						Loading...
					</span>
					<span v-else>
						Fetch
					</span>
				</b-button>
				<b-button class="mr-2" variant="primary" :disabled="product._id === ''"
					>Add Product</b-button
				>
			</div>
		</template>
	</b-modal>
</template>

<script>
	export default {
		name: "AddModal",
		props: {
			modalId: {
				type: String,
				required: true,
			},
		},
		data() {
			return {
				url: "",
				loading: false,
				product: this.getProductSchema(),
			}
		},
		methods: {
			handleInput(event) {
				this.url = event.target.value
			},

			test() {
				console.log("hit test")
			},

			async fetch() {
				this.loading = true

				await setTimeout(() => {
					this.loading = false
					this.product = { ...this.product, _id: "asdf" }
				}, 2500)
			},
		},
	}
</script>

<style lang="scss">
	@import "../assets/sass/_index.scss";

	.url-input {
		width: 100%;
	}
</style>
