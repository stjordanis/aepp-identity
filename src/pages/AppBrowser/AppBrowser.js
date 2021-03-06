export default {
  name: 'app-browser',
  data () {
    return {
      loading: true,
      path: `http${location.protocol === 'https:' ? 's' : ''}:/${this.$route.fullPath}`
    }
  },
  methods: {
    updateUrl ({ data: { method, payload: url } }) {
      if (method !== 'urlChanged') return
      this.$router.replace(url.replace(/^https?:\//i, ''))
    }
  },
  beforeMount () {
    window.addEventListener('message', this.updateUrl, false)
  },
  beforeDestroy () {
    window.removeEventListener('message', this.updateUrl, false)
  }
}
