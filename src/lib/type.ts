export type carouselMovie = {
  image: string;
  playing: string;
  name: string;
  desc: string;
};
export type movies = {
  title: string;
  image: string;
}
export type cardContainers =[{
  category : string;
  movies:[{
    title: string;
    image: string;
  }];
}]