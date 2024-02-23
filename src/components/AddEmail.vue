<template>
    <HeaderSection />
    <h1>Envoyer un mail</h1>
    <form class="add">
        <input type="text" name="A" placeholder="Envoyer à ..." v-model="email.A"/>
        <input type="text" name="objet" placeholder="Objet" v-model="email.objet"/>
        <input type="text" name="contenu" placeholder="Ecrivez le contenu de votre mail ici" v-model="email.contenu"/>
        <button type="button" v-on:click="addEmail">Envoyer</button>
    </form>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";
import axios from "axios";
export default {
    name: "AddEmail",
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
    methods:{
        async addEmail (){
            console.warn(this.email)
            const result = await axios.post("http://localhost:3000/email",{
                A:this.email.A,
                objet:this.email.objet,
                contenu:this.email.contenu
            });
            if(result.status==201)
            {
                this.$router.push({name:"HomePage"})
            }
            console.warn("result",result)
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