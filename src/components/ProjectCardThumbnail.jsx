/* eslint-disable react/prop-types */
function ProjectCardThumbnail({ thumbnail, status }) {
  const { image, altText } = thumbnail;

  return (
    <div className="w-full h-[260px] overflow-hidden">
      <img
        src={image}
        alt={altText}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover ${status === "completed" && "group-hover:scale-105"} duration-short`}
      />
    </div>
  );
}

export default ProjectCardThumbnail;
