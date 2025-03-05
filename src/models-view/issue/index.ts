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
export interface Site {
  id: SiteId;
  url: string;
  color: SiteColor;
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

export enum SiteColor {
  MARKET = "blue",
  DELIVERY = "green",
  GAMES = "red"
}
export enum SiteId {
  MARKET = 1,
  DELIVERY = 2,
  GAMES = 3
}