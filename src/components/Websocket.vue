<template>
  <div class="websocket">
    <h1>Websocket</h1>
    <input v-if="!isConnected" placeholder="channel password" v-model="channelPasswordInput"></input>
    <button v-if="!isConnected" @click="joinChannel()">Connect to App</button>
  </div>
</template>

<script src='./Websocket.js'/>
<style scoped src='./Websocket.css'/>
