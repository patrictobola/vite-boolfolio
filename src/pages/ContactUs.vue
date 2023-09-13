<script>
import axios from 'axios';

export default {
    data: () => ({
        form: {
            email: '',
            subject: '',
            content: '',
        }
    }),
    methods: {
        sendMail() {
            const endpoint = 'http://127.0.0.1:8000/api/contact_us';
            axios.post(endpoint, this.form).then(() => { })
        }
    }
}

</script>
<template>
    <div class="container h-100">
        <div class="text-center align-self-start">
            <h1>Contact us</h1>
        </div>
        <div class="d-flex h-75 justify-content-center align-items-center">
            <form @submit.prevent="sendMail" class="w-100">
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="form.email"
                        placeholder="Insert your email here">
                </div>
                <div class="form-group">
                    <label for="subject">Subject:</label>
                    <input type="text" class="form-control" id="subject" v-model="form.subject"
                        placeholder="Insert something here">
                </div>
                <div class="form-group">
                    <label for="content">Write what you wish 😁</label>
                    <textarea class="form-control" id="content" rows="3" v-model="form.content"></textarea>
                </div>
                <button class="btn btn-primary mt-2">Send mail</button>
            </form>
        </div>
    </div>
</template>
<style></style>