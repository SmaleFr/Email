<template>
    <HeaderSection />
    <h1>Répondez</h1>
    <form class="add">
        <input type="text" name="objet" placeholder="Objet" v-model="email.objet"/>
        <input type="text" name="contenu" placeholder="Ecrivez le contenu de votre mail ici" v-model="email.contenu"/>
        <button type="button" v-on:click="addEmail">Répondre</button>
    </form>
</template>

<script>
import HeaderSection from "./HeaderSection.vue"
export default {
    name: "RespondEmail",
    components:{
        HeaderSection
    },
    data () {
        return {
            email : {
                A:"",
                objet:"",
                contenu:""
            }
        }
    },
    mounted()
    {
        let user= localStorage.getItem("user-info");
        if (!user)
        {
            this.$router.push({name:"SignUp"})
        }
    }
}
</script>