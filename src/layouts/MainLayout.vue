<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered>
      <q-toolbar>
        <q-toolbar-title>
          foodo
        </q-toolbar-title>
        <q-btn flat dense aria-label="login" @click="$router.push('/login')">login</q-btn>
      </q-toolbar>
      <q-tabs align="left">
        <q-route-tab to="/recipes" label="recipes" />
        <q-route-tab to="/addRecipe" label="Add recipe" />
      </q-tabs>
    </q-header>
    <q-page-container>
          <q-btn-dropdown color="primary" label="shopping cart" icon="shopping_cart" style="position:fixed; top: 15%; left: 85%; z-index:3">
      <q-list>
        <q-item v-for="(item,index) in shopinglist" :key="item.name">
          <q-item-section>
            <q-item-label>{{item.name}}</q-item-label>
            <q-input type="number" :value="item.quantity" v-model.number="item.quantity" style="width:70px;font-size:9px;"  @focus="recin=index"/>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  data () {
    return {
      recin: 0,
      q: null
    }
  },
  computed: {
    shopinglist () {
      return this.$store.state.recstore.shopinglist
    }
  },
  watch: {
    shopinglist (newval) {
      this.$store.commit('recstore/updatelist', { in: this.recin, n: newval[this.recin].quantity })
    }
  }
}
</script>
