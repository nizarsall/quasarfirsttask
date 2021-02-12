<template>
<q-page class="flex flex-center">
<div class="flex flex-center q-pa-l" style="width:80%; min-height:800px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;" elvated>
 <q-card class="my-card" v-for="(rec,index) in recipes" :key="index" >
      <q-img
        :src="rec.img"
        basic
        style="width:100%;height:200px"
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          {{rec.name}}
        </div>
      </q-img>
       <q-card-actions>
        <q-btn flat color="dark" label="add to shoppinglist" icon="shopping_cart" @click="addtosh(index)"/>
        <q-btn flat color="primary" label="edit" @click="editrec(index)" />
        <q-btn flat color="primary" label="delete" @click="deleterec(index)"/>
        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded == index ? expanded = -1 : expanded=index "
        />
      </q-card-actions>
      <q-card-section>
       <q-slide-transition>
        <div v-show="expanded == index">
          <q-separator />
          <q-card-section class="text-subitle">
            {{ rec.desc }}
          </q-card-section>
          <q-card-section class="text-subitle">
            <p style="font-size:16px"><strong>ingrediants :</strong></p>
            <div v-for="(ing,index) in rec.ings" :key="index">{{ing.name}}({{ing.quantity}})</div>
          </q-card-section>
        </div>
      </q-slide-transition>
      </q-card-section>
    </q-card>
    </div>
</q-page>
</template>
<script>
export default {
  data () {
    return {
      expanded: null
    }
  },
  computed: {
    recipes () {
      return this.$store.state.recstore.recipes
    }
  },
  created () {
    console.log(this.recipes[1].img)
  },
  methods: {
    addtosh: function (r) {
      this.re = this.recipes[r]

      for (var i = 0; i < this.re.ings.length; i++) {
        this.$store.commit('recstore/addsh', this.re.ings[i])
      }
    },
    deleterec: function (n) {
      this.$store.commit('recstore/delrec', n)
      this.expanded = -1
    },
    editrec (n) {
      this.$router.push('/editRecipe/' + n)
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
  height: wrap-content
  margin: 50px
</style>
