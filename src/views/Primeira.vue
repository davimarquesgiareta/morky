<script setup>
import router from "@/router";

function proximo() {
  router.push({
    name: "segunda",
  });
}

function anterior() {
  router.push({
    name: "home",
  });
}
</script>

<template>
  <div>
    <div class="header">
      <button @click="anterior">
        <div style="display: flex">
          <div>
            <i class="pi pi-arrow-left"></i>
          </div>
          <div class="container" style="margin-left: 10px">Voltar</div>
        </div>
      </button>

      <button @click="proximo">
        <div style="display: flex">
          <div class="container">Avançar</div>
          <div style="margin-left: 10px">
            <i class="pi pi-arrow-right"></i>
          </div>
        </div>
      </button>
    </div>
    <div class="container-conteudo">
      <div style="color:#FFD700"><h1>30/06/1998</h1></div>
      <div><h4>O dia que meu morky mais fofo do mundo nasceu 🥰</h4></div>
      <div style="margin-top:1rem;" ><Image src="https://i.postimg.cc/k5LxrKgK/2.jpg"  width="250" height="" preview/></div>
      <div>(clique na imagem pra dar um zoom nhownn)</div>
    </div>
  </div>
</template>

<style scoped>
.header {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-conteudo {
  padding: 1.5rem;
  text-align: center;
}

</style>
