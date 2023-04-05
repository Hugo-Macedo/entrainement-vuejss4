<script setup></script>

<template>
    <div id="app">
        <h1>Mon application</h1>
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link :to="{ name: 'about' }">About</router-link>
            <router-link :to="{ name: 'pays' }">Pays</router-link>
        </div>
        <RouterView></RouterView>
    </div>
</template>

<style scoped></style>
