"use client"

import Navbar from "@/components/navbar"
import Custom_button from '@/components/custum_button'
import Image from "next/image";
import video_circle_icon from '@/app/assets/video_circle_icon.png'
import heroImage from './assets/heroImage.png'
import { useState } from "react";
import { Fascinate } from "next/font/google";

export default function Home() {
  const [menuIsOpen, setmenuIsOpen] = useState(false)

  return (
    <>
      <div>
        <header className="max-w-[1340px] mx-auto px-3">
          <Navbar />
          <div className="flex lg:flex-row md:flex-col-reverse max-md:flex-col-reverse justify-between items-center sm:mt-[52px] max-sm:mt-8">
            <div className="max-w-[590px]">
              <h1 className="sm:text-[48px] max-sm:text-[35px] font-bold leading-[130%] mb-3">Biznesingiz uchun media va marketing xizmatlari</h1>
              <p className="sm:text-[20px] max-sm:text-[16px] text-[#747582] mb-[33px]">Biz sizning biznesingiz uchun sifatli media kontentlarini tasvirga olib , ularni sizning potensial mijozlaringizga Instagram , YouTube , Telegram va boshqa ijtimoiy tarmoqlarda faol targ’ib qilamiz . Pastdagi tugmani hoziroq bosing va biznesingizni rovojlantirishni birgalikda ko’rib chiqamiz.  </p>
              <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:  justify-between items-center">
                <Custom_button>{"Bepul Konsultatsiya"}</Custom_button>
                <button className="flex py-[20px] text-[16px] font-semibold gap-3 rounded-[192px]"><Image src={video_circle_icon} alt="video image" /><span>Siz ushun maxsus taklif</span></button>
              </div>
            </div>
            <Image src={heroImage} alt="hero image" className="lg:block md:hidden max-md:hidden"></Image>
          </div>
        </header>
        <section className="max-w-[1340px] mx-auto px-3">
          <div>
            <h2>Biz haqimizda</h2>
            <p>Biz O‘zbekistonda bizneslarni taniqlashtirish va yangi bozor yetakchilarini yaratish bilan shug’ullanamiz. Bizning jamoamiz marketing, dizayn, web va mobil mahsulotlarni ishlab chiqish, SMM, kopirayterlik, shuningdek, foto va video tasvirga olish sohasida 15 dan ortiq
              tajribali mutaxassislardan iborat.</p>
            <p>Bizning barcha harakatlarimiz va tashabbuslarimizning yagona maqsadi – hamkorlarimiz daromadini oshirishdir. Shuning uchun biz faqat yuqori natija beradigan samarali yechimlardan foydalanamiz.</p>
          </div>
          <div>

          </div>
        </section>
      </div>
    </>
  );
}