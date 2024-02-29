import { Check, Star, MoreVertical } from "lucide-react";
import Image from "next/image";
import cooper from "@/app/assets/mine-cooper.jpeg";
export function MobileTable() {
  return (
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
  );
}
