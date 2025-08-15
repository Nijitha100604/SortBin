import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../assets/assets";
import { FaExclamationTriangle } from "react-icons/fa";

const BinDetails = () => {
  const { type } = useParams();
  const { token, backendUrl } = useContext(AppContext);
  const [binData, setBinData] = useState({});

  const fetchBinData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/${type}`, {
        headers: { token },
      });
      if (data.success) {
        setBinData(data.bin[0]);
        console.log(data.bin[0]);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Something went wrong");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  useEffect(() => {
    fetchBinData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const safeFill = Math.min(Math.max(Number(binData.fillLevel) || 0, 0), 100);

  return (
    <div className="max-w-7xl mx-auto px-10">
      <div>
        <p className="font-medium text-xl">
          {binData.binName} Wastes Bin
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left image */}
        <div className="rounded-xl p-3 hidden md:block">
          <img
            src={assets.bin_details}
            alt="bin-details"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right content */}
        <div className="border rounded-xl p-4 md:col-span-2">
          {/* Count details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 items-center border border-gray-500 bg-gray-300 rounded-2xl px-6 py-4 text-center">
              <p className="font-bold text-2xl">{binData.count ?? 0}</p>
              <p className="font-medium">Current count</p>
            </div>

            <div className="flex flex-col gap-2 items-center border border-green-500 bg-green-200 rounded-2xl px-6 py-4 text-center">
              <p className="font-bold text-2xl">{binData.totalCount ?? 0}</p>
              <p className="font-medium">Total count</p>
            </div>
          </div>

          {/* Fill level */}
          <p className="mt-4 font-medium text-lg">Fill Level</p>
          <div className="flex items-center gap-2 w-full mb-5">
            <div className="flex-1 bg-gray-200 rounded-full overflow-hidden h-5">
              <div
                className="bg-green-700 h-5 rounded-full transition-all duration-300"
                style={{ width: `${safeFill}%` }}
              />
            </div>
            <span className="font-semibold">{safeFill}%</span>
          </div>

          {/* Warning details */}
          <div className="border bg-orange-200 px-6 py-4 rounded-2xl">
            <div className="flex gap-3 items-center mb-2">
              <FaExclamationTriangle size={24} className="text-orange-500" />
              <p className="text-lg font-semibold">Warning details</p>
            </div>
            <p>No hazardous gas found</p>
          </div>

          {/* Updated and cleaned Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="flex flex-col gap-1 items-center border border-gray-400 bg-gray-200 rounded-2xl px-6 py-4 text-center">
              <p className="text-sm font-medium">Updated at</p>
              <p className="font-semibold">
                {binData.updatedAt
                  ? `${formatDate(binData.updatedAt)} ${formatTime(binData.updatedAt)}`
                  : "N/A"}
              </p>
            </div>

            <div className="flex flex-col gap-1 items-center border border-gray-400 bg-gray-200 rounded-2xl px-6 py-4 text-center">
              <p className="text-sm font-medium">Cleaned at</p>
              <p className="font-semibold">
                {binData.lastCleanedAt
                  ? `${formatDate(binData.lastCleanedAt)} ${formatTime(binData.lastCleanedAt)}`
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinDetails;
