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
                    top: 0,
                    left: '3%',
                    right: '12%',
                    bottom: 0,
                    containLabel: true
                },
                yAxis: {
                    type: 'value',
                    axisLabel: { show: false },
                    splitLine: { show: false },
                },
                xAxis: {
                    type: 'category',
                    data: ['Ls', 'Rs', 'Lsr', 'Rsr'],
                    splitLine: { show: false },
                    lineStyle: {
                        normal: {
                            width: 1, // 设置 x 轴线宽度
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#50857b', // 设置 x 轴标签颜色
                        }
                    },
                    axisTick: {
                        show: false, // Hide the tick marks
                    },
                },
                series: [
                {
                        type: 'bar',
                        stack: 'Ad',
                        barWidth: '30%',
                        data: [0.5, 0.5, 0.5, 0.5],
                        itemStyle: {
                            color: '#399e61' // 第一个柱图的颜色
                        }
                    },
                    {
                        type: 'bar',
                        stack: 'Ad',
                        data: [0.2, 0.2, 0.2, 0.2],
                        itemStyle: {
                            color: '#e4dc4d' // 第一个柱图的颜色
                        }
                    },
                    {
                        type: 'bar',
                        stack: 'Ad',
                        data: [0.1, 0.1, 0.1, 0.1],
                        itemStyle: {
                            color: '#594319' // 第一个柱图的颜色
                        }
                    },
                    {
                        type: 'bar',
                        stack: 'Ad',
                        data: [0.05, 0.05, 0.05, 0.05],
                        itemStyle: {
                            color: '#ecdb90' // 第一个柱图的颜色
                        }
                    },
                    {
                        type: 'bar',
                        stack: 'Ad',
                        data: [0.1, 0.1, 0.1, 0.1],
                        itemStyle: {
                            color: '#59371b' // 第一个柱图的颜色
                        }
                    },
                ]
            }
            this.chart.setOption(option);
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
    }
}
</script>

<style scoped>
.audio-bar-chart {
    width: 100%;
    height: 100%;
}
</style>
