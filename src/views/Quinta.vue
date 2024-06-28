<script setup>
import router from "@/router";

import { ref } from "vue";

const images = ref([
  {
    itemImageSrc:
      "https://i.ibb.co/xh2xSk8/Whats-App-Image-2024-06-25-at-20-20-35.jpg",
    thumbnailImageSrc:
      "https://i.ibb.co/xh2xSk8/Whats-App-Image-2024-06-25-at-20-20-35.jpg",
    alt: "Image 1",
  },
  {
    itemImageSrc:
      "https://i.ibb.co/MggyKBF/Whats-App-Image-2024-06-25-at-20-20-40.jpg",
    thumbnailImageSrc:
      "https://i.ibb.co/MggyKBF/Whats-App-Image-2024-06-25-at-20-20-40.jpg",
    alt: "Image 2",
  },
  {
    itemImageSrc:
      "https://i.ibb.co/wwtFWRZ/Whats-App-Image-2024-06-25-at-20-20-43-1.jpg",
    thumbnailImageSrc:
      "https://i.ibb.co/wwtFWRZ/Whats-App-Image-2024-06-25-at-20-20-43-1.jpg",
    alt: "Image 3",
  },
  {
    itemImageSrc:
      "https://i.ibb.co/C21r619/Whats-App-Image-2024-06-25-at-20-20-42-3.jpg",
    thumbnailImageSrc:
      "https://i.ibb.co/C21r619/Whats-App-Image-2024-06-25-at-20-20-42-3.jpg",
    alt: "Image 4",
  },
  {
    itemImageSrc:
      "https://i.ibb.co/7Nk8RQP/Whats-App-Image-2024-06-25-at-20-20-41-2.jpg",
    thumbnailImageSrc:
      "https://i.ibb.co/7Nk8RQP/Whats-App-Image-2024-06-25-at-20-20-41-2.jpg",
    alt: "Image 5",
  },
  {
    itemImageSrc:
      "https://i.ibb.co/RhNVBq4/Whats-App-Image-2024-06-25-at-20-20-41-1.jpg",
    thumbnailImageSrc:
      "https://i.ibb.co/RhNVBq4/Whats-App-Image-2024-06-25-at-20-20-41-1.jpg",
    alt: "Image 6",
  },
  {
    itemImageSrc:
      "https://i.ibb.co/n3VQ51r/Whats-App-Image-2024-06-25-at-20-20-41.jpg",
    thumbnailImageSrc:
      "https://i.ibb.co/n3VQ51r/Whats-App-Image-2024-06-25-at-20-20-41.jpg",
    alt: "Image 7",
  },
  {
    itemImageSrc:
      "https://i.ibb.co/B6Sb4Y8/Whats-App-Image-2024-06-27-at-21-13-09.jpg",
    thumbnailImageSrc:
      "https://i.ibb.co/B6Sb4Y8/Whats-App-Image-2024-06-27-at-21-13-09.jpg",
    alt: "Image 8",
  },
]);

function proximo() {
  router.push({
    name: "sexta",
  });
}

function anterior() {
  router.push({
    name: "quarta",
  });
}

const responsiveOptions = ref([
  {
    breakpoint: "1300px",
    numVisible: 4,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);
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
      <div style="color: #ffd700"><h1>Obrigado por existir</h1></div>
      <div style="margin-top: 2rem">
        <p>
          Desde quando você entrou na minha vida, você mudou tudo pra melhor morzy
        </p>
      </div>
      <div style="margin-top: 2rem">
        <p>
          Vai uma pequena listinha de coisas:
        </p>
      </div>
      <div class="listinha">
        <li>Me ensinou a ser uma pessoa melhor</li>
        <li>Mostrou que eu posso ser eu mesmo e ser amado por isso</li>
        <li>Desbloqueou uma nova conquista de como amor pode ser verdadeiro TRUE</li>
        <li>É meu porto seguro na vida</li>
        <li>Minha melhor amiga</li>
        <li>A pessoa que eu mais me divirto junto</li>
        <li>Me faz sentir a melhor pessoa do mundo</li>
        <li>Me escuta sempre quando eu preciso</li>
        <li>A pessoa que me faz sentir vivo, e ter uma expectativa de futuro muito foda</li>
        <li>E ainda tem bundão? slk , parou...</li>
      </div>
      <div style="color: #ffd700; margin-top:3rem;"><h3>Alguns momentinhos nossos hihi</h3></div>
      <div style="margin-top:2rem;">
      <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        containerStyle="max-width: 640px"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            style="width: 100%"
          />
        </template>
      </Galleria>
      <div style="margin-top: 2rem;">Queria por mais, mas o hospedagem do site que to usando é limitada :') '</div>
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

.listinha {
  margin-top: 1rem;
  border : 1px yellow solid;
  border-radius: 20px;
  padding: 1rem;
}
</style>
