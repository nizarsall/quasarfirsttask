<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md flex flex-center">
    <q-form
      @submit.prevent="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="user.username"
        label="username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        type="email"
        v-model="user.email"
        label="Email: "
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
       <q-input
        filled
        type="password"
        v-model="user.password"
        label="password : "
        :rules="[val => val && val.length >= 8 || 'Password needs to be at least 8 characters',
        val => val.search(/A-Z/i)<1|| 'please include at least one upper case letter'
        ]"
        />
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>
    </q-card>
  </q-page>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  name: 'signup',
  data () {
    return {
      user: {
        username: '',
        email: '',
        password: ''

      }
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('localstorage/signup', this.user)
      this.$router.push('/login')
    }

  }
}
</script>
