
require('./bootstrap');

window.Vue = require('vue');

Vue.component('form-component', require('./components/FormComponent.vue'));

const app = new Vue({
    el: '#app'
});
