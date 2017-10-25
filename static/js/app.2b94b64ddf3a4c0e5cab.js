webpackJsonp([1],{

/***/ "+NwA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "+p9J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'swiper-slide',
  data: function data() {
    return {
      slideClass: 'swiper-slide'
    };
  },
  ready: function ready() {
    this.update();
  },
  mounted: function mounted() {
    this.update();
    if (this.$parent.options.slideClass) {
      this.slideClass = this.$parent.options.slideClass;
    }
  },
  updated: function updated() {
    this.update();
  },
  attached: function attached() {
    this.update();
  },
  methods: {
    update: function update() {
      if (this.$parent && this.$parent.swiper && this.$parent.swiper.update) {
        this.$parent.swiper.update(true);
        if (this.$parent.options.loop) {
          this.$parent.swiper.reLoop();
        }
      }
    }
  }
});

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "24tS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"avatar",style:(_vm.style)})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "2xxs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aeIdentity_aeIdentity_vue__ = __webpack_require__("RGLD");

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'quick-id',
  components: {
    'ae-identity': __WEBPACK_IMPORTED_MODULE_0__aeIdentity_aeIdentity_vue__["a" /* default */]
  },
  data: function data() {
    return {};
  },

  computed: {
    identity: function identity() {
      return this.$store.getters.activeIdentity;
    },
    collapsed: function collapsed() {
      return !this.showPaymentUi && this.$store.state.identityCollapsed;
    }
  },
  methods: {
    showIdManager: function showIdManager() {
      this.$store.commit('setShowIdManager', true);
    }
  }
});

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4Vh3":
/***/ (function(module, exports) {

module.exports = {"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "6ZSt":
/***/ (function(module, exports) {

module.exports = {"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}

/***/ }),

/***/ "6axy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aeIdentity_aeIdentity_vue__ = __webpack_require__("RGLD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aeButton_aeButton_vue__ = __webpack_require__("xUQp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_awesome_swiper__ = __webpack_require__("F3EI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_awesome_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_awesome_swiper__);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'IdManager',
  data: function data() {
    return {
      notNextTick: true,
      swiperOption: {
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        debugger: true,
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true
      }
    };
  },

  components: {
    'ae-identity': __WEBPACK_IMPORTED_MODULE_0__aeIdentity_aeIdentity_vue__["a" /* default */],
    'ae-button': __WEBPACK_IMPORTED_MODULE_1__aeButton_aeButton_vue__["a" /* default */],
    'swiper': __WEBPACK_IMPORTED_MODULE_2_vue_awesome_swiper__["swiper"],
    'swiper-slide': __WEBPACK_IMPORTED_MODULE_2_vue_awesome_swiper__["swiperSlide"]
  },
  computed: {
    activeIdentity: function activeIdentity() {
      return this.$store.getters.activeIdentity;
    },
    addresses: function addresses() {
      return this.$store.getters.addresses;
    },
    identities: function identities() {
      return this.$store.getters.identities;
    }
  },
  methods: {
    activateId: function activateId(id) {
      this.$store.commit('selectIdentity', this.identities.indexOf(id));
    },
    generateFirstAddress: function generateFirstAddress() {
      console.log('generateFirstAddress');
      this.$store.dispatch('generateAddress');
    },
    generateNewIdentity: function generateNewIdentity() {
      console.log('generateNewIdentity');
      this.$store.dispatch('generateAddress');
    },
    goBack: function goBack() {
      // this.$router.push('/app-browser')
      this.$store.commit('setShowIdManager', false);
    },
    isActive: function isActive(id) {
      return id.address === this.activeIdentity.address;
    }
  },
  created: function created() {
    if (!this.$store.state.unlocked) {
      this.$router.push({ path: 'unlock' });
    }
    if (this.addresses && this.addresses.length < 1) {
      this.generateFirstAddress();
    }
  },
  mounted: function mounted() {
    this.$refs.mySwiper.swiper.slideTo(this.$store.state.selectedIdentityIdx);
  }
});

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "78FQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_IdManager_vue__ = __webpack_require__("A+qn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__("IcnI");



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  components: {
    'id-manager': __WEBPACK_IMPORTED_MODULE_0__components_IdManager_vue__["a" /* default */]
  },
  computed: {
    showIdManager: function showIdManager() {
      return __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.showIdManager && __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.unlocked;
    }
  },
  created: function created() {},
  methods: {},
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "7Jb8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"id-manager screen"},[(_vm.identities.length === 0)?_c('p',{staticClass:"text center"},[_vm._v("\n    Currently you don't have an identity. Feel free to create one.\n  ")]):[_c('swiper',{ref:"mySwiper",staticClass:"swiper-container",attrs:{"options":_vm.swiperOption,"not-next-tick":_vm.notNextTick}},[_vm._l((_vm.identities),function(i){return _c('swiper-slide',{key:i.address},[_c('ae-identity',{attrs:{"active":_vm.isActive(i),"identity":i,"size":'big'}},[_c('ae-button',{attrs:{"role":_vm.isActive(i) ? 'default' : 'sub-primary'}},[(_vm.activeIdentity !== i)?_c('button',{on:{"click":function($event){_vm.activateId(i)}}},[_vm._v("Activate")]):_c('button',{on:{"click":_vm.goBack}},[_vm._v("Go back")])])],1)],1)}),_vm._v(" "),_c('div',{staticClass:"swiper-pagination",attrs:{"slot":"pagination"},slot:"pagination"})],2),_vm._v(" "),_c('div',{staticClass:"explanation"},[(_vm.identities.length === 1)?_c('p',{staticClass:"text center"},[_vm._v("This is your first Identity, it enables you to use our Æpps, get Tokens, trade them and much more!")]):_vm._e(),_vm._v(" "),_c('p',{staticClass:"text center"},[_vm._v("You can create unlimited public IDs. Each has it's own address and Token balance.")])])],_vm._v(" "),_c('ae-button',{staticClass:"create-new-id-button",attrs:{"role":'primary'}},[_c('button',{on:{"click":_vm.generateNewIdentity}},[_vm._v("\n      Create new Identity\n    ")])])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "7oBO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

var browser = typeof window !== 'undefined';
if (browser) window.Swiper = __webpack_require__("m0SV");
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'swiper',
  props: {
    options: {
      type: Object,
      default: function _default() {
        return {
          autoplay: 3500
        };
      }
    },
    notNextTick: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      defaultSwiperClasses: {
        wrapperClass: 'swiper-wrapper'
      }
    };
  },
  ready: function ready() {
    if (!this.swiper && browser) {
      this.swiper = new Swiper(this.$el, this.options);
    }
  },
  mounted: function mounted() {
    var self = this;
    var mount = function () {
      if (!self.swiper && browser) {
        delete self.options.notNextTick;
        var setClassName = false;
        for (var className in self.defaultSwiperClasses) {
          if (self.defaultSwiperClasses.hasOwnProperty(className)) {
            if (self.options[className]) {
              setClassName = true;
              self.defaultSwiperClasses[className] = self.options[className];
            }
          }
        }
        var mountInstance = function mountInstance() {
          self.swiper = new Swiper(self.$el, self.options);
        };
        setClassName ? self.$nextTick(mountInstance) : mountInstance();
      }
    }(this.options.notNextTick || this.notNextTick) ? mount() : this.$nextTick(mount);
  },
  updated: function updated() {
    if (this.swiper) {
      this.swiper.update();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.swiper) {
      this.swiper.destroy();
      delete this.swiper;
    }
  }
});

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "8Kvx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_AppBrowser_js__ = __webpack_require__("fpQl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_354b6e2f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_AppBrowser_vue__ = __webpack_require__("WfoU");
function injectStyle (ssrContext) {
  __webpack_require__("+NwA")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-354b6e2f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_AppBrowser_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_354b6e2f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_AppBrowser_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "8YCc":
/***/ (function(module, exports) {

module.exports = {"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "9JTq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.slideClass},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "A+qn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_IdManager_js__ = __webpack_require__("6axy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_385f005a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_IdManager_vue__ = __webpack_require__("7Jb8");
function injectStyle (ssrContext) {
  __webpack_require__("wITO")
  __webpack_require__("IK4Z")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-385f005a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_IdManager_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_385f005a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_IdManager_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "AFYw":
/***/ (function(module, exports) {

module.exports = {"_args":[[{"raw":"web3-provider-engine@^13.2.9","scope":null,"escapedName":"web3-provider-engine","name":"web3-provider-engine","rawSpec":"^13.2.9","spec":">=13.2.9 <14.0.0","type":"range"},"/Users/philipp/dev/aeternity/aepp-identity"]],"_from":"web3-provider-engine@>=13.2.9 <14.0.0","_id":"web3-provider-engine@13.3.2","_inCache":true,"_location":"/web3-provider-engine","_nodeVersion":"8.0.0","_npmOperationalInternal":{"host":"s3://npm-registry-packages","tmp":"tmp/web3-provider-engine-13.3.2.tgz_1507240105656_0.9016023331787437"},"_npmUser":{"name":"danfinlay","email":"dan@danfinlay.com"},"_npmVersion":"4.6.1","_phantomChildren":{},"_requested":{"raw":"web3-provider-engine@^13.2.9","scope":null,"escapedName":"web3-provider-engine","name":"web3-provider-engine","rawSpec":"^13.2.9","spec":">=13.2.9 <14.0.0","type":"range"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/web3-provider-engine/-/web3-provider-engine-13.3.2.tgz","_shasum":"a5954aa637f96f0dde5131bc20a6ce9e33e6fcd1","_shrinkwrap":null,"_spec":"web3-provider-engine@^13.2.9","_where":"/Users/philipp/dev/aeternity/aepp-identity","author":"","browser":{"request":false},"bugs":{"url":"https://github.com/MetaMask/provider-engine/issues"},"dependencies":{"async":"^2.5.0","clone":"^2.0.0","eth-block-tracker":"^2.2.2","eth-sig-util":"^1.3.0","ethereumjs-block":"^1.2.2","ethereumjs-tx":"^1.2.0","ethereumjs-util":"^5.1.1","ethereumjs-vm":"^2.0.2","fetch-ponyfill":"^4.0.0","json-rpc-error":"^2.0.0","json-stable-stringify":"^1.0.1","promise-to-callback":"^1.0.0","readable-stream":"^2.2.9","request":"^2.67.0","semaphore":"^1.0.3","solc":"^0.4.2","tape":"^4.4.0","xhr":"^2.2.0","xtend":"^4.0.1"},"description":"[![Greenkeeper badge](https://badges.greenkeeper.io/MetaMask/provider-engine.svg)](https://greenkeeper.io/)","devDependencies":{"babel-preset-es2015":"^6.24.1","babel-preset-stage-0":"^6.24.1","browserify":"^14.0.0"},"directories":{},"dist":{"shasum":"a5954aa637f96f0dde5131bc20a6ce9e33e6fcd1","tarball":"https://registry.npmjs.org/web3-provider-engine/-/web3-provider-engine-13.3.2.tgz"},"gitHead":"6675ed003e2ad3bbe75f43050a59c5a0e551595b","homepage":"https://github.com/MetaMask/provider-engine#readme","license":"ISC","main":"index.js","maintainers":[{"name":"danfinlay","email":"dan@danfinlay.com"},{"name":"kumavis","email":"aaron@kumavis.me"}],"name":"web3-provider-engine","optionalDependencies":{},"readme":"ERROR: No README data found!","repository":{"type":"git","url":"git+https://github.com/MetaMask/provider-engine.git"},"scripts":{"bundle":"mkdir -p ./dist && npm run bundle-engine && npm run bundle-zero","bundle-engine":"browserify -s ProviderEngine -e index.js > dist/ProviderEngine.js","bundle-zero":"browserify -s ZeroClientProvider -e zero.js > dist/ZeroClientProvider.js","test":"node test/index.js"},"version":"13.3.2"}

/***/ }),

/***/ "AYdp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aeButton_aeButton_vue__ = __webpack_require__("xUQp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PinInput_vue__ = __webpack_require__("HK+i");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eth_lightwallet__ = __webpack_require__("N6C4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eth_lightwallet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_eth_lightwallet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3__ = __webpack_require__("8k0n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abi_aeternity_token_abi_json__ = __webpack_require__("osr3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abi_aeternity_token_abi_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__abi_aeternity_token_abi_json__);






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'unlock',
  components: {
    'ae-button': __WEBPACK_IMPORTED_MODULE_0__aeButton_aeButton_vue__["a" /* default */],
    'pin-input': __WEBPACK_IMPORTED_MODULE_1__components_PinInput_vue__["a" /* default */]
  },
  data: function data() {
    return {
      password: '',
      token: {},
      error: false
    };
  },

  computed: {
    haveKeyStore: function haveKeyStore() {
      return this.keystore !== null;
    },
    keystore: function keystore() {
      return this.$store.state.keystore;
    },
    unlocked: function unlocked() {
      return this.$store.state.unlocked;
    }
  },
  watch: {
    unlocked: function unlocked(now_unlocked, before_unlocked) {
      if (!now_unlocked) return;
      if (this.$store.getters.addresses.length) this.$router.push('/app-browser');
      this.$router.push('/app-browser');
    }
  },
  methods: {
    unlockSavedKeystore: function unlockSavedKeystore() {
      var _this = this;

      if (this.password.length < 4) {
        return;
      }

      if (!this.haveKeyStore) {
        // TODO: reroute?
      }

      this.keystore.keyFromPassword(this.password, function (err, pwDerivedKey) {
        if (err) {
          _this.error = err;
          console.log(err);
          return;
        }
        if (!_this.keystore.isDerivedKeyCorrect(pwDerivedKey)) {
          _this.error = 'wrong password';
          console.log(_this.error);
          return;
        }
        _this.error = false;
        _this.$store.dispatch('initWeb3', pwDerivedKey);
      });
    }
  },
  mounted: function mounted() {
    if (!this.haveKeyStore) {
      console.log('no keystore');
      this.$router.push({ name: 'intro' });
    } else if (this.$store.state.unlocked) {
      console.log('already unlocked');
      this.$router.push({ name: 'app-browser' });
    }
  }
});

/***/ }),

/***/ "BPqE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "C6G/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var blockies = __webpack_require__("DDQh");

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'avatar',
	props: ['address'],
	methods: {
		blockie: function blockie(address) {
			return blockies.createDataURL({
				seed: address
			});
		}
	},
	computed: {
		style: function style() {
			if (this.address) {
				return {
					backgroundImage: "url('" + this.blockie(this.address) + "')"
				};
			} else {
				return {
					backgroundColor: '#d1d1d1'
				};
			}
		}
	}
});

/***/ }),

