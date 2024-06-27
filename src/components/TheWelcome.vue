<script setup>
import { RouterLink, RouterView } from 'vue-router'
import router from '@/router';
function proximaPagina(){
  router.push({
    name: "primeira"
  })
}
</script>

<template>
  <div class="container">
    <div>
      <div>
        <h1>Oi <span style="color:red;">Morzy</span> 🥰</h1>
      </div>
      <div style="margin-top:2rem;">
        <p>Este app em <span style="color:#42B883"><b>Vue.js </b></span>é um presentinho procê hihi 🎂</p>
      </div>
      <div style="margin-top:3rem;">
        <Button style="height:60px; width: 200px" label="Ver presente 😙" severity="secondary" @click="proximaPagina"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 20px;
}
</style>
