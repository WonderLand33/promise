import {Store} from "./Sotre";
import {Task} from "./Task";
import {Constant} from "./Constant"

export class LocalStore extends Store {

    saveToLocalStorage(task: Task) {
        localStorage.setItem(Constant.STORAGE_KEY, JSON.stringify(task))
    }

    getAllByLocalStorage() {
        try {
            return JSON.parse(localStorage.getItem(Constant.STORAGE_KEY) || '[]')
        } catch (err) {
            return [];
        }
    }

}
