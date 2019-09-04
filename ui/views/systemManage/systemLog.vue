<template>
    <div id="systemLog">
        <div class="title">
            <div>
                <h2>系统日志</h2>
                <h4>System Log</h4>
            </div>
            <div class="titleRight">
                <div class="datePick"> 
                    <el-date-picker
                        v-model="value1"
                        type="datetimerange"
                        prefix-icon="el-icon-date"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['12:00:00']">
                    </el-date-picker>
                </div>
                <div class="inputSearch">
                     <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search">搜索</el-button>
                    </el-input>
                </div>
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
                prop="info"
                label="信息"
                align="center" 
                >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                tableData: [
                    {
                        number: '2016-05-02',
                        name: '王小虎',
                        role: '上海',
                        createTime: '普陀区',
                        recentTime: '上海市普陀区金沙江路 1518 弄',
                        info:'登录IP地址：192.168.120'
                    }, 
                    {
                        number: '2016-05-02',
                        name: '王小虎',
                        role: '上海',
                        createTime: '普陀区',
                        recentTime: '上海市普陀区金沙江路 1518 弄',
                        info:'登录IP地址：192.168.120'
                    }, 
                    {
                        number: '2016-05-02',
                        name: '王小虎',
                        role: '上海',
                        createTime: '普陀区',
                        recentTime: '上海市普陀区金沙江路 1518 弄',
                        info:'登录IP地址：192.168.120'
                    }, 
                    {
                        number: '2016-05-02',
                        name: '王小虎',
                        role: '上海',
                        createTime: '普陀区',
                        recentTime: '上海市普陀区金沙江路 1518 弄',
                        info:'登录IP地址：192.168.120'
                    }
                ]
            }
        }
    }
</script>

<style scope>
#systemLog{
    height: 100%;
}
#systemLog .title{
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#systemLog .title div h2{
    font-size:18px;
    font-weight:bold;
    color:rgba(51,51,51,1);
}
#systemLog .title div h4{
    padding-top: 5px;
    font-size:12px;
    color:rgba(51,51,51,1);
}
#systemLog .title .el-button{
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
#systemLog .title .el-button:focus, #systemLog .title .el-button:hover {
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
.titleRight{
    display: flex;
    align-items: center;
}
/* 时间选择器样式 */
.datePick{
    display: inline-block;
    width: 21rem;
}
.el-date-editor--datetimerange.el-input__inner{
    width: 100%;
    border-radius: 10px;
}
.el-date-editor .el-range__icon{
    border-right: 1px solid rgba(240, 240, 240, 1);
    font-size: 1rem;
    color: RGBA(32, 167, 254, 1);
}
.el-range__icon.el-input__icon{
    width: 3rem;
}
.el-range-input{
    color: rgba(51, 51, 51, 1);
}
.el-range-input::-webkit-input-placeholder{
    color:rgba(51, 51, 51, 1);
}
.el-range-input::-moz-placeholder{   
    color:rgba(51, 51, 51, 1);
}
.el-range-input:-moz-placeholder{    
    color:rgba(51, 51, 51, 1);
}
.el-range-input:-ms-input-placeholder{ 
    color:rgba(51, 51, 51, 1);
}
/* 输入框样式 */
.inputSearch{
    display: inline-block;
    width: 18rem;
    margin-left: 0.5rem;
   
}
.el-input-group{ 
    background: #fff;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #DCDFE6;
}
.inputSearch .el-input__inner{
    height: 38px;
    line-height: 38px;
    border-radius: 10px;
    border: none;
}
.el-input-group__append{
    background: none;
    border: none;
}
.title .inputSearch .el-button{
    height: 40px;
    color: #fff;
}
</style>