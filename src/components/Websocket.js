export default {
  name: 'Websocket',
  components: {
  },
  data () {
    return {
      channelPasswordInput: null,
      isConnected: false
    }
  },
  computed: {
    socketHandler () {
      return this.$store.getters.websocketHandler
    }
  },
  methods: {
    async joinChannel () {
      if (this.socketHandler) {
        let success = await this.socketHandler.joinChannel(this.channelPasswordInput)
        if (success) {
          this.isConnected = true
        }
      }
    }
  },
  mounted () {
    console.log('websocket mounted')
  }
}
