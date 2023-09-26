import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import VueHighlightJS from 'vue3-highlightjs'
// import 'highlight.js/styles/gradient-dark.css'
// import 'highlight.js/styles/a11y-dark.css'
import 'highlight.js/styles/atom-one-dark.css'
// import 'highlight.js/styles/dark.css'

const app = createApp(App)
app.use(VueHighlightJS)
app.mount('#app')
