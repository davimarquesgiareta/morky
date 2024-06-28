<script setup>
import router from "@/router";

function proximo() {
  router.push({
    name: "setima",
  });
}

function anterior() {
  router.push({
    name: "quinta",
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
      quarta
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
