export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
export const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
  "https://jsonplaceholder.typicode.com/todos/11",
  "https://jsonplaceholder.typicode.com/todos/12",
  "https://jsonplaceholder.typicode.com/todos/13",
];

export const fetchMock = (url: any) => {
  return fetch(url)
    .then(response => response.json())
    .then(json => json)
}
