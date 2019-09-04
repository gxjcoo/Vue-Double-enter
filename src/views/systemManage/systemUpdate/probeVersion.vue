<template>
    <div id="probeVersion">
        <div class="probeTable">
            <h3>
                <p class="font-title">版本列表</p>
                <p class="upload"><i class="el-icon-upload"></i>上传</p>
            </h3>
              <el-table
                :data="tableData"
                stripe
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
                <template>
                  <i class="remove el-icon-delete"></i>
                </template>
                </el-table-column>
            </el-table>
             <div class="pagin">
                <Pagination></Pagination>
            </div>
        </div>
        <div class="probeTable">
             <h3>
                <p class="font-title">探针列表</p>
            </h3>
              <el-table
                :data="tableData"
                stripe
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
            </el-table>
            <div class="pagin">
                <Pagination></Pagination>
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from "@/components/common/Pagination";
    export default {
        components: {
            Pagination,
        },
        data(){
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
#probeVersion h3{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 0;
}
#probeVersion h3 .font-title:before{
    display: inline-block;
    content:' ';
    position: absolute;
    top: -3px;
    left: 0px;
    width: 10px;
    height: 20px;
    background: #1B89F0;
}
#probeVersion h3 .font-title{
    position: relative;
    display: inline-block;
    padding-left: 22px;
    font-weight: bold;
    font-size: 16px;
    font-color: #FF333333;
}
#probeVersion .note{
    position: relative;
    margin-right: 28px;
    color: rgba(102, 102, 102, 1);
    cursor: pointer;
    font-size: 14px;
}
.probeTable{
    width: 100%;
    background: #Fff;
    border-radius: 10px;
}
.probeTable:nth-of-type(2){
    margin-top: 10px;
}
.upload{
    display: flex;
    align-items: center;
    font-size:14px;
    font-weight:400;
    padding-right: 20px;
    color:rgba(51,51,51,1);
}
.upload i{
    display: inline-block;
    color: rgba(27, 137, 240, 1);
    font-size: 18px;
    margin-right: 5px;
}
.el-table th.is-leaf{
    background:rgba(250, 250, 251, 1)
}
.el-table td, .el-table th.is-leaf{
    border: none;
}
.el-icon-delete{
    padding: 0 10px;
    font-size: 18px;
}
.el-icon-delete{
    color:rgba(255, 97, 104, 1);
}
.pagin{
    padding: 25px;
}
</style>