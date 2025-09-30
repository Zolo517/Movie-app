export function Menu(props) {
    return (
  
  
        <div className="flex flex-col items-center ">
          <svg
            className="s"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path clipRule="evenodd" d={props.svg} fillRule="evenodd"></path>
          </svg>
          <p className="text-[10px]">{props.menuName}</p>
  </div>
    );
  }