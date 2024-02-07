import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="mt-36 sm:mt-32 lg:mt-28 bg-gray-50 w-full h-auto border-t-2 border-black/20 pt-20 pb-12 px-8 sm:px-16 sm:py-20 md:px-20 md:py-20 lg:py-28 lg:px-28 xl:px-32 flex flex-col gap-10 sm:flex-row sm:gap-0 justify-between">
      <section className="sm:w-[50%] lg:w-[45%] xl:w-[30%] h-full flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl sm:text-3xl font-semibold cursor-default pb-2">
            faizan <span className="text-black/60">ali.</span>
          </h1>
          <p className="text-lg xl:text-xl font-medium">
            I am open to accepting freelance work opportunities.
          </p>
          <Link href='mailto:riazfiaz6181@gmail.com' className="text-lg xl:text-xl underline">
            riazfiaz6181@gmail.com
          </Link>
        </div>
        <div>
          <p className="text-sm xl:text-base">
            <span>Designed & developed by Faizan Ali Baig with love.</span>
            <span>This website is open source on GitHub.</span>
          </p>
        </div>
      </section>
      <section className="sm:w-[35%] md:w-[30%] h-auto flex flex-col sm:items-end sm:justify-between">
        <div className="pl-2 h-8 flex justify-center items-center sm:justify-end gap-5 sm:border-l-2 sm:border-black/40">
          <Link href="https://www.instagram.com/thefaizanalibaig/" target="_blank">
            <AiFillInstagram className="text-[24px] md:text-[26px] xl:text-[28px]" />
          </Link>
          <Link href="https://github.com/faizanalibaig" target="_blank">
            <FaGithub className="text-[20px] md:text-[22px] xl:text-2xl" />
          </Link>
          <Link href="https://www.linkedin.com/in/faizan-ali-a871ab265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <IoLogoLinkedin className="text-[22px] md:text-[24px] xl:text-[26px]" />
          </Link>
        </div>
        <div>
          <p className="text-sm xl:text-base text-center sm:text-right">All rights reserved © 2024</p>
        </div>
      </section>
    </footer>
  );
}
