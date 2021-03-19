<template>
<div>

  <div>
    <p>ここに時間毎ガントチャートを置く{{$route.query.pageName}}</p>
     <!-- <p>params: {{ $route.params.pageName}</p>
     <p>query: {{ $route.query.pageName}</p> -->
  </div>
  <div>
    {{ $route.query.pageName }}
  </div>
</div>
</template>

<script>


export default {
  asyncData (context) {
    console.log("❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏");
    console.log(context.query.pageName)
    this.machineCode=context.query.pageName;
  },
  fetch(context) {        
      console.log(context.query.pageName)
      this.machineCode=context.query.pageName;
  },
  data:function(){
    return{
        machineCode:"",
        cycleTimeMaijiArrayDDR:{
                                LN034:[0,0,0,0,0,0,0,0,0,0,0],
                                MC024:[0,0,0,0,0,0,0,0,0,0,0],
                                MC026:[0,0,0,0,0,0,0,0,0,0,0],
                                MC027:[0,0,0,0,0,0,0,0,0,0,0],
                                MC028:[0,0,0,0,0,0,0,0,0,0,0],
                              }, 
    }
  },
  methods:{
    initData:function() {
    //   this.machineCode=$route.query.pageName;
    //   console.log(this.machineCode);
    console.log(this.machineCode);
    }
  },

  
  mounted:function(){
    this.initData();
  },
}
</script>