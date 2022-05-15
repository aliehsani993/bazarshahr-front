import Vue from 'vue'

// import core version + navigation, pagination modules（>= Swiper 6.x）
import SwiperClass, { Navigation, Pagination, /* add some modules if you need */ } from "swiper";
// configure Swiper to use modules
SwiperClass.use([Navigation, Pagination]);

import VueAwesomeSwiper from 'vue-awesome-swiper'

// ----------------------------------------------------------------------------------------
// import style of all modules (>= Swiper 6.x)
// all Swiper styles including all components styles (like Navigation, Pagination, etc.)
// ----------------------------------------------------------------------------------------
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
