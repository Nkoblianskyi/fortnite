import axios from 'axios';

// Приклад отримання даних з API
export const cosmetics = async () => {
    try {
        const response = await axios.get('https://fortnite-api.com/v2/cosmetics/br/new');
        console.log(response.data);
    } catch (error) {
        console.error('Помилка отримання даних:', error);
    }
};

export const cosmeticsId = async () => {
    try {
        const response = await axios.get('https://fortnite-api.com/v2/cosmetics/br/{cosmetic-id}');
        console.log(response.data);
    } catch (error) {
        console.error('Помилка отримання даних:', error);
    }
};

export const cosmeticsSearch = async () => {
    try {
        const response = await axios.get('https://fortnite-api.com/v2/cosmetics/br/search');
        console.log(response.data);
    } catch (error) {
        console.error('Помилка отримання даних:', error);
    }
};