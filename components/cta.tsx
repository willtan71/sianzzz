"use client";
import React from "react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Button } from "./button";
export const CTA = () => {
  return (
    <section className="py-60 w-full  overflow-hidden relative z-30">
      <div className="bg-white dark:bg-black">
        <div className="mx-auto w-full relative z-20 sm:max-w-[40rem]  md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] bg-gradient-to-br from-slate-800 dark:from-neutral-900 to-gray-900 sm:rounded-2xl">
          <div className="relative -mx-6   sm:mx-0 sm:rounded-2xl overflow-hidden px-6  md:px-8 ">
            <div
              className="absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette [mask-image:radial-gradient(#fff,transparent,75%)]"
              style={{
                backgroundImage: "url(/noise.webp)",
                backgroundSize: "30%",
              }}
            ></div>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
              style={{
                mask: "radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)",
              }}
            ></div>

            <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
              <h2 className="  text-center text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-white">
                Ready to bring your idea to live?
              </h2>
              <p className="mt-4 max-w-[26rem] text-center mx-auto  text-base/6 text-neutral-200">
                <Balancer>
                  Talk to us and let&apos;s bring your project from idea to live!
                </Balancer>
              </p>

              <div className="relative z-10 mx-auto flex justify-center mt-6">
                <a href="https://wa.me/6596706030" target="_blank" rel="noopener noreferrer">
                  <Button>WhatsApp Sianzzz</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
