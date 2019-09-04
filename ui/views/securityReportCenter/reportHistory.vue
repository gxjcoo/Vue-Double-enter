<template>
  <div class="reportHistory">
    <el-row class="header_title">
      <el-col :span="12">
        <Title title="报表历史" titleEn="Report History"></Title>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <el-table :data="tableData" stripe>
        <el-table-column label="报表名称" prop="name"></el-table-column>
        <el-table-column label="报表模板名称" prop="name"></el-table-column>
        <el-table-column label="生成时间" prop="name"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-document"></el-button>
            <el-button type="text" icon="el-icon-download"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <Pagination></Pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import Title from "@/components/common/Title";
import Pagination from "@/components/common/Pagination";
export default {
  components: {
    Title,
    Pagination
  },
  data(){
    return {
      tableData: [
        { name: "张三" },
        { name: "张三1" },
        { name: "张三2" },
        { name: "张三3" },
        { name: "张三4" }
      ]
    }
  },
};
</script>

<style>
.reportHistory .box-card {
  height: 32rem;
  position: relative;
}
.reportHistory .pagination{
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
     padding: 0 0.3rem;
}
</style>