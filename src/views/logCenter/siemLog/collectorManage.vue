<template>
  <div class="collectorManage">
    <Title title="采集器管理" titleEn="collector Management"></Title>
    <el-card>
      <el-row>
        <el-col :span="3">
          <div class="bule_strip_header">
            <p class="bule_strip"></p>
            <p class="title">采集器类型统计</p>
          </div>
          <div class="typeTotal">
            <p>
              <span>采集器统计</span>
              <strong class="number">12</strong>
            </p>
          </div>
        </el-col>
        <el-col :span="21">
          <div class="bule_strip_header">
            <p class="bule_strip"></p>
            <p class="title">采集器列表</p>
          </div>
          <el-table class='table_header_has_bg' stripe :data="tableData" header-cell-class-name="table_header_bg">
            <el-table-column type="selection" label="全选"></el-table-column>
            <el-table-column label="任务名称" prop="name"></el-table-column>
            <el-table-column label="开始时间" prop="name"></el-table-column>
            <el-table-column label="结束时间" prop="name"></el-table-column>
            <el-table-column label="操作" prop="name">
              <template slot-scope="scope">
                <el-button type="text" icon="el-icon-edit-outline" class="editBtn"></el-button>
                <el-button type="text" icon="el-icon-delete" class="deleteBtn"></el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-row class="footer">
            <Pagination></Pagination>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Pagination from "@/components/common/Pagination";
import Title from "@/components/common/Title";
export default {
  components: {
    Title,
    Pagination
  },
  data() {
    return {
      tableData: [
        { name: "张三", active: true },
        { name: "张三1", active: true },
        { name: "张三2", active: true },
        { name: "张三3", active: true },
        { name: "张三4", active: true }
      ]
    };
  }
};
</script>

<style>
.collectorManage .el-col-3 {
  border-right: 1px solid #fafafa;
  height: 32rem;
  overflow-y: auto;
  padding: 1rem 0;
}
.collectorManage .el-card__body {
  padding: 0;
}
.collectorManage .el-col-21 {
  position: relative;
  height: 32rem;
  padding: 1rem 0;
}
.collectorManage .typeTotal p {
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  color: #000;
  font-size: 0.65rem;
  padding: 0 1rem;
}
.collectorManage .typeTotal p .number {
  color: #1b89f0;
  font-weight: bold;
}
.collectorManage .footer {
  position: absolute;
  left: 0;
  bottom: 0.2rem;
  width: 100%;
  padding: 0 0.5rem;
}
.collectorManage .handleBtn {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
}
.collectorManage .handleBtn.addWhite {
  color: #f24949;
  border-color: #f24949;
  background: rgba(242, 73, 73, 0.1);
}
.collectorManage .handleBtn.addBlack {
  color: #1b89f0;
  border-color: #1b89f0;
  background: rgba(27, 137, 240, 0.1);
}
</style>