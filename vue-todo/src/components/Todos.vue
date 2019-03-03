<template>
  <div class="border">
    <AddTodo @addTodo="addTodo"/>
    <TodoList
      :todos="todos"
      @removeTodo="removeTodo"
      @update="update"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      todos: []
    }
  },
  components: {
    TodoList: () => import('./TodoList'),
    AddTodo: () => import('./AddTodo')
  },
  methods: {
    addTodo (todo) {
      const id = Math.floor(Math.random() * Date.now())
      this.todos.push({
        id,
        content: todo
      })
    },
    removeTodo (id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    update (todo) {
      this.todos = this.todos.map(el => {
        if (el.id === todo.id) el.content = todo.content
        return el
      })
    }
  }
}
</script>

<style scoped>

</style>
