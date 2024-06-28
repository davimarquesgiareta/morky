<script setup>
import router from "@/router";

function anterior() {
  router.push({
    name: "setima",
  });
}
</script>

<template>
  <div class="gif-background">
    <div class="header">
      <button @click="anterior">
        <div style="display: flex">
          <div>
            <i class="pi pi-arrow-left"></i>
          </div>
          <div class="container" style="margin-left: 10px">Voltar</div>
        </div>
      </button>

    </div>
    <div class="container-conteudo">
      <div >DAVI ❤️  MELISSA</div>
      <img class="imagem" src="https://i.ibb.co/wwtFWRZ/Whats-App-Image-2024-06-25-at-20-20-43-1.jpg" alt="">
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
  font-size: 18px;
  margin-top: 5rem;
  background: #000000e7;
  padding: 1.5rem;
  text-align: center;
}

.imagem{
  margin-top: 1rem;
  height: 500px;
  border-radius: 20px;
}

.gif-background {
  width: 100%;
  height: 100vh; /* Ajuste conforme necessário */
  background-image: url("https://i.pinimg.com/originals/a6/7f/cc/a67fccfc172d96b2d002bf63da1b847d.gif");
  background-size: cover; /* Ou 'contain', dependendo do que você deseja */
  background-repeat: no-repeat; /* Evita repetição do GIF */
  background-position: center; /* Centraliza o GIF */
}

</style>
