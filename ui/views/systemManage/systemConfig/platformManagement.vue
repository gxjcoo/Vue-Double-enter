<template>
    <div id="platformMana">
        <div class="tableContent">
            <div class="state">
                <div :key="item.id" v-for="item in allState" class="statePart">
                    <img :src="item.src" alt="">
                    <div>
                        <h5>{{item.name}}</h5>
                        <p v-if="item.state === 1" style="color:rgba(36, 195, 111, 1)">
                            正常
                        </p>
                        <p v-else style="color:rgba(255, 76, 76, 1)">异常</p>
                    </div>
                </div>
            </div>
            <div class="partContent"> 
                <h2>平台管理</h2>
                <div>
                    <div class="onePart">
                        <div class="oneInput">
                            <p class="inputName">平台名称</p>
                            <el-input placeholder="请输入平台名称"></el-input>
                        </div>
                    </div>
                    <div class="onePart">
                        <div class="oneInput">
                            <p class="inputName">时间设置</p>
                            <el-date-picker
                                v-model="value1"
                                type="datetime"
                                placeholder="选择日期时间"
                                prefix-icon="el-icon-date"
                                >
                            </el-date-picker>
                        </div>
                        <div  class="oneInput">
                            <el-button icon="el-icon-refresh" type="primary" plain>时间同步</el-button>
                        </div>
                    </div>
                    <div class="onePart">
                        <div class="oneInput">
                            <p class="inputName">用户锁定时间</p>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="oneInput">
                            <p class="inputName">用户超时时间</p>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="partContent"> 
                <h2>邮件设置</h2>
                <div>
                    <div class="onePart">
                        <div class="oneInput">
                            <p class="inputName">发件人邮箱</p>
                            <el-input></el-input>
                        </div>
                        <div class="oneInput">
                            <p class="inputName">SMTP邮件服务器</p>
                            <el-input></el-input>
                        </div>
                    </div>
                     <div class="onePart">
                        <div class="oneInput">
                            <p class="inputName">端口号</p>
                            <el-input></el-input>
                        </div>
                        <div class="oneInput">
                            <p class="inputName">邮箱密码</p>
                            <el-input></el-input>
                        </div>
                    </div>
                    <div class="onePart">
                        <div class="oneInput">
                            <p class="inputName">收件人</p>
                            <el-input></el-input>
                        </div>
                        <div class="oneInput">
                            <el-button type="primary" plain>发送测试邮件</el-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="onePart allButton">
                <div>
                    <el-button type="primary" icon="el-icon-refresh" plain>平台初始化</el-button>
                    <el-button type="primary" icon="el-icon-loading" plain>平台重启</el-button>
                    <el-button type="primary" icon="el-icon-s-tools" plain>故障日志收集</el-button>
                </div>
                <el-button class="save">保存设置</el-button>
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
            }
        }
    }
</script>

<style scope>
#platformMana{
    min-height: 100%;
}
#platformMana .el-button--primary{
    width:auto;
    height:auto;
    padding: 0.6rem 1rem;
    border-radius:10px;
    box-sizing: border-box;
}
.tableContent{
    min-height: calc( 100% - 70px);
    background: #fff;
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
#platformMana .el-input__icon.el-icon-date{
    position: absolute;
    left: 13.8rem;
    width: 3rem;
    color: rgba(27, 137, 240, 1);
    border-left: 1px solid rgba(240, 240, 240, 1);
    font-size: 1rem;
    color: RGBA(32, 167, 254, 1);
}
#platformMana  .partContent .el-input{
    width: 17rem;
    border-radius: 10px;
}
.onePart{
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
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
.partContent:nth-of-type(3){
    margin-top: 80px;
}
.el-input--prefix .el-input__inner {
    padding-left: 15px;
}
.allButton{
    margin: 0 auto;
    margin-top: 200px;
    padding-bottom: 70px;
    width: 82.8%;
}
.save{
    background:linear-gradient(90deg,rgba(55,111,222,1) 0%,rgba(3,157,255,1) 100%);
    box-shadow:0px 0px 5px 0px rgba(0,12,102,0.4);
    border-radius:10px;
    padding: 0.6rem 1rem;
    border: none;
    color: #fff;
}
.save:hover{
    color: #fff;
}
</style>