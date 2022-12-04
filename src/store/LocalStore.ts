import { Store } from "./Sotre";
import { Task } from "./Task";
import { Constant } from "./Constant"

/**
 * 存储在本地
 */
export class LocalStore extends Store {

    saveToLocalStorage(tasks: Array<Task>) {
        localStorage.setItem(Constant.STORAGE_KEY, JSON.stringify(tasks))
    }

    getAllByLocalStorage(): Array<Task> {
        try {
            return JSON.parse(localStorage.getItem(Constant.STORAGE_KEY) || '[]')
        } catch (err) {
            return [];
        }
    }

}
