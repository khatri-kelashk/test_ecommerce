import { NextRequest } from "next/server";
// import { products } from "@/app/product-data";
import { connectToDb } from "../../db";

type Params = {
  id: string;
}

export async function GET(request: NextRequest, {params}: {params: Params}) {
    const productID = params?.id;
    // const productStatic = products.find(pd => pd.id === productID);
    const { db } = await connectToDb();
    const product = await db.collection("products").findOne({id: productID});

    if (!product) {
      return new Response("Product not found!", {
        status: 404,
      });
    }

    return new Response(JSON.stringify(product), {
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