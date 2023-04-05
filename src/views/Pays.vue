<script setup>
import CardPays from './CardPays.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios';

let data = ref('')

onMounted(async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    data.value = response.data
})
</script>

<template>
    <div id="pays">
        <div id="ListePays" class="paysdiv">
            <h1>Liste de 10 Pays</h1>
            <li v-for="num in 10" class="infopays">Pays numéro {{ num }}
                <router-link :to="'/fiche-pays/' + num">Complément d'info {{ num }}</router-link>
            </li>
        </div>
        <div id="CardPays" class="paysdiv">
            <CardPays NomduPays="France" capital="Paris" />
            <CardPays NomduPays="Allemagne" capital="Berlin" />
            <CardPays NomduPays="Espagne" capital="madrid" />
        </div>
    </div>
        <div class="paysdiv">
            <li v-for="pays in data">
                <!-- {{ pays.name}} -->
                <router-link :to="'/fiche-pays/' +pays.name.common"><CardPays :NomduPays="pays.name.common" /></router-link>
                <CardPays :drapeau="pays.flags.svg" :paysdata= "pays" />
            </li>
        </div>
    
</template>