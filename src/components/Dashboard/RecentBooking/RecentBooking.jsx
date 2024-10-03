"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import hotelPic from "../../../../public/images/Rooms/Deluxe Double Room with Turkish Bath, istanbul, City View.jpg";
import Image from "next/image";
import Link from "next/link";
export default function RecentBooking() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const res = await fetch(`/api/reservation/bookings`, {
        cache: "no-store",
        next: { revalidate: 0 },
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      }

      setdata(data);
    };
    getdata();
  }, []);

  if (data.length === 0) {
    return (
      <div className="h-96 flex items-center justify-start">
        <FaSpinner className="animate-spin" />
      </div>
    );
  }
  if (data.length > 0) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-xl h-96 transition-all duration-300 w-full md:w-2/5">
        <h2 className="mb-6 text-lg font-semibold">Recent Bookings</h2>
        <div className="space-y-4 overflow-x-auto">
          {data.map((booking, index) => {
            return (
              <Link
                key={index}
                className="flex items-center justify-between hover:bg-gray-100 p-3 rounded-lg transition-all duration-300"
                href={`/booking/${booking?.booking_id}`}
              >
                <div className="flex items-center space-x-4">
                  <Image
                    width={100}
                    height={100}
                    quality={100}
                    src={hotelPic}
                    alt={booking?.booking_id}
                    className="h-16 w-24 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{booking?.room_type}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        {booking?.user_firstname} {booking?.user_lastname}
                      </span>
                      <span className="text-sm text-gray-500">5 min ago</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-green-500 px-3 py-1 text-sm font-medium text-white">
                  {booking?.number_of_guests}
                </div>
              </Link>
            );
          })}
        </div>

        <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-800">
          View more
        </button>
      </div>
    );
  }
}
