"use client";

import { Check, MoreVertical, Star } from "lucide-react";
import Image from "next/image";

import cooper from "@/app/assets/mine-cooper.jpeg";
import { useEffect, useState } from "react";
import { MobileTable } from "./mobile-table";
import { DesktopTable } from "./desktop-table";

export function Table() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  if (!isDesktop) {
    return (
      <div className="block">
        <MobileTable />
        <MobileTable />
        <MobileTable />
        <MobileTable />
        <MobileTable />
        <MobileTable />
      </div>
    );
  }

  return <DesktopTable />;
}
