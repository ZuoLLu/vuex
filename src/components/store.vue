<template>
  <div class="hello">
    <ul>
      <li>获取：{{this.$store.state.count}}</li>
      <li>存入：{{this.$store.getters.getStateCount}}</li>
      <li>map:{{conut1}}</li>
      <li>{{review}}</li>
    </ul>
    <button @click="addFun">+</button>
    <button @click="reductionFun(10)">-</button>
    <button @click="routerGo">跳转</button>
  </div>
</template>

<script>
import{mapState,mapGetters,mapActions,mapMutations} from 'vuex';
export default {
  name: 'store',
  data () {
    return {
      
    }
  },
  mounted(){
    this.getReviewData();
  },
  computed:{
    ...mapState({
      conut1:state=>state.count,
      review:state=>state.review
    }),
  },
  methods:{
    ...mapActions({
      addFun:'addFun',
      reductionFun:'reductionFun'
    }),
    getReviewData(){
      let list = [1,2,3,4];
      this.setReview(list);
    },
    ...mapMutations({
      setReview:'SET_REVIEW'
    }),
    routerGo(){
      var { href } = this.$router.resolve({
				name: 'tt',
			});
			window.open(href, '_blank');
    },
    // addFun(){
    //   this.$store.dispatch('addFun')
    //   //this.$store.commit('add');
    // },
    // reductionFun(){
    //   let n = 10;
    //   this.$store.dispatch('reductionFun',n)
    //   //this.$store.commit('reduce');
    // }
  }
}
</script>

<style scoped>

</style>
