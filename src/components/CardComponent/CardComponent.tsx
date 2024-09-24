import { CardProps } from "../../utils/interfaces";

const CardComponent: React.FC<CardProps> = ({
  thumbnail,
  title,
  description,
  openGiveawayUrl,
}) => {
  return (
    <div>
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h4 className="text-2xl font-bold font-quicksand">{title}</h4>
      <p className="text-gray-500 font-quicksand">{description}</p>

      <a
        href={openGiveawayUrl}
        className="block mt-4 text-blue-500 underline font-quicksand"
        target="_blank"
        rel="noopener noreferrer"
      >
        Claim Now
      </a>
    </div>
  );
};

export default CardComponent;
