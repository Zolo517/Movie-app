import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/navbar";

import { SectionOne } from "@/components/SectionOne";
import { Footer } from "@/components/Footer";
import { SectionTwo } from "@/components/SectionTwo";
import { BadgeButton } from "@/components/BadgeButton";
import { cardContainers, carouselMovie } from "@/lib/type";

export default function Home() {
  const cardNames: cardContainers[] = [
    {
      category: "Upcoming",
      movies: [
        {
          title: "Santa Clause",
          image: "/wicked.jpg",
        },
        {
          title: "Allien Romulus",
          image: "/wicked.jpg",
        },
      ],
    },
    {
      category: "Popular",
      movies: [
        {
          title: "Santa Clause",
          image: "/wicked.jpg",
        },
        {
          title: "Allien Romulus",
          image: "/wicked.jpg",
        },
      ],
    },
    {
      category: "Top Rated",
      movies: [
        {
          title: "Santa Clause",
          image: "/wicked.jpg",
        },
        {
          title: "Allien Romulus",
          image: "/wicked.jpg",
        },
      ],
    },
  ];

  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-Tv",
    "Romance",
    "Sci-Fi",
    "Short",
    "Talk-Show",
    "Thriller",
    "War",
    "Western",
  ];
  const movieItems: carouselMovie[] = [
    {
      image: "/wicked.jpg",
      playing: "Now Playing",
      name: "Wicked",
      desc: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    },
    {
      image: "/gladiator.jpg",
      playing: "Now Playing",
      name: "Gladiator ||",
      desc: "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    },
    {
      image: "/moana.jpg",
      playing: "Now Playing",
      name: "Moana",
      desc: "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
    },
  ];

  return (
    <div className="">
      <Navbar genres={genres}></Navbar>
      <SectionOne movieItems={movieItems}></SectionOne>
      <div className="">
        {cardNames.map((cardName, index) => {
          return (
            <SectionTwo cardNames={cardNames} key={index + Math.random()} />
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

{
  /*
    const movieNames = [
    {
      title: "Santa Clause",
      image: "/wicked.jpg",
    },
    {
      title: "HTTYD",
      image: "/wicked.jpg",
    },
    {
      title: "Allien Romulus",
      image: "/wicked.jpg",
    },
    {
      title: "From the ashes",
      image: "/wicked.jpg",
    },
    {
      title: "Space dog",
      image: "/wicked.jpg",
    },
    {
      title: "The order",
      image: "/wicked.jpg",
    },
    {
      title: "Y2K",
      image: "/wicked.jpg",
    },
    {
      title: "Santa Clause",
      image: "/wicked.jpg",
    },
    {
      title: "Santa Clause",
      image: "/wicked.jpg",
    },
    {
      title: "Santa Clause",
      image: "/wicked.jpg",
    },
  ];
  */
}
