<script setup>
defineProps({
    paysdata: null,
    drapeau:null,
    NomduPays:null,
})
</script>
<template>
    <h1>{{ NomduPays }}</h1>
    <img :src="drapeau" />
    <p>{{ paysdata }}</p>
    
    
</template>