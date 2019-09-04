<template>
    <div id="userManage">
        <div class="title">
            <div>
                <h2>用户管理</h2>
                <h4>User Management</h4>
            </div>
            <el-button icon="el-icon-plus">添加</el-button>
        </div>
        <div class="tableContent">
            <el-table
                :data="tableData"
                style="width: 100%;">
                <el-table-column
                prop="number"
                label="序号"
                align="center" 
                width="150">
                </el-table-column>
                <el-table-column
                prop="name"
                label="用户名"
                align="center" 
                width="120">
                </el-table-column>
                <el-table-column
                prop="role"
                label="角色"
                align="center" 
                width="120">
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
                width="160">
                <template slot-scope="scope">
                  <i class="edit el-icon-edit-outline" @click="handleClick(scope.row)"></i>
                  <i class="remove el-icon-delete"></i>
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
                }, {
                number: '2016-05-02',
                name: '王小虎',
                role: '上海',
                createTime: '普陀区',
                recentTime: '上海市普陀区金沙江路 1518 弄',
                }, {
                number: '2016-05-02',
                name: '王小虎',
                role: '上海',
                createTime: '普陀区',
                recentTime: '上海市普陀区金沙江路 1518 弄',
                }, {
                number: '2016-05-02',
                name: '王小虎',
                role: '上海',
                createTime: '普陀区',
                recentTime: '上海市普陀区金沙江路 1518 弄',
                }]
            }
        }
    }
</script>

<style scope>
#userManage{
    height: 100%;
}
#userManage .title{
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#userManage .title div h2{
    font-size:18px;
    font-weight:bold;
    color:rgba(51,51,51,1);
}
#userManage .title div h4{
    padding-top: 5px;
    font-size:12px;
    color:rgba(51,51,51,1);
}
#userManage .title .el-button{
    width:auto;
    height:auto;
    padding: 0.6rem 1rem;
    background:linear-gradient(90deg,rgba(55,111,222,1) 0%,rgba(3,157,255,1) 100%);
    box-shadow:0px 0px 5px 0px rgba(0,12,102,0.4);
    border-radius:10px;
    padding: none;
    border: none;
    color: #fff;
}
#userManage .title .el-button:focus, .title .el-button:hover {
    color: #fff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
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
</style>