<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  created(){
    for (var item in this.$store.state) {
      //console.log(item)
      sessionStorage.getItem(item) ? this.$store.state[item] = JSON.parse(sessionStorage.getItem(item)) : false;
    }
  }
}
</script>

<style>

</style>
