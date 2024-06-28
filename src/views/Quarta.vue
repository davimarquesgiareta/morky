<script setup>
import { ref } from "vue";
import router from "@/router";

const amor = ref(0);
const aparecer = ref(false);

function proximo() {
  router.push({
    name: "quinta",
  });
}

function anterior() {
  router.push({
    name: "terceira",
  });
}

const calcularAmor = () => {
  const intervalo = setInterval(() => {
    const incremento = 1000 + Math.floor(Math.random() * 11); // 1000 + número aleatório entre 0 e 10
    amor.value += incremento;
    if (amor.value >= 10000) {
      clearInterval(intervalo);
      aparecer.value = true;
    }
  }, 1000);
};
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
      <div style="color: #ffd700"><h1>Calculadora do amor ✖️➗➕➖🟰</h1></div>
      <div style="margin-top: 3rem">
        Esse é um botãozinho que calcula o tanto de amor que eu tenho pelo morzy
        :3
      </div>
      <Button
        style="margin-top: 3rem; height:60px"
        label="Calcular ❤️"
        severity="secondary"
        @click="calcularAmor()"
      />
      <Knob style="margin-top: 3rem" v-model="amor" :min="0" :max="10000" />
      <div v-if="aparecer">
        <Message style="margin-top: 1rem" severity="error"
          >Não foi possível calcular o amor... retorno undefined, ou seja
          infinito 😛</Message
        >
        <img
          class="imagem"
          src="https://i.ibb.co/j8rDVyK/Whats-App-Image-2024-06-25-at-20-20-30.jpg"
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
  padding: 1.5rem;
  text-align: center;
}

.imagem {
  margin-top: 2rem;
  height: 300px;
  border-radius: 10px;
}
</style>
