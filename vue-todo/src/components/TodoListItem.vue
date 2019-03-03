<template>
  <div class="d-flex flex-row justify-content-around bd-highlight shadow-sm pt-2 rounded">
    <div class="input-group p-2 ml-2">
      <input type="text"  class="form-control text-danger"
        v-model="todoInput"
        @dblclick="doEdit"
        @keyup.enter="update"
        :readonly="!edit"
      >
    </div>
    <button type="button" class="close ml-auto" aria-label="Close" @click="removeTodo">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data (vm) {
    return {
      todoInput: vm.todo.content,
      edit: false
    }
  },
  methods: {
    removeTodo () {
      this.$emit('removeTodo', this.todo.id)
    },
    doEdit () {
      this.edit = true
    },
    update () {
      this.$emit('update', {
        id: this.todo.id,
        content: this.todoInput
      })
      this.edit = false
    }
  }
}
</script>

<style scoped>

</style>
