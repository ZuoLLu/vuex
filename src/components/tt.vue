<template>
  <div class="hello">
    <ul>
      <li>{{review}}</li>
    </ul>
  </div>
</template>

<script>
import{mapState,mapGetters,mapActions,mapMutations} from 'vuex';
import pako from 'pako'
export default {
  name: 'store',
  data () {
    return {
      
    }
  },
  mounted(){
    // this.code();
  },
  computed:{
    ...mapState({
      review:state=>state.review
    }),
    
  },
  methods:{
    // code(){
    //     let query = {
    //         id:'111',
    //         name:'222'
    //     }
    //     let a = window.btoa(JSON.stringify(query));
    //     console.log(a)
    //     let b = window.atob(a)
    //     console.log(b)
    // }
  }
}
</script>

<style scoped>

</style>