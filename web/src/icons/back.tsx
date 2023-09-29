import * as React from "react";

interface IconBackProps extends React.HTMLAttributes<SVGSVGElement> {}

export const IconBack: React.FC<IconBackProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <path
        d="M20 24L12 16L20 8"
        stroke="#929292"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
