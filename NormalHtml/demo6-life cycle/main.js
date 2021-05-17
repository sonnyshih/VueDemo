

const app = Vue.createApp({
    beforeCreate() {
        console.log("before create")
    },
    created() {
        console.log("created")
    },
    beforeMount() {
        console.log("before Mount")
    },
    mounted() {
        console.log("Mounted")
    },
    data() {
        return {
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