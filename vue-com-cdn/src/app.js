const myNameApp= {
    data(){
        return{
            name: "Julia",
            age: "22"
        }
    }
}

Vue.createApp(myNameApp).mount("#app")