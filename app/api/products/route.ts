// import { products } from "@/app/product-data";
import { connectToDb } from "../db";

export async function GET() {
  // const productStatic =  JSON.stringify(products);
  const { db } = await connectToDb();
  const productsDynamic = await db.collection("products").find({}).toArray();
    return new Response(JSON.stringify(productsDynamic), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  
  export async function POST() {
    return new Response('Thank you for posting to this handler', {
      status: 200,
    })
  }