<template>
  <!-- 
    久しぶりに、真杉さんから教えてもらったストップウォッチを確認してみた。
    Nuxtに移植することは、なんなく出来た（これだけでもまぁまぁ成長している）

    for も少しエラーが残っているもののの、一応は動いている。
    googleフォントの使い方も理解出来た
    コンポーネントを使えるようになったのは大きい！  
    コンポーネントが使えると、ページあたりのコード記述量が格段に減り、見通しが格段に良くなる！
   -->

  <section>

  <title>Stop Watch Sample</title>

  <!-- <link type="text/css" href="stopwatch.css" rel="stylesheet" /> -->
  <div id="clock">
    
      <span class="time">{{ time }}</span>
      <br/>
      <span class="time">Count : {{ counter }}</span>

      <br>
      <v-btn @click="start" color="primary">Start</v-btn>
      <v-btn @click="stop" color="secondary">Count</v-btn>
      <v-btn @click="reset" color="pink lighten-4">Reset</v-btn>
    
      <div v-for="(lap,index) in lapArray" :key="lap">
        <span>{{index+1}} : {{ lap }}</span>
      </div>
      
      <div class="text">
        <a href="https://codepen.io/raphael_octau" target="_blank">@raphael_octau</a>
      </div>
  </div>

  </section>

</template>

<style>


  @import url("https://fonts.googleapis.com/css?family=Share+Tech+Mono");
  /* @import url("https://fonts.googleapis.com/css?family=Henny+Penny"); */


  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  section {
    background-color:black;
    font-family: 'Share Tech Mono', sans-serif;
    /* font-family: 'Henny Penny', sans-serif; */
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
  }

  #clock {
    order: 0;
    flex: 0 1 auto;
    align-self: center;
    color: #c8c8c8;
  }
  #clock .time {
    font-size: 6.5em;
  }
  #clock .text {
    margin-top: 30px;
    font-size: 1em;
    color: rgba(200, 200, 200, 0.15);
    text-align: center;
  }
  #clock .text a {
    text-decoration: none;
    color: inherit;
    transition: color .1s ease-out;
  }
  #clock .text a:hover {
    color: #c8c8c8;
  }
  #clock .btn-container {
    display: flex;
    margin-top: 15px;
  }
  #clock .btn-container a {
    text-align: center;
    font-family: 'Share Tech Mono', sans-serif;
    background: transparent;
    border: none;
    color: #c8c8c8;
    padding: 10px 15px;
    margin: 0 10px;
    text-transform: uppercase;
    font-size: 2em;
    cursor: pointer;
    flex-grow: 1;
    transition: color .1s ease-out;
  }
  #clock .btn-container a:hover {
    color: white;
  }
</style>

<script>

export default {

  data:function(){
      return{
      
          el: '#clock',
          time: '00:00:00.000',
          counter: 0,
          lapArray: [],
          timeBegan : null,
          timeStopped : null,
          stoppedDuration : 0,
          started : null,
          running : false
        
      }
  },
  methods:{    
    start:function(){
      if(this.running) return;
      
      if (this.timeBegan === null) {
        this.reset();
        this.timeBegan = new Date();
      }
    
      if (this.timeStopped !== null) {
        this.stoppedDuration += (new Date() - this.timeStopped);
      }
    
      this.started = setInterval(this.clockRunning, 10);	
      this.running = true;
    },

    stop:function(){
      if (!this.running) {
        start();
      }
      //  running = false;
      //  timeStopped = new Date();
      //  clearInterval(started);
        this.lapArray.push(this.time);
        this.timeBegan = new Date();
        this.time = "00:00:00.000";
        this.counter++;
    }, 

    reset:function(){
      console.log("resetに来てますよ")
      this.running = false;
      clearInterval(this.started);
      this.stoppedDuration = 0;
      this.timeBegan = null;
      this.timeStopped = null;
      this.time = "00:00:00.000";
      this.counter = 0;
      this.lapArray.length = 0;
    },

    clockRunning:function(){
      let currentTime = new Date(),
      timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration),
      hour = this.zeroPadding(timeElapsed.getUTCHours(),2),
      min = this.zeroPadding(timeElapsed.getUTCMinutes(),2),
      sec = timeElapsed.getUTCSeconds(),
      ms = this.zeroPadding(timeElapsed.getUTCMilliseconds(),3);

      this.time = hour + ':' + min + ':' + this.zeroPadding(sec,2) + '.' + ms


    },
    zeroPrefix:function(){
      var zero = '';
      for(var i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    },
    zeroPadding:function(num,length){
      return ('00000000' + String(num)).slice(-length);
    }
  }
}
</script>
