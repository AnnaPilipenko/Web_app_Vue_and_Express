<template>
     <div>
         <h1>Test Page</h1>

         <input
            type="text"
            name="param"
            placeholder="ping parameter"
            v-model="param"
         />
         <button
            @click="ping">
         Ping server
         </button>
        <h2 v-text="response">Server response</h2>
     </div>
</template>

<script>
import TestService from '@/services/TestService';
export default {
    data () {
        return {
            param: 'hello',
            response: 'Server response'
        };
    },
    watch: {
        param (value) {
            console.log('param has changed:', value);
        }
    },
    methods: {
        async ping () {
            console.log('ping button was clicked', this.param);
            const response = await TestService.ping(this.param);
            console.log('response data', response);
            this.response = response.data;
        }
    }
};
</script>

<style scoped>
</style>
