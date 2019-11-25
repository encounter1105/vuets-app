import Vue from "vue";
import VueRouter, { Route } from "vue-router";
import { Store } from "vuex";

declare module "*.vue" {
  // import Vue from "vue";
  export default Vue;
}

// 声明全局方法
declare module "vue/types/vue" {
  // import VueI18n from 'vue-i18n'
  interface Vue {
    $message: ElMessage;
    // $i18n: VueI18n;
    $router: VueRouter;
    $route: Route;
  }
}
