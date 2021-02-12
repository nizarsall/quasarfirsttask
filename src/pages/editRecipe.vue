<template>
  <q-page class="flex flex-center">
     <q-card class="q-pa-md flex flex-center" style="width:700px">
    <q-form
      @submit.prevent="onSubmit"
      class="q-gutter-md"
    >
      <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="Restricted to images"
        multiple
        accept=".jpg, image/*"
        @change="selectimg"
      />
      <q-input
        filled
        v-model="recipe.name"
        label="Recipe name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please add name']"
      />
     <q-input
      v-model="recipe.desc"
      filled
      label="Description"
      type="textarea"
    />
    <p><strong>ingrediants :</strong> </p>
    <q-list>
        <q-item v-for="(ing,index) in recipe.ings" :key="index">
            <q-item-section>
             <div class="flex flex-center">
                {{ing.name}}
                ({{ing.quantity}})
               <div class="q-gutter-xsm q-pa-sm">
                 <q-btn round color="primary" borderd label="-" @click="reming(index)"/>
                </div>
             </div>
            </q-item-section>
        </q-item>
    </q-list>
    <div class="flex">
    <q-input
        filled
        v-model="ing.name"
        label="Recipe name"
        style="width:200px; margin: 5px;"
      />
      <q-input
        filled
        v-model="ing.quantity"
        label="quantity"
        style="width:100px"
        type='number'
      />
      <div class="q-gutter-sm q-pa-md">
      <q-btn round label="+"  color="secondary" style="margin:5px" @click="adding"/>
      </div>
      </div>
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>
    </q-card>

  </q-page>
</template>
<script>
export default {
  props: ['id'],
  data () {
    return {
      ing: {
        name: '',
        quantity: 0
      }
    }
  },
  methods: {
    onSubmit () {
      this.$store.commit('recstore/edrec', this.recipe)
      this.$router.push('/recipes')
    },
    reming: function (n) {
      this.recipe.ings.splice(n, 1)
    },
    adding: function () {
      // eslint-disable-next-line eqeqeq
      if (this.ing.name != '' && this.ing.quantity > 0) {
        const k = { name: this.ing.name, quantity: this.ing.quantity }
        this.recipe.ings.push(k)
        this.ing.name = ''
        this.ing.quantity = 0
      }
    },
    selectimg: function (event) {
      const img = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(img)
      reader.onload = event => { this.recipe.img = event.target.result }
    }
  },
  computed: {
    recipes () {
      return this.$store.state.recstore.recipes
    },
    recipe () {
      return {
        name: this.recipes[this.id].name,
        desc: this.recipes[this.id].desc,
        ings: this.recipes[this.id].ings,
        reindex: this.id

      }
    }
  }

}
</script>
