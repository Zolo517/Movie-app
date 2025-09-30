export const Rating = ({rating, starW}:{rating:number, starW:number})=>{
    return (
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M7.72917 1.33337L9.78917 5.50671L14.3958 6.18004L11.0625 9.42671L11.8492 14.0134L7.72917 11.8467L3.60917 14.0134L4.39583 9.42671L1.0625 6.18004L5.66917 5.50671L7.72917 1.33337Z"
              fill="#FDE047"
              stroke="#FDE047"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex items-center">
            <p className="text-[14px]">{ngra}</p>
            <p className="text-[12px] text-[#71717A] ">/</p>
            <p className="text-[12px] text-[#71717A] content-end">10</p>
          </div>
        </div>
    )
}