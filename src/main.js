/* eslint-disable no-new */
import Vue from 'vue';
import modelViewer from '@google/model-viewer';
import App from './App.vue';
// import store from './store';

Vue.config.productionTip = false;
Vue.use(modelViewer);

new Vue({
  el: '#view-product-in-your-house',
  render: (h) => h(App),
});
