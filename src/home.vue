<template>
  <div class="home">
    <div class="header">
        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="">
        <input type="text">
    </div>
    <div class="bannier"></div>
    <RestaurantRow v-for="(data,i) in data_restaurant" :key="i" :three_restaurant="data"/> 
  </div>
</template>

<script>
// IMPORT
import BDD from './BDD.js'
import { onMounted ,ref} from 'vue';

//components
import RestaurantRow from './components/RestaurantRow.vue';
export default {
    name:'HomeComponent', 
    components:{
        RestaurantRow
    },
    setup(){
        class Restaurant{
            constructor(name,note,image,drive_time){
                this.name=name
                this.note=note
                this.image=image
                this.drive_time=drive_time
            }
        }

        let data_restaurant=ref([]);
        const makeDataRestaurant=()=>{
            let three_restaurant=[];

            for(const restaurant of BDD) {
                const new_restaurant=new Restaurant (restaurant.name,restaurant.note, restaurant.image,restaurant.drive_time)
            if (three_restaurant.length==2) {
                three_restaurant.push(new_restaurant);
                data_restaurant.value.push(three_restaurant);
                three_restaurant=[];
            } else {
                three_restaurant.push(new_restaurant);
            }
            
            }
           console.log(data_restaurant);
        }

        onMounted(makeDataRestaurant);
        //return
        return {data_restaurant,
        }
        
    },


}
</script>

<style lang="scss">
.home {
    .header{
        height: 120px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            width: 200px;


        }
        input{
            background-color: #f6f6f6;
            border: none;
            height: 80px;
            width: 400px;
            outline: none;
            padding-left:20px;
        }
    }
    }
    .bannier{
        height: 20px;
        width: 100%;
        background-size: cover;
        background-position: bottom center;
    }

</style>