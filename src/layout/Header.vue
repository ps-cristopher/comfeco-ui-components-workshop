<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="@/assets/comfeco-logo.png" alt="" width="50">
      </a>
      <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item mt-2">
            <router-link to="/">Inicio</router-link>
          </li>
          <li class="nav-item mt-2">
            <router-link to="/">Comunidades</router-link>
          </li>
          <li class="nav-item mt-2">
            <router-link to="/">Talleres</router-link>
          </li>
          <li class="nav-item mt-2">
            <router-link to="/">Creadores de contenido</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" @click="isShowingMenu = !isShowingMenu">
              Cristopher PS
            </a>
            <ul :class="isShowingMenu ? 'dropdown-menu show' : 'dropdown-menu'">
              <li @click="isShowingMenu = !isShowingMenu">
                <router-link class="dropdown-item mt-2" to="/profile">Mi perfil</router-link>
              </li>
              <hr>
              <li @click="isShowingMenu = !isShowingMenu">
                <router-link class="dropdown-item mt-2" to="/">Cerrar sesión</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'comfeco-header',
  data() {
    return {
      isShowingMenu: false
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
