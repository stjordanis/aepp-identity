<template>
  <div class="remote-connection-prompt">
    <h1>Connect your account</h1>
    <div class="steps">
      <step>
        <ae-app-icon
          class="base"
          src="static/icons/base.svg" />
        <h2>Bæse</h2>
        <p>1. Open the Bæse æpp on your mobile device</p>
        <p class="small">Not installed? Install from store</p>
      </step>
      <step>
        <ae-app-icon src="static/icons/aepps/settings.svg" />
        <h2>Settings</h2>
        <p>2. Open your settings in the Bæse æpp</p>
      </step>
      <step>
        <ae-app-icon src="static/icons/remote-connect.svg" />
        <h2>Remote Connect</h2>
        <p>3. Open Remote Connect and scan the following QR</p>
      </step>
      <step>
        <qr-code
          :text="peerKey"
          class="qr-code"
          color="#311b58" />
      </step>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { AeAppIcon } from '@aeternity/aepp-components'
import QrCode from 'vue-qrcode-component'
import Step from './Step'

export default {
  components: { Step, AeAppIcon, QrCode },
  computed: mapState(['peerKey'])
}
</script>

<style scoped lang="scss">
@import '~@aeternity/aepp-components/dist/variables.scss';

.remote-connection-prompt {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;

  h1 {
    font-size: 24px;
  }

  .steps {
    margin: auto 0;
    display: flex;

    .step {
      border-right: 1px solid $silver;
      flex-grow: 1;
      flex-basis: 0;

      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
