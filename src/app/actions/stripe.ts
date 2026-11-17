"use server";

import { getStripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function createCheckoutSession(priceId: string) {
  const stripe = getStripe();
  const headerList = await headers();
  const origin = headerList.get("origin");

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${origin}/governance?success=true`,
    cancel_url: `${origin}/governance?canceled=true`,
  });

  if (session.url) {
    redirect(session.url);
  }
}

