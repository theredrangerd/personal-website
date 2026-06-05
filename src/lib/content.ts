import siteData from "../../content/site.json";

export type Activity = {
  title: string;
  period: string;
  description: string;
};

export type Achievement = {
  title: string;
  detail: string;
};

export type SiteLinks = {
  email: string;
  linkedin: string;
  github?: string;
  cvPdf?: string;
};

export type SiteContent = {
  name: string;
  tagline: string;
  about: string;
  interests: string[];
  activities: Activity[];
  achievements: Achievement[];
  links: SiteLinks;
};

export const siteContent: SiteContent = siteData;
