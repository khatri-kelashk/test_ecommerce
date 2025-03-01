import { NextRequest } from "next/server";
import { products } from "@/app/product-data";

type Params = {
  id: string;
}

type ShoppingCart = Record <string, string[]>;

const carts: ShoppingCart = {
  "1": ["123","234"],
  "2": ["345", "456"],
  "3": ["234"]
}

export async function GET(request: NextRequest, {params}: {params: Params}) {
    const userID = params?.id;
    const productIDs = carts[userID];
    if (productIDs === undefined) {
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const cartProducts = productIDs.map(id => products.find(pd=> pd.id === id));
    if (!cartProducts) {
      return new Response("Cart Products not found!", {
        status: 404,
      });
    }

    return new Response(JSON.stringify(cartProducts), {
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