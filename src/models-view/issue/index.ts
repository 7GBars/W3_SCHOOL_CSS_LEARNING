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
  id: ESiteId;
  url: string;
  color: ESiteColor;
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

export enum ESiteColor {
  MARKET = "blue",
  DELIVERY = "green",
  GAMES = "red"
}
export enum ESiteId {
  MARKET = 1,
  DELIVERY = 2,
  GAMES = 3
}
export enum EStatusColors {
  PAUSED = "YELLOW",
  DRAFT = "GRAY",
  STOPPED = "RED",
  ONLINE = "GREEN"
}
export const SITE_COLORS: { [key in ESiteId]: ESiteColor } = {
  [ESiteId.MARKET]: ESiteColor.MARKET,
  [ESiteId.DELIVERY]: ESiteColor.DELIVERY,
  [ESiteId.GAMES]: ESiteColor.GAMES,
} // todo @bars - подумать куда вынести из models-view

export const STATUS_COLORS: {[key in TestStatus ]: EStatusColors} = {
  [TestStatus.DRAFT]: EStatusColors.DRAFT,
  [TestStatus.ONLINE]: EStatusColors.ONLINE,
  [TestStatus.PAUSED]: EStatusColors.PAUSED,
  [TestStatus.STOPPED]: EStatusColors.STOPPED,
}