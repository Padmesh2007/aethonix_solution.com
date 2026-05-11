import React from "react";

export default function PageHero({ title, subtitle }) {

  return (

    <section className="relative flex flex-col items-center justify-center pt-24 md:pt-28 pb-16 px-4 sm:px-6 md:px-12 overflow-hidden min-h-[70vh]">

      <div
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.07)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-size-[60px_60px]"
        style={{
          maskImage: "radial-gradient(circle at center, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 20%, transparent 80%)"
        }}
      ></div>


      <h1 className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16vw] md:text-[14vw] font-black tracking-tighter whitespace-nowrap text-center pointer-events-none select-none w-full">

        <span className="block text-transparent bg-clip-text bg-linear-to-b from-slate-700 to-black dark:from-white dark:to-slate-400">

          {title}

        </span>

        <span className="block text-[14vw] text-slate-900/5 dark:text-white/5">

          SOLUTIONS

        </span>

      </h1>


      <div className="relative z-10 text-center max-w-2xl">

        <h2 className="text-3xl md:text-4xl font-semibold text-(--text-main)">

          {title}

        </h2>

        <p className="mt-4 text-(--text-light) text-lg">

          {subtitle}

        </p>

      </div>

    </section>

  );

}