// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import VueClipboard from 'vue-clipboard2'
import VeeValidate, { Validator } from 'vee-validate'
import { focus } from 'vue-focus'
import App from './App.vue'
import getRouter from './router/index'
import getStore from './store'
import IS_MOBILE_DEVICE from './lib/isMobileDevice'

Validator.extend('min_value_exclusive', (value, [min]) => Number(value) > min)
Validator.extend('url_http', (value) => {
  try {
    const url = new URL((/^\w+:\//.test(value) ? '' : `http://`) + value)
    return ['http:', 'https:'].includes(url.protocol)
  } catch (e) {
    return false
  }
})

Vue.use(Router)
Vue.use(VueClipboard)
Vue.use(VeeValidate, {
  dictionary: {
    en: {
      messages: {
        required: 'This field is required',
        min: (field, [length]) => `This field must be at least ${length} characters`,
        min_value: (field, [min]) => `This field must be ${min} or more`,
        min_value_exclusive: (field, [min]) => `This field must be more than ${min}`,
        max_value: (field, [max]) => `This field must be ${max} or less`,
        not_in: () => 'This field must be a valid value',
        decimal: () => 'This field must be numeric and may contain decimal points',
        url_http: () => 'This field is not a valid HTTP(S) URL',
        confirmed: () => 'The passwords do not match'
      }
    }
  }
})
Vue.directive('focus', focus)

Vue.config.productionTip = false
Vue.prototype.$globals = { IS_MOBILE_DEVICE }

/**
 * Function generates a vue instance
 * reduces code-duplication due to the
 * secure-storage initialization
 */
const initialize = function (App, storage) {
  // one single instance
  const store = getStore(storage)

  // dev mode
  if (process.env.NODE_ENV === 'development') window.store = store

  // mounting
  /* eslint-disable no-new */
  return new Vue({
    components: { App },
    store: store,
    router: getRouter(store),
    render: h => h(App)
  }).$mount('#app')
}

/**
 * First check if the device has loaded everything,
 * in this case is true, then load Vuejs application
 */
document.addEventListener('deviceready', function () {
  if (window.SecureStorage) {
    /**
     * Instantiate a new secureStorage
     */
    const secureStorage = new window.SecureStorage('storage', false)

    /**
     * Initialize secureStorage asynchronously
     */
    return secureStorage.init(
      /**
       * Check if the device is Secure, in case is not
       * the application will send the user to setup a pin/password
       *
       * otherwise it will continue normally with the flow and setup
       * the secure device state
       */
      () => secureStorage.isDeviceSecure(function (isDeviceSecure) {
        /**
         * Returns true/false if device is secure
         */
        if (!isDeviceSecure) {
          /**
           * don't proceed further and display some logs
           * or errors, this flow still need to be thought out
           */
          return secureStorage.secureDevice(
            () => console.log('Securing Device!'),
            (error) => console.log(`Error: ${error}`)
          )
        }

        /**
         * Initialize the app with the secure storage
         */
        return initialize(App, secureStorage)
      }, () => initialize(App, window.localStorage)),
      () => initialize(App, window.localStorage)
    )
  } else {
    return initialize(App, window.localStorage)
  }
}, false)
