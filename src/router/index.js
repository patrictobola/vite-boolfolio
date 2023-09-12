import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../pages/HomePage.vue';
import ProjectsList from '../pages/ProjectsList.vue';
import ProjectShow from '../pages/ProjectShow.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: HomePage },
        {path: '/projects', name: 'projects', component: ProjectsList },
        {path: '/projects/:id', name: 'project-show', component: ProjectShow }
    ]
});

export {router};