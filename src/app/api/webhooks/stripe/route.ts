import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    const customerId = session.customer as string;
    const userEmail = session.customer_details?.email;

    console.log(`🔔 Resonance Synchronized: Payment received from ${userEmail}`);
    
    // Here you would typically update your database to grant access
    // e.g., await db.user.update({ where: { email: userEmail }, data: { role: 'SOVEREIGN' } })
  }

  return new NextResponse(null, { status: 200 });
}
