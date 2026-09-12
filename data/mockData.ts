import { AnalyticsData, AppNotification, InventoryItem, Order, Product, Recipe, RestockTask } from "@/types";

export const products: Product[] = [
  { id: "cake", name: "Chocolate Cake", price: 45, description: "Moist cocoa sponge with chocolate ganache.", emoji: "🍫", recipeId: "r1" },
  { id: "cheesecake", name: "Burnt Cheesecake", price: 50, description: "Creamy caramelised Basque cheesecake.", emoji: "🍰", recipeId: "r2" },
  { id: "croissant", name: "Croissant", price: 8, description: "Buttery, flaky French pastry.", emoji: "🥐" },
  { id: "cookies", name: "Cookies", price: 15, description: "Chunky chocolate chip cookies.", emoji: "🍪", recipeId: "r3" },
  { id: "banana", name: "Banana Loaf", price: 18, description: "Tender banana loaf with a golden crust.", emoji: "🍌" }
];
export const recipes: Recipe[] = [
  { id: "r1", name: "Chocolate Cake", productId: "cake", price: 45, ingredients: [{ name: "Flour", amount: "500g" }, { name: "Sugar", amount: "300g" }, { name: "Eggs", amount: "4" }, { name: "Chocolate", amount: "200g" }] },
  { id: "r2", name: "Burnt Cheesecake", productId: "cheesecake", price: 50, ingredients: [{ name: "Cream Cheese", amount: "500g" }, { name: "Sugar", amount: "200g" }, { name: "Eggs", amount: "3" }] },
  { id: "r3", name: "Cookies", productId: "cookies", price: 15, ingredients: [{ name: "Flour", amount: "250g" }, { name: "Butter", amount: "150g" }, { name: "Chocolate", amount: "100g" }] }
];
export const inventory: InventoryItem[] = [
  { id: "flour", name: "Flour", quantity: 4, unit: "kg", minimum: 5, status: "Low Stock" },
  { id: "eggs", name: "Eggs", quantity: 20, unit: "eggs", minimum: 30, status: "Low Stock" },
  { id: "sugar", name: "Sugar", quantity: 8, unit: "kg", minimum: 5, status: "Healthy" },
  { id: "butter", name: "Butter", quantity: 3, unit: "kg", minimum: 2, status: "Healthy" },
  { id: "chocolate", name: "Chocolate", quantity: 2, unit: "kg", minimum: 3, status: "Low Stock" },
  { id: "milk", name: "Milk", quantity: 10, unit: "litres", minimum: 4, status: "Healthy" },
  { id: "cream-cheese", name: "Cream Cheese", quantity: 6, unit: "kg", minimum: 2, status: "Healthy" },
  { id: "bread", name: "Bread", quantity: 100, unit: "pieces", minimum: 20, status: "Expiring Soon", batches: [{ id: "b1", quantity: 80, expiry: "26 September 2026", status: "Expiring Soon" }, { id: "b2", quantity: 20, expiry: "28 September 2026", status: "Healthy" }] }
];
export const orders: Order[] = [
  { id: "1024", customer: "Aina", items: [{ productId: "cake", name: "Chocolate Cake", quantity: 10, unitPrice: 45 }], total: 450, payment: "Deposit", status: "Confirmed", orderDate: "12 September 2026", requiredDate: "18 September 2026" },
  { id: "1023", customer: "Sarah", items: [{ productId: "cookies", name: "Cookies", quantity: 5, unitPrice: 15 }], total: 75, payment: "Paid", status: "Completed", orderDate: "11 September 2026", requiredDate: "12 September 2026" },
  { id: "1022", customer: "Hana", items: [{ productId: "cheesecake", name: "Burnt Cheesecake", quantity: 2, unitPrice: 50 }], total: 100, payment: "Unpaid", status: "Pending", orderDate: "10 September 2026", requiredDate: "15 September 2026" }
];
export const restockTasks: RestockTask[] = [
  { id: "t1", item: "Eggs", current: "20 eggs", required: "40 eggs", reason: "Upcoming Order", status: "Pending" },
  { id: "t2", item: "Flour", current: "4 kg", required: "5 kg", reason: "Minimum Stock", status: "Pending" }
];
export const notifications: AppNotification[] = [
  { id: "n1", tone: "red", message: "Eggs may be insufficient for tomorrow's order.", detail: "Upcoming order shortage" },
  { id: "n2", tone: "orange", message: "Flour has reached your minimum stock level.", detail: "Restock soon" },
  { id: "n3", tone: "yellow", message: "80 bread loaves expire in 2 days.", detail: "Check batch 1" },
  { id: "n4", tone: "blue", message: "Chocolate Cake sales increased this week.", detail: "View business insight" }
];
export const analytics: Record<string, AnalyticsData> = {
  "Today": { revenue: "RM450", orders: "18", average: "RM25.00", trend: [35, 50, 42, 62, 80, 100, 55] },
  "7 Days": { revenue: "RM4,850", orders: "112", average: "RM43.30", trend: [450, 620, 510, 780, 920, 1020, 550] },
  "30 Days": { revenue: "RM16,240", orders: "382", average: "RM42.51", trend: [1300, 2300, 1920, 2600, 3140, 3200, 1780] },
  "This Month": { revenue: "RM16,240", orders: "382", average: "RM42.51", trend: [1300, 2300, 1920, 2600, 3140, 3200, 1780] },
  "This Year": { revenue: "RM128,450", orders: "3,102", average: "RM41.41", trend: [9000, 14500, 15100, 18300, 21400, 25700, 24450] },
  "Custom": { revenue: "RM2,180", orders: "51", average: "RM42.75", trend: [200, 310, 240, 400, 390, 410, 230] }
};
export const businessProfile = { name: "Sarah's Bakery", description: "Homemade cakes and bakes, made with love.", contact: "+60 11-5555 0188", category: "Bakery / F&B", hours: "9:00 AM – 6:00 PM", plan: "Free" as const };
export const usageLimits = { orders: { used: 24, limit: 30 }, recipes: { used: 2, limit: 3 }, ingredients: { used: 12, limit: 15 } };
