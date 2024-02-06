'use client'
import { ProjectData } from "@/dbData/ProjectsData";
import { InDepthDetail } from "@/dbData/InDepthDetail";
import { useState } from "react";
import Link from "next/link";

export default function Caursols() {
  const [view, setView] = useState(false);

  const ViewSetting = () => {
    setView((prevState) => !prevState); // Toggle the view state
  };

  return (
    <div className="w-full h-full lg:pr-10 pt-14 sm:pt-28 md:pt-32 lg:pt-40 pb-20">
      <div className="pl-6 sm:pl-10 md:pl-12 lg:pl-12 max-h-[470px] w-auto overflow-x-auto flex gap-[60px] sm:gap-[80px] lg:gap-[110px] xl:gap-[120px] scrollbar-hide bg-red-400">
        {view ? (
          <ViewMore />
        ) : (
          ProjectData.map((value, index) => (
            <div
              key={index}
              className={`h-[360px] min-w-[210px] sm:h-[360px] sm:min-w-[250px] md:h-[360px] md:min-w-[260px] lg:h-[360px] lg:min-w-[250px] xl:h-[420px] xl:min-w-[320px] bg-blue-600 relative`}
            >
              <h1 className="absolute top-24 right-[-75px] sm:top-28 sm:right-[-75px] lg:top-32 lg:right-[-78px] xl:top-36 xl:right-[-80px] text-2xl sm:text-2xl lg:text-3xl xl:text-3xl w-44 h-auto font-bold">
                {value.Title}
              </h1>
              <h1 className="absolute right-[-25px] top-5 sm:right-[-25px] sm:top-5 lg:right-[-30px] lg:top-5 font-medium text-lg sm:text-lg lg:text-xl xl:text-2xl">
                {value.Number}
              </h1>
              <button
                className="absolute right-[-12px] top-56 sm:right-[-14px] sm:top-64 lg:right-[-16px] lg:top-72 xl:right-[-20px] xl:top-80 text-lg sm:text-xl border-b-2 border-black"
                onClick={ViewSetting}
              >
                {value.Github}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function ViewMore() {
  return (
    <div className="w-full max-h-full lg:pr-10 pt-14 sm:pt-28 md:pt-32 lg:pt-40 pb-20">
      <div className="pl-6 sm:pl-10 md:pl-12 lg:pl-12 max-h-[470px] w-auto overflow-x-auto flex gap-[60px] sm:gap-[80px] lg:gap-[110px] xl:gap-[120px] scrollbar-hide bg-red-400">
        {InDepthDetail.map((value, index) => (
          <div
            key={index}
            className={`h-[360px] min-w-[210px] sm:h-[360px] sm:min-w-[250px] md:h-[360px] md:min-w-[260px] lg:h-[360px] lg:min-w-[250px] xl:h-[420px] xl:min-w-[320px] bg-blue-600 relative`}
          >
            <h1>{value.Number}</h1>
            <h1>{value.Title}</h1>
            <p>{value.description}</p>
            <Link href={value.link} target="_blank">
              {value.visit}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
