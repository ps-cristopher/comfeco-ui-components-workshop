import Header from '@/layout/Header.vue';
import Tabs from '@/components/Tabs.vue';

const globalComponents = {
  install(Vue) {
    Vue.component(Header.name, Header);
    Vue.component(Tabs.name, Tabs);
  }
};

export default globalComponents;
