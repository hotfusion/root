import { createApp } from 'vue'
import '@hotfusion/ui/style.css'
import './assets/less/index.less'

// Import Swiper styles
import 'swiper/css';
import App from './index.vue'
import * as UI  from "@hotfusion/ui";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
let app = createApp(App);
app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);
app.component('A11y', A11y);
app.component('Navigation', Navigation);
app.component('Pagination', Pagination);
app.component('Scrollbar', Scrollbar);
UI.mount(app);
app.mount('#app');