/***/ "CDNP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EEbw":
/***/ (function(module, exports) {

module.exports = {"version":"0.20.2"}

/***/ }),

/***/ "EFp7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{ 'identity-wrap' : true}},[_c('div',{class:_vm.classObject,on:{"click":function($event){_vm.$emit('click', $event)}}},[_c('div',{staticClass:"left"},[_c('ae-identity-avatar',{attrs:{"address":_vm.identity ? _vm.identity.address : ""}}),_vm._v(" "),_c('ae-identity-info',{attrs:{"identity":_vm.identity}})],1),_vm._v(" "),_c('div',{staticClass:"right"},[_c('div',{staticClass:"balance"},[_c('span',{staticClass:"amount"},[_vm._v(_vm._s(_vm.identity ? _vm.readableEther(_vm.identity.balance) : 0))]),_vm._v(" "),_c('span',{staticClass:"currency-symbol"},[_vm._v("ETH")])])]),_vm._v(" "),_c('div',{staticClass:"bottom-inserted-elements"},[_vm._t("default")],2)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Fo3U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"intro screen"},[_c('div',{staticClass:"nomargin inner"},[_c('div',{staticClass:"nomargin logo img",staticStyle:{"background-image":"url(/static/logo.png)"}}),_vm._v(" "),_c('div',{staticClass:"swiper-container"},[_c('div',{staticClass:"swiper-wrapper"},[_c('div',{staticClass:"swiper-slide"},[_c('h1',{staticClass:"welcome-title center"},[_vm._v("Welcome to æternity")]),_vm._v(" "),_c('div',{staticClass:"aeternity-logo",attrs:{"role":"img"}}),_vm._v(" "),_c('p',{staticClass:"text center"},[_vm._v("\n              æternity gives access to the magic of Blockchain technology in an intuitive and easy way. Get access to it by generating a new account or Login to an existing.\n\t\t\t\t\t\t")]),_vm._v(" "),_c('ae-button',{attrs:{"role":'primary'}},[_c('router-link',{attrs:{"to":"/setup"}},[_vm._v("\n                Open Identity Manager\n              ")])],1)],1)]),_vm._v(" "),_c('div',{staticClass:"center notice"},[_c('router-link',{attrs:{"to":"/setup"}},[_vm._v("Login to existing account.")])],1),_vm._v(" "),_c('div',{staticClass:"swiper-pagination"})])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "GN14":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Setup_js__ = __webpack_require__("r3w4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e502f45_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Setup_vue__ = __webpack_require__("ltrg");
function injectStyle (ssrContext) {
  __webpack_require__("fcBp")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Setup_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e502f45_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Setup_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "HK+i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_PinInput_js__ = __webpack_require__("dEsM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dedb49d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PinInput_vue__ = __webpack_require__("LiXU");
function injectStyle (ssrContext) {
  __webpack_require__("BPqE")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7dedb49d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_PinInput_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dedb49d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PinInput_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "HTE9":
/***/ (function(module, exports) {

module.exports = {"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation's data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation's data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn't exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}

/***/ }),

/***/ "IK4Z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IcnI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abi_aeternity_token_abi_json__ = __webpack_require__("osr3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abi_aeternity_token_abi_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__abi_aeternity_token_abi_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bignumber_js__ = __webpack_require__("uotZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_web3_provider_engine_zero__ = __webpack_require__("6oMJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_web3_provider_engine_zero___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_web3_provider_engine_zero__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_eth_lightwallet__ = __webpack_require__("N6C4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_eth_lightwallet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_eth_lightwallet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_web3__ = __webpack_require__("8k0n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ethereumjs_tx__ = __webpack_require__("/jGa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ethereumjs_tx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ethereumjs_tx__);










__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */]);

var store = function () {
  var aeContract;
  var derivedKey;
  var _web = void 0;
  var web3ForApps = void 0;
  var providerOptsForApps = void 0;
  return new __WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */].Store({
    state: {
      title: '',
      selectedIdentityIdx: 0,
      unlocked: false,
      identityCollapsed: true,
      showIdManager: false,
      token: {
        address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
        decimals: new __WEBPACK_IMPORTED_MODULE_4_bignumber_js___default.a(10).pow(18)
      },
      balances: [],
      rpcUrl: 'https://kovan.infura.io',
      keystore: null
    },
    mutations: {
      title: function title(state, newtitle) {
        state.title = newtitle;
      },
      appClass: function appClass(state, newClass) {
        state.appClass = newClass;
      },
      identityCollapsed: function identityCollapsed(state, collapse) {
        state.identityCollapsed = collapse;
      },
      setAccount: function setAccount(state, account) {
        state.identity.address = account;
      },
      setKeystore: function setKeystore(state, keystore) {
        state.keystore = keystore;
      },
      setUnlocked: function setUnlocked(state, unlocked) {
        state.unlocked = unlocked;
      },
      selectIdentity: function selectIdentity(state, selectedIdentityIdx) {
        state.selectedIdentityIdx = selectedIdentityIdx;
      },
      setBalance: function setBalance(state, _ref) {
        var address = _ref.address,
            balance = _ref.balance,
            tokenBalance = _ref.tokenBalance;

        console.log('setBalance', address, balance, tokenBalance);
        if (!address) {
          return;
        }
        var balanceObj = state.balances.find(function (b) {
          return b.address === address;
        });
        if (balanceObj) {
          if (balance) {
            balanceObj.balance = balance;
          }
          if (tokenBalance) {
            balanceObj.tokenBalance = tokenBalance;
          }
        } else {
          state.balances.push({
            address: address,
            balance: balance ? balance : 0,
            tokenBalance: tokenBalance ? tokenBalance : 0
          });
        }
      },
      setShowIdManager: function setShowIdManager(state, showIdManager) {
        state.showIdManager = showIdManager;
      }
    },
    getters: {
      web3: function web3() {
        return _web;
      },

      addresses: function addresses(state) {
        if (!state.keystore) {
          return;
        }
        return state.keystore.getAddresses().map(function (e) {
          return '0x' + e;
        });
      },
      activeIdentity: function activeIdentity(state, getters) {
        if (!state.keystore || !getters.identities.length) {
          return;
        }
        if (!state.selectedIdentityIdx === null) {
          return;
        }
        return getters.identities[state.selectedIdentityIdx];
      },
      identities: function identities(state, getters) {
        if (!state.keystore) {
          return [];
        }
        return state.keystore.getAddresses().map(function (e) {
          return {
            address: '0x' + e,
            name: '0x' + e.substr(0, 6),
            balance: getters.balanceByAddress('0x' + e),
            tokenBalance: getters.tokenBalanceByAddress('0x' + e)
          };
        });
      },
      balanceByAddress: function balanceByAddress(state, getters) {
        return function (address) {
          var balanceObj = state.balances.find(function (balance) {
            return balance.address === address;
          });
          if (balanceObj) {
            return balanceObj.balance;
          }
          return 0;
        };
      },
      tokenBalanceByAddress: function tokenBalanceByAddress(state, getters) {
        return function (address) {
          var balanceObj = state.balances.find(function (balance) {
            return balance.address === address;
          });
          if (balanceObj) {
            return balanceObj.tokenBalance;
          }
          return 0;
        };
      }
    },
    actions: {
      mkProviderOptsForApps: function mkProviderOptsForApps(_ref2) {
        var getters = _ref2.getters,
            state = _ref2.state;

        providerOptsForApps = {
          getAccounts: function getAccounts(cb) {
            // Only show them the currently selected account.
            cb(null, [getters.activeIdentity.address]);
          },
          signTransaction: function signTransaction(tx, cb) {
            var t = new __WEBPACK_IMPORTED_MODULE_8_ethereumjs_tx___default.a(tx);
            console.log('sign', tx, t);
            var signed = __WEBPACK_IMPORTED_MODULE_6_eth_lightwallet___default.a.signing.signTx(state.keystore, derivedKey, t.serialize().toString('hex'), tx.from);
            cb(null, '0x' + signed);
          },
          approveTransaction: function approveTransaction(tx, cb) {
            console.log('approve', tx);
            cb(null, true);
          },
          rpcUrl: state.rpcUrl
        };
      },
      mkWeb3ForApps: function mkWeb3ForApps() {
        web3ForApps = new __WEBPACK_IMPORTED_MODULE_7_web3___default.a(new __WEBPACK_IMPORTED_MODULE_5_web3_provider_engine_zero___default.a(providerOptsForApps));
        window.web3 = web3ForApps;
      },
      updateBalances: function updateBalances(_ref3) {
        var getters = _ref3.getters,
            dispatch = _ref3.dispatch,
            commit = _ref3.commit,
            state = _ref3.state;

        var that = this;
        for (var i in getters.address) {
          aeContract.contract.balanceOf(getters.address[i], function (err, bal) {
            if (err) throw err;
            //that.$set(that.tokens, i, bal.div(state.token.decimals))
          });
        }
      },
      generateAddress: function generateAddress(_ref4) {
        var dispatch = _ref4.dispatch,
            commit = _ref4.commit,
            state = _ref4.state;
        var numAddresses = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        if (state.keystore === null) {
          return;
        }
        state.keystore.generateNewAddress(derivedKey, numAddresses);
        var addrList = state.keystore.getAddresses().map(function (e) {
          return '0x' + e;
        });
        localStorage.setItem("numUnlockedAddresses", addrList.length);
      },
      changeUser: function changeUser(_ref5, address) {
        var commit = _ref5.commit,
            state = _ref5.state;

        commit('setAccount', address);
        commit('setName', address.substr(0, 6));
      },
      setAcountInterval: function setAcountInterval(_ref6) {
        var dispatch = _ref6.dispatch,
            commit = _ref6.commit,
            state = _ref6.state,
            getters = _ref6.getters;

        setInterval(function () {
          if (!_web) {
            return;
          }
          if (!getters.identities || getters.identities.length <= 0) {
            console.log('no accounts found');
            return;
          }
          getters.identities.forEach(function (identitiy) {
            var address = identitiy.address;
            if (!address) {
              return;
            }
            _web.eth.getBalance(address, function (err, balance) {
              if (!balance.equals(getters.balanceByAddress(address))) {
                commit('setBalance', { address: address, balance: balance });
              }
            });

            if (aeContract) {
              aeContract.balanceOf(address, {}, function (err, balance) {
                if (!balance.equals(getters.tokenBalanceByAddress(address))) {
                  commit('setBalance', { address: address, tokenBalance: balance });
                }
              });
            }
          });
        }, 1000);
      },
      restoreAddresses: function restoreAddresses(_ref7) {
        var getters = _ref7.getters,
            dispatch = _ref7.dispatch,
            commit = _ref7.commit,
            state = _ref7.state;

        var numUnlockedAddresses = localStorage.getItem('numUnlockedAddresses');
        if (numUnlockedAddresses > 0) {
          dispatch('generateAddress', numUnlockedAddresses);
        }
      },
      initWeb3: function initWeb3(_ref8, pwDerivedKey) {
        var getters = _ref8.getters,
            dispatch = _ref8.dispatch,
            commit = _ref8.commit,
            state = _ref8.state;

        if (!state.keystore) {
          return;
        }
        derivedKey = pwDerivedKey;
        var opts = {
          getAccounts: function getAccounts(cb) {
            cb(null, getters.addresses);
          },
          signTransaction: function signTransaction(tx, cb) {
            var t = new __WEBPACK_IMPORTED_MODULE_8_ethereumjs_tx___default.a(tx);
            console.log('sign', tx, t);
            var signed = __WEBPACK_IMPORTED_MODULE_6_eth_lightwallet___default.a.signing.signTx(state.keystore, pwDerivedKey, t.serialize().toString('hex'), tx.from);
            cb(null, '0x' + signed);
          },
          approveTransaction: function approveTransaction(tx, cb) {
            console.log('approve', tx);
            cb(null, true);
          },
          signMessage: function signMessage(msg, cb) {
            console.log(msg);
            var signed = __WEBPACK_IMPORTED_MODULE_6_eth_lightwallet___default.a.signing.signMsg(state.keystore, pwDerivedKey, msg.data, msg.from);
            cb(null, __WEBPACK_IMPORTED_MODULE_6_eth_lightwallet___default.a.signing.concatSig(signed));
          },
          signPersonalMessage: function signPersonalMessage(msg, cb) {
            console.log(msg);
            var signed = __WEBPACK_IMPORTED_MODULE_6_eth_lightwallet___default.a.signing.signMsg(state.keystore, pwDerivedKey, msg.data, msg.from);
            cb(null, __WEBPACK_IMPORTED_MODULE_6_eth_lightwallet___default.a.signing.concatSig(signed));
          },
          rpcUrl: state.rpcUrl
          // that.providerOpts = opts
        };_web = new __WEBPACK_IMPORTED_MODULE_7_web3___default.a(new __WEBPACK_IMPORTED_MODULE_5_web3_provider_engine_zero___default.a(opts));
        if (!_web) {
          return;
        }
        var TokenContract = _web.eth.contract(__WEBPACK_IMPORTED_MODULE_3__abi_aeternity_token_abi_json___default.a);
        TokenContract.at(state.token.address, function (err, contract) {
          aeContract = contract;
          commit('setUnlocked', true);
          window.globalTokenContract = contract;
        });
        // dispatch('generateAddress', web3);
        dispatch('setAcountInterval');
        dispatch('mkProviderOptsForApps');
        dispatch('mkWeb3ForApps');
        dispatch('restoreAddresses');
      },
      init: function init(_ref9) {
        var commit = _ref9.commit,
            state = _ref9.state;

        if (localStorage.getItem('ks')) {
          commit('setKeystore', __WEBPACK_IMPORTED_MODULE_6_eth_lightwallet___default.a.keystore.deserialize(localStorage.getItem('ks')));
        }
      },
      createKeystore: function createKeystore(_ref10, _ref11) {
        var commit = _ref10.commit,
            dispatch = _ref10.dispatch,
            state = _ref10.state;
        var seed = _ref11.seed,
            password = _ref11.password;

        return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
          __WEBPACK_IMPORTED_MODULE_6_eth_lightwallet___default.a.keystore.createVault({
            password: password,
            seedPhrase: seed,
            hdPathString: "m/44'/60'/0'/0"
          }, function (err, keystore) {
            if (err) {
              return reject(err);
            }
            commit('setKeystore', keystore);
            localStorage.setItem('ks', keystore.serialize());
            keystore.keyFromPassword(password, function (err, pwDerivedKey) {
              if (err) {
                return reject(err);
              }
              if (!keystore.isDerivedKeyCorrect(pwDerivedKey)) {
                return reject(new Error('Wrong password'));
              }
              dispatch('initWeb3', pwDerivedKey);
              // generate the first address
              dispatch('generateAddress');
              // since we created a new account, show the id manager
              commit('setShowIdManager', true);
              return resolve();
            });
          });
        });
      }
    }
  });
}();
window.s = store;

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ "KYqO":
/***/ (function(module, exports) {

module.exports = {"_args":[[{"raw":"elliptic@^3.1.0","scope":null,"escapedName":"elliptic","name":"elliptic","rawSpec":"^3.1.0","spec":">=3.1.0 <4.0.0","type":"range"},"/Users/philipp/dev/aeternity/aepp-identity/node_modules/eth-lightwallet"]],"_from":"elliptic@>=3.1.0 <4.0.0","_id":"elliptic@3.1.0","_inCache":true,"_location":"/elliptic","_nodeVersion":"2.2.1","_npmUser":{"name":"indutny","email":"fedor@indutny.com"},"_npmVersion":"2.11.0","_phantomChildren":{},"_requested":{"raw":"elliptic@^3.1.0","scope":null,"escapedName":"elliptic","name":"elliptic","rawSpec":"^3.1.0","spec":">=3.1.0 <4.0.0","type":"range"},"_requiredBy":["/eth-lightwallet"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-3.1.0.tgz","_shasum":"c21682ef762769b56a74201609105da11d5f60cc","_shrinkwrap":null,"_spec":"elliptic@^3.1.0","_where":"/Users/philipp/dev/aeternity/aepp-identity/node_modules/eth-lightwallet","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"dependencies":{"bn.js":"^2.0.3","brorand":"^1.0.1","hash.js":"^1.0.0","inherits":"^2.0.1"},"description":"EC cryptography","devDependencies":{"browserify":"^3.44.2","jscs":"^1.11.3","jshint":"^2.6.0","mocha":"^2.1.0","uglify-js":"^2.4.13"},"directories":{},"dist":{"shasum":"c21682ef762769b56a74201609105da11d5f60cc","tarball":"https://registry.npmjs.org/elliptic/-/elliptic-3.1.0.tgz"},"gitHead":"d86cd2a8178f7e7cecbd6dd92eea084e2ab44c13","homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","maintainers":[{"name":"indutny","email":"fedor@indutny.com"}],"name":"elliptic","optionalDependencies":{},"readme":"ERROR: No README data found!","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"test":"make lint && mocha --reporter=spec test/*-test.js"},"version":"3.1.0"}

/***/ }),

/***/ "LMa3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_aeIdentityInfo_js__ = __webpack_require__("sBsK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_da06b852_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_aeIdentityInfo_vue__ = __webpack_require__("ZRrA");
function injectStyle (ssrContext) {
  __webpack_require__("mpIh")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-da06b852"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_aeIdentityInfo_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_da06b852_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_aeIdentityInfo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "LiXU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pin-input-wrapper"},[_c('input',{staticClass:"pin-input",attrs:{"id":_vm.id,"type":"password","pattern":".{4,}","title":"4 characters minimum","required":"","placeholder":_vm.placeholder},on:{"input":_vm.handleChange}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Lt5V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Unlock_js__ = __webpack_require__("AYdp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b4d9d2c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Unlock_vue__ = __webpack_require__("ewfs");
function injectStyle (ssrContext) {
  __webpack_require__("NW30")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4b4d9d2c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Unlock_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b4d9d2c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Unlock_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_App_js__ = __webpack_require__("78FQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c774620_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("RGfi");
function injectStyle (ssrContext) {
  __webpack_require__("WHcL")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_App_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c774620_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "N+zL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_slide_vue__ = __webpack_require__("+p9J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_3f5b3ebf_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_vue_loader_lib_selector_type_template_index_0_slide_vue__ = __webpack_require__("9JTq");
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_slide_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_3f5b3ebf_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_vue_loader_lib_selector_type_template_index_0_slide_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("IcnI");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

//router.beforeEach((to, from, next) => {
//console.log(to.name === 'id-manager' && !store.state.unlocked);
//if(to.name === 'id-manager' && !store.state.unlocked) {
//console.log(to.name, from.name);
//next(false)
////console.log(to.name, from );
////next({ replace: true, name: 'unlock' })
//}
//})

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_1__App_vue__["a" /* default */]);
  },
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App_vue__["a" /* default */] },
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  methods: {},
  beforeCreate: function beforeCreate() {
    console.log('before');
  },
  mounted: function mounted() {
    this.$store.dispatch('init');
    console.log('mounted');
    if (this.$store.state.keystore) {
      __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].push({ path: 'unlock' });
    }
  }
});

/***/ }),

