export type OrderStatus = "Pending" | "Confirmed" | "Completed";
export type StockStatus = "Healthy" | "Low Stock" | "Expiring Soon" | "Expired";
export interface Product { id: string; name: string; price: number; description: string; emoji: string; recipeId?: string }
export interface Ingredient { name: string; amount: string }
export interface Recipe { id: string; name: string; productId: string; price: number; ingredients: Ingredient[] }
export interface InventoryBatch { id: string; quantity: number; expiry: string; status: "Healthy" | "Expiring Soon" | "Expired" }
export interface InventoryItem { id: string; name: string; quantity: number; unit: string; minimum: number; status: StockStatus; batches?: InventoryBatch[] }
export interface OrderItem { productId: string; name: string; quantity: number; unitPrice: number }
export interface Order { id: string; customer: string; items: OrderItem[]; total: number; payment: "Paid" | "Deposit" | "Unpaid"; status: OrderStatus; orderDate: string; requiredDate: string }
export interface RestockTask { id: string; item: string; current: string; required: string; reason: "Minimum Stock" | "Upcoming Order"; status: "Pending" | "Completed" }
export interface AppNotification { id: string; tone: "red" | "orange" | "yellow" | "blue"; message: string; detail: string }
export interface AnalyticsData { revenue: string; orders: string; average: string; trend: number[] }
export interface BusinessProfile { name: string; description: string; contact: string; category: string; hours: string; plan: "Free" }
export interface Plan { name: string; price: string; features: string[]; premium?: boolean }
export interface UsageLimits { orders: { used: number; limit: number }; recipes: { used: number; limit: number }; ingredients: { used: number; limit: number } }
