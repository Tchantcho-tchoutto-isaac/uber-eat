<template>
  <div class="app">
    <RestaurantRow> </RestaurantRow>
  </div>
</template>

<script>
// IMPORT
import info from '../BDD.js'
//components
import RestaurantRow from './components/RestaurantRow.vue';
export default {
    name:'Home', 
    components:{
        RestaurantRow
    },
    setup(){
        class Restaurant{
            constructor(name,note,image,drive_item){
                this.name=name
                this.note=note
                this.image=image
                this.drive_item=drive_item
            }
        }

        let resto=new Restaurant('restaurant lechat' ,4.5,'img','45')
        console.log(resto);
    }


}
</script>

<style>

</style>