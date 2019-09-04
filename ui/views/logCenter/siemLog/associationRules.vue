<template>
  <div class="associationRules">
    <Title title="关联规则" titleEn="Association Rules"></Title>
    <el-card>
      <el-table stripe :data="tableData">
        <el-table-column label="规则名称" prop="name"></el-table-column>
        <el-table-column label="规则描述" prop="name"></el-table-column>
        <el-table-column label="严重等级" prop="name">
          <template slot-scope="scope">
            <el-button class="handleBtn addWhite">高危</el-button>
          </template>
        </el-table-column>
        <el-table-column label="状态" prop="name">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.active"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="开"
              inactive-text="关"
            ></el-switch>
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
.associationRules .el-card {
  height: 32rem;
  position: relative;
}
.associationRules .footer {
  position: absolute;
  left: 0;
  bottom: 0.2rem;
  width: 100%;
  padding: 0 0.5rem;
}
.associationRules .handleBtn {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
}
.associationRules .handleBtn.addWhite {
  color: #f24949;
  border-color: #f24949;
  background: rgba(242, 73, 73, 0.1);
}
.associationRules .handleBtn.addBlack {
  color: #1b89f0;
  border-color: #1b89f0;
  background: rgba(27, 137, 240, 0.1);
}
</style>