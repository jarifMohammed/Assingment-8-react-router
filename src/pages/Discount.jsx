import  { useState, useEffect } from "react";
import { motion } from "framer-motion";
import discountData from "../../public/discountData";

const Discount = () => {
  const [audioPlayed, setAudioPlayed] = useState(false);

  // Handle initial play button click
  const playAudio = ( audioTrack) => {
    const audio = new Audio(`/audio/${audioTrack}`);

    // Handle play promise
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Audio is playing");
          setAudioPlayed(true); // Set state to indicate audio is playing
        })
        .catch((error) => {
          console.log("Audio play failed: ", error);
        });
    }
  };

  // Effect to auto-play the audio on page load if it's not yet played
  useEffect(() => {
    if (!audioPlayed) {
      const audio = new Audio("audio.mp3");
      audio.play().catch((error) => {
        console.log("Audio auto-play failed: ", error);
      });
    }
  }, [audioPlayed]);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Discounted Products
      </h1>

      {/* Add button to trigger audio playback if not played yet */}
      {!audioPlayed && (
        <button
          onClick={playAudio}
          className="mb-4 p-2 bg-blue-500 text-white rounded"
        >
          Play Audio
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {discountData.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-white shadow-lg rounded-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
            <p className="text-xl text-gray-700">
              Price: ${product.price}{" "}
              <span className="line-through">${product.originalPrice}</span>
            </p>
            <p className="mt-2">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Discount;
