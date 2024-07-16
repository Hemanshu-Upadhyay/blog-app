import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
  contributors: ReactNode;
  waitlist: ReactNode;
}

export default function AboutLayout({
  children,
  contributors,
  waitlist,
}: AboutLayoutProps) {
  return (
    <div>
      {children}
      {contributors}
      {waitlist}
    </div>
  );
}
