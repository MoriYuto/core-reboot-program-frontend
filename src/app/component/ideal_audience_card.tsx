import { ArrowForwardIcon, CheckIcon, CloseIcon } from "./icon_component";

type IdealAudienceCardProps = {
  title: string;
  items: readonly string[];
  isOptimal?: boolean;
};

export const IdealAudienceCard = ({
  title,
  items,
  isOptimal = true,
}: IdealAudienceCardProps) => {
  const iconColorClass = isOptimal ? "text-primary" : "text-on-surface";
  const HeaderIcon = isOptimal ? CheckIcon : CloseIcon;
  const cardBorderClass = isOptimal ? "border-primary" : "border-surface-container";

  return (
    <div className={`rounded-2xl px-[3.2rem] py-[3.2rem] border-[0.1rem] ${cardBorderClass} bg-surface-container-light flex flex-col gap-[3.2rem] w-full`}>
      <div className="flex flex-row items-center justify-start gap-[1.6rem]">
        <div className="rounded-full px-[0.8rem] py-[0.8rem] bg-primary-glass" aria-hidden="true">
          <HeaderIcon size="2.4rem" className={iconColorClass} />
        </div>
        <h3 className="text-label-large text-on-surface">{title}</h3>
      </div>
      <ul className="flex flex-col gap-[3.2rem] list-none p-0 m-0">
        {items.map((item) => (
          <li key={item} className="flex flex-row items-center justify-start gap-[1.6rem]">
            <div className="shrink-0" aria-hidden="true">
              <ArrowForwardIcon size="1.5rem" className={iconColorClass} />
            </div>
            <span className="text-body-small text-on-surface">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

