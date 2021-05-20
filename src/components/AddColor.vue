<template>
    <form @submit.prevent="submitForm">
        <div>Color# {{ colorid }}</div>
        <label for="code">Color Code</label>
        <br />
        <input id="code" v-model.trim="color.code" class="border-black border-2" />
        <br />
        <label for="name">Color Name</label>
        <br />
        <input id="name" v-model.trim="color.name" class="border-black border-2" />
        <br />
        <input type="radio" id="warm" value="Warm" v-model="color.category" name="category" />
        <label for="warm">Warm</label>
        <br />
        <input type="radio" id="cool" value="Cool" v-model="color.category" name="category" />
        <label for="cool">Cool</label>
        <br />
        <div v-show="invalid" class="text-red-600"> Please complete all information. </div>
        <button type="submit" class="border-black border-2">Add color</button>
        <br />
    </form>
</template>
<script>
export default {
    props: ["colorid"],
    data() {
        return {
            invalid:false,
            color: {
                code: "",
                name: "",
                category: ""
            }
        };
    },
    methods: {
        validate() {
           this.invalid =   this.color.code == '' || this.color.name == '' || this.color.category == '';
        },
        submitForm() {
            this.validate()
            if (!this.invalid) {
                this.$emit("color-add", {
                    colorid: this.colorid,
                    code: this.color.code,
                    name: this.color.name,
                    category: this.color.category
                });

            }
        }
    }
}
</script>
