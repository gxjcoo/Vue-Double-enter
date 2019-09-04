<template>
<div>
    <div class="tag">
        <TabsSearch></TabsSearch>    
    </div>
    <Title :title="title"  :titleEn="titleEn" @changeBtn="changeBtn" :Btn="true"></Title>
     <el-collapse-transition>
    <div v-show="show2" class="box transition-box">
        <Card  :cardTitle="cardTitle1"><div id="charts1" style=" width:100%;height:100%;"></div></Card>
        <Card  :cardTitle="cardTitle2"><div id="charts2" style=" width:100%;height:100%;"></div></Card>
        <Card  :cardTitle="cardTitle3"><div id="charts3" style=" width:100%;height:100%;"></div></Card>
    </div>
     </el-collapse-transition>
    <Title :title="twoTitle" :titleEn="twoTitleEn" ></Title>
    <el-table
        header-row-class-name="tableHead"
        :data="tableData"
        style="width: 100%;border-radius: 1rem;">
        <el-table-column label="发起方" >
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span class="tdFont">{{ scope.row.initiator }}</span>
            </template>
        </el-table-column>
        <el-table-column label="受害者" >
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span class="tdFont">{{ scope.row.victim }}</span>
            </template>
        </el-table-column>
        <el-table-column label="TOP攻击事件" >
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium" style="border-radius: 15px;">{{ scope.row.attack_event }}</el-tag>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="最近事件名称" >
            <template slot-scope="scope">
                <span class="tdFont">{{ scope.row.event_namne }}</span>
            </template>
        </el-table-column>
        <el-table-column label="最近事件时间" >
            <template slot-scope="scope">
                <span class="tdFont">{{ scope.row.event_time }}</span>
            </template>
        </el-table-column>
        <el-table-column label="累计次数" >
            <template slot-scope="scope">
                <span class="tdFont">{{ scope.row.event_num }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作">
        <template slot-scope="scope">
                <i class="el-icon-tickets " ></i>
        </template>
        </el-table-column>
    </el-table>

</div>

  


</template>
<style>
.tag{
    width:70.42rem;
    height:2.33rem;
}
.box{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.tdFont{
    font-size:0.58rem;
font-family:MicrosoftYaHei;
font-weight:400;
}

.tableHead{
    background:#fff;
    color:#606266;
    font-size:0.58rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight:bold;
    color:"rgba(51,51,51,1)"
}
p{
    width:7rem
}
</style>

<script>
    import Card from '../../components/common/Card.vue';
    import Title from '../../components/common/Title.vue';
    import TabsSearch from "../../components/common/TabsSearch";
    import echarts from 'echarts'
    import {bar} from "../../utils/charts/chartsBar";
    export default {
        data(){
            return {
                title:"数据汇总",
                titleEn:"Data Summary",
                cardTitle1:"TOP发起方",
                cardTitle2:"TOP受害方",
                cardTitle3:"TOP攻击事件",
                twoTitle:"事件列表",
                twoTitleEn:"Event List",
                show2: true,
                tableData: [
                    {initiator:"发起方",victim:"受害者",attack_event:"TOP攻击事件",event_namne:"最近事件名称",event_time:"最近事件时间",event_num:"累计次数"},
                    {initiator:"321",victim:"受害者",attack_event:"TOP攻击事件",event_namne:"最近事件名称",event_time:"最近事件时间",event_num:"累计次数"},
                    {initiator:"发起方",victim:"受害者",attack_event:"TOP攻击事件",event_namne:"最近事件名称",event_time:"最近事件时间",event_num:"累计次数"},
                    {initiator:"发起方",victim:"受害者",attack_event:"TOP攻击事件",event_namne:"最近事件名称",event_time:"最近事件时间",event_num:"累计次数"},
                    {initiator:"发起方",victim:"受害者",attack_event:"TOP攻击事件",event_namne:"最近事件名称",event_time:"最近事件时间",event_num:"累计次数"},
                    {initiator:"发起方",victim:"受害者",attack_event:"TOP攻击事件",event_namne:"最近事件名称",event_time:"最近事件时间",event_num:"累计次数"},
                    {initiator:"发起方",victim:"受害者",attack_event:"TOP攻击事件",event_namne:"最近事件名称",event_time:"最近事件时间",event_num:"累计次数"},
                    {initiator:"发起方",victim:"受害者",attack_event:"TOP攻击事件",event_namne:"最近事件名称",event_time:"最近事件时间",event_num:"累计次数"},
                ]
            }
        },
        components:{
            Card,Title,TabsSearch
        },
        methods: {
            changeBtn(show){
                this.show2=show
            },
            bar,
        },
        mounted(){
            this.$nextTick(function() {
                this.bar(this,"charts1",[{name:"192.168.1.1",value:800},{name:"100.2.44.1",value:100},{name:"192.168.1.1",value:400},{name:"100",value:600},{name:"100",value:800},])
                this.bar(this,"charts2",[{name:"192.168.1.1",value:200},{name:"100.2.44.1",value:800},{name:"192.168.1.1",value:400},{name:"100",value:600},{name:"100",value:800},])
                this.bar(this,"charts3",[{name:"项目1",value:0},{name:"项目2",value:800},{name:"项目3",value:200},{name:"项目4",value:600},{name:"项目5",value:800},],true)
            })
        }
    }

</script>
