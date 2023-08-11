import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const SheetComponent = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AiOutlineMenu className="text-xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <Link href="/">Home</Link>
        <Link href="/">About us</Link>
        <Link href="/">Values</Link>
        <Link href="/">Contact</Link>
      </SheetContent>
    </Sheet>
  );
};

export default SheetComponent;
