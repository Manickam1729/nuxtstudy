<template>



<div class="flex justify-center onvi">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<section class="section">
    <div class="flex flex-row head tracking-wide">
 <h1> About ONVI </h1>
    </div>
    <ul class=" flex flex-col list-disc mul">
 <li> Indis's first digital multiplex. A unique and innovative platform
 for the movie makers. </li>
 <li> The movie name is <p class="underline font-black" >{{ message }} </p> </li>
 </ul>
 
 <ul>
      <li class="list-group-item"  v-for="movie in movies" :key="movie">{{movie}}</li>
 </ul>
 <button class="bg-red-500 text px-3 py-2 rounded hover:bg-blue-500" type="submit" @click= "sub()"> Sub </button>
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
                 this.movie = "Karnan";
                 return (this.message, this.movie);
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
