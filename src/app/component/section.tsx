import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
};

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return (
    <section className="flex flex-col items-center px-[4vw] py-[9.6rem] bg-linear-to-b from-surface-light to-surface">
      <div
        className="h-[0.4rem] w-[6.4rem] bg-primary"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-[6.4rem] w-full mt-[3.6rem]">
        {children}
      </div>
    </section>
  );
};

export const SectionContainerLight = ({ children }: SectionContainerProps) => {
  return (
    <section className="flex flex-col items-center px-[4vw] py-[9.6rem] bg-surface-light">
      <div
        className="h-[0.4rem] w-[6.4rem] bg-primary"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-[6.4rem] w-full mt-[3.6rem]">
        {children}
      </div>
    </section>
  );
};