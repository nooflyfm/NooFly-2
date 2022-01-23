<template>
  <el-menu
      :router="true"
      :mode="menu_mode"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#e61010"
      background-color="#fff"
      class="main-menu"
      default-active="/"
      text-color="#444">

    <el-menu-item v-if="isCollapse && isMobile" @click="() => this.isCollapse = false">
        <i class="el-icon-s-unfold"></i>
        <span slot="title">Expand</span>
    </el-menu-item>
    <el-menu-item v-else-if="!isCollapse && isMobile" @click="() => this.isCollapse = true">
        <i class="el-icon-s-fold"></i>
        <span slot="title">Collapse</span>
    </el-menu-item>
    
    <el-menu-item index="/dashboard" @click="handleClick">
        <i class="el-icon-s-marketing"></i>
        <span slot="title">Dashboard</span>
    </el-menu-item>

    <el-menu-item index="/transactions" @click="handleClick">
        <i class="el-icon-sort"></i>
        <span slot="title">Transactions</span>
    </el-menu-item>

    <el-menu-item index="/cashes" @click="handleClick">
        <i class="el-icon-bank-card"></i>
        <span slot="title">Cashes</span>
    </el-menu-item>

    <el-menu-item index="/piggybanks" @click="handleClick">
        <i class="el-icon-coin"></i>
        <span slot="title">Piggybanks</span>
    </el-menu-item>

    <el-menu-item index="/currencies" @click="handleClick">
        <i class="el-icon-eleme"></i>
        <span slot="title">Currencies</span>
    </el-menu-item>

    <el-menu-item index="/budget" @click="handleClick">
        <i class="el-icon-wallet"></i>
        <span slot="title">Budget</span>
    </el-menu-item>

    <el-menu-item index="/profile" @click="handleClick">
        <i class="el-icon-user"></i>
        <span slot="title">My Profile</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: "Sidebar",
  props: ['homeurl'],
  data() {
    return {
      menu_mode: 'vertical',
      isCollapse: true,
      isMobile: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick() {
      if (window.innerWidth < 800 && this.isCollapse == false) {
        this.isCollapse = true
      }
    },
  },
  mounted() {
    if (window.innerWidth < 800) {
      this.isCollapse = true
      this.isMobile = true
    } else {
      this.isCollapse = false
      this.isMobile = false
    }
  }
}
</script>

<style lang="scss" scoped>
.main-menu:not(.el-menu--collapse) {
    width: 17%;
}
.main-menu::-webkit-scrollbar {
  display: none;
}
.main-menu {
  margin-top: 54px;
  height: -webkit-calc(100vh - 54px);
  height: -moz-calc(100vh - 54px);
  height: calc(100vh - 54px);
  padding: 0 0 0 0 !important;
  position: fixed;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 17%;
  z-index: 1001;
  
  .el-menu-item {
    border-top: 1px solid #eee;
    text-align: left;

    i {
      color: #444;
    }
  }

  .el-submenu {
    border-top: 1px solid #eee;
    padding-left: 0 !important;
    text-align: left;

    .el-menu-item {

      i {
        color: #444;
      }
    }
  }
}
@media only screen and (max-width: 800px) {
    .main-menu {
        width: 10%;
    }
    .main-menu:not(.el-menu--collapse) {
        width: 100%;
    }
}
</style>