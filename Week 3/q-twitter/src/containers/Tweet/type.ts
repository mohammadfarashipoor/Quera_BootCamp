export interface MyTweetData {
  body: string;
  replay: string;
  tags: string[];
}
export interface Tweet {
  body: string;
  user: {
    username: string;
    name: string;
    biography: string;
    id: string;
  };
  reply: string | null;
  likes: string[] | undefined;
  comments: string[];
  favorites: string[];
  favcount: number;
  tags: string[];
  createdAt: string;
  id: string;
}
