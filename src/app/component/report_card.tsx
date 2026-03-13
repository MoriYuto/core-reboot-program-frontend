import { IconComponent } from "./icon_component";

type ReportCardProps = {
  index: string;
  title: string;
  Icon: IconComponent;
};

export const ReportCard = ({ index, title, Icon }: ReportCardProps) => {
  return (
    <article className="rounded-2xl px-[2.4rem] py-[2.4rem] border-[0.1rem] border-surface-container bg-surface-container-light flex flex-col gap-[3.2rem] w-full">
      <div className="flex flex-row items-start justify-start gap-[1.6rem]">
        <div className="rounded-xl p-[1.5rem] border-[0.2rem] bg-primary-glass border-primary-glass-light" aria-hidden="true">
          <Icon size="2.5rem" className="text-primary" />
        </div>
        <div className="flex flex-col items-start justify-center gap-[0.4rem]">
          <span className="text-label-small text-primary" aria-label={`レポート${index}`}>{index}</span>
          <h3 className="text-label-medium text-on-surface">{title}</h3>
        </div>
      </div>
    </article>
  );
};
