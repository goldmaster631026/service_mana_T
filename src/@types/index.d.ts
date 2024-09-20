interface ParentProps {
  id: number;
  description: string;
  imgSrc: string;
}

interface DedCardProps {
  id: number;
  heading: string;
  description: string;
}

interface OurProductProps extends ParentProps {
  summary: string;
  productUrl: string;
}

interface DescriptionProps {
  imgSrc: string;
  description: string;
  degree: number;
}

interface QualityCProps extends ParentProps {
  heading: string;
  triangles: TriangleProps[];
  delay: number;
}

interface TrendingProps {
  imgSrc: string;
  name: string;
  size: number;
  price: number;
  category: string;
}

interface TriangleProps {
  position: {
    left?: number;
    bottom?: number;
    top?: number;
    right?: number;
    floatOr?: string;
  };
  id: number;
  rotation: string;
  delay?: number;
}

interface CartItem extends ParentProps {
  name: string;
  size: number;
  price: number;
  quantity: number;
}

interface SummaryProps {
  label: string;
  value: number;
}

interface FTextFieldProps {
  label: string;
  variant?: "standard" | "filled" | "outlined" | undefined;
  type?: string;
  children?: ReactNode;
  _onChange: ChangeEventHandler;
  name?: string
}

interface CursorProps {
  pageOver?: string;
}

interface IncrementorProps {
  customStyles?: {
    container: string;
  };
}

interface Link1 {
  to: string;
  end: boolean;
  displayName: string;
}

interface NextButtonProps {
  swipingButtonRefNext: any;
}

interface PrevButtonProps {
  swipingButtonRefPrev: any;
}

interface SocialProps {
  name: string;
  link: string;
  icon: any;
  section?: string;
}

interface SocialsProps {
  section?: string;
}

interface PageProps {
  page?: string;
}

interface Link {
  link: string;
  to: string;
}

interface AccordionProps {
  summary: string;
  links: Link[];
  isActive: boolean;
  handleChange: (summary: string) => unknown;
}

interface BestSeller {
  rating: number;
  improvement: string;
  description: string;
  price: number;
  id: number;
}

interface BrandProps {
  id: number;
  imgSrc: string;
  from?: string;
}

interface CollectionProps {
  collectionName: string;
  nbrOfProducts: number;
  collectionPath: string;
  indexId: number;
  imgSource: string;
}

interface FeaturedProInterface extends ParentProps {
  rating: number;
  price: number;
  indexId: number;
  from?: string;
}

interface color {
  firstColor: string;
  secondColor: string;
}

interface CategoryProductProps {
  id: number;
  imgSrc: string;
  discount?: number;
  sneakersName: string;
  sneakersType: string;
  price: number;
}

interface CollectionProps1 {
  id: number;
  imgSrc: string;
  categoryName: string;
  productsNbr: number;
}

interface SizeProps {
  isAvailable: boolean;
  isActive: boolean;
  size: number;
  toggleIsActive: (size: number) => unknown;
}

interface TheLookProps {
  name: string;
  imgSrc: string;
  type: string;
  price: number;
  id: number;
}

interface YouMayLikeProps {
  name: string;
  imgSrc: string;
  company: string;
  price: number;
  id: number;
}

interface CategoryProps {
  url: string;
  imgSrc: string;
  name: string;
  id: number;
}

interface DesignerTalkProps {
  talk: string;
  name: string;
  role: string;
}

interface DiffProps {
  heading: string;
  content: string;
  imgSrc: string;
}

interface AccordionProps1 {
  question: string;
  answer: string;
  expanded: boolean;
  panel: string;
  handleChange: (question: string) => any;
  page?: string;
}

interface PromoProductProps {
  id: number;
  sneakerName: string;
  madeOf: string;
  durabilityType: string;
  imgSrc: string;
  userImage: string;
  rating: number;
  userTestimonial: string;
}

interface TasteProps {
  id: number;
  imgSrc: string;
  heading: string;
  content: string;
}

interface CustomerTestProps {
  customerName: string;
  rating: number;
  testimonial: string;
}

interface TrackerCard {
  id: number;
  measurement: string;
  imgSrc: string;
}

interface UserState {
  id: string;
  username: string;
  email: string;
  token: string;
}

interface SearchModalProps {
  opened: boolean;
  close: () => void;
}
