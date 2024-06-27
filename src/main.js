import './assets/main.css'

import { createApp } from 'vue'
import Aura from '@primevue/themes/aura';;
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';
import Button from 'primevue/button';
import 'primeicons/primeicons.css';
import Image from 'primevue/image';
import Galleria from 'primevue/galleria';

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router);
app.component('Button', Button);
app.component('Image', Image);
app.component("Galleria", Galleria);

app.mount('#app')
