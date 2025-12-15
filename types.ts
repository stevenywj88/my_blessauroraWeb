export interface Perfume {
  id: string;
  name: string;
  tagline: string;
  mood: string;
  bestTime: string;
  intention: string;
  notes: string[];
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface WorkshopSession {
  id: string;
  title: string;
  duration: string;
  description: string;
  price: string;
}
