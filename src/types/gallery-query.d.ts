export default interface GalleryQueryRes {
  data: {
    imageGalleryCollection: {
      items: GalleryImageType[];
    };
  };
}

export interface GalleryImageType {
  _id: string;
  image: {
    url: string;
  };
  type: {
    name: string;
  };
  postedAt: string;
}
