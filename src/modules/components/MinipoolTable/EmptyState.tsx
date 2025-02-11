export const EmptyState = ({ description = '', icon = null, onClick = null, title }) => (
  <button
    className={`${
      onClick ? 'hover:border-gray-400' : ''
    } relative mt-4 block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    disabled={!onClick}
    onClick={onClick}
    type="button"
  >
    {icon ?? (
      <svg
        aria-hidden="true"
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    )}
    <span>{title}</span>
    {description && (
      <span className="mt-2 block text-sm font-medium text-gray-900">{description}</span>
    )}
  </button>
)
