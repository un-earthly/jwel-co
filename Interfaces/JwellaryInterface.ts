export interface Jewelery {
    jewl: {
        title: string,
        desc: string,
        price: number,
        img: string,
        quantity: string,
        category: string,
        rating: { rate: number, count: number },
        id: string | number
    }
}