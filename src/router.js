import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./components/HomeView.vue";
import AboutUs from "./components/AboutUs.vue";
import ContactUs from "./components/ContactUs.vue";
import PhotoGallery from "./components/PhotoGallery.vue";

const routes =[
    {path: '/', component: HomeView},
    {path: '/gallery', component: PhotoGallery},
    {path: '/aboutus', component: AboutUs},
    {path: '/contact', component: ContactUs},
];

const router = createRouter(
    {history: createWebHistory(), 
        routes
    });

    export default router;