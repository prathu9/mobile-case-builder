import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { ArrowRight, Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
import { Icons } from "@/components/icons";
import Reviews from "@/components/Reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pt-24 lg:pb-52 xl:pt-32 xl:gap-x-8">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center flex flex-col items-center lg:text-left lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block"></div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-blue-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg max-w-prose text-center text-balance md:text-wrap lg:pr-10 lg:text-left">
                Capture your favourite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span>
                phone case. This mobile case builder allows you to protect your
                memories, not just your phone case.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="w-5 h-5 shrink-0 text-green-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="w-5 h-5 shrink-0 text-green-600" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="w-5 h-5 shrink-0 text-green-600" />
                    Modern IPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 mb-4 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <Image
                    src="/users/user-1.png"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    alt="user"
                  />
                  <Image
                    src="/users/user-2.png"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    alt="user"
                  />
                  <Image
                    src="/users/user-3.png"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    alt="user"
                  />
                  <Image
                    src="/users/user-4.jpg"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    alt="user"
                  />
                  <Image
                    src="/users/user-5.jpg"
                    width={40}
                    height={40}
                    className="inline-block object-cover rounded-full ring-2 ring-slate-100"
                    alt="user"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-content items-center sm:items-start">
                <div className="flex gap-0.5">
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                </div>
              </div>

              <p>
                <span className="font-semibold">1,250 </span>
                happy customers
              </p>
            </div>
          </div>

          <div className="w-full h-fit mt-32 lg:mt-20 lg:mx-0 px-8 sm:px-16 md:px-0 flex justify-center col-span-full lg:col-span-1">
            <div className="relative md:max-w-xl">
              <div className="absolute w-40 h-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block">
                <Image
                  src="/your-image.png"
                  layout="100vw"
                  fill
                  alt="your image"
                />
              </div>
              <div className="absolute w-20 -left-6 -bottom-6 select-none">
                <Image src="/line.png" layout="100vw" fill alt="line" />
              </div>

              <Phone imgSrc="/testimonials/1.jpg" className="w-64" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="mt-2 font-bold text-5xl md:text-6xl text-gray-900 order-1 tracking-tight text-center text-balance !leading-tight">
              What our
              <span className="relative px-2">
                customers
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>{" "}
              say
            </h2>
            <div className="relative w-24 aspect-[1.1] order-0 lg:order-2">
              <Image src="/snake-2.png" layout="100vw" fill alt="snake" />
            </div>
          </div>
          <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none px-4 grid grid-cols-1 ld:grid-cols-2 gap-y-16">
            <div className="lg:pr-8 xl:pr-20 flex flex-auto flex-col gap-4">
              <div className="flex gap-0.5 mb-2">
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
              </div>
              <div>
                <p>
                  &quot;The case feels durable and I even got a compliment on
                  the design. Had the case for two and a half months now and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it.&quot;
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <Image
                  src="/users/user-1.png"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="w-4 h-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pr-8 xl:pr-20 flex flex-auto flex-col gap-4">
              <div className="flex gap-0.5 mb-2">
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
              </div>
              <div>
                <p>
                  &quot;I usually keep my phone together with my keys in my
                  pocket and that led to some pretty heavy scratchmarks on all
                  of my last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    looks brand new after about half a year
                  </span>
                  . I dig it.&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  className="rounded-full object-cover"
                  width={48}
                  height={48}
                  src="/users/user-4.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Josh</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="mt-2 font-bold text-5xl md:text-6xl text-gray-900 order-1 tracking-tight text-center text-balance !leading-tight">
                Upload your photo and get{" "}
                <span className="relative px-2 bg-blue-600 text-white">
                  your own case
                </span>{" "}
                now
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <Image
                src="/arrow.png"
                width={126}
                height={31}
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
                alt="arrow"
              />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <Image
                  src="/horse.jpg"
                  width={292.5}
                  height={490.44}
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                  alt="horse"
                />
              </div>
              <Phone className="w-60" imgSrc="/horse_phone.jpg" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
              <li className="w-fit">
                <Check className="mr-1.5 w-5 h-5 text-green-600 inline"/>
                High-quality silicone material
              </li>
              <li className="w-fit">
                <Check className="mr-1.5 w-5 h-5 text-green-600 inline"/>
                Scratch and fingerprint resistant coating
              </li>
              <li className="w-fit">
                <Check className="mr-1.5 w-5 h-5 text-green-600 inline"/>
                Wireless charging compatible
              </li>
              <li className="w-fit">
                <Check className="mr-1.5 w-5 h-5 text-green-600 inline"/>
                5 year print warranty
              </li>
              <div className="flex justify-center">
                  <Link className={buttonVariants({
                    size: 'lg',
                    className: "mx-auto mt-8"
                  })} href="/configure/upload">
                    Create your case now <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
              </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
