export default {
  name: 'Websocket',
  components: {
  },
  data () {
    return {
      channelPasswordInput: null
    }
  },
  computed: {
    socketHandler () {
      return this.$store.getters.websocketHandler
    },
    isConnected () {
      return this.$store.state.websocketConnected
    }
  },
  methods: {
    async joinChannel () {
      if (this.socketHandler) {
        this.$store.dispatch('joinWebsocketChannel', this.channelPasswordInput)
      }
    }
  },
  mounted () {
    console.log('websocket mounted')
  }
}
