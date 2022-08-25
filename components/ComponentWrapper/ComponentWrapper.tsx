import React, { ReactNode } from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  data?: {
    title?: string;
    pageHeader?: boolean;
  };
  textClasses?: string;
}

export default function ComponentWrapper({
  data: { title = '', pageHeader = false } = { title: '', pageHeader: false },
  children,
  ...props
}: IProps): JSX.Element {
  const headerStyles =
    'text-2xl md:text-3xl border-b-4 border-accent w-max mb-12 pb-4 font-bold';

  return (
    <div
      id={props?.id}
      className={`flex flex-col items-center justify-center py-32 bg-primaryBg dark:bg-primaryBgDark ${
        props?.className || ''
      }`}
    >
      <section className="md:max-w-7xl px-6 md:px-0 w-full">
        {pageHeader ? (
          <h1 className={headerStyles}>{title}</h1>
        ) : (
          <h2 className={`${headerStyles} ${props?.textClasses || ''}`}>
            {title}
          </h2>
        )}
        {children}
      </section>
    </div>
  );
}
