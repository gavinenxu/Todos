<template>
  <div class="p-3">
    <label for="todo" class="text-info mr-3">Add Todo</label>
    <div class="input-group mb-3">
      <input id="todo" v-model.lazy="todo" @keyup.enter="addTodo" type="text" class="form-control" placeholder="Add todo...">
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo () {
      this.$emit('addTodo', this.todo)
      this.todo = ''
    }
  }
}
</script>

<style scoped>

</style>
