<template>
  <div class="addTemplate">
    <div class="risk_assets">
      <el-row class="header_title">
        <el-col :span="12">
          <el-col :span="4">
            <Title title="资产风险" titleEn="Report Model"></Title>
          </el-col>
          <el-col :span="19" style="line-height:2.4rem">
            <el-checkbox>资产风险</el-checkbox>
          </el-col>
        </el-col>
        <el-col :span="12" align="right">
          <el-button icon="el-icon-arrow-left" @click="back">返回</el-button>
        </el-col>
      </el-row>
      <div class="contentBox">
        <el-checkbox-group v-model="checkedCities">
          <el-card class="box-card">
            <div class="card_header">
              <h4>统计</h4>
              <el-checkbox></el-checkbox>
            </div>
            <el-row style>数据组件</el-row>
          </el-card>
          <el-card class="box-card">
            <div class="card_header">
              <h4>资产等级</h4>
              <el-checkbox></el-checkbox>
            </div>
            <el-row style>
              <Card cardTitle>
                <div id="charts1" style=" width:100%;height:100%;"></div>
              </Card>
            </el-row>
          </el-card>
          <el-card class="box-card">
            <div class="card_header">
              <h4>资产等级</h4>
              <el-checkbox></el-checkbox>
            </div>
            <el-table stripe>
              <el-table-column label="IP"></el-table-column>
              <el-table-column label="类型"></el-table-column>
              <el-table-column label="状态"></el-table-column>
              <el-table-column label="时间"></el-table-column>
            </el-table>
          </el-card>
        </el-checkbox-group>
      </div>
    </div>
    <div class="threat_awareness">
      <el-row class="header_title">
        <el-col :span="2">
          <Title title="威胁感知" titleEn="Report Model"></Title>
        </el-col>
        <el-col :span="19" style="line-height:2.4rem">
          <el-checkbox>威胁感知</el-checkbox>
        </el-col>
      </el-row>
      <div class="contentBox">
        <el-checkbox-group v-model="checkedCities">
          <el-card class="box-card">
            <div class="card_header">
              <h4>统计</h4>
              <el-checkbox></el-checkbox>
            </div>
            <el-row style>
              <Card cardTitle>
                <div id="charts2" style=" width:100%;height:100%;"></div>
              </Card>
            </el-row>
          </el-card>
          <el-card class="box-card">
            <div class="card_header">
              <h4>资产等级</h4>
              <el-checkbox></el-checkbox>
            </div>
            <el-row style>
              <Card cardTitle>
                <div id="charts3" style=" width:100%;height:100%;"></div>
              </Card>
            </el-row>
          </el-card>
        </el-checkbox-group>
      </div>
    </div>
    <div class="threat_awareness">
      <el-row class="header_title">
        <el-col :span="2">
          <Title title="资产风险" titleEn="Report Model"></Title>
        </el-col>
        <el-col :span="19" style="line-height:2.4rem">
          <el-checkbox>资产风险</el-checkbox>
        </el-col>
      </el-row>
      <div class="contentBox">
        <el-checkbox-group v-model="checkedCities">
          <el-card class="box-card">
            <div class="card_header">
              <h4>统计</h4>
              <el-checkbox></el-checkbox>
            </div>
            <el-row style="height:12rem;">数据组件</el-row>
          </el-card>
        </el-checkbox-group>
      </div>
    </div>
    <el-col align="right">
      <div class="footer">
        <el-checkbox @change="allSelected">全选(已选5个模块)</el-checkbox>
        <el-button type="text" style="margin-left:2rem" @click="reset">恢复默认配置</el-button>
        <el-button class="submitBtn" @click="save">保存</el-button>
        <el-button type="default" class="cancelBtn">取消</el-button>
      </div>
    </el-col>
  </div>
</template>
<script>
import Title from "@/components/common/Title";
import Card from "../../components/common/Card.vue";
import { bar } from "../../utils/charts/chartsBar";
import { log } from "util";
export default {
  components: {
    Title,
    Card
  },
  data() {
    return {
      tabPosition: "1",
      checkedCities: [],
      tableData: [
        { name: "张三", active: true },
        { name: "张三1", active: true },
        { name: "张三2", active: true },
        { name: "张三3", active: false },
        { name: "张三4", active: true }
      ]
    };
  },
  mounted() {
    bar(this, "charts1", [
      { name: "192.168.1.1", value: 800 },
      { name: "100.2.44.1", value: 100 },
      { name: "192.168.1.1", value: 400 },
      { name: "100", value: 600 },
      { name: "100", value: 800 }
    ]);
    bar(
      this,
      "charts2",
      [
        { name: "192.168.1.1", value: 800 },
        { name: "100.2.44.1", value: 100 },
        { name: "192.168.1.1", value: 400 },
        { name: "100", value: 600 },
        { name: "100", value: 800 }
      ],
      true
    );
    bar(this, "charts3", [
      { name: "192.168.1.1", value: 800 },
      { name: "100.2.44.1", value: 100 },
      { name: "192.168.1.1", value: 400 },
      { name: "100", value: 600 },
      { name: "100", value: 800 }
    ]);
  },
  methods: {
    //   返回上一页
    back() {
      this.$router.go(-1);
    },
    // 全选事件
    allSelected(e) {
      if (e) {
        console.log("全选");
      } else {
        console.log("取消全选");
      }
    },
    // 恢复默认
    reset(){},
    // 保存
    save(){}
  }
};
</script>

<style>
.addTemplate .header_title {
  justify-content: space-between;
}
.addTemplate .header_title .el-button,
.addTemplate .submitBtn,
.addTemplate .cancelBtn {
  background: linear-gradient(
    90deg,
    rgba(55, 111, 222, 1) 0%,
    rgba(3, 157, 255, 1) 100%
  );
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}
.addTemplate .cancelBtn.el-button {
  background: transparent;
  color: #000;
}
.addTemplate .contentBox {
  display: flex;
}
.addTemplate .contentBox .el-checkbox-group {
  width: 100%;
  display: flex;
}
.addTemplate .contentBox .box-card {
  width: 30%;
  margin-right: 1rem;
  font-size: 0.8rem;
}
.addTemplate .contentBox .card_header {
  display: flex;
  justify-content: space-between;
  line-height: 2rem;
}
.addTemplate .footer {
  background: #fff;
  width: 34%;
  padding: 0.4rem;
  border-top-left-radius: 31px;
  border-bottom-left-radius: 30px;
  margin-right: -0.3rem;
}
</style>