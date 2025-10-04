import { Rating } from "./Rating";

export const MovieSearchCard = () => {
  return (
    <div className="flex w-[553px] p-2 gap-4">
      <img src="/wicked.jpg" alt="" className="w-[67px] h-[100px] " />
      <div>
        <h4>Wicked</h4>
        <div className="flex gap-1 items-center">
          <svg
            className="text-[#FDE047] dark: text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M7.99967 1.3335L10.0597 5.50683L14.6663 6.18016L11.333 9.42683L12.1197 14.0135L7.99967 11.8468L3.87967 14.0135L4.66634 9.42683L1.33301 6.18016L5.93967 5.50683L7.99967 1.3335Z"
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Rating rating={12} large={"14px"} small={"12px"}></Rating>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[14px]">2024</p>
          <button className="flex p-4 gap-2 items-center">
            <p className="text-[14px] font-medium">See more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M1.33301 5.99998H10.6663M10.6663 5.99998L5.99967 1.33331M10.6663 5.99998L5.99967 10.6666"
                stroke="#18181B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
