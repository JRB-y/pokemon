require('./bootstrap');
window.Vue = require('vue');
import router from './router'
import store from './store'

Vue.component('app-component', require('./App.vue').default);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.auth && !store.getters['auth/isLoggedIn']) {
    next({
      path: '/login'
    })
  }
  else if (to.meta && to.meta.auth === false && store.getters['auth/isLoggedIn']) {
    next({
      path: '/pokedex'
    })
  }
  else {
    next()
  }
})

const app = new Vue({
    el: '#app',
    router,
    store
});
