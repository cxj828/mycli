/*
 * @Author: 陈传勋 593837024@qq.com
 * @Date: 2022-06-21 13:51:47
 * @LastEditors: 陈传勋 593837024@qq.com
 * @LastEditTime: 2022-10-17 17:34:35
 * @FilePath: /xlian-coe-doctor/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import { ConfigProvider , Toast , Dialog  } from 'vant';
import 'vant/lib/index.css';
import App from './App.vue';
import router from '@/router';
import '@/font/font.css';
import store from '@/store';
import 'amfe-flexible';

import '@vant/touch-emulator';
import 'vant/es/toast/style/index';
import 'vant/es/dialog/style/index';
import 'vant/es/image-preview/style/index';

async function mainInit() {
  const app = createApp(App);
  // 依赖注入api
  app.provide('$toast', Toast);
  app.provide('$dialog', Dialog);

  app.use(store);

  app.use(router);

  app.use(ConfigProvider);

  app.mount('#app');
}

mainInit();



