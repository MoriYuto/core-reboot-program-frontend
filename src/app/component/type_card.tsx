import React from "react";
import { IconComponent } from "./icon_component";

type TypeCardProps = {
  Icon: IconComponent;
  title: string;
  subtitle: string;
  description: string;
};

export const TypeCard: React.FC<TypeCardProps> = ({
  Icon,
  title,
  subtitle,
  description,
}) => {
  return (
    <article className="rounded-2xl px-[3.2rem] py-[3.2rem] border-[0.1rem] border-primary bg-surface-container-light flex flex-col gap-[3.2rem] w-full">
      <div className="flex flex-row items-start justify-start gap-[1.6rem]">
        <div className="rounded-xl px-[1rem] py-[1rem] border-[0.2rem] bg-primary-glass border-primary" aria-hidden="true">
          <Icon size="2.5rem" className="text-primary" />
        </div>
        <div className="flex flex-col items-start justify-center gap-[0.8rem]">
          <h3 className="text-label-large text-on-surface">
            {title}
          </h3>
          <p className="text-body-small text-on-surface">
            {subtitle}
          </p>
        </div>
      </div>
      <p className="text-body-small text-on-surface">{description}</p>
    </article>
  );
};