/***/ "NW30":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "QDfD":
/***/ (function(module, exports) {

module.exports = {"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}

/***/ }),

/***/ "QghM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper__ = __webpack_require__("DNVT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aeButton_aeButton_vue__ = __webpack_require__("xUQp");


/* harmony default export */ __webpack_exports__["a"] = ({
	components: {
		'ae-button': __WEBPACK_IMPORTED_MODULE_1__aeButton_aeButton_vue__["a" /* default */]
	},
	//components : [ aeButton
	//],
	mounted: function mounted() {
		new __WEBPACK_IMPORTED_MODULE_0_swiper__["a" /* default */]('.swiper-container', {
			pagination: '.swiper-pagination',
			nextButton: '.next'
		});
	}
});

/***/ }),

/***/ "R/pS":
/***/ (function(module, exports) {

module.exports = [{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"name","outputs":[{"name":"o_name","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"content","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"addr","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"reserve","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"subRegistrar","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_newOwner","type":"address"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_registrar","type":"address"}],"name":"setSubRegistrar","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"Registrar","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_a","type":"address"},{"name":"_primary","type":"bool"}],"name":"setAddress","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_content","type":"bytes32"}],"name":"setContent","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"disown","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_name","type":"bytes32"},{"indexed":false,"name":"_winner","type":"address"}],"name":"AuctionEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_name","type":"bytes32"},{"indexed":false,"name":"_bidder","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"NewBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"bytes32"}],"name":"Changed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"bytes32"},{"indexed":true,"name":"addr","type":"address"}],"name":"PrimaryChanged","type":"event"}]

