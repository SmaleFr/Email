<template>
    <HeaderSection />
    <h1>Bonjour {{ name }}</h1>
    <table border="1">
        <tr>
            <td>A</td>
            <td>Objet</td>
            <td>Contenu</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in email" :key=item.id>
            <td>{{ item.A }}</td>
            <td>{{ item.objet }}</td>
            <td>{{ item.contenu }}</td>
            <td>
                <router-link :to="'/repondre/' + item.id">Répondre</router-link>
                <button v-on:click="deleteEmail(item.id)">Supprimer</button>
            </td>
        </tr>
    </table>
</template>

<script>
import HeaderSection from "./HeaderSection.vue"
import axios from "axios";
export default {
    name: "HomePage",
    data ()
    {
        return {
            name:"",
            email:[],
        }
    },
    components:{
        HeaderSection
    },
    methods: {
        async deleteEmail(id)
        {
            let result =await axios.delete("http://localhost:3000/email/"+id);
            console.warn(result.status)
            if(result.status==200)
            {
                this.loadData()
            }
        },
        async loadData()
        {
        let user= localStorage.getItem("user-info");
        this.name= JSON.parse(user).name
        if (!user)
        {
            this.$router.push({name:"SignUp"})
        }
        let result =await axios.get("http://localhost:3000/email");
        console.warn(result)
        this.email=result.data;
        }
    },
    async mounted()
    {
        this.loadData()
    }
}
</script>

<style>
td {
    width: 160px;
    height: 40px;
}
</style>