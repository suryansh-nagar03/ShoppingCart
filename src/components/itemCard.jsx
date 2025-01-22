import { ShoppingCart } from "lucide-react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ItemCard = ({
  name,
  image,
  category,
  productId,
}) => (
  <div className="group relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
    <img
      src={image}
      alt={`${name} category`}
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
      <div className="bg-[#3a3a3a] opacity-60 py-4 px-8 rounded-full text-white">
        <span className="font-medium">{name}</span>
      </div>
      <Link to={`/${category}/${productId}`}>
        <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors">
          <MoveRight className="w-6 h-6" />
        </button>
      </Link>
    </div>
  </div>
);

export default ItemCard;
