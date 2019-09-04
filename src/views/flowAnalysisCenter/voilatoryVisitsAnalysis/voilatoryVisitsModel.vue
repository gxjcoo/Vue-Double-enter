<template>
  <div class="voilatoryVisitsModel">
    <el-row class="header_title">
      <el-col :span="12">
        <Title :title="title" :titleEn="titleEn"></Title>
      </el-col>
      <el-col :span="12" align="right">
        <el-button icon="el-icon-plus">自定义规则</el-button>
      </el-col>
    </el-row>
    <el-card class="box-card contentBox">
      <div class="header title">系统预定义</div>
      <el-form label-width="200px" :inline="true">
        <el-form-item label="夜间外发流量">
          <el-radio-group v-model="tabPosition" size="medium">
            <el-radio-button label="1" style="margin-right:3rem;">
              <i class="el-icon-aim"></i>
              开启
            </el-radio-button>
            <el-radio-button label="2">
              <i class="el-icon-switch-button"></i>
              关闭
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="规律性外发数据">
          <el-radio-group v-model="tabPosition" size="medium">
            <el-radio-button label="1" style="margin-right:3rem;">
              <i class="el-icon-aim"></i>
              开启
            </el-radio-button>
            <el-radio-button label="2">
              <i class="el-icon-switch-button"></i>
              关闭
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="间歇性访问流量">
          <el-radio-group v-model="tabPosition" size="medium">
            <el-radio-button label="1" style="margin-right:3rem">
              <i class="el-icon-aim"></i>
              开启
            </el-radio-button>
            <el-radio-button label="2">
              <i class="el-icon-switch-button"></i>
              关闭
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div class="header title" style="border:none">自定义异常访问规则</div>
      <div class="tablebox">
        <el-table :data="tableData" stripe>
          <el-table-column label="IP" prop="name"></el-table-column>
          <el-table-column label="规则名称" prop="name"></el-table-column>
          <el-table-column label="访问目的" prop="name"></el-table-column>
          <el-table-column label="访问源" prop="name"></el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.active" active-text="开" inactive-text="关"></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" prop="name">
            <template slot-scope="scope">
              <el-button type="text" class="editBtn btnFont" icon="el-icon-edit-outline"></el-button>
              <el-button type="text" class="deleteBtn btnFont" icon="el-icon-delete"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-col align="center">
      <el-button class="submitBtn">应用规则</el-button>
    </el-col>
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
      tabPosition: "1",
      title: "违规访问规则",
      titleEn: "Summary Statistics",
      tableData: [
        { name: "张三", active: true },
        { name: "张三1", active: true },
        { name: "张三2", active: true },
        { name: "张三3", active: false },
        { name: "张三4", active: true }
      ]
    };
  }
};
</script>

<style>
.voilatoryVisitsModel .header_title {
  justify-content: space-between;
}
.voilatoryVisitsModel .header_title .el-button,
.voilatoryVisitsModel .submitBtn {
  background: linear-gradient(
    90deg,
    rgba(55, 111, 222, 1) 0%,
    rgba(3, 157, 255, 1) 100%
  );
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}
.voilatoryVisitsModel .submitBtn {
  margin-top: 1rem;
}
.voilatoryVisitsModel .contentBox {
  background: #fff;
  padding: 20px 5rem;
}
.voilatoryVisitsModel .contentBox .header {
  border-bottom: 1px solid #f0f0f0;
  height: 50px;
  line-height: 50px;
  margin-bottom: 10px;
  color: #000;
}

.voilatoryVisitsModel .el-radio-group {
  margin-bottom: 0 !important;
}
.voilatoryVisitsModel .el-radio-group .el-radio-button__inner {
  background: #fafafa;
  color: #999999;
  border-color: #f0f0f0;
  padding: 10px 20px;
  border-radius: 10px;
}
.voilatoryVisitsModel
  .el-radio-group
  .el-radio-button.is-active
  .el-radio-button__inner {
  background: #f3f9fe;
  color: #1b89f0;
  border-color: #1b89f0;
}
.voilatoryVisitsModel
  .el-radio-group
  .el-radio-button.is-active
  .el-radio-button__inner
  i {
  color: #1b89f0;
}
.voilatoryVisitsModel .el-form-item {
  width: 49%;
}
.voilatoryVisitsModel .el-form-item__label {
  text-align: left;
}
.voilatoryVisitsModel .tablebox{
  border: 1px solid #F0F0F0;
    margin-top: 5px;
    padding-right: 1px;
    border-radius: 10px;
    overflow: hidden;
}
</style>