/***/ }),

/***/ "RGLD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_aeIdentity_js__ = __webpack_require__("rXLz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45720817_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_aeIdentity_vue__ = __webpack_require__("EFp7");
function injectStyle (ssrContext) {
  __webpack_require__("SNPD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-45720817"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_aeIdentity_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45720817_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_aeIdentity_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "RGfi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[(_vm.showIdManager)?_c('id-manager'):_vm._e(),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "RIQb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"swiper-container"},[_vm._t("parallax-bg"),_vm._v(" "),_c('div',{class:_vm.defaultSwiperClasses.wrapperClass},[_vm._t("default")],2),_vm._v(" "),_vm._t("pagination"),_vm._v(" "),_vm._t("button-prev"),_vm._v(" "),_vm._t("button-next"),_vm._v(" "),_vm._t("scrollbar")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "SNPD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "UIsv":
/***/ (function(module, exports) {

module.exports = [{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_refund","type":"address"}],"name":"disown","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"addr","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"reserve","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_newOwner","type":"address"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_a","type":"address"}],"name":"setAddr","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"bytes32"}],"name":"Changed","type":"event"}]

/***/ }),

/***/ "WHcL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "WVO+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "WfoU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-browser screen"},[_c('iframe',{ref:"appframe",staticClass:"nomargin",attrs:{"id":"appframe","src":_vm.iframe}}),_vm._v(" "),_c('quick-id')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Intro_vue__ = __webpack_require__("xa4f");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Setup_vue__ = __webpack_require__("GN14");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Unlock_vue__ = __webpack_require__("Lt5V");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_AppBrowser_vue__ = __webpack_require__("8Kvx");








__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    name: 'intro',
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Intro_vue__["a" /* default */],
    meta: {
      title: 'Welcome',
      appClass: 'welcome'
    }
  }, {
    name: 'setup',
    path: '/setup',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Setup_vue__["a" /* default */],
    meta: {
      title: 'Setup',
      appClass: 'setup'
    }
  }, {
    name: 'unlock',
    path: '/unlock',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Unlock_vue__["a" /* default */],
    meta: {
      title: 'Unlock',
      appClass: 'unlock'
    }
  }, {
    name: 'app-browser',
    path: '/app-browser',
    component: __WEBPACK_IMPORTED_MODULE_5__components_AppBrowser_vue__["a" /* default */],
    meta: {
      title: 'App Browser',
      appClass: 'app-browser'
    }
  }]
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),

/***/ "ZRrA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.identity)?_c('div',{staticClass:"identity-info"},[_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.identity.name))]),_vm._v(" "),_c('div',{staticClass:"address"},[_vm._v(_vm._s(_vm.identity.address))])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ZTAc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dEsM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'PinInput',
  props: {
    'id': String,
    'value': {
      type: String,
      default: ''
    },
    'placeholder': {
      type: String,
      default: 'Enter PIN...'
    }
  },
  methods: {
    handleChange: function handleChange(event) {
      var newValue = event.target.value;
      this.$emit('change', { value: newValue });
    }
  }
});

/***/ }),

/***/ "e/1o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"quick-id"},[_c('ae-identity',{attrs:{"identity":_vm.identity,"active":true},on:{"click":_vm.showIdManager}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ejIc":
/***/ (function(module, exports) {

module.exports = {"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}

/***/ }),

/***/ "ewfs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"unlock screen"},[_c('h1',[_vm._v("Unlock")]),_vm._v(" "),_c('form',{staticClass:"unlock-form",on:{"submit":function($event){$event.preventDefault();}}},[_c('pin-input',{attrs:{"id":'unlock__pin-input'},on:{"change":function($event){_vm.password = $event.value}}}),_vm._v(" "),(_vm.error)?_c('p',{staticClass:"error"},[_vm._v("\n      "+_vm._s(_vm.error)+"\n    ")]):_vm._e(),_vm._v(" "),_c('label',{staticClass:"explanation text center",attrs:{"for":"unlock__pin-input"}},[_vm._v("\n      To access your account, please enter your secret Passphrase and the matching PIN.\n    ")]),_vm._v(" "),_c('ae-button',{staticClass:"unlock-button",attrs:{"role":'primary'}},[_c('button',{on:{"click":_vm.unlockSavedKeystore}},[_vm._v("\n        Unlock\n      ")])])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "fcBp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fpQl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_QuickId_vue__ = __webpack_require__("stM5");


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app-browser',
  data: function data() {
    return {
      iframe: '/static/aexistence/index.html'
    };
  },

  components: {
    'quick-id': __WEBPACK_IMPORTED_MODULE_0__components_QuickId_vue__["a" /* default */]
  },
  mounted: function mounted() {
    if (this.$store.state.keystore == null) {
      this.$router.push({ name: 'setup' });
    } else if (!this.$store.state.unlocked) {
      this.$router.push({ name: 'unlock' });
    }
  }
});

/***/ }),

/***/ "j27a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("PJh5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3__ = __webpack_require__("8k0n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_web3__);

var blockies = __webpack_require__("DDQh");


//a "stupid" web3 just for conversions
var web3 = new __WEBPACK_IMPORTED_MODULE_1_web3___default.a();

/* harmony default export */ __webpack_exports__["a"] = ({
	methods: {
		readableTimestamp: function readableTimestamp(timestamp) {
			if (timestamp) {
				var momentTime = __WEBPACK_IMPORTED_MODULE_0_moment___default.a.unix(timestamp.toString());
				return momentTime.format('YYYY-MM-DD HH:mm');
			} else {
				return '';
			}
		},
		etherscanLink: function etherscanLink(value, type) {
			// type tx, address, block
			var baseurl = 'https://kovan.etherscan.io/';
			baseurl += type;
			baseurl += '/';
			baseurl += value;
			return baseurl;
		},
		blockie: function blockie(address) {
			return blockies.createDataURL({
				seed: address
			});
		},
		readableToken: function readableToken(balance) {
			if (!web3) {
				return "null";
			}
			return parseFloat(web3.fromWei(balance.toString(10), 'ether')).toFixed(3);
		},
		readableEther: function readableEther(balance) {
			if (!web3) {
				return "null";
			}
			return parseFloat(web3.fromWei(balance.toString(10), 'ether')).toFixed(3);
		}
	}
});

/***/ }),

