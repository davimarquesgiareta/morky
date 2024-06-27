<script setup>
import router from "@/router";

function proximo() {
  router.push({
    name: "quarta",
  });
}

function anterior() {
  router.push({
    name: "segunda",
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
      <div style="color: #ffd700"><h1>Vamos de Review...</h1></div>
      <div style="margin-top: 1rem"><h2>Melissa Evelyn de Freitas</h2></div>
      <div>
        <img class="imagem" src="https://i.postimg.cc/P526JYZ0/Whats-App-Image-2024-06-25-at-20-20-47-1.jpg" alt="">
      </div>
      <div class="ficha">
        <li>26 anos</li>
        <li>Branca</li>
        <li>Gostosa</li>
        <li>1.67 m</li>
        <li>68 kg</li>
        <li>Tipo sanguíneo A+</li>
        <li>Canceriana</li>
        <li>Empoderada</li>
      </div>
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

.ficha {
  padding: 1rem;
  margin-top: 3rem;
  border: 1px solid white;
  border-radius: 10px;
  max-width: 500px;
}

.imagem{
    margin-top: 1rem;
    height: 400px;
    border-radius: 20px;
}
</style>
