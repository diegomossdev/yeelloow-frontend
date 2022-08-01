export type Photos = {
  eventId: number;
  filename: string;
  id: number;
  originalname: string;
  path: string;
  size: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type Event = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  coverimg: string;
  photos: Photos[];
  createdAt: string;
  updatedAt: string;
};
