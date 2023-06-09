<template>
    <div class="volume-control" ref="container">
        <div class="color-bar">
            <div class="color-bar-item1"></div>
            <div class="color-bar-item2"></div>
            <div class="color-bar-item3"></div>
        </div>
        <div class="color-bar2">
            <div class="color-bar-item4"></div>
            <div class="color-bar-item5"></div>
        </div>
        <div class="scale"></div> <!-- 刻度线 -->
        <div class="handle" :style="{ top: handleTop + 'px' }" @mousedown="startDrag"></div>
        <div class="handle2" :style="{ top: handleTop + 'px' }" @mousedown="startDrag"></div>
        <div class="value">
            <!-- {{ volume }} -->
            {{ title }}
        </div>
        <div class="tick" v-for="tick in ticks" :key="tick">
            <div class="tick-line"></div> <!-- 刻度格 -->
            <div class="tick-line2"></div> <!-- 刻度格 -->
            <div class="tick-label">{{ tick }}</div> <!-- 刻度标签 -->
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        volume: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            default: 'L'
        }
    },
    data() {
        return {
            Max: 60,
            clampedVolume: 50,
            dragging: false,
            startY: 0,
            startVolume: 0,
            tickInterval: 12, // 刻度间隔
            ticks: [0, 12, 24, 36, 48, 60]
        };
    },
    computed: {
        handleTop() {
            const containerHeight = this.$refs.container ? this.$refs.container.clientHeight : 0;
            const handleHeight = this.$refs.handle ? this.$refs.handle.clientHeight : 0;
            const maxTop = containerHeight - handleHeight;
            return maxTop - (this.volume / this.Max) * maxTop;
        },
    },
    methods: {
        startDrag(event) {
            this.dragging = true;
            this.startY = event.clientY;
            this.startVolume = this.volume;
            document.addEventListener('mousemove', this.handleDrag);
            document.addEventListener('mouseup', this.stopDrag);
        },
        handleDrag(event) {
            if (this.dragging) {
                const deltaY = event.clientY - this.startY;
                const containerHeight = this.$refs.container ? this.$refs.container.clientHeight : 0;
                const handleHeight = this.$refs.handle ? this.$refs.handle.clientHeight : 0;
                const maxDelta = containerHeight - handleHeight;
                const deltaVolume = (deltaY / maxDelta) * this.Max;
                const newVolume = this.startVolume - deltaVolume;
                this.clampedVolume = Math.max(0, Math.min(this.Max, newVolume));
                this.$emit('volumeChange', this.clampedVolume); // 发送变化的volume值到父组件
            }
        },
        stopDrag() {
            this.dragging = false;
            document.removeEventListener('mousemove', this.handleDrag);
            document.removeEventListener('mouseup', this.stopDrag);
        },
        tickTop(tick) {
            const containerHeight = this.$refs.container ? this.$refs.container.clientHeight : 0;
            const tickPosition = (tick / 60) * 100;
            return `calc(${tickPosition}% - 10px)`;
        },
    },
};
</script>
  
<style scoped>
.volume-control {
    position: relative;
    top: 9%;
    width: 20px;
    height: 100%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.scale {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 2px;
    /* background-color: #ccc; */
}

.handle {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 18px solid #f4f9f7;
    cursor: pointer;
    transform: rotate(9);
    z-index: 99;
}

.handle2 {
    position: absolute;
    top: 0;
    left: -18.3%;
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 3px;
    height: 3px;
    background-color: #e1d08b;
    cursor: pointer;
    transform: rotate(9);
    z-index: 99;
}

.value {
    position: absolute;
    top: 85%;
    left: 50%;
    color: #989a9a;
    transform: translate(-50%, -50%);
}

.tick {
    position: relative;
    height: 13%;
}

.tick-line {
    position: absolute;
    top: 80%;
    left: 8px;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 2px;
    background-color: #989a9a;
}

.tick-line2 {
    position: absolute;
    top: 33%;
    left: 8px;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 2px;
    background-color: #494b4a;
}

.tick-label {
    position: absolute;
    top: 0;
    right: -15px;
    font-size: 12px;
    color: #989a9a;
}

.color-bar {
    /* border: 1px solid #999;; */
    height: 80%;
    width: 10px;
    position: absolute;
    top: -3%;
    left: -20px;
}
.color-bar2 {
    /* border: 1px solid #999;; */
    height: 80%;
    width: 3px;
    position: absolute;
    top: -3%;
    left: -5px;
}

.color-bar-item1 {
    width: 100%;
    height: 50%;
    background-color: #594118;
}
.color-bar-item2 {
    width: 100%;
    height: 25%;
    background-color: #223e29;
}

.color-bar-item3 {
    width: 100%;
    height: 25%;
    background-color: #399f5d;
}

.color-bar-item4 {
    width: 100%;
    height: 50%;
    background-color: #554416;
}

.color-bar-item5 {
    width: 100%;
    height: 50%;
    background-color: #203e2c;
}
</style>
  