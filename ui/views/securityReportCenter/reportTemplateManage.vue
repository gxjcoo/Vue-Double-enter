<template>
  <div class="reportTemplateManage">
    <el-row class="header_title">
      <el-col :span="12">
        <Title title="报表模板" titleEn="Report Model"></Title>
      </el-col>
      <el-col :span="12" align="right">
        <el-button icon="el-icon-plus" @click="addTemplate">添加模板</el-button>
      </el-col>
    </el-row>
    <el-row class="boxList">
      <template v-for="(item,index) in list">
        <el-card class="box-card" :key="index">
          <span class="typeTxt">默认</span>
          <p class="bg_img"></p>
          <h4>安全报表中心</h4>
          <el-row align="center" style="padding-left:1rem">
            <el-button class="view">预览</el-button>
            <el-button type="text" icon="el-icon-delete"></el-button>
          </el-row>
        </el-card>
      </template>
    </el-row>
  </div>
</template>

<script>
import Title from "@/components/common/Title";
export default {
  components: {
    Title
  },
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  methods:{
    addTemplate(){
      this.$router.push('/stap/securityReportCenter/addTemplate');
    }
  }
};
</script>

<style>
.reportTemplateManage .header_title {
  justify-content: space-between;
}
.reportTemplateManage .header_title .el-button,
.reportTemplateManage .submitBtn,
.boxList .box-card .view {
  background: linear-gradient(
    90deg,
    rgba(55, 111, 222, 1) 0%,
    rgba(3, 157, 255, 1) 100%
  );
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border-color: transparent;
}
.boxList .box-card .el-button.view {
    border-radius: 20px;
padding: 0.4rem 1rem;}
.boxList {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}
.boxList .box-card {
  width: 15%;
  margin: 0 0.3rem 0.8rem;
  position: relative;
  line-height: 1.7rem;
  text-align: center;
  padding-bottom: 0.5rem;
}
.boxList .box-card .typeTxt {
  position: absolute;
  color: #fff;
  font-size: 0.5rem;
  top: 0;
  right: 0.3rem;
}
.boxList .box-card .el-card__body {
  padding: 0;
}
.boxList .box-card .bg_img {
  height: 7rem;
  width: 100%;
  margin-bottom: 0.3rem;
  background: url(
      https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3215618651,415319819&fm=26&gp=0.jpg
    )
    no-repeat center center;
  background-size: cover;
}
.boxList .box-card .el-icon-delete {
  color: #000;
}
</style>