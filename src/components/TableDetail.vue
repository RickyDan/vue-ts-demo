<template>
  <div>
    <el-table
      :data="dataSource"
      border>
      <el-table-column v-for="item in columnConfig" :label="item.name" :key="item.key" :prop="item.key">
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component({
    props: {
      dataSource: {
        type: Array,
        required: true
      },
      columnConfig: {
        type: Array,
        required: true
      },
      total: {
        type: Number,
        required: true
      }
    }
  })
  export default class TableDetail extends Vue {
  }
</script>
