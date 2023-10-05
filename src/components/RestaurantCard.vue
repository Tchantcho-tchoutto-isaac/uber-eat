<template>
    <div class="restaurant--card">
      <div :style="changeBackground" class="restaurant--image">
      </div>
      <div class="restaurant--informations">
        <div class="top">
            <p class="name">
                {{info_restaurant.name }}
            </p>
            <p class="note">
                <span>{{info_restaurant.note }}</span>
            </p>
        </div>
        <p class="time">
            {{ info_restaurant.drive_time }}
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  export default {
      name: 'RestaurantCard',
      props:{
        info_restaurant:Object
      },
      setup(props){
        const changeBackground=computed(()=>{
            return{
                backroundImage:`url(${props.info_restaurant.image})`
            }
        })
        //return
      return{
        changeBackground
      }
      
      }

  }
  </script>
  
  <style lang="scss">
  .restaurant--card {
    width: 40%;
    height: 30vh;
    padding-right: 20px;
    p{
        margin: 0px;
        float: left;
        padding-top: 20px;
    }
    .restaurant--image {
        background-image: url("https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==") ;
        height: 80%;
        background-size: cover;
        background-position: center;
  

    };
     .retaurant--informations{

        .top{
            margin: 40px;
            display:flex;
            align-items: center;
            justify-content:space-between;
            padding: 50px;
            background-color: aquamarine;
            .note{
                background-color: #eeeeee;
                display: flex;
                justify-content: center;
                align-items: center;
                
            }
        }
        .time {
            font-size: 0.9rem;
        }

      
  }
}
  
  </style>