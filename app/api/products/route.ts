import { products } from "@/app/product-data";

export async function GET() {
    return new Response(JSON.stringify(products), {
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