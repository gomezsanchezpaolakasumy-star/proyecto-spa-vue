<template>
  <div class="vista portada">
    <div class="portada-header">
      <span class="badge">Tecnológico Nacional de México</span>
      <h1>Proyecto SPA: Directivas de Vue 3</h1>
      <p class="subtitulo">Demostración interactiva de directivas condicionales, renderizado de listas y claves de iteración.</p>
    </div>

    
    <div class="card equipo-card">
      <h3>👥 Integrantes del Equipo</h3>
      <ul class="lista-equipo">
        <li><strong>Paola Kasumy Gómez Sánchez</strong></li>
        <li><strong>Brandon Emilio Hernandez Aguilar</strong></li>
        <li><strong>Christian Eduardo Rosales González</strong></li>
      </ul>
    </div>

    <div class="card menu-card">
      <h3>🚀 Menú de Actividades</h3>
      <p>Selecciona una directiva para explorar su explicación y ejemplo interactivo:</p>
      
      <div class="grid-menu">
        <router-link to="/if" class="item-menu">
          <div class="icono">🔀</div>
          <h4>v-if / v-else</h4>
          <p>Renderizado condicional en el DOM</p>
        </router-link>

        <router-link to="/show" class="item-menu">
          <div class="icono">👁️</div>
          <h4>v-show</h4>
          <p>Alternancia de visibilidad mediante CSS</p>
        </router-link>

        <router-link to="/for" class="item-menu">
          <div class="icono">🔁</div>
          <h4>v-for</h4>
          <p>Iteración y renderizado de listas</p>
        </router-link>

        <router-link to="/key" class="item-menu">
          <div class="icono">🔑</div>
          <h4>v-bind:key</h4>
          <p>Identificación única de elementos iterados</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portada-header {
  text-align: center;
  margin-bottom: 2rem;
}

.badge {
  background: #e6fffa;
  color: #234e52;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
}

.subtitulo {
  color: #718096;
  font-size: 1.05rem;
}

.card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.equipo-card h3, .menu-card h3 {
  margin-top: 0;
  color: #2d3748;
}

.lista-equipo {
  list-style: none;
  padding: 0;
  margin: 0;
}

.lista-equipo li {
  padding: 8px 12px;
  background: #f7fafc;
  border-left: 4px solid #42b983;
  margin-top: 8px;
  border-radius: 4px;
}

.grid-menu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.item-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: #f8fafc;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, border-color 0.2s;
}

.item-menu:hover {
  transform: translateY(-3px);
  border-color: #42b983;
}

.icono {
  font-size: 2rem;
  margin-bottom: 8px;
}

.item-menu h4 {
  margin: 0 0 5px 0;
  color: #2b6cb0;
}

.item-menu p {
  margin: 0;
  font-size: 0.85rem;
  color: #718096;
}
</style>
