const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: "Socks",
            brand: "Vue Mastery",
            selectVariant: 0,
            imagePath: "./assets/images/socks_green.jpg",
            urlPath: "https://wwww.google.com",
            inStock: false,
            inventory: 11,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                {id: 2234, color: "green", image:"./assets/images/socks_green.jpg", quantity:50 },
                {id: 2235, color: "blue", image:"./assets/images/socks_blue.jpg", quantity:0}
            ]
        }
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            this.cart -=1
        },
        updateImage(variantImage){
            this.imagePath = variantImage
        }

    }
});
