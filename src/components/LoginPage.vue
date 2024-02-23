<template>
    <img class="logo" src="../assets/email.png" alt="Email logo"/>
    <h1>Connexion</h1>
    <div class="loginPage">
        <input type="text" v-model="email" placeholder="Entrez votre Email"/>
        <input type="password" v-model="password" placeholder="Entrez votre Mot de passe"/>
        <button v-on:click="loginPage">Connexion</button>
        <p>
            <router-link to="/inscription">
                S'inscrire
            </router-link>
        </p>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: "LoginPage",
        data() {
            return {
                email:"",
                password: ""
            }
        },
        methods : {
            async loginPage () {
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                )
                if(result.status==200 && result.data.length>0)
                {
                    localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                    this.$router.push({name:"HomePage"})
                }
                console.warn(result)
            }
        },
        mounted()
        {
            let user= localStorage.getItem("user-info");
            if (user)
            {
                this.$router.push({name:"HomePage"})
            }
        }
    }
</script>

<style>

</style>