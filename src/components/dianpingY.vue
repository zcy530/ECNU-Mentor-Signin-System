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
        xAxisData: {
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
                    top: '6%', // 调整上边距
                    bottom: '1%', // 调整下边距
                    containLabel: true
                },
                yAxis: {
                    type: 'value',
                    axisLabel: { show: false },
                    splitLine: { show: false },
                },
                xAxis: {
                    type: 'category',
                    data: this.xAxisData,
                    axisTick: {
                        show: false, // 刻度线
                    },
                    axisLine: {
                        show: false, // 隐藏x轴
                    },
                    axisLabel: {
                        show: true, // 显示刻度标签
                        rotate: 90, // 旋转刻度标签
                        verticalAlign: 'middle', // 垂直居中对齐
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
                        data: [120],
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
