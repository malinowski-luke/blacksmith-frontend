<template>
	<div class="container">
		<delete-modal
			:product="productToBeDel"
			modalId="delete-product-modal"
			v-on:cancel="resetDeleteModal"
		/>
		<add-modal modalId="add-product-modal" />
		<b-card
			header="Configure"
			header-tag="header"
			border-variant="dark"
			bg-variant="light"
			class="config"
		>
			<div class="config-wrapper p-2 ">
				<div class="amazon-info d-flex align-items-center p-2">
					<img :src="user.logo" />
					<span class="ml-2">
						<h5>Amazon Blacksmith</h5>
						<p>{{ user.channel_name }}</p>
					</span>
				</div>

				<div class="row mt-3">
					<div class="col-lg-8">
						<sub-header :title="'Product List'" />
						<product-table v-on:delete-item="showDeleteModal" />
						<div>
							<div class="mt-2">
								<b-button
									block
									variant="outline-success"
									size="lg"
									@click="addItem"
								>
									Add Item
								</b-button>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="panel-wrapper">
							<sub-header :title="'Preview'" />
							<panel />
						</div>
					</div>
				</div>
			</div>
		</b-card>
	</div>
</template>

<script>
	import { mapGetters } from "vuex"
	import Panel from "./Panel.vue"
	import SubHeader from "../components/SubHeader.vue"
	import ProductTable from "../components/ProductTable.vue"
	import DeleteModal from "../components/DeleteModal.vue"
	import AddModal from "../components/AddModal.vue"

	// const defaultProduct = {
	// 	_id: "",
	// 	title: "",
	// 	img: "",
	// 	has_prime: false,
	// 	price: 0,
	// }

	export default {
		components: { Panel, SubHeader, ProductTable, DeleteModal, AddModal },
		name: "Config",

		data() {
			return {
				productToBeDel: this.getProductSchema(),
			}
		},

		computed: {
			...mapGetters(["user", "products"]),
		},

		methods: {
			addItem() {
				console.log("add")
				this.$bvModal.show("add-product-modal")
			},

			resetDeleteModal() {
				this.productToBeDel = this.getProductSchema()
			},

			showDeleteModal(product) {
				this.productToBeDel = product
				this.$bvModal.show("delete-product-modal")
			},
		},
	}
</script>

<style lang="scss">
	@import "../assets/sass/_index.scss";

	.panel-wrapper {
		width: 320px;
		height: 450px - 30px;
	}
	.config {
		width: 100%;
		height: 100vh;

		.config-wrapper {
			.amazon-info {
				width: 100%;
				// height: 50px;
				background: #f0f1f2;
				border: 1px solid $black;
				border-radius: 5px;

				img {
					width: 50px;
				}
				span p,
				span h5 {
					padding: 0;
					margin: 0;
				}

				span p {
					font-size: 15px;
				}
				span h5 {
					font-size: 20px;
				}
			}
		}
	}
</style>
