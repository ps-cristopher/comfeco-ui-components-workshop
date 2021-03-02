<template>
  <div class="row w-100">
    <div class="col">
      <ul class="nav nav-tabs" id="myTab">
        <li class="nav-item mr-2" v-for="(tab, index) in tabsConfig" :key="'tab-'+index" @click="activeTab(index)">
            <button :class="tab.isShowing ? 'nav-link active' :  'nav-link'" :id="tab.id" type="button">
              {{tab.label}}
            </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
            v-for="(tab, index) in tabsConfig"
            :key="'tabContent-'+index"
            :class="tab.isShowing ? 'tab-pane fade show active' : 'tab-pane fade'"
            :id="'tabContent-'+index"
        >
            <div v-if="tab.isShowing">
                <slot :name="index" :tab="tab"></slot>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comfeco-tabs',
  props: {
      tabsConfig: {
        type: Object,
        required: true
      },
      activedTab: {
        type: String
      }
  },
  created () {
      let isInit = true;
      if (this.activedTab) this.activeTab(this.activedTab, isInit);
  },
  methods: {
      activeTab(tabId, init = false) {
          if (this.tabsConfig[tabId].isShowing) return;
          Object.keys(this.tabsConfig).forEach(tabIndex => {
              this.tabsConfig[tabIndex].isShowing = false;
              if (tabIndex == tabId) this.tabsConfig[tabIndex].isShowing = true;
          });
          this.$forceUpdate();
          if (!init) this.$emit('tabChanged', tabId);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
