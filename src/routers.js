import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import {createRouter,createWebHistory} from "vue-router";
import LoginPage from "./components/LoginPage.vue"
import AddEmail from "./components/AddEmail.vue"
import RespondEmail from "./components/RespondEmail.vue"
const routes = [
    {
        name: "HomePage",
        component: HomePage,
        path:"/",
    },
    {
        name: "SignUp",
        component: SignUp,
        path:"/inscription",
    },
    {
        name: "LoginPage",
        component: LoginPage,
        path:"/connexion",
    },
    {
        name: "AddEmail",
        component: AddEmail,
        path:"/ecrire",
    },
    {
        name: "RespondEmail",
        component: RespondEmail,
        path:"/repondre/:id",
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;