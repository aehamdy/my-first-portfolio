/* eslint-disable react/prop-types */
import { useState } from "react";

function ProjectDetailsMedia({ gallery = [], thumbnail }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!gallery.length) setActiveIndex(thumbnail);

  const activeMedia = gallery[activeIndex];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:h-[400px] overflow-hidden">
      {/* Main Preview */}
      <div
        className={`${gallery.length > 1 ? "lg:col-span-4" : "lg:col-span-5"} h-[400px] overflow-hidden`}
      >
        <div className="relative w-full h-full rounded-2xl bg-section-light-secondary dark:bg-section-dark-secondary aspect-video overflow-hidden">
          <img
            key={activeMedia.image}
            src={activeMedia.image || thumbnail}
            alt={activeMedia.altText}
            loading="lazy"
            decoding="async"
            className=" w-full h-full object-cover animate-fadeIn"
          />

          {/* Main Image overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>

      {/* Rest Images */}
      {gallery.length > 1 && (
        <div className="lg:col-span-1 h-[103px] lg:h-[400px]">
          <div className="vertical-scrollbar flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:h-full py-2 pe-2">
            {gallery.map((media, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={media.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 shrink-0 aspect-video w-32 lg:w-full
                  ${isActive ? "border-accent scale-[0.98]" : "border-transparent opacity-70 hover:opacity-100 hover:border-accent/40"}`}
                >
                  <img
                    src={media.image}
                    alt={media.altText}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />

                  {/* Active Overlay */}
                  {isActive && (
                    <div className="absolute inset-0 bg-accent/10" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetailsMedia;
