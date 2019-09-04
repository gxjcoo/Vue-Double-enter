<template>
  <div>
    <div class="riskMonitorOverview">
      <el-card class="asset_statistics">
        <el-col :span="8" class="has_right_border">
          <el-row class="headerBox">
            <el-col :span="12" class="bule_strip_header">
              <p class="bule_strip"></p>
              <p class="title">总体资产评分</p>
            </el-col>
            <el-col :span="12" align="right" class="memo">
              <i class="el-icon-question"></i>
              备注
            </el-col>
          </el-row>
          <div class="score">
            <div class>
              <el-progress type="circle" :percentage="100" :show-text="false" status="success"></el-progress>
            </div>
            <div class="description">
              相对于上周上升
              <span class="success">
                20%
                <i class="el-icon-top"></i>
              </span>
              环比下降
              <span class="danger">
                20%
                <i class="el-icon-bottom"></i>
              </span>
            </div>
            <el-row class="detail">
              <el-col :span="12" class="row">
                <el-col :span="12" align="left">
                  <span class="circle danger"></span>
                  疑似被入侵
                </el-col>
                <el-col :span="12" align="right">
                  <b>10</b>
                  <i class="el-icon-warning"></i>
                </el-col>
              </el-col>
              <el-col :span="12" class="row">
                <el-col :span="12" align="left">
                  <span class="circle warn"></span>
                  高风险
                </el-col>
                <el-col :span="12" align="right">
                  <b>10</b>
                  <i class="el-icon-warning"></i>
                </el-col>
              </el-col>
              <el-col :span="12" class="row">
                <el-col :span="12" align="left">
                  <span class="circle middle_warn"></span>
                  中风险
                </el-col>
                <el-col :span="12" align="right">
                  <b>10</b>
                  <i class="el-icon-warning"></i>
                </el-col>
              </el-col>
              <el-col :span="12" class="row">
                <el-col :span="12" align="left">
                  <span class="circle primary"></span>
                  低危资产
                </el-col>
                <el-col :span="12" align="right">
                  <b>10</b>
                  <i class="el-icon-warning"></i>
                </el-col>
              </el-col>
              <el-col :span="12" class="row">
                <el-col :span="12" align="left">
                  <span class="circle success"></span>
                  比较安全
                </el-col>
                <el-col :span="12" align="right">
                  <b>10</b>
                  <i class="el-icon-warning"></i>
                </el-col>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="8" class="has_right_border">
          <div class="bule_strip_header">
            <p class="bule_strip"></p>
            <p class="title">资产统计</p>
          </div>
          <div class="statistical">
            <div class="show_box">
              <p>
                <span>1245</span>
                杭州分组
              </p>
              <p>
                <span>1245</span>
                宁波分组
              </p>
              <p>
                <span>1245</span>
                北京分组
              </p>
              <p>
                <span>1245</span>
                上海分组
              </p>
              <p class="no_border">
                <span>1245</span>
                重庆分组
              </p>
            </div>
            <div class="hide_box" v-if="show">
              <p>
                <span>1245</span>
                杭州分组
              </p>
              <p>
                <span>1245</span>
                宁波分组
              </p>
              <p>
                <span>1245</span>
                北京分组
              </p>
              <p>
                <span>1245</span>
                上海分组
              </p>
              <p class="no_border">
                <span>1245</span>
                重庆分组
              </p>
            </div>
            <el-button type="text" @click="boxIsShow" :class="{show:show}"></el-button>
          </div>
          <el-row class="detail" v-if="!show">饼状图</el-row>
        </el-col>
        <el-col :span="8">
          <div class="bule_strip_header">
            <p class="bule_strip"></p>
            <p class="title">类型维度资产</p>
          </div>
        </el-col>
      </el-card>
      <el-card class="type_distribution">
        <el-col :span="12" class="has_right_border">
          <div class="bule_strip_header">
            <p class="bule_strip"></p>
            <p class="title">被攻击类型分布</p>
          </div>
          <div style="height:15rem">
            <ScatTags title="" :warnTag="warnTag" :noteContent="noteContent" />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="bule_strip_header">
            <p class="bule_strip"></p>
            <p class="title">风险趋势</p>
          </div>
          <div>chart</div>
        </el-col>
      </el-card>
      <el-card class="vulnerability">
        <el-col :span="12" class="has_right_border">
          <div>
            <Card cardTitle="漏洞占比">
              <div id="charts" style=" width:100%;height:100%;"></div>
            </Card>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="bule_strip_header">
            <p class="bule_strip"></p>
            <p class="title">漏洞类型分布</p>
          </div>
        </el-col>
      </el-card>
    </div>
  </div>
