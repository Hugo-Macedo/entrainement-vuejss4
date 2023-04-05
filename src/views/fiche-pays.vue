<script setup>
import {useRoute} from "vue-router"
import {onMounted, ref} from "vue";
import axios from "axios";
const route = useRoute()
const id = route.params.id
const data = ref('')

onMounted(async() => {
  const response = await axios.get('https://restcountries.com/v3.1/name/'+id)
  data.value = response.data
})
</script>
<template>
    <h1>Voici le pays : {{ id }}</h1>
    <li v-for="pays in data">
        <div id="info-pays">
            <img :src="pays.flags.svg" />
            <p>{{ pays.languages }}</p>
            <p>{{ pays.currencies }}</p>
            <p>{{ pays.capital }}</p>
            <p>{{ pays.area }}</p>


        </div>
    </li>
</template>