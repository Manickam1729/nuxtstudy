<template>



<div class="onvi">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<section class="section">
    <div class="head">
 <h1> About ONVI </h1>
    </div>
    <div class="mul">
 <p> Indis's first digital multiplex. A unique and innovative platform
 for the movie makers. </p>
    </div>
    <div class="movie">
 <p> The movie name is {{ message }} </p>
 </div>
 <ul>
      <li class="list-group-item"  v-for="movie in movies" :key="movie">{{movie}}</li>
 </ul>
 <button class="bg-red-500 hover:bg-grey-700 text-black font-bold py-2 px-4 rounded" type="submit" @click= "sub()"> Sub </button>
</section>  
</div>
</template>

<script>
import test from '../helpers/test';
//import { getUserFromCookie } from '@/helpers';
//import hello from '~/modules/hello.js';
export default {
 
    name: "Home page",
     data() {
        return {
           // movieName:'Marra',
            //releaseYear:''
            movie:'',
            message:''
        }
        },
        methods: {
             sub() {
                 this.message = "Marra";
                 return this.message;
                 console.log(this.message);
             }
        }

}
</script>

<style>
.onvi{
    display: flex;
    
}

.head {
    background-color:Blue;
    /*position:relative;
    left:12rem;
    */
    font-family: serif;
    font-size:40px;
}
.mul{
   display: flex;
   font-family: sans-serif;
}
.movie {
    display:flex;
    font-family:monospace;
        

}
</style>
