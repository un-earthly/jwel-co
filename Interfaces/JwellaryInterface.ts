export interface Jewelery {
    jewl: {
        title: string,
        description: string,
        price: number,
        image: string,
        quantity: string,
        category: string,
        rating: { rate: number, count: number },
        id: string | number
    }
}