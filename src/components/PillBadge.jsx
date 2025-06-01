function PillBadge({ color = 'gray', skill = 'Skill' }) {
  let bgClass = '';
  let textClass = '';
  let darkBgClass = '';
  let darkTextClass = '';

  switch (color) {
    case 'blue':
      bgClass = 'bg-blue-100';
      textClass = 'text-blue-800';
      darkBgClass = 'dark:bg-blue-900';
      darkTextClass = 'dark:text-blue-300';
      break;
    case 'gray':
      bgClass = 'bg-gray-100';
      textClass = 'text-gray-800';
      darkBgClass = 'dark:bg-gray-700';
      darkTextClass = 'dark:text-gray-300';
      break;
    case 'red':
      bgClass = 'bg-red-100';
      textClass = 'text-red-800';
      darkBgClass = 'dark:bg-red-900';
      darkTextClass = 'dark:text-red-300';
      break;
    case 'green':
      bgClass = 'bg-green-100';
      textClass = 'text-green-800';
      darkBgClass = 'dark:bg-green-900';
      darkTextClass = 'dark:text-green-300';
      break;
    case 'yellow':
      bgClass = 'bg-yellow-100';
      textClass = 'text-yellow-800';
      darkBgClass = 'dark:bg-yellow-900';
      darkTextClass = 'dark:text-yellow-300';
      break;
    case 'indigo':
      bgClass = 'bg-indigo-100';
      textClass = 'text-indigo-800';
      darkBgClass = 'dark:bg-indigo-900';
      darkTextClass = 'dark:text-indigo-300';
      break;
    case 'purple':
      bgClass = 'bg-purple-100';
      textClass = 'text-purple-800';
      darkBgClass = 'dark:bg-purple-900';
      darkTextClass = 'dark:text-purple-300';
      break;
    case 'pink':
      bgClass = 'bg-pink-100';
      textClass = 'text-pink-800';
      darkBgClass = 'dark:bg-pink-900';
      darkTextClass = 'dark:text-pink-300';
      break;
    default:
      bgClass = 'bg-gray-100';
      textClass = 'text-gray-800';
      darkBgClass = 'dark:bg-gray-700';
      darkTextClass = 'dark:text-gray-300';
  }

  return (
    <span
      className={`text-sm font-medium me-2 px-2.5 py-0.5 rounded-full ${bgClass} ${textClass} ${darkBgClass} ${darkTextClass}`}
    >
      {skill}
    </span>
  );
}

export default PillBadge;
