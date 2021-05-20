<template>
  <div class="w-full flex flex-col justify-center items-center p-4 space-y-4">
    <add-color :colorid="colors.length+1" @color-add="coloradd"></add-color>
    <h4 class="text-sm font-semibold">
      <span>Color List</span>
    </h4>
    <div v-for="(color, index) in colors" :key="color.colorid" :class="color.category=='Warm'?'border-red-600':'border-blue-600'" class="border-2">
      <div><b>Color Code :</b> {{ color.code }}</div>
      <div><b>Color Name :</b> {{ color.name }}</div>
      <button @click.prevent="deletecolor(color)" class="border-black border-2">delete</button>
    </div>
  </div>
</template>
<script>
  import AddColor from '../components/AddColor.vue'
  export default {
      components: {
        AddColor,
      },
      data() {
        return {
          colors:[{
            colorid:1,
            code:"#FF0000",
            name:"Red",
            category:"Warm"
            }]
        };
  },
  methods: {
    coloradd(color){
      this.colors.push(color)
    },
    deletecolor(color){
      if(confirm("Delete color " + color.name +" ?")){
        this.colors = this.colors.filter((c) => c.colorid != color.colorid)
      }
    }
  }
}
</script>