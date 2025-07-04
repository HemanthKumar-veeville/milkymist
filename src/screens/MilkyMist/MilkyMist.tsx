import React, { useEffect, useState } from "react";
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
  <div
    className={`absolute ${item.width} ${item.height} ${item.position} pointer-events-none`}
  >
    {item.bgPosition && (
      <div
        className={`absolute ${item.width} h-[317px] ${item.bgPosition} bg-[#d9d9d9] rounded-[39px] z-0`}
      />
    )}
    <img
      className={`${item.width} ${item.imageHeight} ${item.imagePosition} absolute left-0 z-10`}
      alt={`${item.name} image`}
      src={item.image}
    />
    <Badge
      className={`absolute w-[124px] h-[29px] ${item.badgePosition} bg-[#08224c] rounded-[15px] flex items-center justify-center z-20`}
    >
      <div className="relative w-full h-full flex items-center justify-center font-normal text-white text-[21px] text-center leading-[23.1px] tracking-[-0.63px]">
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
    <Badge className="absolute w-[138px] h-[138px] top-[511px] left-[461px] bg-[#0b254d] rounded-[69px] flex items-center justify-center z-20">
      <div className="flex flex-col items-center justify-center w-full h-full text-white text-[29px] text-center tracking-[-0.87px] leading-[31.9px]">
        12g
        <br />
        PROTEIN
      </div>
    </Badge>
    <div className="absolute top-[275px] left-[17px] font-bold text-[#0b254d] text-[135px] text-center tracking-[-4.05px] leading-[148.5px] whitespace-nowrap">
      =
    </div>
  </div>
);

const Header = () => (
  <header className="fixed top-0 left-0 w-full h-[65px] bg-white shadow-md z-50 flex items-center">
    <div className="w-full max-w-screen-xl mx-auto flex flex-row items-center justify-between px-4 sm:px-12">
      <img
        className="max-h-[100px] h-auto w-auto object-contain mt-6"
        alt="Milky Mist Logo"
        src="/img/onbf22cee1nk9pq2lkngto1rm9i1702040995319-200x200-1.png"
      />
      <Button className="bg-[#0b254d] rounded-full px-6 flex items-center text-white text-base font-light text-center">
        Search your State
      </Button>
    </div>
  </header>
);

const LocationIndicator = () => {
  const [state, setState] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Use OpenStreetMap Nominatim reverse geocoding
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          // Try to get state from address
          const stateName =
            data?.address?.state ||
            data?.address?.region ||
            data?.address?.county ||
            null;
          setState(stateName);
        } catch (e) {
          setError("Failed to fetch location details.");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError("Location access denied or unavailable.");
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="text-center">
      <div className="text-xl text-[#0b254d]">You are in</div>
      {loading ? (
        <div className="text-4xl font-bold text-[#0b254d] mt-1">
          Detecting...
        </div>
      ) : error ? (
        <div className="text-base text-red-600 mt-1">{error}</div>
      ) : (
        <div className="text-4xl font-bold text-[#0b254d] mt-1">
          {state || "Unknown"}
        </div>
      )}
    </div>
  );
};

export const MilkyMist = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen pt-[100px] px-2 sm:px-4 md:px-8 overflow-x-hidden">
      <Header />
      <div className="w-full flex flex-col items-center gap-12">
        {/* For large screens: original layout preserved and scaled */}
        <div className="hidden lg:block relative w-[1440px] h-[1100px] transform scale-[0.9] origin-top">
          {foodItems.map((item, index) => (
            <FoodItem key={`food-item-${index}`} item={item} />
          ))}
          <MilkyMistProduct />
          <div className="absolute top-[906px] left-[597px]">
            <LocationIndicator />
          </div>
        </div>

        {/* For mobile/tablet: fallback stacked layout */}
        <div className="block lg:hidden w-full flex flex-col items-center gap-8">
          <div className="grid grid-cols-2 gap-4">
            {foodItems.map((item, index) => (
              <div
                key={`food-item-mobile-${index}`}
                className="flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full max-w-[180px] h-auto object-contain"
                />
                <span className="mt-2 text-base font-semibold text-[#08224c]">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <img
              src="/img/12g-1.png"
              alt="Milky Mist Skyr"
              className="w-full max-w-[300px] h-auto object-contain"
            />
          </div>
          <LocationIndicator />
        </div>
      </div>
    </div>
  );
};
