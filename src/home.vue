<template>
  <div class="home">
    <div class="header">
        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="">
         <div class="wrapper--input">
            <input v-model="user_search_restaurant" type="text" placeholder="Que Rechercher Vous ? "> 

            <div class="seach">
                <div  v-for="(restaurant,i) in seach_restaurant" :key="i" class="container--restaurant--seach">
                    <div class="wrapper--img">
                        <img :src="restaurant.image" alt="" srcset="">
                    </div>
                    <h2>{{ restaurant.name }}</h2>
                </div>
            </div>
         </div>
        
    </div>
    <div class="bannier"></div>
    <RestaurantRow v-for="(data,i) in data_restaurant" :key="i" :three_restaurant="data"/> 
  </div>
</template>

<script>
// IMPORT
import BDD from './BDD.js'
import { onMounted ,ref,watch} from 'vue';

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
        let all_restaurant=[];
        const makeDataRestaurant=()=>{
            let three_restaurant=[];

            for(const restaurant of BDD) {
              const new_restaurant=new Restaurant (restaurant.name,restaurant.note, restaurant.image,restaurant.drive_time)
                //make all restaurant array 
             all_restaurant.push(new_restaurant);
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
        //user search restaurant 
        let user_search_restaurant=ref('');
        let seach_restaurant = ref([]);
        watch(user_search_restaurant,(new_value)=>{
            let regex=RegExp(new_value.toLowerCase());

             let new_search_restaurant = all_restaurant.filter(restaurant=>regex.test(restaurant.name.toLowerCase()));
            
             if (new_value==0) {
                seach_restaurant.value=[]
             }else{
                seach_restaurant.value =new_search_restaurant;
             }

        })

        onMounted(makeDataRestaurant);
        //return
        return {data_restaurant,
            user_search_restaurant,
            seach_restaurant,
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
        .wrapper__input{
            position: relative;

            input{
            background-color: #f6f6f6;
            border: none;
            height: 80px;
            width: 400px;
            outline: none;
            padding-left:20px;
        }
        .seach {
            position: absolute;
            top: 100%;
            width: 100%;
            height: 400px;
            background-color: #ffff;
            border: solid;
            border-color: red;
            .container--restaurant--seach{
                display: flex;
                align-items: center;
                padding: 10px;
             .wrapper__img{
                height: 40px;
                width: 40px;
                margin-right: 25px;
                border-radius: 50%;
                overflow: hidden;
                .img{
                    height: 100%;
                    width: auto;
                }
             }          
            }

        }

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