app.component("product-display", {
    template:
    `        <!-- 動態載入圖片url -->
    <img :src="image"/><br>
    
    <!-- if else -->
    <p v-if="inStock">In Stock</p>
    <p v-else>Out of Stock</p>

    <!-- compute -->
    <!-- Ex_1顯示字串 -->
    <!--
        說明: 
            title 的值是在 computed 裡的 title() 所回傳的
     -->
    <h1>{{title}}</h1>

     <!-- Ex_2 -->
     <ul>
        <li v-for="(item, index) in variants" :key="item.id" 
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor: item.color}">
            {{ item.color }}</li>
    </ul>
    `,
    data() {
        return {
            product: "Socks",
            brand: "Vue Mastery",
            selectVariant: 0,
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
        updateVariant(index){
            this.selectVariant =  index;
            console.log(index)
        }

    },
    computed:{
        title(){
            return this.brand + " " + this.product
        },
        image(){
            return this.variants[this.selectVariant].image
        },
        inStock(){
            if(this.variants[this.selectVariant].quantity>0){
                return true;
            }

            return false;
        }
    }
})