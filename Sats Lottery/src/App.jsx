import { useState } from "react";
import QRCode from "qrcode.react";

export default function App() {
  const [lightningUrl, setLightningUrl] = useState("LN:");
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const images = [
  //   "images/scratch-off/Orange-Lotto-Card_00.png",
  //   "images/scratch-off/Orange-Lotto-Card_01.png",
  //   "images/scratch-off/Orange-Lotto-Card_02.png",
  //   "images/scratch-off/Orange-Lotto-Card_03.png",
  //   "images/scratch-off/Orange-Lotto-Card_04.png",
  //   "images/scratch-off/Orange-Lotto-Card_05.png",
  //   "images/scratch-off/Orange-Lotto-Card_06.png",
  //   "images/scratch-off/Orange-Lotto-Card_07.png",
  //   "images/scratch-off/Orange-Lotto-Card_08.png",
  //   "images/scratch-off/Orange-Lotto-Card_09.png",
  //   "images/scratch-off/Orange-Lotto-Card_10.png",
  //   "images/scratch-off/Orange-Lotto-Card_11.png",
  //   "images/scratch-off/Orange-Lotto-Card_12.png",
  //   "images/scratch-off/Orange-Lotto-Card_13.png",
  //   "images/scratch-off/Orange-Lotto-Card_14.png",
  // ];

  // useEffect(() => {
  //   const normalInterval = 300; // Change image every 0.3 seconds
  //   const lastImagePause = 21000; // Pause on last image for 21 seconds
  //   const imageCount = images.length;

  //   const showNextImage = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount);
  //   };

  //   const delay =
  //     currentIndex === imageCount - 1 ? lastImagePause : normalInterval;
  //   const interval = setTimeout(showNextImage, delay);

  //   return () => clearTimeout(interval);
  // }, [currentIndex, images.length]);
 
    // Fetch the lightning URL from the backend
    const handleClick = async () => {
      try {
        const response = await fetch("bore.pub:12524/generate"); // Replace with your backend endpoint
        const data = await response.json();
        setLightningUrl(data);
        // Assuming the response contains { lightningUrl: 'your-url-here' }
      } catch (error) {
        console.error("Error fetching the lightning URL:", error);
      }
    };

   

  

  return (
    <div>
      <div className="flex flex-col gap-12 bg-black justify-center items-center h-screen">
        <h1 className="font-semibold text-4xl text-white">
          Scratch and win some SATs
        </h1>
        <div
          className="flex justify-around items-center shadow-lg h-96 px-3 bg-white rounded-lg"
          style={{ width: "700px" }}
        >
          <div className="flex items-center justify-center">
            <h2 className="uppercase text-orange-600 flex flex-col items-center justify-center">
              <span className="font-semibold text-3xl">Instant</span>
              <span className="font-semibold text-6xl">winner</span>
            </h2>
          </div>

          <div className="flex items-center justify-center">
            {/* {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index}`}
                className={index === currentIndex ? "active" : ""}
                style={{
                  display: index === currentIndex ? "block" : "none",
                  position: "absolute",
                  zIndex: 100,
                }}
              />
            ))} */}
            {lightningUrl ? (
              <QRCode value={lightningUrl} size={256} />
            ) : (
              "Loading QR code..."
            )}
          </div>
        </div>
        <button
          className="text-white bg-orange-400 shadow-xl p-2 rounded-md"
          onClick={handleClick}
        >
          Click here to win
        </button>
      </div>
    </div>
  );
}
