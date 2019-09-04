<template>
  <div class="linkageLog">
    <Title title="联动处置日志" titleEn="Third-party Log"></Title>
    <el-card>
      <el-table stripe :data="tableData">
        <el-table-column label="联动事件" prop="name"></el-table-column>
        <el-table-column label="操作员" prop="name"></el-table-column>
        <el-table-column label="联动装置" prop="name"></el-table-column>
        <el-table-column label="联动操作">
            <template slot-scope="scope">
                <el-button icon="el-icon-folder-add" class="handleBtn addWhite">加入白名单</el-button>
                <el-button icon="el-icon-user" class="handleBtn addBlack">拉入黑名单</el-button>
            </template>
        </el-table-column>
      </el-table>
      <div class="footer">
      <Pagination></Pagination>
      </div>
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

<style scoped>
.linkageLog .handleBtn{
    padding:0.5rem;
}
.linkageLog .handleBtn.addWhite{
    color:#F24949;
    border-color: #F24949;
    background:rgba(242,73,73,0.1);
}
.linkageLog .el-card{height:32rem;position: relative;}
.linkageLog .footer{
  position: absolute;
  padding:0 0.5rem;
  width:100%;
  left:0;
  bottom:0.5rem
}
.linkageLog .handleBtn.addBlack{
    color:#1B89F0;
    border-color: #1B89F0;
    background:rgba(27,137,240,0.1);
}
</style>