/***/ "j4/Y":
/***/ (function(module, exports) {

module.exports = {"_args":[[{"raw":"elliptic@^6.2.3","scope":null,"escapedName":"elliptic","name":"elliptic","rawSpec":"^6.2.3","spec":">=6.2.3 <7.0.0","type":"range"},"/Users/philipp/dev/aeternity/aepp-identity/node_modules/secp256k1"]],"_from":"elliptic@>=6.2.3 <7.0.0","_id":"elliptic@6.4.0","_inCache":true,"_location":"/secp256k1/elliptic","_nodeVersion":"7.0.0","_npmOperationalInternal":{"host":"packages-18-east.internal.npmjs.com","tmp":"tmp/elliptic-6.4.0.tgz_1487798866428_0.30510620190761983"},"_npmUser":{"name":"indutny","email":"fedor@indutny.com"},"_npmVersion":"3.10.8","_phantomChildren":{},"_requested":{"raw":"elliptic@^6.2.3","scope":null,"escapedName":"elliptic","name":"elliptic","rawSpec":"^6.2.3","spec":">=6.2.3 <7.0.0","type":"range"},"_requiredBy":["/secp256k1"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz","_shasum":"cac9af8762c85836187003c8dfe193e5e2eae5df","_shrinkwrap":null,"_spec":"elliptic@^6.2.3","_where":"/Users/philipp/dev/aeternity/aepp-identity/node_modules/secp256k1","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},"description":"EC cryptography","devDependencies":{"brfs":"^1.4.3","coveralls":"^2.11.3","grunt":"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2","istanbul":"^0.4.2","jscs":"^2.9.0","jshint":"^2.6.0","mocha":"^2.1.0"},"directories":{},"dist":{"shasum":"cac9af8762c85836187003c8dfe193e5e2eae5df","tarball":"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz"},"files":["lib"],"gitHead":"6b0d2b76caae91471649c8e21f0b1d3ba0f96090","homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","maintainers":[{"name":"indutny","email":"fedor@indutny.com"}],"name":"elliptic","optionalDependencies":{},"readme":"ERROR: No README data found!","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","test":"npm run lint && npm run unit","unit":"istanbul test _mocha --reporter=spec test/index.js","version":"grunt dist && git add dist/"},"version":"6.4.0"}

/***/ }),

/***/ "k2JL":
/***/ (function(module, exports) {

module.exports = {"_args":[[{"raw":"bitcore-lib@^0.14.0","scope":null,"escapedName":"bitcore-lib","name":"bitcore-lib","rawSpec":"^0.14.0","spec":">=0.14.0 <0.15.0","type":"range"},"/Users/philipp/dev/aeternity/aepp-identity/node_modules/eth-lightwallet"]],"_from":"bitcore-lib@>=0.14.0 <0.15.0","_id":"bitcore-lib@0.14.0","_inCache":true,"_location":"/bitcore-lib","_nodeVersion":"4.7.2","_npmOperationalInternal":{"host":"packages-18-east.internal.npmjs.com","tmp":"tmp/bitcore-lib-0.14.0.tgz_1489441429695_0.6348136917222291"},"_npmUser":{"name":"kleetus","email":"chrisk@bitpay.com"},"_npmVersion":"2.15.11","_phantomChildren":{},"_requested":{"raw":"bitcore-lib@^0.14.0","scope":null,"escapedName":"bitcore-lib","name":"bitcore-lib","rawSpec":"^0.14.0","spec":">=0.14.0 <0.15.0","type":"range"},"_requiredBy":["/bitcore-mnemonic","/eth-lightwallet"],"_resolved":"https://registry.npmjs.org/bitcore-lib/-/bitcore-lib-0.14.0.tgz","_shasum":"21cb2359fe7b997a3b7b773eb7d7275ae37d644e","_shrinkwrap":{"name":"bitcore","version":"0.13.19","dependencies":{"bn.js":{"version":"2.0.4","from":"bn.js@=2.0.4","resolved":"https://registry.npmjs.org/bn.js/-/bn.js-2.0.4.tgz"},"bs58":{"version":"2.0.0","from":"bs58@=2.0.0","resolved":"https://registry.npmjs.org/bs58/-/bs58-2.0.0.tgz"},"buffer-compare":{"version":"1.0.0","from":"buffer-compare@=1.0.0","resolved":"https://registry.npmjs.org/buffer-compare/-/buffer-compare-1.0.0.tgz"},"elliptic":{"version":"3.0.3","from":"elliptic@=3.0.3","resolved":"https://registry.npmjs.org/elliptic/-/elliptic-3.0.3.tgz","dependencies":{"brorand":{"version":"1.0.5","from":"brorand@^1.0.1","resolved":"https://registry.npmjs.org/brorand/-/brorand-1.0.5.tgz"},"hash.js":{"version":"1.0.3","from":"hash.js@=1.0.3","resolved":"https://registry.npmjs.org/hash.js/-/hash.js-1.0.3.tgz"}}},"inherits":{"version":"2.0.1","from":"inherits@=2.0.1","resolved":"https://registry.npmjs.org/inherits/-/inherits-2.0.1.tgz"},"lodash":{"version":"3.10.1","from":"lodash@=3.10.1","resolved":"https://registry.npmjs.org/lodash/-/lodash-3.10.1.tgz"}}},"_spec":"bitcore-lib@^0.14.0","_where":"/Users/philipp/dev/aeternity/aepp-identity/node_modules/eth-lightwallet","author":{"name":"BitPay","email":"dev@bitpay.com"},"browser":{"request":"browser-request"},"bugs":{"url":"https://github.com/bitpay/bitcore-lib/issues"},"contributors":[{"name":"Daniel Cousens","email":"bitcoin@dcousens.com"},{"name":"Esteban Ordano","email":"eordano@gmail.com"},{"name":"Gordon Hall","email":"gordon@bitpay.com"},{"name":"Jeff Garzik","email":"jgarzik@bitpay.com"},{"name":"Kyle Drake","email":"kyle@kyledrake.net"},{"name":"Manuel Araoz","email":"manuelaraoz@gmail.com"},{"name":"Matias Alejo Garcia","email":"ematiu@gmail.com"},{"name":"Ryan X. Charles","email":"ryanxcharles@gmail.com"},{"name":"Stefan Thomas","email":"moon@justmoon.net"},{"name":"Stephen Pair","email":"stephen@bitpay.com"},{"name":"Wei Lu","email":"luwei.here@gmail.com"}],"dependencies":{"bn.js":"=2.0.4","bs58":"=2.0.0","buffer-compare":"=1.0.0","elliptic":"=3.0.3","inherits":"=2.0.1","lodash":"=3.10.1"},"description":"A pure and powerful JavaScript Bitcoin library.","devDependencies":{"bitcore-build":"github:bitpay/bitcore-build","brfs":"^1.2.0","chai":"^1.10.0","gulp":"^3.8.10","sinon":"^1.13.0"},"directories":{},"dist":{"shasum":"21cb2359fe7b997a3b7b773eb7d7275ae37d644e","tarball":"https://registry.npmjs.org/bitcore-lib/-/bitcore-lib-0.14.0.tgz"},"gitHead":"2b5b486ee9626eeb0a57c1ef3603d3d42bf46b2f","homepage":"https://github.com/bitpay/bitcore-lib#readme","keywords":["bitcoin","transaction","address","p2p","ecies","cryptocurrency","blockchain","payment","bip21","bip32","bip37","bip69","bip70","multisig"],"license":"MIT","main":"index.js","maintainers":[{"name":"braydonf","email":"courier@braydon.com"},{"name":"gabegattis","email":"gabegattis@gmail.com"},{"name":"gasteve","email":"stephen@pairhome.net"},{"name":"kleetus","email":"laconia@gmail.com"},{"name":"patrickbitpay","email":"patrick@bitpay.com"}],"name":"bitcore-lib","optionalDependencies":{},"readme":"ERROR: No README data found!","repository":{"type":"git","url":"git+https://github.com/bitpay/bitcore-lib.git"},"scripts":{"build":"gulp","coverage":"gulp coverage","lint":"gulp lint","test":"gulp test"},"version":"0.14.0"}

/***/ }),

/***/ "lSVM":
/***/ (function(module, exports) {

module.exports = {"_args":[[{"raw":"elliptic@^6.0.0","scope":null,"escapedName":"elliptic","name":"elliptic","rawSpec":"^6.0.0","spec":">=6.0.0 <7.0.0","type":"range"},"/Users/philipp/dev/aeternity/aepp-identity/node_modules/create-ecdh"]],"_from":"elliptic@>=6.0.0 <7.0.0","_id":"elliptic@6.4.0","_inCache":true,"_location":"/create-ecdh/elliptic","_nodeVersion":"7.0.0","_npmOperationalInternal":{"host":"packages-18-east.internal.npmjs.com","tmp":"tmp/elliptic-6.4.0.tgz_1487798866428_0.30510620190761983"},"_npmUser":{"name":"indutny","email":"fedor@indutny.com"},"_npmVersion":"3.10.8","_phantomChildren":{},"_requested":{"raw":"elliptic@^6.0.0","scope":null,"escapedName":"elliptic","name":"elliptic","rawSpec":"^6.0.0","spec":">=6.0.0 <7.0.0","type":"range"},"_requiredBy":["/create-ecdh"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz","_shasum":"cac9af8762c85836187003c8dfe193e5e2eae5df","_shrinkwrap":null,"_spec":"elliptic@^6.0.0","_where":"/Users/philipp/dev/aeternity/aepp-identity/node_modules/create-ecdh","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},"description":"EC cryptography","devDependencies":{"brfs":"^1.4.3","coveralls":"^2.11.3","grunt":"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2","istanbul":"^0.4.2","jscs":"^2.9.0","jshint":"^2.6.0","mocha":"^2.1.0"},"directories":{},"dist":{"shasum":"cac9af8762c85836187003c8dfe193e5e2eae5df","tarball":"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz"},"files":["lib"],"gitHead":"6b0d2b76caae91471649c8e21f0b1d3ba0f96090","homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","maintainers":[{"name":"indutny","email":"fedor@indutny.com"}],"name":"elliptic","optionalDependencies":{},"readme":"ERROR: No README data found!","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","test":"npm run lint && npm run unit","unit":"istanbul test _mocha --reporter=spec test/index.js","version":"grunt dist && git add dist/"},"version":"6.4.0"}

/***/ }),

