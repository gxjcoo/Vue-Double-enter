<template>
    <div id="logSetting">
        <div class="tableContent">
            <div class="partContent"> 
                <h2>自动删除日志</h2>
                <div class="log">
                    <p class="line">当前磁盘占用： 0% （4G/14768.4G）</p>
                    <p class="line">
                        <el-radio v-model="radio" label="1">磁盘占用空间超过次比例则自动删除最早一天的日志</el-radio>
                    </p>
                    <div class="line">
                        <p class="inputName">最大磁盘占用比例：</p>
                        <el-input placeholder="90"></el-input>
                    </div>
                     <p class="line">
                        <el-radio v-model="radio" label="2">自动删除此天数前的日志</el-radio>
                    </p>
                    <div class="line unChoose">
                        <p class="inputName">最大磁盘占用比例：</p>
                        <el-input placeholder="90"></el-input>
                    </div>
                </div>
            </div>
            <div class="partContent"> 
                <h2>上报数据</h2>
                <div class="uploadData">
                    <div class="onePart">
                        <div class="oneInput">
                            <p class="inputName">日志选择</p>
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
                            <p class="inputName">日期选择</p>
                             <el-date-picker
                                v-model="value1"
                                type="datetimerange"
                                prefix-icon="el-icon-date"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :default-time="['12:00:00']">
                            </el-date-picker>
                        </div>
                    </div>
                </div>
            </div>
            <div class="downloadButton">
                <el-button class="download">日志下载</el-button>
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
            }
        }
    }
</script>

<style scope>
#logSetting{
    min-height: 100%;
}
#logSetting .el-button--primary{
    width:auto;
    height:auto;
    padding: 0.6rem 1rem;
    border-radius:10px;
    box-sizing: border-box;
}
#logSetting .tableContent{
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
/* #logSetting  .partContent .el-input{
    width: 17rem;
    border-radius: 10px;
} */
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
.log p, .log .el-radio__label{
    font-size:14px;
    font-weight:400;
    color:rgba(51,51,51,1);
}
.line{
    margin-top: 30px;
}
div.line{
    padding-left: 25px;
}
div.line .el-input{
    position: relative;
    width: 4rem;
    border-radius: 10px;
    color: rgba(51,51,51,1);
}
div.line .el-input input::placeholder{
    color: rgba(51,51,51,1);
}
div.line .el-input:after{
    display:inline-block;
    content: '%';
    position: absolute;
    right: 0rem;
    top: 4px;
    width: 1rem;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-left: 1px solid #DCDFE6;
    color: rgba(51,51,51,1);
}
.unChoose{
    opacity: 0.6;
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
.uploadData .el-input,.el-date-editor--datetimerange.el-input__inner{
    width: 17rem;
    border-radius: 10px;
}
.downloadButton{
    margin-top: 60px;
    text-align: center;
}
.download{
    background:linear-gradient(90deg,rgba(55,111,222,1) 0%,rgba(3,157,255,1) 100%);
    box-shadow:0px 0px 5px 0px rgba(0,12,102,0.4);
    border-radius:10px;
    padding: 0.6rem 1rem;
    border: none;
    color: #fff;
}
.download:hover{
    color: #fff;
}
</style>