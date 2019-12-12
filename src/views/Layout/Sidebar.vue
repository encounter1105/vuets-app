<template>
  <el-scrollbar class="el-scrollbar">
      <el-menu class="el-menu-slide">
        <template v-for="item in getRouters" v-if="item.hidden&&
        item.children&&item.children.length>0">
          <el-menu-item v-if="item.children.length == 1"
          :index="item.children[0].path" :key="item.name" >
              <i v-if="item.children[0].meta.icon"
              :class="item.children[0].meta.icon"></i>
              <span slot="title">{{ item.children[0].meta.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Mutation, Action } from 'vuex-class';

@Component({
  components: {},
})
export default class Sidebar extends Vue {
  @Getter("routers") getRouters: any;
  created(){
    console.log(this.getRouters);
  }
}
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
  border-right: 1px solid #e6e6e6;
  background: #fff;
  .el-menu-slide {
    border-right: none;
    i {
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>