<template>
    <img class="logo" src="../assets/email.png" alt="Email logo"/>
    <h1>Inscription</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Entrez votre Nom"/>
        <input type="text" v-model="email" placeholder="Entrez votre Email"/>
        <input type="password" v-model="password" placeholder="Entrez votre Mot de passe"/>
        <button v-on:click="signUp">S'inscrire</button>
        <p>
            <router-link to="/connexion">
                Connexion
            </router-link>
        </p>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        name : "SignUp",
        data ()
        {
            return {
                name : "",
                email : "",
                password : ""
            }
        },
        methods : {
            async signUp()
            {
                let result = await axios.post("http://localhost:3000/users",{
                    email:this.email,
                    password:this.password,
                    name:this.name
                });

                console.warn(result);
                if(result.status==201)
                {
                    localStorage.setItem("user-info",JSON.stringify(result.data))
                    this.$router.push({name:"HomePage"})
                }
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