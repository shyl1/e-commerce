import React from "react";
import manImg from "../assets/images/man.png";

export default function AboutUs() {
  return (
    <>
    <section>
      <div
        className="about-header  h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">About for Bacola</h1>
        <p className="mt-2 text-lg md:text-sm font-semibold tracking-[4px] uppercase">We can do more for you</p>
      </div>

    
      <div className="max-w-6xl mx-auto p-5 lg:py-12 lg:px-5 space-y-12 text-[#202435]">
        <p className="text-justify text-sm leading-6">
          In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
          rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
          Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
        </p>

        <div className="lg:px-20">
          <h2 className="text-3xl font-semibold max-w-xl mb-9 leading-9 ">
            Quisque erat urna, congue et libero in
            eleifend euismod velit.
          </h2>
          <p className="text-justify text-sm leading-6">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim.
            Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id
            interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </div>

        
    <section className="relative px-2 xl:py-16 ">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">

    <img
      src={manImg}
      alt="CEO"
      className="w-full shadow"
    />
    <div className="my-3">
      <p className="mb-6 leading-6 text-base">Rachel Leonard - Bacola CEO</p>
      <h2 className="text-3xl font-semibold mb-6 ledaing-6">
        Duis convallis luctus pretium. Pellentesque habitant morbi
      </h2>
      <div className="lg:p-6">
        <p className=" mb-10 text-justify leading-6 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
        ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
        facilisis.
      </p>
      <p className="leading-6 text-sm">
       In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida,
        dui eget aliquet tempus, turpis orci vehicula ipsum, eget porttitor sapien tortor
        at neque. Cras id pulvinar lacus, ac volutpat neque. Ut at magna id justo
        bibendum lobortis. Integer tortor nulla, ultricies et nisi sit amet, interdum
        dictum felis. In semper laoreet dui vitae pharetra. Etiam sit amet molestie nulla,
        eu efficitur orci. Praesent rutrum ante justo, eget malesuada ante ornare ac. Ut
        dignissim blandit urna, eget euismod leo rhoncus nec. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lobortis
        libero ante. Nullam in feugiat erat. Aenean sed justo dapibus, sodales nisi ut,
        fringilla lorem. Vestibulum in orci ac nisl condimentum fermentum at et sem.
        Curabitur fermentum dolor eu lacus consectetur varius.
      </p>
      </div>
    </div>
  </div>

<div
  className="
    bg-white rounded-[7px]
    px-4 pt-10 pb-16
    w-full max-w-[1055px] mx-auto
    mt-4
    relative
    xl:mt-0
    xl:absolute xl:left-[115px] xl:top-[730px] xl:px-[100px] xl:pt-[60px] xl:pb-[76px]
  "
>
  <p className="text-gray-700 leading-relaxed text-sm">
    In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
    consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
    dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit
    ante, vel vulputate tortor blandit nec.
  </p>
</div>
</section>


    
        <p className="xl:mt-24 leading-6 text-justify text-sm">
          In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
        </p>
      </div>
    </section>
    </>
  )
}
