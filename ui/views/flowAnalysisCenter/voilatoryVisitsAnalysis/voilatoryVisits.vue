<template>
  <div class="voilatoryVisits">
    <TabsSearch></TabsSearch>
    <el-row class="data_analysis">
      <Title :title="title" :titleEn="titleEn"></Title>
      <el-card class="box-card">
        <el-row>
      <el-col :span="12" class="contentBox leftBox">
        <div class="access_source">
        <Card cardTitle="违规访问源TOP">
            <div id="charts1" style=" width:100%;height:100%;"></div>
          </Card>
        </div>
        <div class="access_event">
          <Card cardTitle="事件TOP">
            <div id="charts2" style=" width:100%;height:100%;"></div>
          </Card>
        </div>
      </el-col>
      <el-col :span="12" class="contentBox">
        <div class="visit_purpose">
         <Card cardTitle="违规访问目的TOP">
            <div id="charts3" style=" width:100%;height:100%;"></div>
          </Card>
        </div>
        <div class="access_trend">
          <div class="bule_strip_header">
            <p class="bule_strip"></p>
            <p class="title">访问趋势</p>
          </div>
          <div style="height: 11rem;width: 100%;background: rgb(245, 246, 250);text-align: center;line-height: 11rem;">echart 组件</div>
        </div>
      </el-col>
      </el-row>
      </el-card>
    </el-row>
    <el-row class="summary_list">
      <el-col :span="3">
        <Title :title="title1" :titleEn="titleEn1"></Title>
      </el-col>
      <el-col :span="5" style="line-height:50px;">
        <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;margin-left: 1rem;">
          <el-radio-button label="1" style="margin-right:10px">访问源</el-radio-button>
          <el-radio-button label="2">访问目的</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-card class="box-card summary_list">
      <div class="tableBox">
        <el-table :data="tableData" stripe>
          <el-table-column label="时间" prop="name"></el-table-column>
          <el-table-column label="访问源IP" prop="name"></el-table-column>
          <el-table-column label="访问源端口" prop="name"></el-table-column>
          <el-table-column label="访问目的IP" prop="name"></el-table-column>
          <el-table-column label="访问目的端口" prop="name"></el-table-column>
          <el-table-column label="访问协议" prop="name"></el-table-column>
          <el-table-column label="违规类型" prop="name"></el-table-column>
        </el-table>
        <Pagination></Pagination>
      </div>
    </el-card>
  </div>
</template>
<script>
import Pagination from "@/components/common/Pagination";
import TabsSearch from "@/components/common/TabsSearch";
import Title from "@/components/common/Title";
import Card from "@/components/common/Card.vue";
import { bar } from "@/utils/charts/chartsBar";
export default {
  components: {
    Pagination,
    TabsSearch,
    Title,
    Card
  },
  data() {
    return {
      tabPosition: "1",
      title: "违规访问分析",
      titleEn: "Summary Statistics",
      title1: "访问汇总列表",
      titleEn1: "Access Summary List",
       tableData: [
        { name: "张三" },
        { name: "张三1" },
        { name: "张三2" },
        { name: "张三3" },
        { name: "张三4" }
      ]
    };
  },
  mounted(){
     bar(this, "charts1", [
        { name: "192.168.1.1", value: 800 },
        { name: "100.2.44.1", value: 100 },
        { name: "192.168.1.1", value: 400 },
        { name: "100", value: 600 },
        { name: "100", value: 800 }
      ]);
      bar(this, "charts2", [
        { name: "192.168.1.1", value: 800 },
        { name: "100.2.44.1", value: 100 },
        { name: "192.168.1.1", value: 400 },
        { name: "100", value: 600 },
        { name: "100", value: 800 }
      ],
        true);
     bar(
        this,
        "charts3",
        [
          { name: "项目1", value: 0 },
          { name: "项目2", value: 800 },
          { name: "项目3", value: 200 },
          { name: "项目4", value: 600 },
          { name: "项目5", value: 800 }
        ]
      );
  },
};
</script>

<style>
.voilatoryVisits .contentBox,
.tableBox {
  background: #fff;
}
.voilatoryVisits .data_analysis .access_source,.voilatoryVisits .data_analysis .visit_purpose{
  border-bottom:1px solid rgb(240, 242, 243)
}
.voilatoryVisits .data_analysis .el-col-12 {
  box-sizing: border-box;
  height: calc(100% - 55px);
}
.voilatoryVisits .data_analysis .contentBox.leftBox {
  border-right: 1px solid rgb(240, 242, 243);
}
.voilatoryVisits .traffic {
  border: 1px solid #fff5f5f5;
  border-left: none;
  border-right: none;
}
.voilatoryVisits .header {
  line-height: 40px;
}
.el-table {
  margin-bottom: 30px;
}
.voilatoryVisits .visit_purpose ，.voilatoryVisits .access_source {
  border-bottom: 1px solid rgb(240, 242, 243);
  margin-bottom: 10px;
}
.voilatoryVisits .el-radio-group {
  margin-bottom: 0 !important;
}
.voilatoryVisits .el-radio-group .el-radio-button__inner {
  border: none;
  background: #f5f6fa;
  color: #000;
  padding: 10px 25px;
  border-radius: 5px;
}
.voilatoryVisits .el-card__body{padding:0}
.voilatoryVisits
  .el-radio-group
  .el-radio-button.is-active
  .el-radio-button__inner {
  background: #0092fe;
  color: #fff;
}
.voilatoryVisits
  .summary_list
  .el-radio-group
  .el-radio-button.is-active
  .el-radio-button__inner {
  background: linear-gradient(
    90deg,
    rgba(55, 111, 222, 1) 0%,
    rgba(3, 157, 255, 1) 100%
  );
}
</style>