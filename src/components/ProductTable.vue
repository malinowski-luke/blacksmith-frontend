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
    <template #cell(delete)="row" class="text-center">
      <b-icon
        icon="trash-fill"
        aria-hidden="true"
        @click="$emit('delete-item', row.item)"
      ></b-icon>
    </template>
  </b-table>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'ProductTable',

    computed: {
      ...mapGetters(['products']),
    },

    data() {
      return {
        fields: [
          {
            key: 'title',
            sortable: true,
            formatter: (value) => {
              return this.formatStr(value, 75)
            },
          },
          {
            key: 'price',
            sortable: true,
          },
          {
            key: 'has_prime',
            label: 'Prime',
          },
          {
            key: 'delete',
          },
        ],
      }
    },
  }
</script>

<style lang="scss">
  @import '../assets/sass/_index.scss';
  .table {
  }
</style>
