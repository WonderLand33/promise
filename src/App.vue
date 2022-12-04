<script setup lang="ts">
import {reactive, ref, computed, watch} from 'vue'
import {LocalStore} from "./store/LocalStore"


import "7.css/dist/7.css";

// 实例化抽象类
let localStore = new LocalStore()

// 定义响应式变量
let newTodo = ref<string>('')
let editedTodo = ref<string>('')
let beforeEditCache = ref<string>('')
let visibility = ref<string>('')

let todo: any = reactive({
  list: localStore.getAllByLocalStorage()
})


// 定义计算属性
const filteredTodos = computed(() => {
  if (visibility.value === 'active') {
    return todo.list.filter((todo: any) => !todo.completed)
  } else if (visibility.value === 'completed') {
    return todo.list.filter((todo: any) => todo.completed)
  } else {
    return todo.list
  }
})

// 定义 watch
watch(
    () => todo.list,
    (newValue, oldValue) => {
      console.log(todo.list)
    },
    {deep: true}
)

// 定义 methods
const addTodo = () => {
  console.log(newTodo)
  console.log(newTodo.value)
  if (!newTodo.value) {
    return
  }
  todo.list.unshift({
    title: newTodo.value,
    completed: false
  })
  newTodo.value = ''
}


const removeTodo = (todo: any) => {
  const index = todo.list.indexOf(todo)
  todo.list.splice(index, 1)
}

const editTodo = (todo: any) => {
  editedTodo.value = todo
  beforeEditCache.value = todo.title
}

const doneEdit = (todo: any) => {
  if (!editedTodo.value) {
    return;
  }
  editedTodo.value = '';
  todo.title = todo.title.trim()
  if (!todo.title) {
    removeTodo(todo)
  }
}

const cancelEdit = (todo: any) => {
  if (editedTodo.value) {
    todo.title = beforeEditCache.value
    editedTodo.value = ''
  }
}

const removeCompleted = () => {
  todo.list = todo.list.filter((todo: any) => !todo.completed)
}


</script>

<template>
  <div class="container">
    <div class="field-row-stacked">
      <label for="text27">请输入待办事项:</label>
      <input id="text27" type="text" :value="newTodo" autofocus="" @keyup.enter="addTodo"/>
    </div>

  </div>
</template>


<style scoped>

</style>
