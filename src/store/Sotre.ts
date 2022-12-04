import { Task } from "./Task";

/**
 * 数据存储抽象类
 */
export abstract class Store {

    abstract saveToLocalStorage(tasks: Array<Task>): void

    abstract getAllByLocalStorage(): Array<Task>


}

