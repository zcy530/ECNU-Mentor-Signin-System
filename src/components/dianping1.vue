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
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis: {
                    type: 'value',
                    axisLabel: { show: false },
                    splitLine: { show: false },
                },
                xAxis: {
                    type: 'category',
                    data: ['L', 'R', 'C'],
                    splitLine: { show: false },
                    axisTick: {
                        show: false, // Hide the tick marks
                    },
                },
                series: [
                    {
                        type: 'bar',
                        stack: 'Ad',
                        barWidth: '30%',
                        data: [320, 332, 301, 334, 390]
                    },
                    {
                        type: 'bar',
                        stack: 'Ad',
                        data: [120, 132, 101, 134, 90]
                    },
                    {
                        type: 'bar',
                        stack: 'Ad',
                        data: [220, 182, 191, 234, 290]
                    },
                    {
                        type: 'bar',
                        stack: 'Ad',
                        data: [150, 232, 201, 154, 190]
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
