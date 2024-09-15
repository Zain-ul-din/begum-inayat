export default interface MessagesQueryRes {
  data: {
    messagesCollection: {
      items: [];
    };
  };
}
[];

export interface MessageType {
  _id: string;
  message: {
    json: any;
  };
  role: string;
  author: string;
  picture: {
    url: string;
  };
  order: string;
  postedAt: string;
}
