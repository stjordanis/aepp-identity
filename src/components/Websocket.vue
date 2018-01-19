<template>
  <div class="websocket">
    <h1>Remotely connect to Dapp</h1>
    <input v-if="!isConnected" placeholder="channel password" v-model="channelPasswordInput"></input>
    <button v-if="!isConnected" @click="joinChannel()">Connect to App</button>
    <span v-if="isConnected">You are connected to a remote dapp</span>
  </div>
</template>

<script src='./Websocket.js'/>
<style scoped src='./Websocket.css'/>
