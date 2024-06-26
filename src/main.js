import './assets/main.css'

import { createApp } from 'vue'
import Aura from '@primevue/themes/aura';;
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';
import Button from 'primevue/button';

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router);
app.component('Button', Button);

app.mount('#app')
