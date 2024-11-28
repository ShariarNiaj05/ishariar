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

export interface TimelineEntry {
  title: string;
  content: JSX.Element;
}

export type Skills = {
  _id: string;
  name: string;
  category: string;
  media: [
    {
      _id: string;
      url: string;
      key: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
