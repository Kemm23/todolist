const STORAGE_KEY = "todos";

export default {
  get() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  },
  set(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};
