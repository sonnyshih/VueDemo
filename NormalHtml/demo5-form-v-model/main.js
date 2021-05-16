const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods:{
        updateCart(id, temp){
            this.cart.push(id)
            console.log(temp)
        }
    }
});