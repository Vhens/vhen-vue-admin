<!--
 * @Author: Vhen
 * @Date: 2020-10-15 11:09:06
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 12:37:23
 * @Description:
-->
<template>
  <section class="container">
    <!-- 刷新条件 -->
    <el-form inline>
      <el-form-item label="标题">
        <el-input v-model="input" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          v-waves
          class="filter-item"
          type="primary"
          icon="el-icon-search"
        >
          搜索
        </el-button>
        <el-button
          class="filter-item"
          style="margin-left: 10px"
          type="primary"
          icon="el-icon-edit"
        >
          添加
        </el-button>
      </el-form-item>
    </el-form>

    <!-- 表格内容 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="#" type="index" align="center" width="50" />
      <el-table-column prop="date" align="center" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="name" align="center" label="作者" width="180" />
      <el-table-column prop="status" align="center" label="状态" width="180" />
      <el-table-column label="操作" align="center" width="400">
        <template slot-scope="{ row, $index }">
          <el-button type="primary" size="mini"> 编辑 </el-button>
          <el-button
            v-if="row.status != 'published'"
            size="mini"
            type="success"
          >
            发布
          </el-button>
          <el-button v-if="row.status != 'draft'" size="mini"> 草稿 </el-button>
          <el-button v-if="row.status != 'deleted'" size="mini" type="danger">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <v-pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </section>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      total: 30,
      listLoading: true,
      listQuery: {
        page: 30,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          title: "大海和月亮的故事",
          status: "未发布",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          title: "中国电影票房超北美成全球第一",
          status: "未发布",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          title: "黑洞撕裂恒星瞬间",
          status: "未发布",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          title: "中国9月CPI同比增长1.7%",
          status: "发布",
        },
      ],
      options: [
        {
          value: "1",
          label: "发布",
        },
        {
          value: "2",
          label: "未发布",
        },
      ],
      value: "",
    };
  },
  computed: {},
  components: {},
  methods: {
    getList() {},
  },
  mounted() {},
  watch: {},
};
</script>
<style lang='scss' scoped>
</style>
