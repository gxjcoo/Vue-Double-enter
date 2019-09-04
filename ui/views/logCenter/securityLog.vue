<template>
  <div class="securityLog">
    <TabsSearch></TabsSearch>
    <el-card>
      <div class="bule_strip_header">
        <p class="bule_strip"></p>
        <p class="title">日志趋势</p>
      </div>
      <div style="height:11rem;line-height:11rem;background:#fafafa;text-align:center">数据加载中</div>
      <el-table class="table_header_has_bg" stripe :data="tableData" header-cell-class-name="table_header_bg">
        <el-table-column label="序号">
          <template slot-scope="scope">{{scope.$index+1}}</template>
        </el-table-column>
        <el-table-column label="时间" prop="name"></el-table-column>
        <el-table-column label="日志类型" prop="name"></el-table-column>
        <el-table-column label="源IP" prop="name"></el-table-column>
        <el-table-column label="源端口" prop="name"></el-table-column>
        <el-table-column label="目的IP" prop="name"></el-table-column>
        <el-table-column label="目的端口" prop="name"></el-table-column>
        <el-table-column label="数据来源" prop="name"></el-table-column>
      </el-table>
      <div class="footer">
           <Pagination></Pagination>
      </div>
    
    </el-card>
  </div>
</template>

<script>
import TabsSearch from "@/components/common/TabsSearch";
import Pagination from "@/components/common/Pagination";
export default {
  components: {
    TabsSearch,
    Pagination
  },
  data() {
    return {
      tableData: [
        { name: "张三" },
        { name: "张三1" },
        { name: "张三2" },
        { name: "张三3" },
        { name: "张三4" }
      ]
    };
  }
};
</script>

<style>
.securityLog .el-card{height:32rem;position: relative;}
.securityLog .footer{
  position: absolute;
  padding:0 0.5rem;
  width:100%;
  left:0;
  bottom:0.5rem
}
</style>