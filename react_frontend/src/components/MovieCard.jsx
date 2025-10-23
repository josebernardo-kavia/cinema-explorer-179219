import PropTypes from "prop-types";

// PUBLIC_INTERFACE
export default function MovieCard({ title, tag }) {
  /** Placeholder movie card with poster mock, title and tag badge. */
  return (
    <div className="group rounded-xl overflow-hidden border border-gray-800 bg-gray-900/60 shadow-soft hover:shadow-lg hover:border-royal/50 transition-all">
      <div className="relative">
        <div className="aspect-[2/3] w-full bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-royal/20 text-royal border border-royal/30">
          {tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-sm sm:text-base font-semibold text-gray-100 group-hover:text-white truncate">
          {title}
        </h3>
        <p className="mt-1 text-xs text-gray-400">Poster placeholder</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired
};
