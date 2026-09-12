import { analytics, businessProfile, inventory, notifications, orders, products, recipes } from "@/data/mockData";
export const getProducts = () => products;
export const getInventory = () => inventory;
export const getOrders = () => orders;
export const getRecipes = () => recipes;
export const getAnalytics = (period: string) => analytics[period] ?? analytics["7 Days"];
export const getBusinessProfile = () => businessProfile;
export const getNotifications = () => notifications;
