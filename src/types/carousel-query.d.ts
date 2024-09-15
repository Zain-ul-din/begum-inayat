export default interface CarouselQueryRes {
  data: {
    carouselCollection: {
      items: CarouselItemType[];
    };
  };
}

export interface CarouselItemType {
  id: string;
  image: {
    url: string;
  };
  description: string;
  postedAt: string;
}
