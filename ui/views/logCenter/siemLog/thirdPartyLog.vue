<template>
  <div class="thirdPartyLog">
    <Title title="第三方日志" titleEn="Third-party Log"></Title>
    <el-card>
      <el-table stripe :data="tableData">
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

<style scoped>
.thirdPartyLog .el-card {
  height: 32rem;
  position: relative;
}
.thirdPartyLog .footer {
  position: absolute;
  left: 0;
  bottom: 0.2rem;
  width: 100%;
  padding: 0 0.5rem;
}
.thirdPartyLog .handleBtn {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
}
.thirdPartyLog .handleBtn.addWhite {
  color: #f24949;
  border-color: #f24949;
  background: rgba(242, 73, 73, 0.1);
}
.thirdPartyLog .handleBtn.addBlack {
  color: #1b89f0;
  border-color: #1b89f0;
  background: rgba(27, 137, 240, 0.1);
}
</style>