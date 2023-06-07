"use strict"

const { createApp } = Vue;

createApp({
    data() {
        return{
            message: '<h1>Hello world!!</h1>'
        }
    }
}).mount('#app');