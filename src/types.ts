export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  recommended: boolean;
  features: string[];
  buttonText: string;
  buttonStyle: 'solid' | 'ghost';
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WebsiteBlueprint {
  title: string;
  heroSubtitle: string;
  suggestedColors: string[];
  sections: {
    sectionName: string;
    copywritingSummary: string;
  }[];
  recommendedPages: string[];
  featuresToBuild: string[];
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  details: string;
  plan: string;
}
