import React from "react";
import { IconComponent } from "./icon_component";

type IconAndDescriptionProps = {
  Icon: IconComponent;
  title: string;
  description: string;
};

export const IconAndDescription: React.FC<IconAndDescriptionProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center w-[28rem] gap-[0.8rem]">
      <div
        className="rounded-full px-[2rem] py-[2rem] border-[0.2rem] bg-primary-glass border-primary mb-[0.8rem]"
        aria-hidden="true"
      >
        <Icon size="4rem" className="text-primary" />
      </div>
      <p className="text-label-medium text-primary text-center">
        {title}
      </p>
      <p className="text-body-small text-on-surface text-center">
        {description}
      </p>
    </div>
  );
};