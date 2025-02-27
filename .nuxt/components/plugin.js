import Vue from 'vue'

const components = {
  AppHeader: () => import('../../components/AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
