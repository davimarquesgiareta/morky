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

    </div>
    <div class="container-conteudo">
      <div style="color: #ffd700"><h1>Aproveitando o momento...</h1></div>
      <img class="imagem" src="https://i.ibb.co/9WZ6T57/Whats-App-Image-2024-06-27-at-21-51-16.jpg" alt="">
      <div style="margin-top:1rem"><p>Hoje/amanhã faz 1 ano que a gente começou essa história foda demais</p></div>
      <div style="margin-top:1rem"><p>Há 1 ano atrás, eu tava sem muita perspectiva...perdido total na vida</p></div>
      <div style="margin-top:1rem"><p>E então você entrou na minha vida de um modo MUITO de repente, e mudou absolutamente TUDO</p></div>
      <div style="margin-top:1rem"><p>Hoje/amanhã faz 1 ano que a gente começou essa história foda demais</p></div>
      <div style="margin-top:1rem"><p>Pude reaprender o que é poder amar novamente, amar de verdade sabe?</p></div>
      <div style="margin-top:1rem"><p>Cresci, amadureci, vivi e graças a você eu evolui e me sinto uma pessoa muito melhor e muito mais feliz</p></div>
      <div style="margin-top:1rem"><p>Você é a pessoa mais incrível morzytos</p></div>
      <div style="margin-top:1rem"><p>Então... tem mais uma surpresa especial, quer ver? Clica no botão abaixo ai!</p></div>
      <div style="margin-top:3rem;">
      <Button style="height:60px;" label="Ver surpresa especial" severity="secondary" @click="proximo"/>
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

.imagem{
  margin-top: 1rem;
  height: 250px;
  border-radius: 20px;
}

</style>
