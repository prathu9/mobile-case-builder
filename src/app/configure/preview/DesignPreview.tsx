"use client";
import Phone from "@/components/Phone";
import { Button } from "@/components/ui/button";
import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import { cn, formatPrice } from "@/lib/utils";
import { COLORS, MODELS } from "@/validators/option-validator";
import { Configuration } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { CreateCheckoutSession } from "./actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import {useKindeBrowserClient} from '@kinde-oss/kinde-auth-nextjs';
import LoginModal from "@/components/LoginModal";

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const router = useRouter();
  const {toast} = useToast();
  const {user} = useKindeBrowserClient();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const {id} = configuration;

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  const { color, model, finish, material } = configuration;
  const tw = COLORS.find(
    (supportedColor) => supportedColor.value === color
  )?.tw;

  const { label: modelLabel } = MODELS.options.find(
    ({ value }) => value === model
  )!;

  let totalPrice = BASE_PRICE;
  if(material === 'polycarbonate'){
    totalPrice += PRODUCT_PRICES.material.polycarbonate;
  }
  if(finish === 'textured'){
    totalPrice += PRODUCT_PRICES.finish.textured;
  }

  const {mutate: createPaymentSession} = useMutation({
    mutationKey: ['get-checkout-session'],
    mutationFn: CreateCheckoutSession,
    onSuccess: ({url}) => {
      if(url){
        router.push(url);
      }
      else{
        throw new Error("Unable to retrieve payment URL");
      }
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "There was an error on our end. Please try again.",
        variant: "destructive"
      });
    }
  })

  const handleCheckout = () => {
    if(user){
      createPaymentSession({configId: id});
    } 
    else{
      localStorage.setItem('configurationId', id);
      setIsLoginModalOpen(true);
    }
  }

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden flx justify-center pointer-events-none select-none"
      >
        <Confetti
          active={showConfetti}
          config={{ elementCount: 200, spread: 90 }}
        />
      </div>

      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />

      <div className="mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        <div className="sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2">
          <Phone
            className={cn(`bg-${tw}`)}
            imgSrc={configuration.croppedImageUrl!}
          />
        </div>
        <div className="mt-6 sm:mt-0 sm:col-span-9 md:row-end-1">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
            Your {modelLabel} Case
          </h3>
          <div className="mt-3 flex items-center gap-1.5 text-base">
            <Check className="w-4 h-4 text-green-500" />
            In stock and ready to ship
          </div>
        </div>

        <div className="text-base sm:col-span-12 md:col-span-9">
          <div className="py-8 sm:py-6 md:py-10 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 gap-y-8 border-b border-gray-200 ">
            <div>
              <p className="font-medium text-zinc-950">Highlights</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <li>Wireless charging compatible</li>
                <li>TPU shock absorption</li>
                <li>Packaging made from recycled materials</li>
                <li>5 years print warranty</li>
              </ol>
            </div>
            <div>
              <p className="font-medium text-zinc-950">Materials</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <li>High-quality, durable material</li>
                <li>Scratch and fingerprint resistant coating</li>
              </ol>
            </div>
          </div>
          <div className="mt-8">
              <div className="p-6 sm:p-8 bg-gray-50 sm:rounded-lg">
                <div className="flow-root text-sm">
                  <div className="mt-2 py-1 flex items-center justify-between">
                    <p className="text-gray-600">Base price</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(BASE_PRICE / 100)}
                    </p>
                  </div>

                  {finish === "textured" ? (
                    <div className="mt-2 py-1 flex items-center justify-between">
                      <p className="text-gray-600">Textured Finish</p>
                      <p className="font-medium text-gray-900">
                        {formatPrice(PRODUCT_PRICES.finish.textured / 100)}
                      </p>
                    </div>
                  ) : null}

                  {material === "polycarbonate"?(
                     <div className="mt-2 py-1 flex items-center justify-between">
                     <p className="text-gray-600">Soft Polycarbonate Material</p>
                     <p className="font-medium text-gray-900">
                       {formatPrice(PRODUCT_PRICES.material.polycarbonate / 100)}
                     </p>
                   </div>
                  ):null}

                  <div className="my-2 h-px bg-gray-200"/>

                  <div className="py-2 flex items-center justify-between">
                    <p className="font-semibold text-gray-900">Order total</p>
                    <p className="font-semibold text-gray-900">
                        {formatPrice(totalPrice/100)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pb-12 flex justify-end">
                <Button onClick={() => handleCheckout()} loadingText="loading" className="px-4 sm:px-6 lg:px-8">
                  Check out <ArrowRight className="w-4 h-4 ml-1.5 inline" />
                </Button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default DesignPreview;