import {Task} from "./Task";

export abstract class Store {

    abstract saveToLocalStorage(task: Task): void

    abstract getAllByLocalStorage(): Array<Task>


}

