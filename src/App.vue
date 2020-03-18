<template>
    <div class="text-center">
      <h1 class="text-center display-4">Ukraine:Last News</h1>
      <a-button class="mr-2" v-bind:type="getTypeFromCategory('business')" v-on:click="setCategory('business')" >Business</a-button>
        <a-button class="mr-2" v-bind:type="getTypeFromCategory('entertainment')" v-on:click="setCategory('entertainment')" >Entertainment</a-button>
        <a-button class="mr-2" v-bind:type="getTypeFromCategory('health')" v-on:click="setCategory('health')" >Health</a-button>
        <a-button class="mr-2" v-bind:type="getTypeFromCategory('science')" v-on:click="setCategory('science')" >Science</a-button>
        <a-button class="mr-2" v-bind:type="getTypeFromCategory('sports')" v-on:click="setCategory('sports')" >Sports</a-button>
        <a-button class="mr-2" v-bind:type="getTypeFromCategory('technology')" v-on:click="setCategory('technology')" >Technology</a-button>
        <NewBlock  v-bind:key="todo.index" v-for="todo in getTest" :titletext="todo.title" :author="todo.author" :image="todo.urlToImage" :urltext="todo.url"></NewBlock>
      <div class="container mt-4 text-center">
        <div class="row">
          <div class="col">Made By <a href="https://github.com/dimasdom">Badash</a></div>
          <div class="col">Powered By<a href="https://newsapi.org/">News Api</a></div>
        </div>
      </div>
  </div>
</template>

<script>
import NewBlock from './components/HelloWorld.vue'
import {mapActions, mapGetters} from "vuex";
import Vue from "vue"
import { Button } from 'ant-design-vue';
Vue.use(Button);
export default {
  name: 'App',
    computed:mapGetters(['getTest']),
    methods:{
      ...mapActions(['fetchData']),
        getTypeFromCategory: function(category){
            if(category == this.category){
                return "primary"
            }
            else {
                return "default"
            }
        },
        setCategory:function(category){
          this.category = category
            this.fetchData(this.category)
        }
    },
    async mounted(){
      this.fetchData(this.category)
    },
    components: {
    NewBlock
  },
    data(){
      return{
          category:""
      }
    },

}
</script>

<style>
</style>


