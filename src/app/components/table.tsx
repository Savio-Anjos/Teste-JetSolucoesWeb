"use client";

import { Check, CheckCircle2, MoreVertical, Star } from "lucide-react";
import Image from "next/image";

import cooper from "@/app/assets/mine-cooper.jpeg";
import { useEffect, useState } from "react";

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
        <section className="flex justify-between p-3 flex-1 rounded-sm shadow-lg relative">
          <div className="flex items-center me-4 relative">
            <Image
              className="rounded-sm flex"
              src={cooper}
              alt="Mini Cooper"
              height={100}
            />

            <div className="absolute top-2 right-17 left-1 transform ">
              <div className="flex rounded-full bg-green-800 items-center justify-center text-center p-1">
                <Check color="#FFF" size={12} />
              </div>
            </div>
          </div>
          <div className="flex w-11/12 justify-between">
            <div className="flex flex-col">
              <h3 className="font-semibold mb-2 text-md">Mini Cooper 2020</h3>
              <span className="mb-3 font-light text-sm">
                Next Reservation: 11/07
              </span>
              <div className="flex">
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
              </div>
            </div>
            <div>
              <MoreVertical />
            </div>
          </div>
        </section>
        <section className="flex justify-between p-3 flex-1 rounded-sm shadow-lg relative">
          <div className="flex items-center me-4 relative">
            <Image
              className="rounded-sm flex"
              src={cooper}
              alt="Mini Cooper"
              height={100}
            />

            <div className="absolute top-2 right-17 left-1 transform ">
              <div className="flex rounded-full bg-green-800 items-center justify-center text-center p-1">
                <Check color="#FFF" size={12} />
              </div>
            </div>
          </div>
          <div className="flex w-11/12 justify-between">
            <div className="flex flex-col">
              <h3 className="font-semibold mb-2 text-md">Mini Cooper 2020</h3>
              <span className="mb-3 font-light text-sm">
                Next Reservation: 11/07
              </span>
              <div className="flex">
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
              </div>
            </div>
            <div>
              <MoreVertical />
            </div>
          </div>
        </section>

        <section className="flex justify-between p-3 flex-1 rounded-sm shadow-lg relative">
          <div className="flex items-center me-4 relative">
            <Image
              className="rounded-sm flex"
              src={cooper}
              alt="Mini Cooper"
              height={100}
            />

            <div className="absolute top-2 right-17 left-1 transform ">
              <div className="flex rounded-full bg-green-800 items-center justify-center text-center p-1">
                <Check color="#FFF" size={12} />
              </div>
            </div>
          </div>
          <div className="flex w-11/12 justify-between">
            <div className="flex flex-col">
              <h3 className="font-semibold mb-2 text-md">Mini Cooper 2020</h3>
              <span className="mb-3 font-light text-sm">
                Next Reservation: 11/07
              </span>
              <div className="flex">
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
              </div>
            </div>
            <div>
              <MoreVertical />
            </div>
          </div>
        </section>

        <section className="flex justify-between p-3 flex-1 rounded-sm shadow-lg relative">
          <div className="flex items-center me-4 relative">
            <Image
              className="rounded-sm flex"
              src={cooper}
              alt="Mini Cooper"
              height={100}
            />

            <div className="absolute top-2 right-17 left-1 transform ">
              <div className="flex rounded-full bg-green-800 items-center justify-center text-center p-1">
                <Check color="#FFF" size={12} />
              </div>
            </div>
          </div>
          <div className="flex w-11/12 justify-between">
            <div className="flex flex-col">
              <h3 className="font-semibold mb-2 text-md">Mini Cooper 2020</h3>
              <span className="mb-3 font-light text-sm">
                Next Reservation: 11/07
              </span>
              <div className="flex">
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
              </div>
            </div>
            <div>
              <MoreVertical />
            </div>
          </div>
        </section>

        <section className="flex justify-between p-3 flex-1 rounded-sm shadow-lg relative">
          <div className="flex items-center me-4 relative">
            <Image
              className="rounded-sm flex"
              src={cooper}
              alt="Mini Cooper"
              height={100}
            />

            <div className="absolute top-2 right-17 left-1 transform ">
              <div className="flex rounded-full bg-green-800 items-center justify-center text-center p-1">
                <Check color="#FFF" size={12} />
              </div>
            </div>
          </div>
          <div className="flex w-11/12 justify-between">
            <div className="flex flex-col">
              <h3 className="font-semibold mb-2 text-md">Mini Cooper 2020</h3>
              <span className="mb-3 font-light text-sm">
                Next Reservation: 11/07
              </span>
              <div className="flex">
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
                <Star size={18} fill="" />
              </div>
            </div>
            <div>
              <MoreVertical />
            </div>
          </div>
        </section>
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
