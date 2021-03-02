<template>
  <div class="row mt-4">
    <comfeco-tabs
      :activedTab="tabId"
      :tabsConfig="{
        myProfile: {
          id: 'myProfile',
          label: 'Mi perfil',
          isShowing: true
        },
        medals: {
          id: 'medals',
          label: 'Insignias',
          isShowing: false
        },
        groups: {
          id: 'groups',
          label: 'Grupos',
          isShowing: false
        },
        events: {
          id: 'events',
          label: 'Eventos',
          isShowing: false
        }
      }"
      @tabChanged="setTabParam"
    >
      <template slot="myProfile" slot-scope="tab">
        <h1>Mi peril</h1>
        <hr>
        Esta es la informacion de mi perfil
        {{tab}}
      </template>

      <template slot="medals" slot-scope="tab">
        <h1>Insignias</h1>
        <hr>
        Esta es la informacion de mis insignias
        {{tab}}
      </template>

      <template slot="groups" slot-scope="tab">
        <h1>Grupos</h1>
        <hr>
        Esta es la informacion de mis grupos
        {{tab}}
      </template>

      <template slot="events" slot-scope="tab">
        <h1>Eventos</h1>
        <hr>
        Esta es la informacion de mis eventos
        {{tab}}
      </template>
    </comfeco-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabId: ''
    };
  },
  created() {
    this.tabId = this.$route.query?.tabId || '';
  },
  methods: {
    setTabParam(tabId) {
      this.$router.push({query: { tabId}});
    }
  }
}
</script>
