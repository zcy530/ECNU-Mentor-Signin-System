<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.ant-btn-primary {
  color: #fff;
  background-color: #6732c4 !important;
  border-color: #6732c4 !important;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
}

.ant-menu-item-selected {
  color: #fff !important;
}

.ant-menu-vertical .ant-menu-item::after, .ant-menu-vertical-left .ant-menu-item::after, .ant-menu-vertical-right .ant-menu-item::after, .ant-menu-inline .ant-menu-item::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-right: 3px solid rgba(0, 20, 183, 1) !important;
    transform: scaleY(0.0001);
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    content: '';
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #3875f2 !important;
    border-radius: 10px;
}
</style>
