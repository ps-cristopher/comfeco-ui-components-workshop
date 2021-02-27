import Header from '@/layout/Header.vue';

const globalComponents = {
  install(Vue) {
    Vue.component(Header.name, Header);
  }
};

export default globalComponents;
