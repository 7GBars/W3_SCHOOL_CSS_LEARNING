// Определяем перечисления для типов и статусов
export enum TestType {
  CLASSIC = "CLASSIC",
  MVT = "MVT",
  SERVER_SIDE = "SERVER_SIDE"
}

export enum TestStatus {
  PAUSED = "PAUSED",
  DRAFT = "DRAFT",
  STOPPED = "STOPPED",
  ONLINE = "ONLINE"
}

// Определяем типы для объектов Site и test
interface Site {
  id: number;
  url: string;
}

export interface Issue {
  id: number;
  name: string;
  type: TestType;
  status: TestStatus;
  siteId: number;
}

// Определяем тип для всего объекта
export interface CompanyData {
  sites: Site[];
  issues: Issue[];
}
