<template>
	<div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 图表</el-breadcrumb-item>
                <el-breadcrumb-item>echart图表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
    	    vue-echarts-v3：基于vue2和eCharts.js3的图表组件。
    	    访问地址：<a href="https://github.com/xlsdg/vue-echarts-v3" target="_blank">vue-echarts-v3</a>
        </div>
        <section class="chart-container">
            <el-row>
              <el-col :span="12">
                <div id="chartColumn" style="width:100%; height:400px;"></div>
              </el-col>
              <el-col :span="12">
                <div id="chartBar" style="width:100%; height:400px;"></div>
              </el-col>
              <el-col :span="12">
                <div id="chartLine" style="width:100%; height:400px;"></div>
              </el-col>
              <el-col :span="12">
                <div id="chartPie" style="width:100%; height:400px;"></div>
              </el-col>
              <el-col :span="24">
                <a href="http://echarts.baidu.com/examples.html" target="_blank" style="float: right;">more>></a>
              </el-col>
            </el-row>
        </section>
	</div>
</template>
<script>
import echarts from 'echarts'
export default{
    data(){
        return{
            chartColumn:null,
            chartBar:null,
            chartLine:null,
            chartPie:null
        }
    },
    methods:{
        drawColumnChart(){
            this.chartColumn = echarts.init(document.getElementById('chartColumn'));
            this.chartColumn.setOption({
                title: { text: 'Column Chart' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                  name: '销量',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20]
                }]
            });
            window.onresize = this.chartColumn.resize;
        },
        drawBarChart() {
            this.chartBar = echarts.init(document.getElementById('chartBar'));
            this.chartBar.setOption({
                title: {
                    text: 'Bar Chart',
                    subtext: '数据来自网络'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['2011年', '2012年']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
                },
                series: [
                    {
                        name: '2011年',
                        type: 'bar',
                        data: [18203, 23489, 29034, 104970, 131744, 630230]
                    },
                    {
                        name: '2012年',
                        type: 'bar',
                        data: [19325, 23438, 31000, 121594, 134141, 681807]
                    }
                ]
            });
            window.onresize = this.chartBar.resize;
        },
        drawLineChart() {
            this.chartLine = echarts.init(document.getElementById('chartLine'));
            this.chartLine.setOption({
                title: {
                    text: 'Line Chart'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['邮件营销', '联盟广告', '搜索引擎']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            });
           window.onresize = this.chartLine.resize;
        },
        drawPieChart() {
            this.chartPie = echarts.init(document.getElementById('chartPie'));
            this.chartPie.setOption({
                title: {
                    text: 'Pie Chart',
                    subtext: '纯属虚构',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            { value: 335, name: '直接访问' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1548, name: '搜索引擎' }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
            window.onresize = this.chartPie.resize; 
            
            // window.onresize = this.chartColumn.resize;
            // window.onresize = this.chartBar.resize;
            // window.onresize = this.chartLine.resize;
            // window.onresize = this.chartPie.resize; 
            /*window.addEventListener("resize", function () {
              this.chartColumn.resize;
                this.chartBar.resize;
                this.chartLine.resize;
                this.chartPie.resize;
            });*/
        },
        drawCharts(){
           this.drawColumnChart();
            this.drawBarChart();
            this.drawLineChart();
            this.drawPieChart(); 
        }
    },
    
    mounted(){
        this.drawCharts();
    },
    updated(){
        this.drawCharts();
    }
}
</script>
<style scoped>
.crumbs{
	margin-bottom: 20px;
}
.plugins-tips,.plugins-tips2{
	background:#eef1f6;
	padding:20px 10px;
	margin-bottom:20px;
}
.content-title{
    clear: both;
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}

</style>