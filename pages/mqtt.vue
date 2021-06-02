
<template>
  <div>
    <p>MQTTのテストプログラム</p>
    <p>あら、本当にコンソールになんか表示されている！</p>
  <script src="https://unpkg.com/mqtt/dist/mqtt.min.js"></script>

  </div>
  
</template>

<script>
let client = mqtt.connect('wss://test.mosquitto.org:8081');
let topic = "floor1/room1"

client.subscribe(topic);

pubLoop = setInterval(() => {
  const time = Date.now().toString();
  const temp = Math.floor( Math.random() * 11 );
  let metric = '{"time":' + time + ', "name": "sensor1", "temp":' + temp + '}'
  client.publish(topic, metric);
}, 1000);

client.on('message', function (topic, message) { // message is Buffer
  console.log(message.toString());
});

setTimeout(function() { clearInterval( pubLoop ); }, 10000); // stop after 10sec

</script>

