export type MediaItem = {
  url: string;
  key: string;
  _id: string;
};

export type Experience = {
  _id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string | null;
  description: string;
  responsibilities: string[];
  keyInitiatives?: string[];
  media?: MediaItem[];
  createdAt: string;
  updatedAt: string;
};

export type TimelineItem = {
  title: string;
  content: JSX.Element;
};
