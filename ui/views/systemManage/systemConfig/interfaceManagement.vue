<template>
    <div id="interfaceManage">
        <div class="title">
            <div>
                <h2>接口管理</h2>
                <h4>Interface Management</h4>
            </div>
        </div>
        <div class="tableContent">
            <el-table
                :data="tableData"
                style="width: 100%;">
                <el-table-column
                prop="number"
                label="序号"
                align="center" 
                >
                </el-table-column>
                <el-table-column
                prop="name"
                label="用户名"
                align="center" 
                >
                </el-table-column>
                <el-table-column
                prop="role"
                label="角色"
                align="center" 
                >
                </el-table-column>
                <el-table-column
                prop="createTime"
                label="创建时间"
                align="center" 
                >
                </el-table-column>
                <el-table-column
                prop="recentTime"
                label="最近操作时间"
                align="center" 
                >
                </el-table-column>
                <el-table-column
                label="操作"
                align="center" 
                >
                <template slot-scope="scope">
                  <el-switch
                    v-model="scope.row.on" 
                    class="switchStyle" 
                    active-color="RGBA(49, 159, 255, 1)" active-text="开" 
                    inactive-color="RGBA(204, 204, 204, 1)" inactive-text="关"
                    >
                    </el-switch>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                tableData: [{
                number: '2016-05-02',
                name: '王小虎',
                role: '上海',
                createTime: '普陀区',
                recentTime: '上海市普陀区金沙江路 1518 弄',
                on:true
                }, {
                number: '2016-05-02',
                name: '王小虎',
                role: '上海',
                createTime: '普陀区',
                recentTime: '上海市普陀区金沙江路 1518 弄',
                on:false
                }, {
                number: '2016-05-02',
                name: '王小虎',
                role: '上海',
                createTime: '普陀区',
                recentTime: '上海市普陀区金沙江路 1518 弄',
                on:true
                }, {
                number: '2016-05-02',
                name: '王小虎',
                role: '上海',
                createTime: '普陀区',
                recentTime: '上海市普陀区金沙江路 1518 弄',
                on:false
                }],
            }
        }
    }
</script>

<style scope>
#interfaceManage{
    height: 100%;
}
.title{
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title div h2{
    font-size:18px;
    font-weight:bold;
    color:rgba(51,51,51,1);
}
.title div h4{
    padding-top: 5px;
    font-size:12px;
    color:rgba(51,51,51,1);
}
.title .el-button:focus, .title .el-button:hover {
    color: #fff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
.el-button{
    padding: 0;
}
.tableContent{
    min-height: calc( 100% - 70px);
    background: #fff;
    border-radius: 10px;
}
.el-table{
    border-radius: 10px;
}
.el-icon-edit-outline , .el-icon-delete{
    padding: 0 10px;
    font-size: 18px;
}
.el-icon-edit-outline{
    color: rgba(27, 137, 240, 1);
}
.el-icon-delete{
    color:rgba(255, 97, 104, 1);
}
tr:nth-of-type(2n+1){
    background:rgba(250, 250, 251, 1)
}
.switchStyle .el-switch__label {
  position: absolute;
  display: none;
  color: #fff;
}
.switchStyle .el-switch__label--left {
  z-index: 9;
  left: 10px;
}
.switchStyle .el-switch__label--right {
  z-index: 9;
  left: -18px;
}
.switchStyle .el-switch__label.is-active {
  display: block;
}
.switchStyle.el-switch .el-switch__core,
.el-switch .el-switch__label {
  width: 50px !important;
}
</style>