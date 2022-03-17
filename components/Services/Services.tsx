import React from 'react';
import { Service, THEMES } from '../../types';
import { getIcon } from '../../utils';

interface IProps {
  services: Service[];
}

export default function Services({ services }: IProps): JSX.Element {
  return (
    <div className="flex flex-col items-center my-10 md:my-72">
      <section className="max-w-[1334px] md:px-20 lg:px-106">
        <h2 className="font-bold text-32 md:text-40">My Crafts...</h2>
        <p className="text-lg opacity-75 mb-10 md:text-2xl">
          Let me help you, here’s how.
        </p>
        <ul className="flex flex-col items-center flex-wrap gap-12 md:flex-row lg:flex-nowrap xl:gap-[78px]">
          {services.map(({ title, copy, icon }) => {
            const iconSVG = getIcon({ icon, theme: THEMES.DARK });
            return (
              <article key={title} className="max-w-xs">
                <div className="flex flex-row items-center gap-3 mb-5">
                  <div className="w-11 h-11 flex items-center justify-center bg-primary text-offWhite rounded-[10px]">
                    {iconSVG}
                  </div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                </div>
                <p className="opacity-75 max-w-[274px] lg:max-w-[320px]">
                  {copy}
                </p>
              </article>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
