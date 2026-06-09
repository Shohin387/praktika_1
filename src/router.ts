import { createRouter, createWebHashHistory } from "vue-router";
import AllTasks from "./components/AllTasks.vue";
import NotePage from "./components/Notes/NotePage.vue";
import AllLists from "./components/Lists/AllLists.vue";

const routes = [
	{path: '/', component: AllTasks},
	{path: '/notes', component: NotePage},
	{path: '/lists', component: AllLists}

]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router