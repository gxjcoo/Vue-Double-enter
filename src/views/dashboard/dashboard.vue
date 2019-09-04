<template>
  <div>
    <Title :title="title" :titleEn="titleEn"></Title>
    <div class="section sectionOne">
      <el-row class="dashboardContent" style="height:9rem">
        <div class="box">
          <div class="blueSquare"></div>
          <div class="cardTitle">CPU使用</div>
          <div class="charts" id="charts1"></div>
        </div>        
        <div class="box">
          <div class="blueSquare"></div>
          <div class="cardTitle">内存使用</div>
          <div class="charts" id="charts2"></div>
        </div>        
        <div class="box">
          <div class="blueSquare"></div>
          <div class="cardTitle">磁盘使用</div>
          <div class="charts" id="charts3"></div>
        </div>        
        <div class="box">
          <div class="blueSquare"></div>
          <div class="cardTitle">网卡流量</div>
          <div class="charts" id="charts4"></div>
        </div>
      </el-row>
      <el-row class="dashboardContent" style="height:5rem">
        <el-col :span="20" style="height:100%">
          <div class="dashboardContent">
            <div class="dashboardTitle">
              <div class="blueSquare"></div>
              <div class="cardTitle">平台组件</div>
            </div>
          </div>
          <div class="dashboardMain dashboardContent">
            <div style="width:13rem;height:100%">
              <div style="background:#0f0;width:2rem;height:2rem;float:left"></div>
              <div style="float:left">
                <p>Elasticsearch：</p>
                <p>正常</p>
              </div>
            </div>
            <div style="width:13rem;height:100%">
              <div style="background:#0f0;width:2rem;height:2rem;float:left"></div>
              <div style="float:left">
                <p>Elasticsearch：</p>
                <p>正常</p>
              </div>
            </div>
            <div style="width:13rem;height:100%">
              <div style="background:#0f0;width:2rem;height:2rem;float:left"></div>
              <div style="float:left">
                <p>Elasticsearch：</p>
                <p>正常</p>
              </div>
            </div>                        
            <div style="width:13rem;height:100%">
              <div style="background:#0f0;width:2rem;height:2rem;float:left"></div>
              <div style="float:left">
                <p>Elasticsearch：</p>
                <p>正常</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="4" style="height:100%"><div class="backgroundq" ></div></el-col>
      </el-row>
    </div>
    <Title :title="twoTitle" :titleEn="twoTitleEn"></Title>
    <div class="section sectionTwo">
      <el-row class="dashboardContent" style="height:19.4rem">
        <el-col :span="7" style="height:100%;position:relative">
            <div class="dashboardTitle">
              <div class="blueSquare"></div>
              <div class="cardTitle">总体资产评分</div>
            </div>
            <div style="height:12rem;width:100%;padding:1rem">
              <div class="chartsPai"></div>
              <div style="height:2rem;width:100%;"></div>
              <div class="account"><span>相对于上周上升</span><span>20%</span><span>环比下降</span><span>20%</span>  </div>
            </div>
            <div>
              
            </div>
        </el-col>
        <el-col :span="7" style="height:100%;position:relative;    ">
            <div class="dashboardTitle">
              <div class="blueSquare"></div>
              <div class="cardTitle">高危资产列表</div>
            </div>
            <el-table
                header-row-class-name="tableHead"
                :data="tableData"
                style="width: 100%;border-radius: 1rem;">
                <el-table-column  label="发起方" >
                    <template  slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span class="tdFont">{{ scope.row.initiator }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="受害者" >
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span class="tdFont">{{ scope.row.victim }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="TOP攻击事件" >
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium" style="border-radius: 15px;">{{ scope.row.attack_event }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
              </el-table>
        </el-col>
        <el-col :span="10" style="height:100%;position:relative ; ">
            <div class="dashboardTitle">
              <div class="blueSquare"></div>
              <div class="cardTitle">资产风险变更</div>
            </div>
            <el-table
                header-row-class-name="tableHead"
                :data="tableData"
                style="width: 100%;border-radius: 1rem;">
                <el-table-column  label="发起方" >
                    <template  slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span class="tdFont">{{ scope.row.initiator }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="受害者" >
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span class="tdFont">{{ scope.row.victim }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="TOP攻击事件" >
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium" style="border-radius: 15px;">{{ scope.row.attack_event }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
              </el-table>
        </el-col>
      </el-row>
    </div>
    <Title :title="threeTitle" :titleEn="threeTitleEn"></Title>
    <div class="section sectionThree">
      <el-row class="dashboardContent" style="height:18rem; position:relative; ">
        <el-col :span="12" style="height:100%">
            <div class="dashboardTitle">
              <div class="blueSquare"></div>
              <div class="cardTitle">资产风险变更</div>
            </div>

        </el-col>
        <el-col :span="12" style="height:100%;position:relative; ">
            <div class="dashboardTitle">
              <div class="blueSquare"></div>
              <div class="cardTitle">资产风险变更</div>
            </div>
             <el-table
                header-row-class-name="tableHead"
                :data="tableData"
                style="width: 100%;border-radius: 1rem;">
                <el-table-column  label="发起方" >
                    <template  slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span class="tdFont">{{ scope.row.initiator }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="受害者" >
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span class="tdFont">{{ scope.row.victim }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="TOP攻击事件" >
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium" style="border-radius: 15px;">{{ scope.row.attack_event }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
              </el-table>
        </el-col>
      </el-row>
      <el-row class="dashboardContent" style="height:27.8rem">
        <el-col :span="12" style="height:100%;position:relative; ">
            <div class="dashboardTitle">
              <div class="blueSquare"></div>
              <div class="cardTitle">资产风险变更</div>
            </div>
            <div style="height:11.9rem;width:100%;background:#f60"></div>

        </el-col>
        <el-col :span="12" style="height:100%;position:relative; ">
          <el-row class="" style="height:13.9rem">
            <div class="dashboardTitle">
              <div class="blueSquare"></div>
              <div class="cardTitle">资产风险变更</div>
            </div>
            <div style="height:11.9rem;width:100%;">
              <div id="chartBar1" style="height:100%;width:100%"></div>
            </div>
          </el-row>
          <el-row class="" style="height:13.9rem">
            <div class="dashboardTitle">
              <div class="blueSquare"></div>
              <div class="cardTitle">资产风险变更</div>
            </div>
            <div style="height:11.9rem;width:100%;">
              <div id="chartBar2" style="height:100%;width:100%"></div>
            </div>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <Title :title="fourTitle" :titleEn="fourTitleEn"></Title>
    <div class="section sectionFour">
      <el-row class="backgroundq" style="height:13rem">
        <el-col :span="5" style="height:100%"><div class="backgroundq" ></div></el-col>
        <el-col :span="5" style="height:100%"><div class="backgroundq" ></div></el-col>
        <el-col :span="5" style="height:100%"><div class="backgroundq" ></div></el-col>
        <el-col :span="9" style="height:100%"><div class="backgroundq" ></div></el-col>
      </el-row>
    </div>
   
  </div>
</template>
<style>
.charts{
  width: 100%;
  height: 5rem;
}
.box{
  width:100%;
  height:100%;
  background:rgba(255,255,255,1);
  box-shadow:0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.08);
  margin: 0.2rem;
  position:relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blueSquare{
    z-index:100;
    width:0.38rem;
    height:0.83rem;
    background:rgba(27,137,240,1);
    position:absolute;
    top:0.7rem;
}
.chartsPai{
  width: 6rem;
  height: 6rem;
  background: blue;
  margin: 0 auto;
}
.account{
  width:12.83rem;
  height:1.5rem;
  background:rgba(31,73,113,0.3);
  border-radius:1rem;
  margin: 0 auto;
  text-align: center;
}
.account>span{
  font-size:0.58rem;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(51,51,51,1);
  height: 1.5rem;
  line-height: 1.5rem;
}
.account>span:nth-of-type(2){
  color:rgba(42,209,169,1);
}
.account>span:nth-of-type(4){
  color:rgba(240,90,27,1);
}
.dashboardTitle{
  width: 100%;
  height: 2rem;
}
.dashboardContent{
  display: flex;
  justify-content: space-between;
  align-items: center
}
.section .dashboardMain{
  height: 3rem;
  width: 100%;
  padding: 0.4rem;
}
.section .dashboardMain p{
padding-left:0.5rem; 
height: 1.3rem;
font-size:0.58rem;
font-family:MicrosoftYaHei;
font-weight:400;
color:rgba(51,51,51,1);
}
.section .dashboardMain p:nth-of-type(2){
font-size:0.58rem;
font-family:MicrosoftYaHei-Bold;
font-weight:bold;
color:rgba(36,195,111,1);
}

.backgroundq{
  background: #606266;
  display: flex;
  justify-content: space-between;
  align-items: center
}

.section{
    background: rgba(255,255,255,1);
    box-shadow: 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    width: 100%;
    padding-top: 0.3rem
}
.sectionOne{
    height: 14.58rem;
}
.sectionTwo{
    height: 19.92rem;
}
.sectionThree{
    height: 46.48rem;
}
.sectionFour{
    height: 13.63rem;
}

p {
  width: 7rem;
}
</style>

<script>
import Card from "../../components/common/Card.vue";
import Title from "../../components/common/Title.vue";
import { line } from "../../utils/charts/chartsLine";
import { bar } from "../../utils/charts/chartsBar";
import echarts from "echarts";

export default {
  data() {
    return {
      title: "平台状态概览",
      titleEn: "Platform Status Overview",
      twoTitle: "资产状态概览",
      twoTitleEn: "Overview Of Asset Status",
      threeTitle: "威胁概览",
      threeTitleEn: "Threat Overview",      
      fourTitle: "探针状态",
      fourTitleEn: "State Of Probe",
      cardName1: "TOP发起方",
      cardName2: "TOP受害方",
      cardName3: "TOP攻击事件",
      show2: true,
      tableData: [
          {initiator:"发起方",victim:"受害者",attack_event:"TOP攻击事件",event_namne:"最近事件名称",event_time:"最近事件时间",event_num:"累计次数"},
          {initiator:"321",victim:"受害者",attack_event:"TOP攻击事件",event_namne:"最近事件名称",event_time:"最近事件时间",event_num:"累计次数"},
          {initiator:"发起方",victim:"受害者",attack_event:"TOP攻击事件",event_namne:"最近事件名称",event_time:"最近事件时间",event_num:"累计次数"},
      ]
    };
  },
  components: {
    Card,
    Title,
  },
  methods: {
    line,
    bar
  },
  mounted() {
    this.$nextTick(function() {
      this.line(this, "charts1", [
        { name: "", value: 800 },
        { name: "", value: 100 },
        { name: "", value: 400 },
        { name: "", value: 600 },
        { name: "", value: 800 }
      ]);
      this.line(this, "charts2", [
        { name: "", value: 200 },
        { name: "", value: 800 },
        { name: "", value: 400 },
        { name: "", value: 600 },
        { name: "", value: 800 }
      ]);
      this.line(this, "charts3", [
        { name: "", value: 200 },
        { name: "", value: 800 },
        { name: "", value: 400 },
        { name: "", value: 600 },
        { name: "", value: 800 }
      ]);
      this.line(this, "charts4", [
        { name: "", value: 200 },
        { name: "", value: 800 },
        { name: "", value: 400 },
        { name: "", value: 600 },
        { name: "", value: 800 }
      ]);      
      this.bar(this, "chartBar1", [
        { name: "12", value: 200 },
        { name: "21", value: 800 },
        { name: "12", value: 400 },
        { name: "12", value: 600 },
        { name: "21", value: 800 }
      ]);
      this.bar(this, "chartBar2", [
        { name: "12", value: 200 },
        { name: "21", value: 800 },
        { name: "12", value: 400 },
        { name: "12", value: 600 },
        { name: "21", value: 800 }
      ]);
    });
  }
};
</script>
