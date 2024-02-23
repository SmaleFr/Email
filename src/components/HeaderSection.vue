<template>
    <div class="nav">
        <router-link to="/">Acceuil</router-link>
        <router-link to="/ecrire">Send Email</router-link>
        <a v-on:click="logout" href="">Déconnexion</a>
    </div>
</template>

<script>
    export default {
        name: "HeaderSection",
        methods: {
            logout ()
            {
                localStorage.clear();
                this.$router.push({name:"LoginPage"})
            }
        }
    }
</script>

<style>
.nav {
    background-color: aqua;
    overflow: hidden;
}

.nav a {
    float: left;
    color: black;
    padding: 30px 20px;
    text-align: center;
    font-size: 23px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover{
    background: red;
    color: beige;
}

</style>