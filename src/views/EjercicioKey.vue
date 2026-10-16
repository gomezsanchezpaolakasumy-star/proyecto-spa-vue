<template>
  <div class="vista">
    <h2>Directiva: v-for</h2>
    
    <p>
      La directiva <code>v-for</code> se utiliza para renderizar una lista de elementos iterando sobre un arreglo u objeto de datos. 
      Genera dinámicamente un bloque HTML por cada elemento presente en la colección.
    </p>

    <!-- Ejemplo de la Estructura -->
    <div class="estructura">
      <h3>Sintaxis de la Estructura:</h3>
      <pre><code>&lt;ul&gt;
  &lt;li v-for="(item, index) in lista" :key="item.id"&gt;
    &#123;&#123; index &#125;&#125; - &#123;&#123; item.nombre &#125;&#125;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
    </div>

    <!-- Aplicación Práctica -->
    <div class="ejemplo">
      <h3>Aplicación Interactiva:</h3>
      <p>Agrega nuevas materias al arreglo dinámico:</p>

      <div class="input-grupo">
        <input v-model="nuevaMateria" placeholder="Ej. Redes de Computadoras" @keyup.enter="agregarMateria" />
        <button @click="agregarMateria">Agregar Materia</button>
      </div>

      <ul class="lista-items">
        <li v-for="(materia, index) in materias" :key="materia.id">
          <span>📌 <strong>Materia {{ index + 1 }}:</strong> {{ materia.nombre }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const materias = ref([
  { id: 1, nombre: 'Sistemas Operativos' },
  { id: 2, nombre: 'Taller de Bases de Datos' },
  { id: 3, nombre: 'Conmutación y Enrutamiento' }
])
const nuevaMateria = ref('')
let siguienteId = 4

const agregarMateria = () => {
  if (nuevaMateria.value.trim() !== '') {
    materias.value.push({ id: siguienteId++, nombre: nuevaMateria.value.trim() })
    nuevaMateria.value = ''
  }
}
</script>
