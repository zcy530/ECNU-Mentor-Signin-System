<template>
    <div class="audio-bar-chart" ref="chartContainer"></div>
</template>
  
<script>
import * as echarts from 'echarts';

export default {
    name: 'AudioBarChart',
    props: {
        leftChannelData: {
            type: Array,
            default: () => [320]
        },
        rightChannelData: {
            type: Array,
            default: () => []
        },
        yAxisData: {
            type: Array,
            default: () => ['L']
        }
    },
    mounted() {
        this.initializeChart();
    },
    methods: {
        initializeChart() {
            this.chart = echarts.init(this.$refs.chartContainer);
            this.resizeChart();

            window.addEventListener('resize', this.resizeChart);

            this.updateChart();
        },
        resizeChart() {
            this.chart.resize();
        },
        updateChart() {
            const option = {
                legend: {},
                grid: {
                    left: '6%', // 调整左边距
                    right: '1%', // 调整右边距
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLabel: { show: false },
                    splitLine: { show: false },
                },
                yAxis: {
                    type: 'category',
                    data: this.yAxisData,
                    axisTick: {
                        show: false,  //刻度线
                    },
                    axisLine: {
                        show: false, //隐藏y轴
                    },
                    axisLabel: {
                        show: true, //隐藏刻度值
                        offset: -15, // 向上偏移刻度标签
                        align: 'center'
                    },
                },
                series: [
                    {
                        type: 'bar',
                        stack: 'total',
                        data: this.leftChannelData,
                        barWidth: '100%',
                        itemStyle: {
                            color: '#895423' // 第一个柱图的颜色
                        }
                        // label: {show: true},
                    },
                    {
                        type: 'bar',
                        stack: 'total',
                        data: this.rightChannelData,
                        itemStyle: {
                            color: '#513a20' // 第二个柱图的颜色
                        }
                        // label: {show: true},
                    },
                ]
            };

            this.chart.setOption(option);
        }
    },
    watch: {
        leftChannelData() {
            this.updateChart();
        },
        rightChannelData() {
            this.updateChart();
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeChart);
        this.chart.dispose();
    }
};
</script>
  
<style scoped>
.audio-bar-chart {
    width: 100%;
    height: 100%;
}
</style>
  