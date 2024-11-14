interface Message {
  text: string;
  createdAt: Firestore.TimeStamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
