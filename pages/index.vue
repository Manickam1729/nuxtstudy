<template>
<div class="container">
<div>
 <h1 class="title"> Firebase TODO app </h1>
  </div>

   <div class="d-flex d-row justify-content-center">

       <div class="col-md-8">
         
       <div class="card">
           
        <div class="card-body">

            <ul class="list-group mt-5">
             <li class="list-group-item"  v-for="(todo,index) in todos" :key="todo"><a href="#" @click="removeTodo(index)">{{todo}}</a></li>

        <form @submit.prevent="sub">
          <div class="form-group mt-5">
              <input type="text" placeholder="Add a Todo" class="form-control" v-model="todo">

            <button type="submit" class="btn btn-primary-outline mt-3" >Add Todo </button>

          </div>

         </form>
              </ul>

            </div>

           </div>

       </div>

</div>
</div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';
export default {
    data() {
        return {
            todo:''
        }
    },
    computed:{
        todos(){
         return this.$store.state.todos
        }
    },
    mounted() {
      // alert(this.$store.state.todos);
      firebase.firestore().collection('todos').get().then((res) => {
          res.forEach(x => {
              this.$store.commit('setTodo',x.data().todo)
          })
      })
      
    },
   
    methods: {
        sub() {
            console.log(this.todo);
            //alert(this.todo);
            if(this.todo)
            {
                //this.todos.push(this.todo);
               // this.$store.commit('addTodo', this.todo);
               firebase.firestore().collection('todos').add({

      }).then((res) => {
      firebase.firestore().collection('todos').doc(res.id).set({
          todo: this.todo,
          id: res.id
      })
      }).then(() => {
            this.$store.commit('setTodo',({todo:this.todo, id:res.id}));
             this.todo=""
      })
           
   
            }
        },
        removeTodo(todo ,index) {
            //alert(index);
            //this.$delete(this.todos,index);
            
            firebase.firestore().collection('todos').doc(todo.id).delete().then(() =>{
              

              console.log("successfully deleted");
               this.$store.commit('removeTodo',index);
               

            })
        }
    }
       
}
</script>

<style scoped>
.h1 .title {
    font-size: 5rem;
    text-align: center;
}
button {
    background-color:grey ;
}
</style>

