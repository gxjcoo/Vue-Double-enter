<template>
    <div id="trueList">
        <div class="title">
            <div>
               <el-button>全局攻击名单</el-button>
               <el-button class="unselect">主机白名单</el-button>
               <el-button class="unselect">脆弱性白名单</el-button>
            </div>
            <div>
                <el-button icon="el-icon-plus">添加</el-button>
            </div>
        </div>
        <div class="tableContent">
            <el-table
                :data="tableData"
                style="width: 100%;">
                <el-table-column
                prop="number"
                label="源ip"
                align="center" 
                >
                </el-table-column>
                <el-table-column
                prop="name"
                label="目的ip"
                align="center" 
                >
                </el-table-column>
                <el-table-column
                prop="role"
                label="域名"
                align="center" 
                >
                </el-table-column>
                <el-table-column
                prop="role"
                label="url"
                align="center" 
                >
                </el-table-column>
                <el-table-column
                prop="type"
                label="攻击类型"
                align="center" 
                >
                <template slot-scope="scope">
                    <el-tag type="warning">{{scope.row.type}}</el-tag>
                </template>
                </el-table-column>
                <el-table-column
                prop="state"
                label="生效分支"
                align="center" 
                >
                </el-table-column>
                 <el-table-column
                prop="time"
                label="添加时间"
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
                tableData: [
                    {
                        number: 1,
                        name: '王小虎',
                        role: '上海',
                        type: '漏洞检测探针',
                        state: 1,
                        time:'2019-04-23 14:10:24'
                    }, 
                    {
                        number: 2,
                        name: '王小虎',
                        role: '上海',
                        type: '漏洞检测探针',
                        state: 2,
                        time:'2019-04-23 14:10:24'
                    }, 
                    {
                        number: 3,
                        name: '王小虎',
                        role: '上海',
                        type: '漏洞检测探针',
                        state: 1,
                        time:'2019-04-23 14:10:24'
                    }, 
                    {
                        number: 4,
                        name: '王小虎',
                        role: '上海',
                        type: '漏洞检测探针',
                        state: 2,
                        time:'2019-04-23 14:10:24'
                    }, 
                ]
            }
        }
    }
</script>

<style scope>
#trueList{
    height: 100%;
}
#trueList .title{
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#trueList .title div h2{
    font-size:18px;
    font-weight:bold;
    color:rgba(51,51,51,1);
}
#trueList .title div h4{
    padding-top: 5px;
    font-size:12px;
    color:rgba(51,51,51,1);
}
#trueList .title .el-button{
    width:auto;
    height:auto;
    padding: 0.6rem 1rem;
    background:linear-gradient(90deg,rgba(55,111,222,1) 0%,rgba(3,157,255,1) 100%);
    box-shadow:0px 0px 5px 0px rgba(0,12,102,0.4);
    border-radius:10px;
    border: none;
    color: #fff;
    box-sizing: border-box;
}

.el-button.unselect:hover{
    background:linear-gradient(90deg,rgba(55,111,222,1) 0%,rgba(3,157,255,1) 100%);
    box-shadow:0px 0px 5px 0px rgba(0,12,102,0.4);
    border-radius:10px;
    border: none;
    color: #fff;
}
.el-button.unselect:focus, .el-button.unselect:hover {
    background:linear-gradient(90deg,rgba(55,111,222,1) 0%,rgba(3,157,255,1) 100%);
    box-shadow:0px 0px 5px 0px rgba(0,12,102,0.4);
    border-radius:10px;
    border: none;
    color: #fff;
}
.el-button.unselect{
    box-shadow:0px 0px 5px 0px rgba(0, 0, 0, 0.08);
    color: rgba(102, 102, 102, 1);
    background: #fff;
}
.state{
    display: inline-block;
    position: relative;
    color: rgba(51, 51, 51, 1);
}
.state:before{
    display: inline-block;
    content:'';
    position: absolute;
    left: -20px;
    top: 5px;
    width:10px;
    height:10px;
    border-radius:50%;
}
.normalState:before{
    background:rgba(54,209,123,1);
}
.unNormalState:before{
    background: #f00;
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
.el-tag{
    border-radius: 16px;
}
.el-icon-tickets, .el-icon-edit-outline , .el-icon-delete{
    padding: 0 10px;
    font-size: 18px;
}
.el-icon-tickets, .el-icon-edit-outline{
    color: rgba(27, 137, 240, 1);
}
.el-icon-delete{
    color:rgba(255, 97, 104, 1);
}
tr:nth-of-type(2n+1){
    background:rgba(250, 250, 251, 1)
}
</style>