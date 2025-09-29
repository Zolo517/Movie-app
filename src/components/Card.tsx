export const Card = () => {
  return (
    <div className="w-[439px] h-[230px] gap-1 rounded-[8px]  ">
      <img src="" alt="" className="w-full h-[340px] " />
      <div className="bg-[#F4F4F5] p-2">
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M7.72917 1.33337L9.78917 5.50671L14.3958 6.18004L11.0625 9.42671L11.8492 14.0134L7.72917 11.8467L3.60917 14.0134L4.39583 9.42671L1.0625 6.18004L5.66917 5.50671L7.72917 1.33337Z"
              fill="#FDE047"
              stroke="#FDE047"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>
            <p className="text-[14px]">6.9</p>
            <p className="text-[12px] color-[#71717A]">/10</p>
          </div>
        </div>
        <h3 className="text-[18px]">{}</h3>
      </div>
    </div>
  );
};
