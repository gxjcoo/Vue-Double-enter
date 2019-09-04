<template>
<div class="threatIntelligence">
  <div class="boxthreatIntelligence">
    <div class="title">威胁情报查询</div>
    <div class="search">
      <el-input placeholder="请输入内容" autofocus v-model="input"></el-input>
      <el-button icon="el-icon-search">搜索</el-button>
    </div>
    <div class="case">
      <span>搜索样例</span>
      <span>
        <a href="#">220.10.12.11</a>
      </span>
      <span>
        <a href="#">www.baidu.com</a>
      </span>
      <span>
        <a href="#">www.baidu.com</a>
      </span>
    </div>
    <div class="new">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="最新检索">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              <a href="#">{{ scope.row.retrieval }}</a>
            </span>
          </template>
        </el-table-column>
        <el-table-column label="热门搜索排行">
          <template slot-scope="scope">
            <div class="num" :style="{color:scope.row.color}">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px ">{{ scope.row.num}}</span>
            </div>

            <span style="margin-left: 10px ;float:left ">{{ scope.row.ip}}</span>
            <div style="clear:both"></div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "123",
      tableData: [
        {
          retrieval: "12019-10-20 8:20:10   zhang   检索   220.10.12.11",
          color: "#E64545",
          num: "NO 1",
          ip: "220.10.12.11"
        },
        {
          retrieval: "12019-10-20 8:20:10   zhang   检索   220.10.12.11",
          color: "#F58A18",
          num: "NO 2",
          ip: "220.10.12.11"
        },
        {
          retrieval: "12019-10-20 8:20:10   zhang   检索   220.10.12.11",
          color: "#11CFBF",
          num: "NO 3",
          ip: "220.10.12.11"
        },
        {
          retrieval: "12019-10-20 8:20:10   zhang   检索   220.10.12.11",
          color: "#666666",
          num: "NO 4",
          ip: "220.10.12.11"
        },
        {
          retrieval: "12019-10-20 8:20:10   zhang   检索   220.10.12.11",
          color: "#666666",
          num: "NO 5",
          ip: "220.10.12.11"
        }
      ]
    };
  }
};
</script>

<style lang="less" >
.threatIntelligence{
.boxthreatIntelligence{
  margin: 0.5rem auto 0;
  padding-top: 1rem !important;
  background: #ffffff;
  width: 69.75rem;
  height: 41.666666666666664rem;
  box-shadow: 0rem 0rem 0.20833333333333334rem 0rem rgba(0, 0, 0, 0.08);
  border-radius: 0.4166666666666667rem;
}
.title {
  margin: 6.875rem auto 0;
  width: 6rem;
  height: 1rem;
  font-size: 1rem;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(48, 46, 51, 1);
  line-height: 2.4583333333333335rem;
}
.search {
  position: relative;
  margin: 2.83333rem auto 0;
  width: 35.541667rem;
  height: 1.8333333333333333rem;
  border-radius: 0.4166666666666667rem;
  .el-input__inner {
    position: absolute;
    left: 0rem;
    top: -0.64rem;
    height: 1.833333333333333rem;
    background: #fafafa;
    width: 31.3rem;
    border-radius: 0.4166666666666667rem;
  }

  .el-input__inner :focus {
    outline: -webkit-focus-ring-color auto 5px;
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
    outline-width: 5px;
  }
}
.el-button {
  position: absolute;
  top: -0.2rem;
  width: 4.25rem;
  height: 1.8333333333333333rem;
  background: linear-gradient(
    90deg,
    rgba(55, 111, 222, 1) 0%,
    rgba(3, 157, 255, 1) 100%
  );
  border-radius: 0.4166666666666667rem;
  left: 31.258rem;
  font-size: 0.5833333333333334rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.case {
  position: relative;
  margin: 0.875rem auto 0;
  width: 35.541667rem;
  height: 1rem;
  text-align: center;
  font-size: 0.58rem;
  line-height: 1rem;
  span {
    margin-left: 1rem;
    font-family: MicrosoftYaHei;
    font-weight: 400;
  }
}
.new {
  background: #000;
  margin: 5rem 0 0 12rem;
  .el-table th > .cell {
    font-size: 0.6666666666666666rem;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(46, 51, 49, 1);
  }
}
.num {
  float: left;
  margin-right: 10rem;
}

a {
  color: rgba(27, 137, 240, 1);
}
}
</style>