/***/ "ltrg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"screen setup"},[(_vm.displayGeneratedSeed)?_c('div',{staticClass:"wrapper"},[_c('h1',{staticClass:"title"},[_vm._v("Create Account")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.seed),expression:"seed"}],ref:"seed",staticClass:"seed-input",attrs:{"id":"seed-in","required":""},domProps:{"value":(_vm.seed)},on:{"input":function($event){if($event.target.composing){ return; }_vm.seed=$event.target.value}}}),_vm._v(" "),_c('ae-button',{staticClass:"copy-phrase-button"},[_c('button',{on:{"click":function($event){_vm.copySeed()}}},[_vm._v(_vm._s(_vm.copyButtonText))])]),_vm._v(" "),_c('p',{staticClass:"text center"},[_vm._v("\n        is your new wallet seed. Please write it down on paper or in a password manager, you will need it to access your wallet. Do not let anyone see this seed or they can take your Ether.\n      ")]),_vm._v(" "),_c('ae-button',{staticClass:"next-step-button",attrs:{"role":'primary'}},[_c('button',{on:{"click":_vm.nextStep}},[_vm._v("Got it!")])])],1):(_vm.displayPasswordInput)?_c('div',{staticClass:"password-input wrapper"},[(_vm.haveKeyStore)?_c('p',{staticClass:"text center"}):_vm._e(),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();}}},[_c('div',[_c('pin-input',{attrs:{"id":'pin-input'},on:{"change":function($event){_vm.password = $event.value}}}),_vm._v(" "),_c('div',{ref:"pwdinfo",staticClass:"password-info"}),_vm._v(" "),_c('label',{staticClass:"pin-input-label text center",attrs:{"for":"pin-input"}},[_vm._v("Please enter your password to encrypt/decrypt your seed.")]),_vm._v(" "),_c('ae-button',{staticClass:"save-password-button",attrs:{"role":'primary'}},[_c('button',{attrs:{"disabled":_vm.working},on:{"click":_vm.savePassword}},[_vm._v(_vm._s(_vm.working ? 'Saving...' : 'Save'))])])],1)])]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "mpIh":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "o13F":
/***/ (function(module, exports) {

module.exports = {"COMPRESSED_TYPE_INVALID":"compressed should be a boolean","EC_PRIVATE_KEY_TYPE_INVALID":"private key should be a Buffer","EC_PRIVATE_KEY_LENGTH_INVALID":"private key length is invalid","EC_PRIVATE_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting private key is invalid","EC_PRIVATE_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PRIVATE_KEY_EXPORT_DER_FAIL":"couldn't export to DER format","EC_PRIVATE_KEY_IMPORT_DER_FAIL":"couldn't import from DER format","EC_PUBLIC_KEYS_TYPE_INVALID":"public keys should be an Array","EC_PUBLIC_KEYS_LENGTH_INVALID":"public keys Array should have at least 1 element","EC_PUBLIC_KEY_TYPE_INVALID":"public key should be a Buffer","EC_PUBLIC_KEY_LENGTH_INVALID":"public key length is invalid","EC_PUBLIC_KEY_PARSE_FAIL":"the public key could not be parsed or is invalid","EC_PUBLIC_KEY_CREATE_FAIL":"private was invalid, try again","EC_PUBLIC_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting public key is invalid","EC_PUBLIC_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PUBLIC_KEY_COMBINE_FAIL":"the sum of the public keys is not valid","ECDH_FAIL":"scalar was invalid (zero or overflow)","ECDSA_SIGNATURE_TYPE_INVALID":"signature should be a Buffer","ECDSA_SIGNATURE_LENGTH_INVALID":"signature length is invalid","ECDSA_SIGNATURE_PARSE_FAIL":"couldn't parse signature","ECDSA_SIGNATURE_PARSE_DER_FAIL":"couldn't parse DER signature","ECDSA_SIGNATURE_SERIALIZE_DER_FAIL":"couldn't serialize signature to DER format","ECDSA_SIGN_FAIL":"nonce generation function failed or private key is invalid","ECDSA_RECOVER_FAIL":"couldn't recover public key from signature","MSG32_TYPE_INVALID":"message should be a Buffer","MSG32_LENGTH_INVALID":"message length is invalid","OPTIONS_TYPE_INVALID":"options should be an Object","OPTIONS_DATA_TYPE_INVALID":"options.data should be a Buffer","OPTIONS_DATA_LENGTH_INVALID":"options.data length is invalid","OPTIONS_NONCEFN_TYPE_INVALID":"options.noncefn should be a Function","RECOVERY_ID_TYPE_INVALID":"recovery should be a Number","RECOVERY_ID_VALUE_INVALID":"recovery should have value between -1 and 4","TWEAK_TYPE_INVALID":"tweak should be a Buffer","TWEAK_LENGTH_INVALID":"tweak length is invalid"}

/***/ }),

/***/ "oPsS":
/***/ (function(module, exports) {

module.exports = [{"constant":false,"inputs":[{"name":"from","type":"bytes32"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"from","type":"bytes32"},{"name":"to","type":"address"},{"name":"indirectId","type":"bytes32"},{"name":"value","type":"uint256"}],"name":"icapTransfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"bytes32"}],"name":"deposit","outputs":[],"payable":true,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"AnonymousDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"bytes32"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"bytes32"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"indirectId","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"}],"name":"IcapTransfer","type":"event"}]

/***/ }),

/***/ "osr3":
/***/ (function(module, exports) {

module.exports = [{"constant":false,"inputs":[],"name":"launch","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_addresses","type":"address[]"},{"name":"_values","type":"uint256[]"}],"name":"prefill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"transferableUntil","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"prefilled","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]

/***/ }),

