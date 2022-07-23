<template>
    <div class="global-container">
        <div class="card login-form border border-primary">
        <div class="card-body">
            <h3 class="card-title text-center">Login Form</h3>
            <div class="card-text">

                <div v-if=" userStore.state.error != '' " class="alert alert-danger alert-dismissible fade show" role="alert">{{ userStore.state.error }}</div>

                <form class="text-left" @submit.prevent="onSubmit">
                    <!-- to error: add class "has-danger" -->
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input v-model="form.username" type="text" class="form-control form-control-sm" id="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="form.password" type="password" class="form-control form-control-sm" id="password" required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Log in</button>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>
<script lang="ts">
import { defineComponent,reactive } from 'vue'

import userStore from '@/stores/user'
export default defineComponent({
  setup() {
    const form = reactive({
    username: '',
    password: ''
    })

    const onSubmit = () => {
    userStore.login(form.username, form.password)
    form.username = ''
    form.password = ''
    }

    return { form, userStore, onSubmit }
  }
})
</script>

<style scoped>
.global-container{
	height:100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

form{
	padding-top: 10px;
	font-size: 14px;
	margin-top: 30px;
}

.card-title{ font-weight:300; }

.btn{
	font-size: 14px;
	margin-top:20px;
}


.login-form{ 
	width:330px;
	margin:20px;
}

.alert{
	margin-bottom:-30px;
	font-size: 13px;
	margin-top:20px;
}
</style>