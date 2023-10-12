export enum SelectedPage {
  Home = 'Home',
  Benefits = 'Benefits',
  OurClasses = 'OurClasses',
  ContactUs = 'ContactUs',
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