/***/ "pQs9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_aeIdentityAvatar_js__ = __webpack_require__("C6G/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2fe31b77_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_aeIdentityAvatar_vue__ = __webpack_require__("24tS");
function injectStyle (ssrContext) {
  __webpack_require__("ZTAc")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2fe31b77"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_aeIdentityAvatar_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2fe31b77_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_aeIdentityAvatar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "pYmz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_swiper_vue__ = __webpack_require__("7oBO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_ed34a24c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_vue_loader_lib_selector_type_template_index_0_swiper_vue__ = __webpack_require__("RIQb");
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_swiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_ed34a24c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_vue_loader_lib_selector_type_template_index_0_swiper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "qUBt":
/***/ (function(module, exports) {

module.exports = {"_args":[[{"raw":"elliptic@https://registry.npmjs.org/elliptic/-/elliptic-3.0.3.tgz","scope":null,"escapedName":"elliptic","name":"elliptic","rawSpec":"https://registry.npmjs.org/elliptic/-/elliptic-3.0.3.tgz","spec":"https://registry.npmjs.org/elliptic/-/elliptic-3.0.3.tgz","type":"remote"},"/Users/philipp/dev/aeternity/aepp-identity/node_modules/bitcore-lib"]],"_from":"elliptic@=3.0.3","_id":"elliptic@3.0.3","_inCache":true,"_location":"/bitcore-lib/elliptic","_phantomChildren":{"inherits":"2.0.1"},"_requested":{"raw":"elliptic@https://registry.npmjs.org/elliptic/-/elliptic-3.0.3.tgz","scope":null,"escapedName":"elliptic","name":"elliptic","rawSpec":"https://registry.npmjs.org/elliptic/-/elliptic-3.0.3.tgz","spec":"https://registry.npmjs.org/elliptic/-/elliptic-3.0.3.tgz","type":"remote"},"_requiredBy":["/bitcore-lib"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-3.0.3.tgz","_shasum":"865c9b420bfbe55006b9f969f97a0d2c44966595","_shrinkwrap":null,"_spec":"elliptic@https://registry.npmjs.org/elliptic/-/elliptic-3.0.3.tgz","_where":"/Users/philipp/dev/aeternity/aepp-identity/node_modules/bitcore-lib","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"dependencies":{"bn.js":"^2.0.0","brorand":"^1.0.1","hash.js":"^1.0.0","inherits":"^2.0.1"},"description":"EC cryptography","devDependencies":{"browserify":"^3.44.2","jscs":"^1.11.3","jshint":"^2.6.0","mocha":"^2.1.0","uglify-js":"^2.4.13"},"homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","name":"elliptic","optionalDependencies":{},"readme":"# Elliptic [![Build Status](https://secure.travis-ci.org/indutny/elliptic.png)](http://travis-ci.org/indutny/elliptic)\n\nFast elliptic-curve cryptography in a plain javascript implementation.\n\nNOTE: Please take a look at http://safecurves.cr.yp.to/ before choosing a curve\nfor your cryptography operations.\n\n## Incentive\n\nECC is much slower than regular RSA cryptography, the JS implementations are\neven more slower.\n\n## Benchmarks\n\n```bash\n$ node benchmarks/index.js\nBenchmarking: sign\nelliptic#sign x 262 ops/sec ±0.51% (177 runs sampled)\neccjs#sign x 55.91 ops/sec ±0.90% (144 runs sampled)\n------------------------\nFastest is elliptic#sign\n========================\nBenchmarking: verify\nelliptic#verify x 113 ops/sec ±0.50% (166 runs sampled)\neccjs#verify x 48.56 ops/sec ±0.36% (125 runs sampled)\n------------------------\nFastest is elliptic#verify\n========================\nBenchmarking: gen\nelliptic#gen x 294 ops/sec ±0.43% (176 runs sampled)\neccjs#gen x 62.25 ops/sec ±0.63% (129 runs sampled)\n------------------------\nFastest is elliptic#gen\n========================\nBenchmarking: ecdh\nelliptic#ecdh x 136 ops/sec ±0.85% (156 runs sampled)\n------------------------\nFastest is elliptic#ecdh\n========================\n```\n\n## API\n\n### ECDSA\n\n```javascript\nvar EC = require('elliptic').ec;\n\n// Create and initialize EC context\n// (better do it once and reuse it)\nvar ec = new EC('secp256k1');\n\n// Generate keys\nvar key = ec.genKeyPair();\n\n// Sign message (must be an array, or it'll be treated as a hex sequence)\nvar msg = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];\nvar signature = key.sign(msg);\n\n// Export DER encoded signature in Array\nvar derSign = signature.toDER();\n\n// Verify signature\nconsole.log(key.verify(msg, derSign));\n```\n\n### ECDH\n\n```javascript\n// Generate keys\nvar key1 = ec.genKeyPair();\nvar key2 = ec.genKeyPair();\n\nvar shared1 = key1.derive(key2.getPublic());\nvar shared2 = key2.derive(key1.getPublic());\n\nconsole.log('Both shared secrets are BN instances');\nconsole.log(shared1.toString(16));\nconsole.log(shared2.toString(16));\n```\n\nNOTE: `.derive()` returns a [BN][1] instance.\n\n## Supported curves\n\nElliptic.js support following curve types:\n\n* Short Weierstrass\n* Montgomery\n* Edwards\n* Twisted Edwards\n\nFollowing curve 'presets' are embedded into the library:\n\n* `secp256k1`\n* `p192`\n* `p224`\n* `p256`\n* `curve25519`\n* `ed25519`\n\nNOTE: That `curve25519` could not be used for ECDSA, use `ed25519` instead.\n\n### Implementation details\n\nECDSA is using deterministic `k` value generation as per [RFC6979][0]. Most of\nthe curve operations are performed on non-affine coordinates (either projective\nor extended), various windowing techniques are used for different cases.\n\nAll operations are performed in reduction context using [bn.js][1], hashing is\nprovided by [hash.js][2]\n\n### Related projects\n\n* [eccrypto][3]: isomorphic implementation of ECDSA, ECDH and ECIES for both\n  browserify and node (uses `elliptic` for browser and [secp256k1-node][4] for\n  node)\n\n#### LICENSE\n\nThis software is licensed under the MIT License.\n\nCopyright Fedor Indutny, 2014.\n\nPermission is hereby granted, free of charge, to any person obtaining a\ncopy of this software and associated documentation files (the\n\"Software\"), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to permit\npersons to whom the Software is furnished to do so, subject to the\nfollowing conditions:\n\nThe above copyright notice and this permission notice shall be included\nin all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\nOR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\nNO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\nDAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\nOTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\nUSE OR OTHER DEALINGS IN THE SOFTWARE.\n\n[0]: http://tools.ietf.org/html/rfc6979\n[1]: https://github.com/indutny/bn.js\n[2]: https://github.com/indutny/hash.js\n[3]: https://github.com/bitchan/eccrypto\n[4]: https://github.com/wanderer/secp256k1-node\n","readmeFilename":"README.md","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"test":"make lint && mocha --reporter=spec test/*-test.js"},"version":"3.0.3"}

/***/ }),

/***/ "r3w4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eth_lightwallet__ = __webpack_require__("N6C4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eth_lightwallet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_eth_lightwallet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PinInput_vue__ = __webpack_require__("HK+i");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_aeButton_aeButton_vue__ = __webpack_require__("xUQp");







/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'setup',
  components: {
    'pin-input': __WEBPACK_IMPORTED_MODULE_3__components_PinInput_vue__["a" /* default */],
    'ae-button': __WEBPACK_IMPORTED_MODULE_4__components_aeButton_aeButton_vue__["a" /* default */]
  },
  data: function data() {
    return {
      stepIndex: 0,
      iname: '/static/aexistence/index.html',
      seed: '',
      password: '',
      copyButtonText: 'COPY PHRASE',
      working: false
    };
  },

  computed: {
    seedList: function seedList() {
      return this.seed.match(/\S+/g);
    },
    iframe: function iframe() {
      return this.iname;
    },
    // tokenDisplay: function () { return this.tokens.map(function (e) { return e.toString() }) },
    displayPasswordInput: function displayPasswordInput() {
      return this.stepIndex === 1 || this.haveKeyStore;
    },
    displayGeneratedSeed: function displayGeneratedSeed() {
      return this.stepIndex === 0 && !this.haveKeyStore;
    },
    keystore: function keystore() {
      return this.$store.state.keystore;
    },
    haveKeyStore: function haveKeyStore() {
      return this.keystore !== null;
    },
    unlocked: function unlocked() {
      return this.$store.state.unlocked;
    }
  },
  created: function created() {
    this.seed = __WEBPACK_IMPORTED_MODULE_2_eth_lightwallet___default.a.keystore.generateRandomSeed();
  },
  mounted: function mounted() {
    if (this.haveKeyStore && this.unlocked) {
      console.log('already unlocked');
      this.$router.push({ name: 'app-browser' });
    } else if (this.haveKeyStore) {
      console.log('already keystore');
      this.$router.push({ name: 'unlock' });
    }
  },
  methods: {
    // transferFrom: function (from, to, amount) {
    //   if (this.token.contract === undefined) return
    //   var that = this
    //   const tVal = this.tokenTransferValue
    //   this.token.contract.transfer(to, this.w3.toBigNumber(tVal).mul(this.$store.state.token.decimals), {from: from, gas: 100000}, function (err, txid) {
    //     if (err) {
    //       console.log('transferFrom', err)
    //       throw err
    //     }
    //     const fIdx = that.addrList.indexOf(from)
    //     const tIdx = that.addrList.indexOf(to)
    //     if (fIdx === -1 || tIdx === -1) {
    //       console.log('could not update token balances locally')
    //       return
    //     }
    //     // TODO: Check back later if this update actually happened on chain.
    //     that.$set(that.tokens, fIdx, that.tokens[fIdx].sub(tVal))
    //     that.$set(that.tokens, tIdx, that.tokens[tIdx].add(tVal))
    //   })
    // },
    // transfer: function (to, amount) {
    //   this.transferFrom(this.addrList[this.addrIdx], to, amount)
    // },
    // signMsg: function () {
    //   this.w3.personal.sign(this.w3.toHex(this.message), this.addrList[this.addrIdx], function (err, signed) {
    //     if (err) throw err
    //     console.log(signed)
    //   })
    // },
    nextStep: function nextStep() {
      this.stepIndex++;
    },

    savePassword: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.password.length < 3)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                this.working = true;
                _context.prev = 3;
                _context.next = 6;
                return this.$store.dispatch('createKeystore', {
                  seed: this.seed,
                  password: this.password
                });

              case 6:
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](3);

                // TODO: error handling
                console.log(_context.t0);

              case 11:
                this.working = false;

                // var that = this
                // if (this.haveKeyStore) {
                //   this.keystore.keyFromPassword(this.password, function (err, pwDerivedKey) {
                //     const passwordAccepted = that.keystore.isDerivedKeyCorrect(pwDerivedKey)
                //     if (err) {
                //       console.log(err)
                //       return
                //     }
                //     if (!passwordAccepted) {
                //       console.log('wrong password')
                //       that.$refs.pwdinfo.textContent = 'wrong password'
                //       return
                //     }
                //     that.needSetup = false
                //     that.mkProviderOpts()
                //     that.initWeb3()
                //     if (passwordAccepted) {
                //       this.$router.push('/app-browser')
                //     }
                //   })
                // } else {
                //   lightwallet.keystore.createVault({
                //     password: that.password,
                //     seedPhrase: that.seed,
                //     hdPathString: "m/44'/60'/0'/0"
                //   }, function (err, ks) {
                //     if (err) {
                //       console.log(err)
                //       return
                //     }
                //     that.keystore = ks
                //     localStorage.setItem('ks', ks.serialize())
                //     that.needSetup = false
                //     that.seed = that.seed.replace(/.*/, '\0')
                //     that.mkProviderOpts()
                //     that.initWeb3()
                //     that.$router.push('/app-browser')
                //   })
                // }

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 8]]);
      }));

      function savePassword() {
        return _ref.apply(this, arguments);
      }

      return savePassword;
    }(),
    copySeed: function copySeed() {
      try {
        var textArea = this.$refs.seed;
        textArea.select();
        document.execCommand('copy');
        this.copyButtonText = 'copied to clipboard';
      } catch (err) {
        console.log('err', err);
      }
    }
  },
  watch: {
    unlocked: function unlocked(newState, oldState) {
      if (newState) {
        this.$router.push({ name: 'app-browser' });
      }
    }
  }
});

/***/ }),

/***/ "rVSy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ae-button',
  props: {
    role: {
      type: String,
      default: 'standard'
    }
  },
  computed: {
    className: function className() {
      var defaultValue = 'ae-button';
      if (typeof this.role === 'string') {
        switch (this.role.trim()) {
          case 'primary':
            return defaultValue + ' _role_primary';
          case 'sub-primary':
            return defaultValue + ' _role_sub-primary';
          case 'standard':
          default:
            return defaultValue;
        }
      } else {
        return defaultValue;
      }
    }
  }
});

/***/ }),

/***/ "rXLz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aeIdentityAvatar_aeIdentityAvatar_vue__ = __webpack_require__("pQs9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aeIdentityInfo_aeIdentityInfo_vue__ = __webpack_require__("LMa3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_helper__ = __webpack_require__("j27a");



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ae-identity',
  components: {
    'ae-identity-avatar': __WEBPACK_IMPORTED_MODULE_0__aeIdentityAvatar_aeIdentityAvatar_vue__["a" /* default */],
    'ae-identity-info': __WEBPACK_IMPORTED_MODULE_1__aeIdentityInfo_aeIdentityInfo_vue__["a" /* default */]
  },
  data: function data() {
    return {};
  },
  props: {
    identity: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    },
    size: {
      type: String,
      default: 'small',
      validator: function validator(size) {
        return size === 'small' || size === 'big';
      }
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_helper__["a" /* default */]],
  computed: {
    collapsed: function collapsed() {
      return this.$store.state.identityCollapsed;
    },
    classObject: function classObject() {
      var classes = {
        'ae-identity': true,
        'collapsed': this.collapsed,
        '_active_yes': this.active,
        '_active_no': !this.active
      };
      classes['size_' + this.size] = true;
      return classes;
    }
  },
  watch: {},
  methods: {
    toggle: function toggle() {
      if (this.$store.state.appClass !== 'home') {
        this.$store.commit('identityCollapsed', !this.$store.state.identityCollapsed);
      }
    }
  }
});

/***/ }),

/***/ "sBsK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'IdentityInfo',
  props: ['identity']
});

/***/ }),

