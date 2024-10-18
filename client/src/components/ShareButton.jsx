import { useState } from "react";
import { FaShareSquare } from "react-icons/fa";

const ShareButton = () => {
  const [shared, setShared] = useState(false);

  const handleShare = async (e) => {
    e.preventDefault();
    const pageUrl = window.location.href;

    // Check if navigator.share is supported (for mobile devices)
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Check out this page!",
          url: pageUrl,
        });
        setShared(true)
        setTimeout(() => setShared(false), 3000); // Reset Shared state after 3s
        // alert("Page shared successfully!");
      } catch (error) {
        console.error("Sharing failed:", error);
      }
    } else {
      // Fallback: Copy the URL to clipboard
      try {
        await navigator.clipboard.writeText(pageUrl);
        setShared(true);
        setTimeout(() => setShared(false), 3000); // Reset Shared state after 3s
      } catch (error) {
        console.error("Failed to copy:", error);
      }
    }
  };

  return (
    <>
    {!shared?<button
      className="flex items-center text-3xl px-4 py-2 text-white transition-colors duration-300"
      onClick={handleShare}
    >
      <FaShareSquare className="mr-2 text-primary font-bold"></FaShareSquare>
    </button>
    :<p className="flex items-center text-center">Shared!</p>}
    </>
  )
};

export default ShareButton;
