import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type ClientStory = {
  image: string;
  heading: string;
  paragraph: string;
  link: string;
};

export default function ClientStoriesSlider() {
  const [stories, setStories] = useState<ClientStory[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("/assets/clientStories.json")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  if (stories.length === 0) return <div>Loading...</div>;

  const total = stories.length;
  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));
  const story = stories[current];

  return (
    <div className="relative flex flex-col md:flex-row md:items-stretch w-full">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px]">
        <Image
          src={story.image}
          alt={story.heading}
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-lg z-20">
          <button
            className="text-gray-400 hover:text-black transition text-2xl"
            onClick={prev}
            aria-label="Previous slide"
            type="button"
          >
            ←
          </button>
          {stories.map((_, idx) => (
            <span
              key={idx}
              className={`w-2.5 h-2.5 rounded-full transition ${
                idx === current ? "bg-black" : "bg-gray-300"
              }`}
            ></span>
          ))}
          <button
            className="text-gray-400 hover:text-black transition text-2xl"
            onClick={next}
            aria-label="Next slide"
            type="button"
          >
            →
          </button>
        </div>
        <div className="hidden md:block absolute bottom-0 left-16 bg-white shadow-xl w-[450px] p-8 z-30">
          <h3 className="text-2xl text-gray-900 mb-4 ">{story.heading}</h3>
          <p className="text-base font-light mb-6">{story.paragraph}</p>
          <Link
            href={story.link}
            className="
              group relative inline-flex items-center
              px-5 py-3
              rounded-full border border-gray-900
              text-gray-900 text-sm font-medium
              overflow-hidden
              transition-all duration-300 ease-in-out
              transform group-hover:scale-105
              group-hover:border-blue-200
            "
          >
            <span
              className="
                absolute inset-0
                w-0 group-hover:w-full
                bg-teal-300 
                rounded-full
                transition-all duration-500 ease-out
                z-0
              "
            />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Read more <span className="ml-2">→</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="block md:hidden mt-6 bg-white shadow-xl black p-6 max-w-screen-xl mx-auto w-full">
        <h3 className="text-xl text-gray-900 mb-3  highlight-hover">
          {story.heading}
        </h3>
        <p className="text-sm font-light mb-4">{story.paragraph}</p>
        <Link
          href={story.link}
          className="
            group relative inline-flex items-center
            px-4 py-2
            rounded-full border border-gray-900
            text-gray-900 text-sm font-medium
            overflow-hidden
            transition-all duration-300 ease-in-out
            transform group-hover:scale-105
            group-hover:border-blue-200
          "
        >
          <span
            className="
              absolute inset-0
              w-0 group-hover:w-full
              bg-teal-300
              rounded-full
              transition-all duration-500 ease-out
              z-0
            "
          />
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            Read more <span className="ml-2">→</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
