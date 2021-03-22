<template>

  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
       <h1> This is secret story about movie  </h1>
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src="/img/store.jpg" alt="Man looking at item at a store">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Content of Stroy</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for our new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
    
</template>

<script>
import { getUserFromCookie } from '@/helpers';
import firebase from 'firebase'
require('firebase/auth')
import  Cookies from 'js-cookie'

export default {
    asyncData({ req, redirect}) {
        if(process.server) {
            const user = getUserFromCookie(req)
            console.log(user);
            if(!user) {
                redirect("/login")
            }

        }else {
        let user = firebase.auth().currentUser
        if(!user) {
            redirect("/login");
           //this.$router.push("/login");
        }
        }
    }
}

</script>

<style>

</style>
