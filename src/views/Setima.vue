<script setup>
import router from "@/router";

function sim() {
  router.push({
    name: "sim",
  });
}

function nao() {
  router.push({
    name: "nao",
  });
}

function anterior() {
  router.push({
    name: "sexta",
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
      <div>
        <h1>Agora é <span style="color: #ffd700">oficial ©️</span></h1>
      </div>
      <div style="margin-top: 5rem">
        <h1>Quer <span style="color: red">namorar </span>comigo? 🥹</h1>
      </div>
      <div>
        <img
          class="imagem"
          src="https://i.pinimg.com/originals/7e/10/6b/7e106bcd4b92c84f26a8e9b303a57752.png"
          alt=""
        />
      </div>
      <div class="container-botoes">
        <div>
          <Button @click="nao" style="height:70px; width:150px;" label="Não" severity="secondary" />
        </div>
        <div>
          <Button @click="sim" style="height:70px; width:150px;" label="SIM" severity="secondary" />
        </div>
      </div>
      <div>
        <img
          src="https://i.pinimg.com/originals/b1/58/f4/b158f4cc0584572b4cdab742ef9bf7c0.gif"
          alt=""
        />
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
  margin-top: 8rem;
  background: rgba(0, 0, 0, 0.952);
  padding: 1.5rem;
  text-align: center;
  color: white;
}

.imagem {
  margin-top: 1rem;
  height: 250px;
  border-radius: 20px;
}

.container-botoes {
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  
}

.gif-background {
  width: 100%;
  height: 400px; /* Ajuste conforme necessário */
  background-image: url("https://i.pinimg.com/originals/b1/58/f4/b158f4cc0584572b4cdab742ef9bf7c0.gif");
  background-size: cover; /* Ou 'contain', dependendo do que você deseja */
  background-repeat: no-repeat; /* Evita repetição do GIF */
  background-position: center; /* Centraliza o GIF */
}
</style>
