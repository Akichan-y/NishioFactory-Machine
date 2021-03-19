<template>
<div>
  <span id=getD>{{getD}}</span>
</div>
  
</template>

<style scoped>
  #getD{
    color:red;
    background:black;
  }
</style>

<script>
export default {
  computed:{
    getD:function(){
      return this.$store.getters['getNow']
       }
  }
}
</script>