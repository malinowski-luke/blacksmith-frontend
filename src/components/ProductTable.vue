<template>
	<b-table
		striped
		hover
		bordered
		dark
		sticky-header
		:fields="fields"
		:items="products"
		class="table text-center"
	>
		<!-- A custom formatted column -->
		<template #cell(has_prime)="has_prime">
			<img v-if="has_prime" src="../assets/img/prime.png" class="prime-logo" />
		</template>
		<template #cell(delete)="row" class="text-center">
			<b-icon
				class="trash-icon"
				icon="trash-fill"
				aria-hidden="true"
				@click="$emit('delete-item', row.item)"
			></b-icon>
		</template>
	</b-table>
</template>

<script>
	import { mapGetters } from "vuex"

	export default {
		name: "ProductTable",

		computed: {
			...mapGetters(["products"]),
		},

		data() {
			return {
				fields: [
					{
						key: "title",
						sortable: true,
						formatter: (value) => {
							return this.formatStr(value, 75)
						},
					},
					{
						key: "price",
						sortable: true,
					},
					{
						key: "has_prime",
						label: "Prime",
					},
					{
						key: "delete",
					},
				],
			}
		},
	}
</script>

<style lang="scss">
	@import "../assets/sass/_index.scss";
	.table {
		.prime-logo {
			width: 50px;
		}

		.trash-icon:hover {
			cursor: pointer;
		}
	}
</style>