</template>

<script>
import ScatTags from "../../components/scatteredTags.vue";
import Card from "@/components/common/Card.vue";
import { bar } from "@/utils/charts/chartsBar";
export default {
  components: {
    ScatTags,
    Card
  },
  data() {
    return {
      title: "最新安全事件分布",
      show: false,
      warnTag: [
        {
          name: "Web中间件漏洞",
          type: 3,
          number: 10,
          ifNumber: 0
        },
        {
          name: "Web应用程序漏洞",
          type: 3,
          number: 50,
          ifNumber: 0
        },
        {
          name: "FTP类漏洞",
          type: 2,
          number: 20,
          ifNumber: 0
        },
        {
          name: "邮件类漏洞",
          type: 1,
          number: 130,
          ifNumber: 0
        },
        {
          name: "数据库漏洞",
          type: 3,
          number: 3,
          ifNumber: 0
        }
      ],
      noteContent: { iifShow: 0, note: "同比:与上周相比环比:与上月相比" }
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
  },
  methods: {
    boxIsShow() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
.riskMonitorOverview .has_right_border {
  border-right: 1px solid #fafafa;
}
.riskMonitorOverview .memo {
  line-height: 2.5rem;
  padding-right: 0.5rem;
  color: #000;
}
.riskMonitorOverview .memo i {
  color: #f56c6c;
}
.riskMonitorOverview .el-progress-circle__path,
.riskMonitorOverview .el-progress-circle__track {
  stroke-width: 7;
}
.riskMonitorOverview .score {
  text-align: center;
}
.riskMonitorOverview .description {
  margin: 1rem auto;
  background: #f8f9fb;
  border-radius: 1rem;
  color: #333333;
  padding: 0.5rem 0;
  width: 60%;
}
.riskMonitorOverview .description .success {
  color: #2ad1a9;
}
.riskMonitorOverview .description .danger {
  color: #f01f1b;
}
.riskMonitorOverview .detail {
  line-height: 2rem;
}
.riskMonitorOverview .detail .row {
  padding: 0 1.3rem;
}
.riskMonitorOverview .detail .row b {
  font-weight: bold;
  font-size: 0.7rem;
}
.riskMonitorOverview .detail .row i {
  color: #319fff;
  padding-left: 0.2rem;
}
.riskMonitorOverview .circle {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  margin-right: 0.5rem;
  vertical-align: baseline;
}
.riskMonitorOverview .circle.danger {
  background: #f01f1b;
}
.riskMonitorOverview .circle.warn {
  background: #f05a1b;
}
.riskMonitorOverview .circle.middle_warn {
  background: #ffa64c;
}
.riskMonitorOverview .circle.primary {
  background: #319fff;
}
.riskMonitorOverview .circle.success {
  background: #2ad1a9;
}
.riskMonitorOverview .statistical {
  background: #f8fbff url("../../assets/img/pic@2x.png") no-repeat;
  padding: 1rem 0;
  border-radius: 36px;
  background-size: 7%;
  background-position-y: 0.6rem;
  position: relative;
}
.riskMonitorOverview .statistical div {
  width: 80%;
  margin: 0 auto 0.5rem;
}
.riskMonitorOverview .statistical .show_box,
.riskMonitorOverview .statistical .hide_box {
  display: flex;
  justify-content: center;
}
.riskMonitorOverview .statistical .hide_box{
border-top: 1px solid #ccc;
padding-top: 0.5remd;
}
.riskMonitorOverview .statistical .el-button {
  background: url("../../assets/img/openDown.png") no-repeat;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translate(0, -50%);
  width: 1rem;
}
.riskMonitorOverview .statistical .el-button.show {
  transform: rotate(180deg);
  transform-origin: center;
}
.riskMonitorOverview .statistical p {
  border-right: 1px solid #ccc;
  text-align: center;
  padding: 0 0.5rem;
  line-height: 1.2rem;
  color: #666666;
  margin-bottom: 8px;
}
.riskMonitorOverview .statistical p.no_border {
  border: none;
}
.riskMonitorOverview .statistical p span {
  display: block;
  color: #1b89f0;
  font-size: 1rem;
  font-weight: bold;
}
</style>
