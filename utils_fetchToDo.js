export const fetchTodo = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`); //No longer Hard coded
    const data = await response.json();
    return data;
};
//# sourceMappingURL=utils_fetchToDo.js.map