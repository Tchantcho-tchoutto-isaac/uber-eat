<template>
<p> {{ restaurant.name }}</p>    
</template>

<script>
import BDD from './BDD.js'
import { useRoute } from 'vue-router'
export default{
    name:'Restaurant-Component ',
    setup(){
        const route= useRoute()
        const restaurant=BDD.find((restaurant)=>restaurant.name===route.params.name)
        return{
            restaurant
        }
     }
}
</script>

<style>
</style>