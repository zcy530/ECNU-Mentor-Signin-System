<template>
  <div class="select-container">
    <div class="selected-option" :class="{ 'selected-up': isDropdownOpen, 'selected-down': !isDropdownOpen }" @click="toggleDropdown">
      <span></span>
      <span>{{ title }}</span>
      <i class="arrow-icon" :class="{ 'arrow-up': isDropdownOpen, 'arrow-down': !isDropdownOpen }"></i>
    </div>
    <div v-if="isDropdownOpen" class="dropdown">
      <slot></slot>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      selectedValue: '',
      title: 'Mode'
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(value) {
      this.selectedValue = value;
      this.isDropdownOpen = false;
    }
  }
};
</script>
  
<style lang="scss" scoped>
.select-container {
  position: relative;
  width: 17.3vw;
}

.selected-option {
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #525657;
  background-color: #404243;
  color: #9a9c9d;
  cursor: pointer;
  font-weight: 600;
}

.arrow-icon {
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #606063;
  transform: rotate(-180deg);
  transition: transform 0.3s ease;
}


.arrow-up {
  transform: rotate(-90deg);
  border-right: 5px solid #7394b4;
}

.selected-up {
  border: 1px solid #647a93;
  background-color: #424b55;
  color: #6e95b6;
}

.dropdown {
  position: absolute;
  top: 80%;
  left: 0;
  width: 18.2vw;
  color: #9a9c9d;
  max-height: 200px;
  option {
    width: 89%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #525657;
    background-color: #3d3f41;
  }
}
</style>
  