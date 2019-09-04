<template>
    <div id="platformUpgra">
        <div class="content">
            <div class="titleRight">
                <h1>当前版本 v1.1.1</h1>
                <p>平台版本</p>
                <div class="inputSearch">
                     <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                        <el-button slot="append" icon="el-icon-upload">上传</el-button>
                    </el-input>
                </div>
                <div class="upgrade">
                    <el-button class="upgradeButton">平台升级</el-button>
                </div>
            </div>
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

<style scope>
#platformUpgra{
    background: #fff;
    height: 100%;
    padding-top: 9rem;
    border-radius: 10px;
}
.content{
    text-align: center;
    overflow: hidden;
}
.content div h2{
    font-size:18px;
    font-weight:bold;
    color:rgba(51,51,51,1);
}
.content div h4{
    padding-top: 5px;
    font-size:12px;
    color:rgba(51,51,51,1);
}
.content .el-button{
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
.content .el-button:focus, .content .el-button:hover {
    color: #fff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}

/* 输入框样式 */
.inputSearch{
    display: inline-block;
    width: 37rem;
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
.content .inputSearch .el-button{
    height: 40px;
    color: #fff;
}
.titleRight h1{
    font-size:24px;
    font-weight:bold;
    line-height: 60px;
    color:rgba(49,159,255,1);
}
.titleRight h1+p{
    margin-bottom: 80px;
    font-size:14px;
    font-weight:400;
    color:rgba(51,51,51,1);
}
.upgrade{
    margin-top: 80px;
}
</style>