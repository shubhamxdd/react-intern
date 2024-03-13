interface AchivementItemProps {
  src: string;
  count: string;
  label: string;
}

const AchivementItem = ({ src, count, label }: AchivementItemProps) => {
  return (
    <div className="flex gap-3">
      <img
        loading="lazy"
        src={src}
        alt={label}
        className="shrink-0 my-auto aspect-[0.97] w-[43px]"
      />
      <div className="flex flex-col flex-1">
        <div className="text-xl font-bold leading-6 text-neutral-600">
          {count}
        </div>
        <div className="text-xs leading-4 text-neutral-500">{label}</div>
      </div>
    </div>
  );
};

export default AchivementItem;
