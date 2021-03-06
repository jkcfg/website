// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import VueHighlightJS from 'vue-highlightjs';

import App from './App';
import router from './router';
import CodePane from './components/CodePane';
import Navbar from './components/Navbar';
import MarkdownPage from './components/MarkdownPage';

import analytics from './analytics';

Vue.config.productionTip = false;
Vue.use(VueHighlightJS);

Vue.component('navbar', Navbar);
Vue.component('codepane', CodePane);
Vue.component('markdownpage', MarkdownPage);

UIkit.use(Icons);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    Navbar,
  },
  template: '<App/>',
});

analytics('UA-130052649-1', { anonymize_ip: true });
