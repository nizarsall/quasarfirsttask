/* eslint-disable eqeqeq */
<template>
  <q-page class="flex flex-center">
     <q-card class="q-pa-md flex flex-top">
    <q-form
      @submit.prevent="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="username"
        label="username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        type="password"
        v-model="password"
        label="password : "
        :rules="[val => val && val.length >= 8 || 'Password needs to be at least 8 characters',
        val => val.search(/A-Z/i)<1|| 'please include at least one upper case letter'
        ]"
        />
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
      <div>if you don't have an account<q-btn color="primary" flat label="signup" @click="$router.push('/signup')"/> </div>
    </q-form>
    </q-card>

  </q-page>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    users () { return this.$store.state.localstorage.users }

  },
  methods: {
    onSubmit () {
      // eslint-disable-next-line eqeqeq
      const t = this.users.findIndex((user) => user.username == this.username && user.password == this.password)
      if (t >= 0) {
        this.$store.dispatch('localstorage/login', t)
      }
    }
  }

}
</script>
