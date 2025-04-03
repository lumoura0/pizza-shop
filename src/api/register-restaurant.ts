import { api } from '@/lib/axios';

export interface RegisterRestaurantBody {
    restaurantName: string;
    managerName: string;
    email: string
    phone: string;
}
export async function registerRestaurant({
    email,
    phone,
    restaurantName,
    managerName,
}: RegisterRestaurantBody) {
    await api.post('/restaurants', {
        email,
        phone,
        restaurantName,
        managerName,
    })

}