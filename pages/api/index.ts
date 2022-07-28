import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = `mongodb+srv://${process.env.mongo_admin}:${process.env.mongo_pass}@cluster0.d7awh.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



  async function run() {

    try {
      client.connect()
      const jwellariesDB = client.db("jwellariesDB").collection("jewelery");
      const data = [
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
        {
          img: "https://www.aarong.com/media/catalog/product/1/0/1050000008362.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=667&width=500&canvas=500:667",
          price: 590.48,
          desc: "Black stone studded brass earrings.",
          rating: { rate: 4, count: 100 },
          title: "Black Stone Brass Earrings",
          category: "ear rings",
        },
      ]
      const result = await jwellariesDB.find().toArray();
      res.json({ data: result })
    } finally {
    }
  }
  run()




}