/***/ "seHR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "stM5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_QuickId_js__ = __webpack_require__("2xxs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d7f4330_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_QuickId_vue__ = __webpack_require__("e/1o");
function injectStyle (ssrContext) {
  __webpack_require__("xoRg")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4d7f4330"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_QuickId_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d7f4330_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_QuickId_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "t1L/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "uslO":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "3CJN",
	"./af.js": "3CJN",
	"./ar": "3MVc",
	"./ar-dz": "tkWw",
	"./ar-dz.js": "tkWw",
	"./ar-kw": "j8cJ",
	"./ar-kw.js": "j8cJ",
	"./ar-ly": "wPpW",
	"./ar-ly.js": "wPpW",
	"./ar-ma": "dURR",
	"./ar-ma.js": "dURR",
	"./ar-sa": "7OnE",
	"./ar-sa.js": "7OnE",
	"./ar-tn": "BEem",
	"./ar-tn.js": "BEem",
	"./ar.js": "3MVc",
	"./az": "eHwN",
	"./az.js": "eHwN",
	"./be": "3hfc",
	"./be.js": "3hfc",
	"./bg": "lOED",
	"./bg.js": "lOED",
	"./bm": "hng5",
	"./bm.js": "hng5",
	"./bn": "aM0x",
	"./bn.js": "aM0x",
	"./bo": "w2Hs",
	"./bo.js": "w2Hs",
	"./br": "OSsP",
	"./br.js": "OSsP",
	"./bs": "aqvp",
	"./bs.js": "aqvp",
	"./ca": "wIgY",
	"./ca.js": "wIgY",
	"./cs": "ssxj",
	"./cs.js": "ssxj",
	"./cv": "N3vo",
	"./cv.js": "N3vo",
	"./cy": "ZFGz",
	"./cy.js": "ZFGz",
	"./da": "YBA/",
	"./da.js": "YBA/",
	"./de": "DOkx",
	"./de-at": "8v14",
	"./de-at.js": "8v14",
	"./de-ch": "Frex",
	"./de-ch.js": "Frex",
	"./de.js": "DOkx",
	"./dv": "rIuo",
	"./dv.js": "rIuo",
	"./el": "CFqe",
	"./el.js": "CFqe",
	"./en-au": "Sjoy",
	"./en-au.js": "Sjoy",
	"./en-ca": "Tqun",
	"./en-ca.js": "Tqun",
	"./en-gb": "hPuz",
	"./en-gb.js": "hPuz",
	"./en-ie": "ALEw",
	"./en-ie.js": "ALEw",
	"./en-nz": "dyB6",
	"./en-nz.js": "dyB6",
	"./eo": "Nd3h",
	"./eo.js": "Nd3h",
	"./es": "LT9G",
	"./es-do": "7MHZ",
	"./es-do.js": "7MHZ",
	"./es-us": "INcR",
	"./es-us.js": "INcR",
	"./es.js": "LT9G",
	"./et": "XlWM",
	"./et.js": "XlWM",
	"./eu": "sqLM",
	"./eu.js": "sqLM",
	"./fa": "2pmY",
	"./fa.js": "2pmY",
	"./fi": "nS2h",
	"./fi.js": "nS2h",
	"./fo": "OVPi",
	"./fo.js": "OVPi",
	"./fr": "tzHd",
	"./fr-ca": "bXQP",
	"./fr-ca.js": "bXQP",
	"./fr-ch": "VK9h",
	"./fr-ch.js": "VK9h",
	"./fr.js": "tzHd",
	"./fy": "g7KF",
	"./fy.js": "g7KF",
	"./gd": "nLOz",
	"./gd.js": "nLOz",
	"./gl": "FuaP",
	"./gl.js": "FuaP",
	"./gom-latn": "+27R",
	"./gom-latn.js": "+27R",
	"./gu": "rtsW",
	"./gu.js": "rtsW",
	"./he": "Nzt2",
	"./he.js": "Nzt2",
	"./hi": "ETHv",
	"./hi.js": "ETHv",
	"./hr": "V4qH",
	"./hr.js": "V4qH",
	"./hu": "xne+",
	"./hu.js": "xne+",
	"./hy-am": "GrS7",
	"./hy-am.js": "GrS7",
	"./id": "yRTJ",
	"./id.js": "yRTJ",
	"./is": "upln",
	"./is.js": "upln",
	"./it": "FKXc",
	"./it.js": "FKXc",
	"./ja": "ORgI",
	"./ja.js": "ORgI",
	"./jv": "JwiF",
	"./jv.js": "JwiF",
	"./ka": "RnJI",
	"./ka.js": "RnJI",
	"./kk": "j+vx",
	"./kk.js": "j+vx",
	"./km": "5j66",
	"./km.js": "5j66",
	"./kn": "gEQe",
	"./kn.js": "gEQe",
	"./ko": "eBB/",
	"./ko.js": "eBB/",
	"./ky": "6cf8",
	"./ky.js": "6cf8",
	"./lb": "z3hR",
	"./lb.js": "z3hR",
	"./lo": "nE8X",
	"./lo.js": "nE8X",
	"./lt": "/6P1",
	"./lt.js": "/6P1",
	"./lv": "jxEH",
	"./lv.js": "jxEH",
	"./me": "svD2",
	"./me.js": "svD2",
	"./mi": "gEU3",
	"./mi.js": "gEU3",
	"./mk": "Ab7C",
	"./mk.js": "Ab7C",
	"./ml": "oo1B",
	"./ml.js": "oo1B",
	"./mr": "5vPg",
	"./mr.js": "5vPg",
	"./ms": "ooba",
	"./ms-my": "G++c",
	"./ms-my.js": "G++c",
	"./ms.js": "ooba",
	"./my": "F+2e",
	"./my.js": "F+2e",
	"./nb": "FlzV",
	"./nb.js": "FlzV",
	"./ne": "/mhn",
	"./ne.js": "/mhn",
	"./nl": "3K28",
	"./nl-be": "Bp2f",
	"./nl-be.js": "Bp2f",
	"./nl.js": "3K28",
	"./nn": "C7av",
	"./nn.js": "C7av",
	"./pa-in": "pfs9",
	"./pa-in.js": "pfs9",
	"./pl": "7LV+",
	"./pl.js": "7LV+",
	"./pt": "ZoSI",
	"./pt-br": "AoDM",
	"./pt-br.js": "AoDM",
	"./pt.js": "ZoSI",
	"./ro": "wT5f",
	"./ro.js": "wT5f",
	"./ru": "ulq9",
	"./ru.js": "ulq9",
	"./sd": "fW1y",
	"./sd.js": "fW1y",
	"./se": "5Omq",
	"./se.js": "5Omq",
	"./si": "Lgqo",
	"./si.js": "Lgqo",
	"./sk": "OUMt",
	"./sk.js": "OUMt",
	"./sl": "2s1U",
	"./sl.js": "2s1U",
	"./sq": "V0td",
	"./sq.js": "V0td",
	"./sr": "f4W3",
	"./sr-cyrl": "c1x4",
	"./sr-cyrl.js": "c1x4",
	"./sr.js": "f4W3",
	"./ss": "7Q8x",
	"./ss.js": "7Q8x",
	"./sv": "Fpqq",
	"./sv.js": "Fpqq",
	"./sw": "DSXN",
	"./sw.js": "DSXN",
	"./ta": "+7/x",
	"./ta.js": "+7/x",
	"./te": "Nlnz",
	"./te.js": "Nlnz",
	"./tet": "gUgh",
	"./tet.js": "gUgh",
	"./th": "XzD+",
	"./th.js": "XzD+",
	"./tl-ph": "3LKG",
	"./tl-ph.js": "3LKG",
	"./tlh": "m7yE",
	"./tlh.js": "m7yE",
	"./tr": "k+5o",
	"./tr.js": "k+5o",
	"./tzl": "iNtv",
	"./tzl.js": "iNtv",
	"./tzm": "FRPF",
	"./tzm-latn": "krPU",
	"./tzm-latn.js": "krPU",
	"./tzm.js": "FRPF",
	"./uk": "ntHu",
	"./uk.js": "ntHu",
	"./ur": "uSe8",
	"./ur.js": "uSe8",
	"./uz": "XU1s",
	"./uz-latn": "/bsm",
	"./uz-latn.js": "/bsm",
	"./uz.js": "XU1s",
	"./vi": "0X8Q",
	"./vi.js": "0X8Q",
	"./x-pseudo": "e/KL",
	"./x-pseudo.js": "e/KL",
	"./yo": "YXlc",
	"./yo.js": "YXlc",
	"./zh-cn": "Vz2w",
	"./zh-cn.js": "Vz2w",
	"./zh-hk": "ZUyn",
	"./zh-hk.js": "ZUyn",
	"./zh-tw": "BbgG",
	"./zh-tw.js": "BbgG"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "uslO";

/***/ }),

/***/ "wITO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wmMB":
/***/ (function(module, exports) {

module.exports = {"_args":[[{"raw":"elliptic@^6.0.0","scope":null,"escapedName":"elliptic","name":"elliptic","rawSpec":"^6.0.0","spec":">=6.0.0 <7.0.0","type":"range"},"/Users/philipp/dev/aeternity/aepp-identity/node_modules/browserify-sign"]],"_from":"elliptic@>=6.0.0 <7.0.0","_id":"elliptic@6.4.0","_inCache":true,"_location":"/browserify-sign/elliptic","_nodeVersion":"7.0.0","_npmOperationalInternal":{"host":"packages-18-east.internal.npmjs.com","tmp":"tmp/elliptic-6.4.0.tgz_1487798866428_0.30510620190761983"},"_npmUser":{"name":"indutny","email":"fedor@indutny.com"},"_npmVersion":"3.10.8","_phantomChildren":{},"_requested":{"raw":"elliptic@^6.0.0","scope":null,"escapedName":"elliptic","name":"elliptic","rawSpec":"^6.0.0","spec":">=6.0.0 <7.0.0","type":"range"},"_requiredBy":["/browserify-sign"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz","_shasum":"cac9af8762c85836187003c8dfe193e5e2eae5df","_shrinkwrap":null,"_spec":"elliptic@^6.0.0","_where":"/Users/philipp/dev/aeternity/aepp-identity/node_modules/browserify-sign","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},"description":"EC cryptography","devDependencies":{"brfs":"^1.4.3","coveralls":"^2.11.3","grunt":"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2","istanbul":"^0.4.2","jscs":"^2.9.0","jshint":"^2.6.0","mocha":"^2.1.0"},"directories":{},"dist":{"shasum":"cac9af8762c85836187003c8dfe193e5e2eae5df","tarball":"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz"},"files":["lib"],"gitHead":"6b0d2b76caae91471649c8e21f0b1d3ba0f96090","homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","maintainers":[{"name":"indutny","email":"fedor@indutny.com"}],"name":"elliptic","optionalDependencies":{},"readme":"ERROR: No README data found!","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","test":"npm run lint && npm run unit","unit":"istanbul test _mocha --reporter=spec test/index.js","version":"grunt dist && git add dist/"},"version":"6.4.0"}

/***/ }),

/***/ "xUQp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_aeButton_js__ = __webpack_require__("rVSy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_266919d7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_aeButton_vue__ = __webpack_require__("seHR");
function injectStyle (ssrContext) {
  __webpack_require__("CDNP")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-266919d7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_aeButton_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_266919d7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_aeButton_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "xa4f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Intro_js__ = __webpack_require__("QghM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_353c6898_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Intro_vue__ = __webpack_require__("Fo3U");
function injectStyle (ssrContext) {
  __webpack_require__("WVO+")
  __webpack_require__("t1L/")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-353c6898"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Intro_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_353c6898_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Intro_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "xoRg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.2b94b64ddf3a4c0e5cab.js.map