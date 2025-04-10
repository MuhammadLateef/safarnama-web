"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "John McCulling",
      date: "August 28, 2021",
      review: "Amazing product! Great quality and fast shipping.",
      rating: 4,
    },
    {
      name: "Sara Smith",
      date: "September 3, 2021",
      review: "Good but could be better. Packaging was a bit damaged.",
      rating: 3,
    },
    {
      name: "Derek Wilson",
      date: "October 15, 2021",
      review: "Exceeded expectations. Highly recommend!",
      rating: 5,
    },
    {
      name: "Lisa Turner",
      date: "November 10, 2021",
      review: "Decent value for the price.",
      rating: 4,
    },
  ];

  return (
    <div className="bg-blue-50 py-8 max-w-[90%] mx-auto rounded mb-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Customer Reviews Box */}
          <div>
            <div className="rounded-lg border p-4 bg-white">
              <h2 className="mb-3 text-lg font-bold text-gray-800 lg:text-xl">
                Customer Reviews
              </h2>
              <div className="mb-0.5 flex items-center gap-2">
                <div className="-ml-1 flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="h-6 w-6 text-yellow-400"
                    />
                  ))}
                  <FontAwesomeIcon
                    icon={faStar}
                    className="h-6 w-6 text-gray-300"
                  />
                </div>
                <span className="text-sm font-semibold">4/5</span>
              </div>
              <span className="block text-sm text-gray-500">
                Based on 27 reviews
              </span>

              <div className="my-5 flex flex-col gap-2 border-t border-b py-5">
                {[
                  { star: "5 Star", width: "w-3/4" },
                  { star: "4 Star", width: "w-1/2" },
                  { star: "3 Star", width: "w-1/6" },
                  { star: "2 Star", width: "w-1/4" },
                  { star: "1 Star", width: "w-1/12" },
                ].map(({ star, width }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-10 text-right text-sm text-gray-600">
                      {star}
                    </span>
                    <div className="flex h-4 flex-1 overflow-hidden rounded bg-gray-200">
                      <span
                        className={`h-full ${width} rounded bg-yellow-400`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 active:bg-gray-200 md:px-8 md:py-3 md:text-base"
              >
                Write a review
              </a>
            </div>
          </div>

          {/* Top Reviews Swiper */}
          <div className="lg:col-span-2">
            <div className="border-b pb-4 md:pb-6 pt-6 lg:pt-0">
              <h2 className="text-lg font-bold text-gray-800 lg:text-xl">
                Top Reviews
              </h2>
            </div>

            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="mt-6"
            >
              {reviews.map((r, i) => (
                <SwiperSlide key={i}>
                  <div className="h-full rounded-lg border p-4 shadow-sm bg-white">
                    <div className="mb-2">
                      <span className="block text-sm font-bold">{r.name}</span>
                      <span className="block text-sm text-gray-500">
                        {r.date}
                      </span>
                    </div>
                    <div className="-ml-1 mb-2 flex gap-0.5">
                      {[...Array(5)].map((_, idx) => (
                        <FontAwesomeIcon
                          key={idx}
                          icon={faStar}
                          className={`h-5 w-5 ${
                            idx < r.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700">{r.review}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
