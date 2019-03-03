<template>
  <div class="wapper">
    <template
      v-for="todo in todos"
    >
      <TodoListItem
        :key="todo.id"
        :todo="todo"
        @removeTodo="$emit('removeTodo', $event)"
        @update="$emit('update', $event)"
      />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  components: {
    TodoListItem: () => import('./TodoListItem')
  }
}
</script>

<style scoped>

</style>
