const filters = [
  { label: "All", value: "all" },
  { label: "Core Team", value: "core team" },
  { label: "Leadership", value: "leadership" },
];

export function Filter({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (value: string) => void;
}) {
  return (
    <div className="flex justify-center gap-4 mb-8 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => setSelected(filter.value)}
          className={`px-4 py-[5px] rounded-full font-medium border transition cursor-pointer
              ${
                selected === filter.value
                  ? "bg-primary text-white dark:bg-primary dark:text-white border-primary dark:primary"
                  : "bg-transparent text-neutral-700 dark:text-gray-200 border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              }
            `}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
