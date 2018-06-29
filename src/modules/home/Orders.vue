<template>
  <div>
    <table-detail
      :data-source="orders"
      :column-config="columnMaps"
      :total="total">
    </table-detail>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Action, Getter } from 'vuex-class'
  import TableDetail from '../../components/TableDetail.vue'

  @Component({
    components: {
      TableDetail
    }
  })
  export default class Orders extends Vue {
    @Action('getOrders') getOrders
    @Getter('orders') orders
    @Getter('total') total

    created () {
      this.getOrders()
    }

    columnMaps = [{
      name: 'id',
      key: 'id'
    }, {
      name: '订单id',
      key: 'order_id'
    }, {
      name: '用户',
      key: 'user'
    }, {
      name: '下单时间',
      key: 'update_time'
    }, {
      name: '产品',
      key: 'product'
    }, {
      name: '价格',
      key: 'price'
    }]
  }
</script>
