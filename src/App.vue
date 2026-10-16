<template>
  <div id="app">
    <header>
      <h1>Demostración de Directivas de Vue 3</h1>
      <nav class="nav-links">
        <router-link to="/">Inicio</router-link>
        <router-link to="/if">v-if / v-else</router-link>
        <router-link to="/show">v-show</router-link>
        <router-link to="/for">v-for</router-link>
        <router-link to="/key">v-bind:key</router-link>
      </nav>
    </header>
    <hr />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
