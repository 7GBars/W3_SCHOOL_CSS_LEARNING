import {type CompanyData, SiteColor, TestStatus, TestType} from "../../models-view";

export const dashBoardData: CompanyData = {
  sites: [
    { id: 1, url: "https://market.company.com", color: SiteColor.MARKET },
    { id: 2, url: "https://www.delivery.company.com", color: SiteColor.DELIVERY },
    { id: 3, url: "http://games.company.com", color: SiteColor.GAMES }
  ],
  issues: [
    { id: 1, name: "Prototype of the new map", type: TestType.CLASSIC, status: TestStatus.PAUSED, siteId: 2 },
    { id: 2, name: "Dark theme test", type: TestType.MVT, status: TestStatus.DRAFT, siteId: 3 },
    { id: 3, name: "New Year's Sale", type: TestType.MVT, status: TestStatus.STOPPED, siteId: 1 },
    { id: 4, name: "Order basket redesing", type: TestType.CLASSIC, status: TestStatus.ONLINE, siteId: 1 },
    { id: 5, name: "Spring promotion", type: TestType.SERVER_SIDE, status: TestStatus.DRAFT, siteId: 2 },
    { id: 6, name: "Prototype of a new header", type: TestType.SERVER_SIDE, status: TestStatus.ONLINE, siteId: 3 },
    { id: 7, name: "New Year's Sale Copy 1", type: TestType.MVT, status: TestStatus.DRAFT, siteId: 1 }
  ]
};