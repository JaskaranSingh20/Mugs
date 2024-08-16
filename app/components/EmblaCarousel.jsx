"use client";
import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { testimonialData } from "../utils/data";
import Image from "next/image";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <div className="embla w-[100vw] mt-[4.5rem]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {testimonialData.map((data, index) => (
            <div className="embla__slide  " key={index}>
              <div className="embla__slide__img bg-[#F8F8F8] px-[48px] flex flex-col  md:flex-row gap-3 md:gap-[29px] justify-end md:items-center">
                <div className=" w-[200px] h-[200px] md:w-[235px] md:h-[235px] relative rounded-full md:block ">
                  <Image
                    src={data.imgSrc}
                    className="rounded-full object-cover "
                    alt="profile pic"
                    fill
                  />
                </div>
                <div className=" w-full md:w-[67.5%] dark:text-black ">
                  <div className="relative  flex mt-4">
                    <span className=" absolute italic top-[-20px] left-[-20px] text-[32px] text-justify text-[#FD6F00] leading-[48px] font-poppins-medium font-bold ">
                    &quot;
                    </span>
                    <p className=" text-[14px] leading-[20px] md:text-[21px] md:leading-[31.5px] inline-block text-justify font-poppins-medium font-normal text-[#424242]">
                      {data.description}
                      <span className=" text-end leading-8 text-[32px] italic text-[#FD6F00] font-poppins-medium font-bold ">
                      &quot;
                      </span>
                    </p>

                  </div>

                  <h4 className="text-[18px] leading-[24px] md:text-[24px] md:leading-[36px] font-poppins-medium font-medium ">{data.name}</h4>
                  <h5 className="text-[14px] leading-[20px] mb-3 md:text-[19px] md:leading-[28.5px] font-poppins-medium font-normal">{data.profession}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
