"use strict"

const { createApp } = Vue;

createApp({
    data() {
        return{
            message: '<h1>Hello world!!</h1>',
            image: 'https://picsum.photos/200/300'
        }
    }
}).mount('#app');