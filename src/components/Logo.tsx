export const Logo =(props: {color:string})=>{
   const {color}=props
    return(
   
             <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M5.83268 2.16675V18.8334M14.166 2.16675V18.8334M1.66602 10.5001H18.3327M1.66602 6.33341H5.83268M1.66602 14.6667H5.83268M14.166 14.6667H18.3327M14.166 6.33341H18.3327M3.48268 2.16675H16.516C17.5193 2.16675 18.3327 2.9801 18.3327 3.98341V17.0167C18.3327 18.0201 17.5193 18.8334 16.516 18.8334H3.48268C2.47936 18.8334 1.66602 18.0201 1.66602 17.0167V3.98341C1.66602 2.9801 2.47936 2.16675 3.48268 2.16675Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className={` text-[16px] font-semibold italic `} style={{color: color }}>
            Movie Z
          </p>
        </div>

    )
}


// text-[#4338CA] 