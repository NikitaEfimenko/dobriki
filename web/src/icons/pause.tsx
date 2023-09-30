import * as React from "react";

interface IconPauseProps extends React.HTMLAttributes<SVGSVGElement> {}

export const IconPause: React.FC<IconPauseProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <rect width="40" height="40" rx="20" fill="white" fill-opacity="0.16" />
      <rect x="14" y="11" width="4" height="18" rx="1" fill="white" />
      <rect x="22" y="11" width="4" height="18" rx="1" fill="white" />
    </svg>
  );
};
