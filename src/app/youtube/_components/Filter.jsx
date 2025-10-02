export function Filter(props) {
    return (
      <button
        className="rounded-[10px] text-[14px] font-[600] h-8 p-[14px] flex items-center"
        style={{ backgroundColor: "#282828" }}
      >
        <p className="text-[14px] ">{props.description}</p>
      </button>
    );
  }