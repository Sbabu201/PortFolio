import React, { useState } from "react";

const Card = ({ imageSrc, title, description, link, detailedDescription }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [showDetailedDescription, setShowDetailedDescription] = useState(false);

    const handleClick = () => {
        setIsFlipped(state => !state);
        setShowDetailedDescription(state => !state)
        if (isFlipped) {
            setShowDetailedDescription(false);
        }
    };

    const handleToggleDescription = () => {
        setShowDetailedDescription(!showDetailedDescription);
    };

    return (
        <div
            className={`not-selectable w-[320px] relative rounded-[10px] overflow-hidden shadow-xl border border-gray-300 md:m-4 border-1  bg-gray-100  text-black hover:border-2 hover:border-purple-600 hover:scale-110 transition-transform duration-300 hover:text-purple-400 ${isFlipped ? "rotate-back" : ""
                }`}
            onClick={handleClick}
        >
            <div
                className={`transform ${isFlipped ? "rotateY-180" : ""
                    } h-80 transition-transform duration-300 ease-in-out`}
            >
                <img className="w-full h-[60%] object-cover" draggable='false' src={imageSrc} alt="Thumbnail" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-xs mb-2">
                        {!isFlipped ? description.substring(0, 80) + "..." : description}
                    </p>
                </div>
            </div>
            <div
                draggable='false'
                className={`transform absolute inset-0 rotateY-180 ${isFlipped ? "bg-purple-200  hover:text-black w-full px-6 py-4 z-10" : "hidden"
                    } flex flex-col justify-between transition-transform duration-500 ease-in-out`}
            >
                <div className="font-bold  text-xl mb-2">{title}</div>
                <p className="text-xs mb-2">
                    {showDetailedDescription ? detailedDescription : description}
                </p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 font-bold hover:text-cyan-600"
                >
                    Go to link &rarr;
                </a>
                {/* More/Less button */}
                {!isFlipped && (
                    <button
                        className="absolute bottom-6 right-4 text-xs  hover:text-cyan-600 transition duration-300 opacity-0 group-hover:opacity-100"
                        onClick={handleToggleDescription}
                    >
                        {showDetailedDescription ? "Less" : "More"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;