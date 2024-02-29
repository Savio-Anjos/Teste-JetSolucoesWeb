"use client";

import { Check, MoreVertical, Star } from "lucide-react";
import Image from "next/image";

import cooper from "@/app/assets/mine-cooper.jpeg";
import { useEffect, useState } from "react";
import { MobileTable } from "./mobile-table";

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

  return (
    <table className="min-w-full divide-y divide-gray-200 shadow-lg border ">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Car
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Next Reservation
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Rating
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className=" flex items-center ">
              {" "}
              <Image
                className="rounded-sm me-2 hidden lg:flex"
                src={cooper}
                alt="Mini Cooper"
                width={81}
                height={93}
              />{" "}
              Mini Cooper 2020
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">11/07</td>
          <td className="px-6 py-4 whitespace-nowrap ">
            <span className="bg-emerald-100 p-2 text-emerald-900 font-semibold  rounded-xl">
              {" "}
              Available
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex ">
              {" "}
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <MoreVertical className="ml-4" />
          </td>
        </tr>

        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className=" flex items-center">
              {" "}
              <Image
                className="rounded-sm me-2 hidden lg:flex"
                src={cooper}
                alt="Mini Cooper"
                width={81}
                height={93}
              />{" "}
              Mini Cooper 2020
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">11/07</td>
          <td className="px-6 py-4 whitespace-nowrap ">
            <span className="bg-emerald-100 p-2 text-emerald-900 font-semibold  rounded-xl">
              {" "}
              Available
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex ">
              {" "}
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <MoreVertical className="ml-4" />
          </td>
        </tr>

        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className=" flex items-center">
              {" "}
              <Image
                className="rounded-sm me-2 hidden lg:flex"
                src={cooper}
                alt="Mini Cooper"
                width={81}
                height={93}
              />{" "}
              Mini Cooper 2020
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">11/07</td>
          <td className="px-6 py-4 whitespace-nowrap ">
            <span className="bg-emerald-100 p-2 text-emerald-900 font-semibold  rounded-xl">
              {" "}
              Available
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex ">
              {" "}
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <MoreVertical className="ml-4" />
          </td>
        </tr>

        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className=" flex items-center">
              {" "}
              <Image
                className="rounded-sm me-2 hidden lg:flex"
                src={cooper}
                alt="Mini Cooper"
                width={81}
                height={93}
              />{" "}
              Mini Cooper 2020
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">11/07</td>
          <td className="px-6 py-4 whitespace-nowrap ">
            <span className="bg-emerald-100 p-2 text-emerald-900 font-semibold  rounded-xl">
              {" "}
              Available
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex ">
              {" "}
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <MoreVertical className="ml-4" />
          </td>
        </tr>

        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className=" flex items-center">
              {" "}
              <Image
                className="rounded-sm me-2 hidden lg:flex"
                src={cooper}
                alt="Mini Cooper"
                width={81}
                height={93}
              />{" "}
              Mini Cooper 2020
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">11/07</td>
          <td className="px-6 py-4 whitespace-nowrap ">
            <span className="bg-emerald-100 p-2 text-emerald-900 font-semibold  rounded-xl">
              {" "}
              Available
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex ">
              {" "}
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <MoreVertical className="ml-4" />
          </td>
        </tr>

        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className=" flex items-center">
              {" "}
              <Image
                className="rounded-sm me-2 hidden lg:flex"
                src={cooper}
                alt="Mini Cooper"
                width={81}
                height={93}
              />{" "}
              Mini Cooper 2020
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">11/07</td>
          <td className="px-6 py-4 whitespace-nowrap ">
            <span className="bg-emerald-100 p-2 text-emerald-900 font-semibold  rounded-xl">
              {" "}
              Available
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex ">
              {" "}
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <MoreVertical className="ml-4" />
          </td>
        </tr>

        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className=" flex items-center">
              {" "}
              <Image
                className="rounded-sm me-2 hidden lg:flex"
                src={cooper}
                alt="Mini Cooper"
                width={81}
                height={93}
              />{" "}
              Mini Cooper 2020
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">11/07</td>
          <td className="px-6 py-4 whitespace-nowrap ">
            <span className="bg-emerald-100 p-2 text-emerald-900 font-semibold  rounded-xl">
              {" "}
              Available
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex ">
              {" "}
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
              <Star size={20} fill="" />
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <MoreVertical className="ml-4" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
