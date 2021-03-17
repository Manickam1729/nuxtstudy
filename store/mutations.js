import Vue from 'vue'
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  
    addTodo(state,payload) {
       // alert(payload)
       state.todos.push({todo:payload.todo, id: payload.id})
    },

    setTodo(state,payload) {
         //firebase.firestore().collection('todos').get().then((res) =>{
          //console.log(res);
         // res.forEach(x => {
              //console.log(x.data());
               //state.todos.push(x.data().todo);
         // })
      //})
       state.todos.push(payload);
    },

    removeTodo(state, index) {
        
      Vue.delete(state.todos, index);

    }
}