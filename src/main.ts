import './styles/main.css'
import "./styles/layout/layout.scss";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'
import Theme from './styles/theme'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// FIXME - kyknya si component dari primevue perlu dikasih prefix biar nggak tabrakan dengan component kita atau bawaan html

app.use(PrimeVue, {
	theme: {
		preset: Theme,
		options: {
			darkModeSelector: '.app-dark'
		}
	}
});

app.mount('#app')
