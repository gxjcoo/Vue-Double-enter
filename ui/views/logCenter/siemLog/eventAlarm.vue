<template>
  <div class="eventAlarm">
    <Title title="事件告警" titleEn="Event Alarm"></Title>
    <el-card>
      <el-table stripe :data="tableData">
           <el-table-column label="序号">
               <template slot-scope="scope">
                   {{scope.$index+1}}
               </template>
           </el-table-column>
        <el-table-column label="事件名称" prop="name"></el-table-column>
        <el-table-column label="关联规则" prop="name"></el-table-column>
        <el-table-column label="对象IP" prop="name"></el-table-column>
         <el-table-column label="事件级别" prop="name">
              <template slot-scope="scope">
                <el-button class="handleBtn addWhite">高危</el-button>
            </template>
         </el-table-column>
          <el-table-column label="开始时间" prop="name"></el-table-column>
           <el-table-column label="结束时间" prop="name"></el-table-column>
            <el-table-column label="日志总数" prop="name"></el-table-column>
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
.eventAlarm .el-card{
    height:32rem;position: relative
}
.eventAlarm .footer{
    position: absolute;
    left:0;
    bottom:0.2rem;
    width: 100%;
    padding:0 0.5rem;
}
.eventAlarm .handleBtn{
    padding:0.3rem 0.8rem;
    border-radius: 20px;
}
.eventAlarm .handleBtn.addWhite{
    color:#F24949;
    border-color: #F24949;
    background:rgba(242,73,73,0.1);
}
.eventAlarm .handleBtn.addBlack{
    color:#1B89F0;
    border-color: #1B89F0;
    background:rgba(27,137,240,0.1);
}
</style>