import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

const foodItems = [
  {
    name: "Idli",
    image: "/img/mask-group-3.png",
    position: "top-[163px] left-[154px]",
    width: "w-[286px]",
    height: "h-[332px]",
    badgePosition: "top-0 left-[82px]",
    textPosition: "top-px left-12",
    imagePosition: "top-[17px]",
    imageHeight: "h-[312px]",
    bgPosition: "top-[15px] left-0",
  },
  {
    name: "Podi",
    image: "/img/mask-group-2.png",
    position: "top-[241px] left-[452px]",
    width: "w-[210px]",
    height: "h-[254px]",
    badgePosition: "top-0 left-[43px]",
    textPosition: "top-px left-[9px]",
    imagePosition: "top-3.5",
    imageHeight: "h-60",
    bgPosition: "",
  },
  {
    name: "Chutney",
    image: "/img/mask-group-1.png",
    position: "top-[509px] left-[155px]",
    width: "w-[210px]",
    height: "h-[302px]",
    badgePosition: "top-[233px] left-[42px]",
    textPosition: "top-[234px] left-2",
    imagePosition: "top-0",
    imageHeight: "h-[249px]",
    bgPosition: "",
  },
  {
    name: "Sambar",
    image: "/img/mask-group.png",
    position: "top-[510px] left-[376px]",
    width: "w-[286px]",
    height: "h-[371px]",
    badgePosition: "top-[302px] left-[81px]",
    textPosition: "top-[303px] left-[43px]",
    imagePosition: "top-0",
    imageHeight: "h-[317px]",
    bgPosition: "top-0.5 left-0",
  },
];

const FoodItem = ({ item }) => (
  <div className={`absolute ${item.width} ${item.height} ${item.position}`}>
    {item.bgPosition && (
      <div
        className={`absolute ${item.width} h-[317px] ${item.bgPosition} bg-[#d9d9d9] rounded-[39px]`}
      />
    )}
    <img
      className={`${item.width} ${item.imageHeight} ${item.imagePosition} absolute left-0`}
      alt={`${item.name} image`}
      src={item.image}
    />
    <Badge
      className={`absolute w-[124px] h-[29px] ${item.badgePosition} bg-[#08224c] rounded-[15px] flex items-center justify-center`}
    >
      <div
        className={`absolute ${item.width} ${item.textPosition} [font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-[21px] text-center tracking-[-0.63px] leading-[23.1px]`}
      >
        {item.name}
      </div>
    </Badge>
  </div>
);

const MilkyMistProduct = () => (
  <div className="absolute w-[673px] h-[673px] top-[178px] left-[683px]">
    <img
      className="absolute w-[427px] h-[63px] top-[552px] left-[131px]"
      alt="Shadow"
      src="/img/ellipse-3.svg"
    />
    <img
      className="absolute w-[673px] h-[673px] top-0 left-0 object-cover"
      alt="Milky Mist Skyr"
      src="/img/12g-1.png"
    />
    <Badge className="absolute w-[138px] h-[138px] top-[511px] left-[461px] bg-[#0b254d] rounded-[69px] flex items-center justify-center">
      <div className="absolute top-[542px] left-[472px] [font-family:'FONTSPRING_DEMO_-_Basic_Sans_Black-Regular',Helvetica] font-normal text-white text-[29px] text-center tracking-[-0.87px] leading-[31.9px]">
        12g
        <br />
        PROTEIN
      </div>
    </Badge>
    <div className="absolute top-[275px] left-[17px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-[#0b254d] text-[135px] text-center tracking-[-4.05px] leading-[148.5px] whitespace-nowrap">
      =
    </div>
  </div>
);

const Header = () => (
  <header className="absolute w-[1440px] h-[125px] top-0 left-[3px]">
    <div className="absolute w-[1440px] h-[79px] top-0 left-0 bg-white shadow-[0px_4px_4px_#00000014]" />
    <img
      className="absolute w-[166px] h-[125px] top-0 left-[151px] object-cover"
      alt="Milky Mist Logo"
      src="/img/onbf22cee1nk9pq2lkngto1rm9i1702040995319-200x200-1.png"
    />
    <Button className="absolute w-[187px] h-10 top-[21px] left-[1088px] bg-[#0b254d] rounded-[32px] text-white">
      <span className="[font-family:'Helvetica-Light',Helvetica] font-light text-white text-xl text-center tracking-[-0.60px] leading-[22.0px]">
        Search your State
      </span>
    </Button>
  </header>
);

const LocationIndicator = () => (
  <div className="absolute w-[228px] h-[82px] top-[906px] left-[597px]">
    <div className="absolute top-[27px] left-0 [font-family:'FONTSPRING_DEMO_-_Basic_Sans_Black-Regular',Helvetica] font-normal text-[#0b254d] text-[50px] text-center tracking-[-1.50px] leading-[55.0px] whitespace-nowrap">
      Karnataka
    </div>
    <div className="absolute top-0 left-[39px] [font-family:'Helvetica-Light',Helvetica] font-light text-[#0b254d] text-4xl text-center tracking-[-1.08px] leading-[39.6px] whitespace-nowrap">
      You are in
    </div>
  </div>
);

export const MilkyMist = (): JSX.Element => {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="299:2359"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[1024px] relative">
        {foodItems.map((item, index) => (
          <FoodItem key={`food-item-${index}`} item={item} />
        ))}
        <MilkyMistProduct />
        <Header />
        <LocationIndicator />
      </div>
    </div>
  );
};
