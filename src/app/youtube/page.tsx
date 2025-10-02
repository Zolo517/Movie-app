import { Navigation } from "@/components/Navigation";
import { Filter } from "@/app/youtube/_components/Filter";
import { Menu } from "@/components/Menu";
import { Videos, Shorts } from "@/app/youtube/_components/VideosCard";

const HomePageVideos = [
  {
    titleH1: "BLACKPINK - ‘Hard to Love’",
    img: "https://i.ytimg.com/vi/7Hr3p1BHC_E/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDTmJApZwgXvzPoYIr-J2rfimtB9A",
    views: "44M views • 2 years ago",
    channelImg:
      "https://yt3.ggpht.com/U3VrCkKjzTpQ3VYv4SCPjNfDHeJV-swGNnhLYhr0nV4lZz_GVUNzK4EB-HFRfKv9S5VNh14uAg=s88-c-k-c0x00ffffff-no-rj",
    channelName: "BLACKPINK",
  },
  {
    titleH1: "Justin Bieber - YUKON (Official Video)",
    img: "	https://i.ytimg.com/vi/Pat0OELu37Y/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLCfube8WrhL7Jjd68AZdgtwtZWpAQ",
    views: "874k views • 3 weeks ago",
    channelImg:
      "https://yt3.ggpht.com/SEuysGfWIZV1gHzVRKhW6Fkh-mPiKSMdGyHCbU3WsVGVMuTBBco3ugCnwOnlxx2jT7hp6uPkm4M=s68-c-k-c0x00ffffff-no-rj",
    channelName: "Justin Bieber",
  },
 
  
 
];
const filterDescriptions = [
  "Music",
  "Mixes",
  "Indie pop music",
  "Contemporary R&B",
  "Interscope Records",
  "Live",
  "Jennie Kim",
  "Justin Bieber",
  "Trailers",
  "Taylor Swift",
];
const MenuSvgs = [
  {
    svg: "M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5H14v-8h-4v8H5.5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146Z",
    menuName: "Home",
  },
  {
    svg: "m7.61 15.719.392-.22v-2.24l-.534-.228-.942-.404c-.869-.372-1.4-1.15-1.446-1.974-.047-.823.39-1.642 1.203-2.097h.001L15.13 3.59c1.231-.689 2.785-.27 3.466.833.652 1.058.313 2.452-.879 3.118l-1.327.743-.388.217v2.243l.53.227.942.404c.869.372 1.4 1.15 1.446 1.974.047.823-.39 1.642-1.203 2.097l-.002.001-8.845 4.964-.001.001c-1.231.688-2.784.269-3.465-.834-.652-1.058-.313-2.451.879-3.118l1.327-.742Zm1.993 6.002c-1.905 1.066-4.356.46-5.475-1.355-1.057-1.713-.548-3.89 1.117-5.025a4.14 4.14 0 01.305-.189l1.327-.742-.942-.404a4.055 4.055 0 01-.709-.391c-.963-.666-1.578-1.718-1.644-2.877-.08-1.422.679-2.77 1.968-3.49l8.847-4.966c1.905-1.066 4.356-.46 5.475 1.355 1.057 1.713.548 3.89-1.117 5.025a4.074 4.074 0 01-.305.19l-1.327.742.942.403c.253.109.49.24.709.392.963.666 1.578 1.717 1.644 2.876.08 1.423-.679 2.77-1.968 3.491l-8.847 4.965ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z",
    menuName: "Shorts",
  },
  {
    svg: "M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z",
    menuName: "Subscriptions",
  },
  {
    svg: "M12 20.5c1.894 0 3.643-.62 5.055-1.666a5.5 5.5 0 00-10.064-.105.755.755 0 01-.054.099A8.462 8.462 0 0012 20.5Zm4.079-5.189a7 7 0 012.142 2.48 8.5 8.5 0 10-12.443 0 7 7 0 0110.3-2.48ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2-12.5a2 2 0 11-4 0 2 2 0 014 0Zm1.5 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0Z",
    menuName: "You",
  },
  {
    svg: "M14.203 4.83c-1.74-.534-3.614-.418-5.274.327-1.354.608-2.49 1.6-3.273 2.843H8.25c.414 0 .75.336.75.75s-.336.75-.75.75H3V4.25c0-.414.336-.75.75-.75s.75.336.75.75v2.775c.935-1.41 2.254-2.536 3.815-3.236 1.992-.894 4.241-1.033 6.328-.392 2.088.641 3.87 2.02 5.017 3.878 1.146 1.858 1.578 4.07 1.215 6.223-.364 2.153-1.498 4.1-3.19 5.48-1.693 1.379-3.83 2.095-6.012 2.016-2.182-.08-4.26-.949-5.849-2.447-1.588-1.499-2.578-3.523-2.784-5.697-.039-.412.264-.778.676-.817.412-.04.778.263.818.675.171 1.812.996 3.499 2.32 4.748 1.323 1.248 3.055 1.973 4.874 2.04 1.818.065 3.598-.532 5.01-1.681 1.41-1.15 2.355-2.773 2.657-4.567.303-1.794-.056-3.637-1.012-5.186-.955-1.548-2.44-2.697-4.18-3.231ZM12.75 7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.886l.314.224 3.5 2.5c.337.241.806.163 1.046-.174.241-.337.163-.806-.174-1.046l-3.186-2.276V7.5Z",
    menuName: "History",
  },
];
const HomePageShorts = [
  {
    img: "https://assets.vogue.com/photos/67dde821a663b4a37faf9459/master/w_1600%2Cc_limit/JENNIE_CHANEL_MAYANTOLEDANO_002-FINALS-NEW.jpg",
    description: "JENNIE is ready to perform SOLO at Coachella! ",
    views: "274k views",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9e1qJMD1G36imeWkgWa0okNWeBvfh6EHAUQ&s",
    description: "ROSÉ is ready to perform ON THE GROUND at Coachella!",
    views: "274k views",
  },
  {
    img: "https://assets.vogue.com/photos/67dde821a663b4a37faf9459/master/w_1600%2Cc_limit/JENNIE_CHANEL_MAYANTOLEDANO_002-FINALS-NEW.jpg",
    description: "LISA is ready to perform DREAM at Coachella!",
    views: "274k views",
  },
  {
    img: "https://assets.vogue.com/photos/67dde821a663b4a37faf9459/master/w_1600%2Cc_limit/JENNIE_CHANEL_MAYANTOLEDANO_002-FINALS-NEW.jpg",
    description: "JISOO is ready to perform EARTHQUAKE at Coachella!",
    views: "274k views",
  },
  {
    img: "https://assets.vogue.com/photos/67dde821a663b4a37faf9459/master/w_1600%2Cc_limit/JENNIE_CHANEL_MAYANTOLEDANO_002-FINALS-NEW.jpg",
    description: "BLACKPINK is ready to perform JUMP at Coachella!",
    views: "274k views",
  },
];
export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="flex ">
        <div className="w-16 h-[370px] flex flex-col justify-around ml-[4px]">
          {MenuSvgs.map((MenuSvg, index) => {
            return (
              <Menu
                key={index + Math.random()}
                svg={MenuSvg.svg}
                menuName={MenuSvg.menuName}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-[10px]  font-sans ml-5">
          <div className="flex gap-[10px] my-3">
            <button
              className="rounded-[10px] font-[600] h-8 p-[14px] flex items-center"
              style={{ backgroundColor: "white" }}
            >
              <p className="text-[14px] text-black">All</p>
            </button>
            {filterDescriptions.map((filterDescription, index) => {
              return (
                <Filter
                  key={index + Math.random()}
                  description={filterDescription}
                />
              );
            })}
          </div>
         
            {HomePageVideos.map((HomePageVideo, index) => {
              return (
                <Videos
                  key={index + Math.random()}
                  titleH1={HomePageVideo.titleH1}
                  img={HomePageVideo.img}
                  views={HomePageVideo.views}
                  channelImg={HomePageVideo.channelImg}
                  channelName={HomePageVideo.channelName}
                />
              );
            })}
         
          <div className=" w-full h-[487px] mt-5">
            <div className="flex my-[10px] ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                focusable="false"
                aria-hidden="true"
                // style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
              >
                <path
                  d="m19.45,3.88c1.12,1.82.48,4.15-1.42,5.22l-1.32.74.94.41c1.36.58,2.27,1.85,2.35,3.27.08,1.43-.68,2.77-1.97,3.49l-8,4.47c-1.91,1.06-4.35.46-5.48-1.35-1.12-1.82-.48-4.15,1.42-5.22l1.33-.74-.94-.41c-1.36-.58-2.27-1.85-2.35-3.27-.08-1.43.68-2.77,1.97-3.49l8-4.47c1.91-1.06,4.35-.46,5.48,1.35Z"
                  fill="#f03"
                ></path>
                <path d="m10,15l5-3-5-3v6Z" fill="#fff"></path>
              </svg>
              <p className="text-[18px] font-bold">Shorts</p>
            </div>

            <div className="flex gap-5">
              {HomePageShorts.map((HomePageShort, index) => {
                return (
                  <Shorts
                    key={index + Math.random()}
                    img={HomePageShort.img}
                    views={HomePageShort.views}
                    description={HomePageShort.description}
                  />
                );
              })}
            </div>
          </div>
       
            {HomePageVideos.map((HomePageVideo, index) => {
              return (
                <Videos
                  key={index + Math.random()}
                  titleH1={HomePageVideo.titleH1}
                  img={HomePageVideo.img}
                  views={HomePageVideo.views}
                  channelImg={HomePageVideo.channelImg}
                  channelName={HomePageVideo.channelName}
                />
              );
            })}
          
        </div>
      </div>
    </div>
  );
}
