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
      <img class="imagem" src="https://i.ibb.co/tBqmndQ/nuh.jpg" alt="">
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
  background: #000000b4;
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
  height: 110vh; /* Ajuste conforme necessário */
  background-image: url("https://i.pinimg.com/originals/f9/6d/fb/f96dfb9f9d4e0b42af3888de8b9473a7.gif");
  background-size: cover; /* Ou 'contain', dependendo do que você deseja */
  background-repeat: no-repeat; /* Evita repetição do GIF */
  background-position: center; /* Centraliza o GIF */
}

</style>
