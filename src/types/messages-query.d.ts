export default interface MessagesQueryRes {
  data: {
    messagesCollection: {
      items: MessageType[];
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
