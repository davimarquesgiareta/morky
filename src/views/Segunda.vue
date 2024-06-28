<script setup>
import router from "@/router";

import { ref } from "vue";

const images = ref([
  {
    itemImageSrc:
      "https://i.postimg.cc/wvX8L5tk/Whats-App-Image-2024-06-25-at-20-20-42.jpg",
    thumbnailImageSrc:
      "https://i.postimg.cc/wvX8L5tk/Whats-App-Image-2024-06-25-at-20-20-42.jpg",
    alt: "Image 1",
  },
  {
    itemImageSrc:
      "https://i.postimg.cc/NfvJKNHy/Whats-App-Image-2024-06-25-at-20-20-42-1.jpg",
    thumbnailImageSrc:
      "https://i.postimg.cc/NfvJKNHy/Whats-App-Image-2024-06-25-at-20-20-42-1.jpg",
    alt: "Image 2",
  },
  {
    itemImageSrc:
      "https://i.postimg.cc/RCHpVrN5/Whats-App-Image-2024-06-25-at-20-20-42-2.jpg",
    thumbnailImageSrc:
      "https://i.postimg.cc/RCHpVrN5/Whats-App-Image-2024-06-25-at-20-20-42-2.jpg",
    alt: "Image 3",
  },
  {
    itemImageSrc:
      "https://i.postimg.cc/sx7TnWtD/Whats-App-Image-2024-06-25-at-20-20-43.jpg",
    thumbnailImageSrc:
      "https://i.postimg.cc/sx7TnWtD/Whats-App-Image-2024-06-25-at-20-20-43.jpg",
    alt: "Image 4",
  },
]);
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

function proximo() {
  router.push({
    name: "terceira",
  });
}

function anterior() {
  router.push({
    name: "primeira",
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
      <div style="color: #ffd700"><h1>26 aninhos</h1></div>
      <div>
        de pura gostosura, buniteza, fofura, corpulenta, e MUITO MAIS! ❤️❤️❤️
      </div>
      <div style="margin-top: 2rem">
        <div class="container-galeria">
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
        </div>
        <div style="margin-top: 2rem">
          <p>
            Fazendo a felicidade de todo mundo em sua volta, com seu carisma,
            sua humildade, seu jeito fofo, UM SER HUMANO INCRÍVEL
          </p>
        </div>
        <div>
          <img
            style="width: 400px; height: 400px"
            src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-cake-dessert-birthday-celebration-png-image_9116303.png"
            alt=""
          />
        </div>
        <div>
          (não tive dinheiro pra comprar um bolo licensiado - sem marca d'agua ,
          desculpe)
        </div>
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

.container-galeria {
  display: flex;
  justify-content: center;
}
</style>
