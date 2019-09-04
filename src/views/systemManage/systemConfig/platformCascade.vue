<template>
    <div id="platformCas">
        <div class="tableContent">
            <div class="partContent"> 
                <h2>上报配置</h2>
                <div>
                    <div class="onePart">
                        <div class="oneInput">
                            <p class="inputName">当前平台名称</p>
                            <el-input placeholder="请输入平台名称"></el-input>
                        </div>
                         <div class="oneInput">
                            <p class="inputName">当前平台地址</p>
                            <el-input placeholder="请输入平台地址"></el-input>
                        </div>
                    </div>
                    <div class="onePart">
                        <div class="oneInput">
                            <p class="inputName">上级平台地址</p>
                            <el-input placeholder="请输入上级平台地址"></el-input>
                        </div>
                    </div>
                </div>
            </div>
            <div class="partContent"> 
                <h2>上报数据</h2>
                <div>
                    <div class="radioPart">
                        <p class="inputName">资产信息</p>
                        <el-radio v-model="radio" label="1">疑似被入侵资产</el-radio>
                        <el-radio v-model="radio" label="2">高风险资产</el-radio>
                        <el-radio v-model="radio" label="3">中风险资产</el-radio>
                    </div>
                    <div class="radioPart">
                        <p class="inputName">安全事件</p>
                        <el-radio v-model="radio" label="1">高危攻击</el-radio>
                        <el-radio v-model="radio" label="2">暴力破解</el-radio>
                        <el-radio v-model="radio" label="3">恶意文件</el-radio>
                        <el-radio v-model="radio" label="4">CC攻击</el-radio>
                        <el-radio v-model="radio" label="5">异常访问</el-radio>
                    </div>
                    <div class="radioPart">
                        <p class="inputName">脆弱性风险</p>
                        <el-radio v-model="radio" label="1">高危漏洞</el-radio>
                        <el-radio v-model="radio" label="2">中危漏洞</el-radio>
                        <el-radio v-model="radio" label="3">低危漏洞</el-radio>
                    </div>
                </div>
            </div>
            <div class="partContent">
                <h2>下级平台</h2>
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
                    label="平台名称"
                    align="center" 
                    >
                    </el-table-column>
                    <el-table-column
                    prop="role"
                    label="平台地址"
                    align="center" 
                    >
                    </el-table-column>
                    <el-table-column
                    prop="state"
                    label="当前状态"
                    align="center" 
                    >
                    <template slot-scope="scope">
                        <p class="status normalState" v-if="scope.row.state === 1">正常</p>
                        <p class="status unNormalState" v-else>异常</p>
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="type"
                    label="上报内容"
                    align="center" 
                    >
                    </el-table-column>
                    <el-table-column
                    prop="time"
                    label="最近上报时间"
                    align="center" 
                    >
                    </el-table-column>
                    <el-table-column
                    label="操作"
                    align="center" 
                   >
                    <template>
                        <i class="remove el-icon-delete"></i>
                    </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import logoSrc from '../../../assets/logo.png'
    export default {
        data(){
            return{
                allState:[
                    {
                        src: logoSrc,
                        name:'CPU状态：',
                        state: 1
                    },
                    {
                        src: logoSrc,
                        name:'内存状态：',
                        state: 1
                    },
                    {
                        src: logoSrc,
                        name:'磁盘状态：',
                        state: 0
                    },
                    {
                        src: logoSrc,
                        name:'组件状态：',
                        state: 1
                    }

                ],
                 options: [{
                    value: '选项1',
                    label: '5分钟'
                    }, {
                    value: '选项2',
                    label: '10分钟'
                    }, {
                    value: '选项3',
                    label: '20分钟'
                    },],
                radio: '',
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
#platformCas{
    min-height: 100%;
}
#platformCas .el-button--primary{
    width:auto;
    height:auto;
    padding: 0.6rem 1rem;
    border-radius:10px;
    box-sizing: border-box;
}
#platformCas .tableContent{
    min-height: calc( 100% - 70px);
    background: #fff;
    padding: 60px 0 130px 0;
    border-radius: 10px;
}
.state{
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 82.8%;
    padding: 60px 0;
}
.state img{
    display: inline-block;
    margin-right: 10px;
    width: 40px;
    height: 40px;
}
.statePart{
    display: flex;
    align-items: center;
}
.state h5{
    margin-bottom: 10px;
    color:rgba(51, 51, 51, 1);
    font-size: 14px;
    font-weight: bold;
}
.state p{
    font-size:14px;
    font-weight:bold;
}
.partContent{
    margin: 0 auto;
    width: 82.8%;
}
.partContent h2{
    font-size:16px;
    font-weight:bold;
    color:rgba(51,51,51,1);
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(240, 240, 240, 1);
}
#platformCas  .partContent .el-input{
    width: 17rem;
    border-radius: 10px;
}
.onePart{
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
}
.radioPart{
    padding-top: 20px;
}
.oneInput{
    width: 50%;
}
.inputName{
    display: inline-block;
    width: 140px;
    font-size:14px; 
    font-weight:400;
    color:rgba(51,51,51,1);
}
.partContent{
    margin-bottom: 80px;
}
.el-input--prefix .el-input__inner {
    padding-left: 15px;
}
.el-table{
    border: 1px solid #EBEEF5;
}
.status{
    display: inline-block;
    position: relative;
    color: rgba(51, 51, 51, 1);
}
.status:before{
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
.el-icon-edit-outline , .el-icon-delete{
    padding: 0 10px;
    font-size: 18px;
}
tr:nth-of-type(2n+1){
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
.partContent:nth-of-type(3) h2{
    border: none;
}
</style>