import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/NavBar";
import { Rating } from "@/components/Rating";
import Image from "next/image";
import { SectionOne } from "@/components/SectionOne";
import { SectionTwo } from "@/components/SectionTwo";
import * as type from "@/lib/constants";
import { BadgeButton } from "@/components/BadgeButton";

export default function Page() {
  return (
    <div className="">
      <Navbar genres={type.genres}></Navbar>
      <div className="py-45 pt-13 pb-[113px]">
        <div>
          <div className="flex justify-between h-fit">
            <div>
              <h3></h3>
              <p></p>
            </div>
            <div>
              <h4></h4>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                >
                  <path
                    d="M12.9997 1.33325L16.6047 8.63659L24.6663 9.81492L18.833 15.4966L20.2097 23.5233L12.9997 19.7316L5.78967 23.5233L7.16634 15.4966L1.33301 9.81492L9.39467 8.63659L12.9997 1.33325Z"
                    fill="#FDE047"
                    stroke="#FDE047"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Rating rating={1} large={"18px"} small={"16px"}></Rating>
                <p></p>
              </div>
            </div>
          </div>
          <div>
            <Image src={""} alt="" width={1} height={1}></Image>
            <Image src={""} alt="" width={1} height={1}></Image>s
          </div>
        </div>
        <div>
          <BadgeButton></BadgeButton>
          <BadgeButton></BadgeButton>
          <BadgeButton></BadgeButton>
          <BadgeButton></BadgeButton>
          <BadgeButton></BadgeButton>
          <p></p>
          <div>
            <h4>
            </h4> 
          <p></p>
          </div>
        </div>
      </div>
      <SectionTwo>
        
      </SectionTwo>
      <Footer></Footer>
    </div>
  );
}
