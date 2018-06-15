<template>
    <div class="col-md-4">
        <form @submit.prevent="saveTweet">
            <div class="form-group">
                <textarea
                class="form-control"
                cols="8" rows="8"
                v-model="body"
                required></textarea>
            </div><!--/.form-group-->
            <div class="form-group">
                <button class="btn btn-primary">Tweet</button>
            </div><!--/.form-group-->
        </form>
    </div><!--/.col-md-4-->
</template>

<script>
import Event from '../event.js';
export default {
    data() {
        return {
            body: '',
            postData: {}
        }
    },
    methods: {
        saveTweet() {
            axios.post('tweet/save', {body: this.body}).then(res => {
                this.postData = res.data;
                Event.$emit('added_tweet', this.postData);
            }).catch(e => {
                console.log(e);
            })
            this.body = '';
        }
    }
}
</script>

<style>

</style>
