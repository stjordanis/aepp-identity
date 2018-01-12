import io from 'socket.io-client'

class WebsocketHandler {
  constructor (store) {
    console.log('WebsocketHandler constructor')
    this.store = store
    this.socket = io('http://192.168.111.42:3000')

    this.socket.on('partnerDisconnected', () => {
      console.log('partnerDisconnected')
    })

    this.socket.on('getAccounts', (callback) => {
      this.getAccounts(callback)
    })

    this.socket.on('signTransaction', (tx, callback) => {
      this.signTransaction(tx, callback)
    })
  }

  joinChannel (password) {
    console.log('WebsocketHandler joinChannel', password)
    return new Promise((resolve, reject) => {
      this.socket.emit('joinChannel', password, (success) => {
        console.log('joinChannelResponse', success)
        return resolve(success)
      })
    })
  }

  getAccounts (callback) {
    console.log('websocketHandler getAccounts')
    let accounts = []
    if (this.store.getters.activeIdentity.address) {
      accounts.push(this.store.getters.activeIdentity.address)
    }
    return callback(accounts)
  }

  async signTransaction (tx, callback) {
    console.log('websocketHandler signTransaction', tx)
    try {
      let appName = 'TODO: appName'
      let result = await this.store.dispatch('signTransaction', {tx: tx, appName: appName})
      return callback(result)
    } catch (e) {
      // TODO: what if error
      console.log(e)
    }
  }
}

export default WebsocketHandler
