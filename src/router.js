import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import AboutUs from "./components/AboutUs.vue";
import Contact from "./components/Contact.vue";
import Gallery from "./components/Gallery.vue";

const routes =[
    {path: '/', component: Home},
    {path: '/gallery', component: Gallery},
    {path: '/aboutus', component: AboutUs},
    {path: '/contact', component: Contact},
];

const router = createRouter(
    {history: createWebHistory(), 
        routes
    });

    export default router;