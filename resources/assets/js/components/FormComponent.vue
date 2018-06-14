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
export default {
    data() {
        return {
            body: ''
        }
    },
    methods: {
        saveTweet() {
            axios.post('/tweet/save', {body: this.body}).then(res => {
                console.log(res.data);
            }).catch(e => {
                console.log(e);
            })
        }
    }
}
</script>

<style>

</style>
