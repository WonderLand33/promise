<script setup lang="ts">
import { reactive, ref, toRaw, computed, watch, onMounted } from 'vue'
import { LocalStore } from "./store/LocalStore"

import "7.css/dist/7.css";

// 实例化抽象类
let localStore = new LocalStore()

// 定义响应式变量
let newTodo = ref<string>('')
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

const completedCount = computed(() => {
  return todo.list.filter((todo: any) => todo.completed).length
})

// 定义 watch
watch(
  () => todo.list,
  (newValue, oldValue) => {
    console.log('change...')
    console.log(toRaw(todo.list))
    localStore.saveToLocalStorage(toRaw(todo.list))
  },
  { deep: true }
)

// 定义 Directive Hooks
const vFocus = {
  mounted: (el): any => el.focus()
}

onMounted(() => {

})

// 定义 methods
const addTodo = () => {
  if (!newTodo.value) {
    return
  }
  todo.list.unshift({
    title: newTodo.value,
    completed: false
  })
  newTodo.value = ''
}

const removeTodo = (index: number) => {
  console.log(index);
  todo.list.splice(index, 1)
}

const removeCompleted = () => {
  todo.list = todo.list.filter((todo: any) => !todo.completed)
}

</script>

<template>
  <div class="main">
    <div class="container">
      <div class="field-row-stacked">
        <!-- <label for="text27">ToDo List</label> -->
        <input id="text27" type="text" placeholder="请输入待办事项" ref="todoInput" v-focus v-model.trim="newTodo"
          @keyup.enter="addTodo" />
      </div>
      <div class="list">
        <div class="list-item" v-for="(todo, index) in filteredTodos" :key="'todo-' + index">
          <input type="checkbox" v-model="todo.completed" :id="'todo-' + index">
          <label :for="'todo-' + index"><span :class="{ 'completed-text': todo.completed }">{{ todo.title }}</span>
            <a href="#" class="remove-btn" @click="removeTodo(index)">x</a>
          </label>
        </div>
      </div>

    </div>
    <footer>
      <div class="status-bar">
        <p class="status-bar-field">Total: {{ todo.list.length }}</p>
        <p class="status-bar-field">completed: {{ completedCount }}</p>
        <p class="status-bar-field">progress of: {{ (completedCount / todo.list.length * 100).toFixed(2) }}%</p>
      </div>
    </footer>


  </div>
</template>


<style scoped>
.container {
  padding: 10px;
}

.container .list {
  padding: 10px 10px;
}

.container .list .list-item {
  padding: 2px 0;
}

.container .list .list-item .remove-btn {
  color: brown;
  padding: 0 10px;
  font-size: 14px;
}

.container .list .list-item .completed-text {
  color: gray;
  text-decoration: line-through;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}

footer .status-bar {
  /* border-top: 1px solid #8e8f8f; */
  border-top: 1px solid rgba(0, 0, 0, .7);
  margin: 0;
}
</style>
