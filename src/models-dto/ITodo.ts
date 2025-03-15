export interface ITodo {
  id: string; // Уникальный идентификатор задачи (GUID)
  title: string; // Название задачи
  description?: string; // Описание задачи (необязательное)
  status: EStatus; // Статус задачи
  createdAt: Date; // Дата создания задачи
  completedAt?: Date; // Дата завершения задачи (необязательное)
  userId: string; // Идентификатор владельца задачи (GUID)
}

export enum EStatus {
  CREATED = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED"
}
export interface ITodoList {
  id: string; // Уникальный идентификатор списка задач (GUID)
  name: string; // Название списка задач
  todos: ITodo[]; // Список задач
  userId: string; // Идентификатор владельца списка задач (GUID)
  createdAt: Date; // Дата создания списка задач
}
