export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  beds: number;
  baths: number;
  area: number; // in square meters
  isFeatured: boolean;
}
// Pill component props
export interface PillProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

// ListingCard props
export interface ListingProps {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  tag: string;
}
