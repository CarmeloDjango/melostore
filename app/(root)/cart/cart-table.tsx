"use client";

import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useTransition } from "react";

import { Cart } from "@/types";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";

import { ArrowRight, Loader, Minus, Plus } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

const CartTable = ({ cart }: { cart?: Cart }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <h1 className="py-4 font-bold text-2xl lg:text-3xl">Shopping Cart</h1>
      {!cart || cart.items.length === 0 ? (
        <div>
          Cart is empty.{" "}
          <Link href="/" className="hover:underline text-blue-500">
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5 bg-pink-100">
          <div className="overflow-x-auto md:col-span-3 bg-blue-100">Table</div>
        </div>
      )}
    </>
  );
};
export default CartTable;
