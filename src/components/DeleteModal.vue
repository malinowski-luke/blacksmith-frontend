<template>
	<b-modal
		:id="modalId"
		title="Delete Item"
		ok-title="delete"
		ok-variant="danger"
		@ok="deleteProduct"
		@hidden="$emit('cancel')"
		header-bg-variant="danger"
		header-border-variant="danger"
		header-text-variant="light"
		body-bg-variant="dark"
		body-text-variant="light"
		footer-bg-variant="dark"
		footer-border-variant="dark"
	>
		<template>
			<h5 class="mb-4">Are you sure you want to delete this item!</h5>
			<product-item
				:title="product.title"
				:img="product.img"
				:has_prime="product.has_prime"
				:price="product.price"
				:url="product.url"
			/>
		</template>
	</b-modal>
</template>

<script>
	import axios from "axios"
	import ProductItem from "./ProductItem"

	export default {
		name: "DeleteModal",
		components: { ProductItem },
		props: {
			product: {
				type: Object,
				required: true,
			},
			modalId: {
				type: String,
				required: true,
			},
		},
		methods: {
			async deleteProduct() {
				try {
					await axios.delete(`/product/${this.product._id}`)

					this.$store.commit("products:set", {
						products: this.products.filter(
							(product) => this.product._id !== product._id
						),
					})

					this.resetDeleteModal()
				} catch (err) {
					console.log(err)
				}
			},
		},
	}
</script>

<style lang="scss">
	@import "../assets/sass/_index.scss";
</style>
