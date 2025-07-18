import React, { useEffect, useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

// Define the type for food items
interface FoodItemType {
  name: string;
  image: string;
  position: string;
  minWidth: string;
  maxWidth: string;
  minHeight: string;
  maxHeight: string;
  badgePosition: string;
  textPosition: string;
  imagePosition: string;
  imageMinHeight: string;
  imageMaxHeight: string;
  bgPosition: string;
}

interface StateImagesType {
  q1: FoodItemType;
  q2: FoodItemType;
  q3: FoodItemType;
  q4: FoodItemType;
}

interface StateFoodItemsType {
  [key: string]: StateImagesType;
}

const foodItemsByState: StateFoodItemsType = {
  Karnataka: {
    q1: {
      name: "Idli",
      image: "/img/Karnataka/Idli.jpg",
      position: "top-[168px] left-[154px]",
      minWidth: "min-w-[286px]",
      maxWidth: "max-w-[286px]",
      minHeight: "min-h-[332px]",
      maxHeight: "max-h-[332px]",
      badgePosition: "top-0 left-[82px]",
      textPosition: "top-px left-12",
      imagePosition: "top-[17px]",
      imageMinHeight: "min-h-[312px]",
      imageMaxHeight: "max-h-[312px]",
      bgPosition: "top-[15px] left-0",
    },
    q2: {
      name: "Podi",
      image: "/img/Karnataka/Podi.jpg",
      position: "top-[241px] left-[452px]",
      minWidth: "min-w-[210px]",
      maxWidth: "max-w-[210px]",
      minHeight: "min-h-[254px]",
      maxHeight: "max-h-[254px]",
      badgePosition: "top-0 left-[43px]",
      textPosition: "top-px left-[9px]",
      imagePosition: "top-3.5",
      imageMinHeight: "min-h-60",
      imageMaxHeight: "max-h-60",
      bgPosition: "",
    },
    q3: {
      name: "Chutney",
      image: "/img/Karnataka/chutney.jpg",
      position: "top-[509px] left-[155px]",
      minWidth: "min-w-[210px]",
      maxWidth: "max-w-[210px]",
      minHeight: "min-h-[302px]",
      maxHeight: "max-h-[302px]",
      badgePosition: "top-[233px] left-[42px]",
      textPosition: "top-[234px] left-2",
      imagePosition: "top-0",
      imageMinHeight: "min-h-[249px]",
      imageMaxHeight: "max-h-[249px]",
      bgPosition: "",
    },
    q4: {
      name: "Sambar",
      image: "/img/Karnataka/Sambar.jpg",
      position: "top-[500px] left-[376px]",
      minWidth: "min-w-[286px]",
      maxWidth: "max-w-[286px]",
      minHeight: "min-h-[371px]",
      maxHeight: "max-h-[371px]",
      badgePosition: "top-[302px] left-[81px]",
      textPosition: "top-[303px] left-[43px]",
      imagePosition: "top-0",
      imageMinHeight: "min-h-[317px]",
      imageMaxHeight: "max-h-[317px]",
      bgPosition: "top-0.5 left-0",
    },
  },
  "Tamil Nadu": {
    q1: {
      name: "Dosa",
      image: "/img/Tamil Nadu/Dosa.jpg",
      position: "top-[168px] left-[154px]",
      minWidth: "min-w-[286px]",
      maxWidth: "max-w-[286px]",
      minHeight: "min-h-[332px]",
      maxHeight: "max-h-[332px]",
      badgePosition: "top-0 left-[82px]",
      textPosition: "top-px left-12",
      imagePosition: "top-[17px]",
      imageMinHeight: "min-h-[312px]",
      imageMaxHeight: "max-h-[312px]",
      bgPosition: "top-[15px] left-0",
    },
    q2: {
      name: "Curd Rice",
      image: "/img/Tamil Nadu/curd_rice.webp",
      position: "top-[241px] left-[452px]",
      minWidth: "min-w-[210px]",
      maxWidth: "max-w-[210px]",
      minHeight: "min-h-[254px]",
      maxHeight: "max-h-[254px]",
      badgePosition: "top-0 left-[43px]",
      textPosition: "top-px left-[9px]",
      imagePosition: "top-3.5",
      imageMinHeight: "min-h-60",
      imageMaxHeight: "max-h-60",
      bgPosition: "",
    },
    q3: {
      name: "Sambar",
      image: "/img/Tamil Nadu/Sambar.jpg",
      position: "top-[509px] left-[155px]",
      minWidth: "min-w-[210px]",
      maxWidth: "max-w-[210px]",
      minHeight: "min-h-[302px]",
      maxHeight: "max-h-[302px]",
      badgePosition: "top-[233px] left-[42px]",
      textPosition: "top-[234px] left-2",
      imagePosition: "top-0",
      imageMinHeight: "min-h-[249px]",
      imageMaxHeight: "max-h-[249px]",
      bgPosition: "",
    },
    q4: {
      name: "Vada",
      image: "/img/Tamil Nadu/Vada.jpg",
      position: "top-[500px] left-[376px]",
      minWidth: "min-w-[286px]",
      maxWidth: "max-w-[286px]",
      minHeight: "min-h-[371px]",
      maxHeight: "max-h-[371px]",
      badgePosition: "top-[302px] left-[81px]",
      textPosition: "top-[303px] left-[43px]",
      imagePosition: "top-0",
      imageMinHeight: "min-h-[317px]",
      imageMaxHeight: "max-h-[317px]",
      bgPosition: "top-0.5 left-0",
    },
  },
  Kerala: {
    q1: {
      name: "Puttu",
      image: "/img/kerala/mask-group-3.png",
      position: "top-[168px] left-[154px]",
      minWidth: "min-w-[286px]",
      maxWidth: "max-w-[286px]",
      minHeight: "min-h-[332px]",
      maxHeight: "max-h-[332px]",
      badgePosition: "top-0 left-[82px]",
      textPosition: "top-px left-12",
      imagePosition: "top-[17px]",
      imageMinHeight: "min-h-[312px]",
      imageMaxHeight: "max-h-[312px]",
      bgPosition: "top-[15px] left-0",
    },
    q2: {
      name: "Kadala Curry",
      image: "/img/kerala/mask-group-2.png",
      position: "top-[241px] left-[452px]",
      minWidth: "min-w-[210px]",
      maxWidth: "max-w-[210px]",
      minHeight: "min-h-[254px]",
      maxHeight: "max-h-[254px]",
      badgePosition: "top-0 left-[43px]",
      textPosition: "top-px left-[9px]",
      imagePosition: "top-3.5",
      imageMinHeight: "min-h-60",
      imageMaxHeight: "max-h-60",
      bgPosition: "",
    },
    q3: {
      name: "Chutney",
      image: "/img/kerala/mask-group-1.png",
      position: "top-[509px] left-[155px]",
      minWidth: "min-w-[210px]",
      maxWidth: "max-w-[210px]",
      minHeight: "min-h-[302px]",
      maxHeight: "max-h-[302px]",
      badgePosition: "top-[233px] left-[42px]",
      textPosition: "top-[234px] left-2",
      imagePosition: "top-0",
      imageMinHeight: "min-h-[249px]",
      imageMaxHeight: "max-h-[249px]",
      bgPosition: "",
    },
    q4: {
      name: "Sambar",
      image: "/img/kerala/mask-group.png",
      position: "top-[500px] left-[376px]",
      minWidth: "min-w-[286px]",
      maxWidth: "max-w-[286px]",
      minHeight: "min-h-[371px]",
      maxHeight: "max-h-[371px]",
      badgePosition: "top-[302px] left-[81px]",
      textPosition: "top-[303px] left-[43px]",
      imagePosition: "top-0",
      imageMinHeight: "min-h-[317px]",
      imageMaxHeight: "max-h-[317px]",
      bgPosition: "top-0.5 left-0",
    },
  },
  "Andhra Pradesh": {
    q1: {
      name: "Pesarattu",
      image: "/img/andhra/mask-group-3.png",
      position: "top-[168px] left-[154px]",
      minWidth: "min-w-[286px]",
      maxWidth: "max-w-[286px]",
      minHeight: "min-h-[332px]",
      maxHeight: "max-h-[332px]",
      badgePosition: "top-0 left-[82px]",
      textPosition: "top-px left-12",
      imagePosition: "top-[17px]",
      imageMinHeight: "min-h-[312px]",
      imageMaxHeight: "max-h-[312px]",
      bgPosition: "top-[15px] left-0",
    },
    q2: {
      name: "Ginger Chutney",
      image: "/img/andhra/mask-group-2.png",
      position: "top-[241px] left-[452px]",
      minWidth: "min-w-[210px]",
      maxWidth: "max-w-[210px]",
      minHeight: "min-h-[254px]",
      maxHeight: "max-h-[254px]",
      badgePosition: "top-0 left-[43px]",
      textPosition: "top-px left-[9px]",
      imagePosition: "top-3.5",
      imageMinHeight: "min-h-60",
      imageMaxHeight: "max-h-60",
      bgPosition: "",
    },
    q3: {
      name: "Coconut Chutney",
      image: "/img/andhra/mask-group-1.png",
      position: "top-[509px] left-[155px]",
      minWidth: "min-w-[210px]",
      maxWidth: "max-w-[210px]",
      minHeight: "min-h-[302px]",
      maxHeight: "max-h-[302px]",
      badgePosition: "top-[233px] left-[42px]",
      textPosition: "top-[234px] left-2",
      imagePosition: "top-0",
      imageMinHeight: "min-h-[249px]",
      imageMaxHeight: "max-h-[249px]",
      bgPosition: "",
    },
    q4: {
      name: "Sambar",
      image: "/img/andhra/mask-group.png",
      position: "top-[500px] left-[376px]",
      minWidth: "min-w-[286px]",
      maxWidth: "max-w-[286px]",
      minHeight: "min-h-[371px]",
      maxHeight: "max-h-[371px]",
      badgePosition: "top-[302px] left-[81px]",
      textPosition: "top-[303px] left-[43px]",
      imagePosition: "top-0",
      imageMinHeight: "min-h-[317px]",
      imageMaxHeight: "max-h-[317px]",
      bgPosition: "top-0.5 left-0",
    },
  },
};

const FoodItem = ({ item }: { item: FoodItemType }) => (
  <div
    className={`absolute ${item.minWidth} ${item.maxWidth} ${item.minHeight} ${item.maxHeight} ${item.position} pointer-events-none`}
  >
    {/* {item.bgPosition && (
      <div
        className={`absolute ${item.minWidth} ${item.maxWidth} min-h-[317px] max-h-[317px] ${item.bgPosition} bg-[#d9d9d9] rounded-[39px] z-0`}
      />
    )} */}
    <img
      className={`${item.minWidth} ${item.maxWidth} ${item.imageMinHeight} ${item.imageMaxHeight} ${item.imagePosition} absolute left-0 z-10 rounded-[39px]`}
      alt={`${item.name} image`}
      src={item.image}
    />
    <Badge
      className={`absolute min-w-[124px] max-w-[124px] min-h-[29px] max-h-[29px] ${item.badgePosition} bg-[#08224c] rounded-[15px] flex items-center justify-center z-20`}
    >
      <div className="relative w-full h-full flex items-center justify-center font-normal text-white text-[21px] text-center leading-[23.1px] tracking-[-0.63px]">
        {item.name}
      </div>
    </Badge>
  </div>
);

const MilkyMistProduct = () => (
  <div className="w-[500px] h-[500px] absolute top-[30px] right-[100px]">
    <img
      className="relative w-full h-auto object-contain"
      alt="Milky Mist Skyr"
      src="/img/12g-1.png"
    />
    <Badge className="absolute min-w-[138px] max-w-[138px] min-h-[138px] max-h-[138px] bottom-0 right-0 bg-[#0b254d] rounded-[69px] flex items-center justify-center z-20">
      <div className="flex flex-col items-center justify-center w-full h-full text-white text-[29px] text-center tracking-[-0.87px] leading-[31.9px]">
        12g
        <br />
        PROTEIN
      </div>
    </Badge>
  </div>
);

const Header = ({
  selectedState,
  setSelectedState,
}: {
  selectedState: string;
  setSelectedState: (state: string) => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const states = ["Karnataka", "Andhra Pradesh", "Tamil Nadu", "Kerala"];

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    setIsDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full min-h-[65px] max-h-[65px] bg-white shadow-md z-50 flex items-center">
      <div className="w-full max-w-screen-xl mx-auto flex flex-row items-center justify-between px-4 sm:px-12">
        <img
          className="min-h-[40px] max-h-[40px] min-w-[145px] max-w-[145px] object-contain"
          alt="MilkyMist"
          src="https://static.wixstatic.com/media/972f01_eec37aaba55849debf25ce804b886daa~mv2.png/v1/crop/x_4,y_0,w_436,h_120/fill/w_145,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MMD.png"
        />
        <div className="relative">
          <Button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-[#0b254d] rounded-full px-6 flex items-center text-white text-base font-light text-center min-w-[180px] max-w-[180px] justify-between"
          >
            <span>{selectedState || "Select State"}</span>
            <svg
              className={`min-w-4 max-w-4 min-h-4 max-h-4 ml-2 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              {states.map((state) => (
                <button
                  key={state}
                  onClick={() => handleStateSelect(state)}
                  className={`w-full px-4 py-3 text-left transition-colors ${
                    selectedState === state
                      ? "bg-[#0b254d] text-white"
                      : "text-[#0b254d] hover:bg-gray-50"
                  } ${state === states[0] ? "rounded-t-lg" : ""} ${
                    state === states[states.length - 1] ? "rounded-b-lg" : ""
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const LocationIndicator = ({
  onStateDetected,
}: {
  onStateDetected: (state: string) => void;
}) => {
  const [state, setState] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getLocationFromBrowser = async (): Promise<string | null> => {
    if (!navigator.geolocation) {
      throw new Error("Geolocation is not supported by your browser.");
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
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
            resolve(stateName);
          } catch (e) {
            reject(new Error("Failed to fetch location details."));
          }
        },
        (err) => {
          reject(new Error("Location access denied or unavailable."));
        }
      );
    });
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // First try ipapi.co service
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error("Failed to fetch location data from ipapi");
        }
        const data = await response.json();
        const stateName = data.region || null;

        if (!stateName) {
          throw new Error("No state information from ipapi");
        }

        setState(stateName);
        onStateDetected(stateName);
      } catch (e) {
        // If ipapi fails, try browser geolocation as fallback
        try {
          const browserStateName = await getLocationFromBrowser();
          if (browserStateName) {
            setState(browserStateName);
            onStateDetected(browserStateName);
          } else {
            setError("Could not determine location.");
          }
        } catch (browserError) {
          setError("Failed to detect location through all available methods.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, [onStateDetected]);

  return (
    <div className="text-center absolute bottom-[100px] right-[100px]">
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
  const [selectedState, setSelectedState] = useState<string>("Karnataka");

  const handleStateDetected = (state: string) => {
    if (!selectedState) {
      setSelectedState(state);
    }
  };

  // Get the food items for the selected state
  const currentStateFoodItems =
    foodItemsByState[selectedState] || foodItemsByState["Karnataka"];

  return (
    <>
      <Header
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />
      <>
        {/* For large screens: original layout preserved and scaled */}
        <div className="relative top-[-100px] left-[0px]">
          <FoodItem item={currentStateFoodItems.q1} />
          <FoodItem item={currentStateFoodItems.q2} />
          <FoodItem item={currentStateFoodItems.q3} />
          <FoodItem item={currentStateFoodItems.q4} />
          <div className="absolute top-[275px] right-[650px] font-bold text-[#0b254d] text-[135px] text-center tracking-[-4.05px] leading-[148.5px] whitespace-nowrap">
            =
          </div>
        </div>
        <MilkyMistProduct />
        <LocationIndicator onStateDetected={handleStateDetected} />
      </>
    </>
  );
};
