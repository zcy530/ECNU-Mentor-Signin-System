<template>
  <div class="btn-wrapper">
    <button :class="{ active1: isLeftEnabled }" @click="toggleLeft">S</button>
    <button :class="{ active: isRightEnabled, active2: LeftStatus&&!isLeftEnabled}" @click="toggleRight">M</button>
  </div>
</template>

<script>
export default {
  props: {
    LeftStatus: {
      type: Boolean,
      default: false
    },
    S: {
      type: Boolean,
      default: false
    },
    M: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.isLeftEnabled = this.S
    this.isRightEnabled = this.M
  },
  data() {
    return {
      isLeftEnabled: false,
      isRightEnabled: false
    };
  },
  methods: {
    toggleLeft() {
      this.isLeftEnabled = !this.isLeftEnabled;
      this.$emit('left-toggle', this.isLeftEnabled);
    },
    toggleRight() {
      this.isRightEnabled = !this.isRightEnabled;
      this.$emit('right-toggle', this.isRightEnabled);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-wrapper {
  display: flex;
  width: 100%;
}

button {
  display: inline-block;
  width: 50%;
  height: 25px;
  background-color: #4d4d4d;
  color: #ccc;
  border: none;
  font-size: 10px;
  cursor: pointer;
}

button.active2 {
  background-color: #705153;
  color: #fff;
}

button.active {
  background-color: #7495c4;
  color: #fff;
}

button.active1 {
  background-color: #ce3236;
  color: #fff;
}
</style>
