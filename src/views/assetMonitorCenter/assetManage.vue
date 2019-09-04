<template>
    <div id="assetManage">
        <div class="title">
            <div>
                <h2>资产管理</h2>
                <h4>Asset Group</h4>
            </div>
            <div class="titleRight">
                <div class="inputSearch">
                     <el-input placeholder="请输入关键搜索词" v-model="input3" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search">搜索</el-button>
                    </el-input>
                </div>
                <div class="addButton">
                    <el-button icon="el-icon-plus">
                        资产录入
                    </el-button>
                </div>
            </div>
        </div>
        <div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
         data() {
            return {
            }
        }
    }
</script>

<style>
#assetManage{
    height: 100%;
}
#assetManage .title{
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#assetManage .title div h2{
    font-size:18px;
    font-weight:bold;
    color:rgba(51,51,51,1);
}
#assetManage .title div h4{
    padding-top: 5px;
    font-size:12px;
    color:rgba(51,51,51,1);
}
#assetManage .title .el-button{
    width:auto;
    height: 40px;
    padding: 0.6rem 1rem;
    background:linear-gradient(90deg,rgba(55,111,222,1) 0%,rgba(3,157,255,1) 100%);
    box-shadow:0px 0px 5px 0px rgba(0,12,102,0.4);
    border-radius:10px;
    padding: none;
    border: none;
    color: #fff;
}
.addButton{
    margin-left: 10px;
}
.addButton .el-button{
    height: 40px;
}
#assetManage .title .el-button:focus, #assetManage .title .el-button:hover {
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
/* 输入框样式 */
#assetManage .inputSearch{
    display: inline-block;
    width: 18rem;
    margin-left: 0.5rem;
   
}
#assetManage .el-input-group{ 
    background: #fff;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
}
#assetManage .inputSearch .el-input__inner{
    height: 38px;
    line-height: 38px;
    border-radius: 10px;
    border: none;
}
#assetManage .el-input-group__append{
    background: none;
    border: none;
}
#assetManage .title .inputSearch .el-button{
    height: 40px;
    color: #fff;
}
</style>