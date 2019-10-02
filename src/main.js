import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import routes from './routes'
import vuetify from './plugins/vuetify';
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App),
  components: { App }
}).$mount('#app')
