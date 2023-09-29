import * as React from "react";

interface IconPlayerProps extends React.HTMLAttributes<SVGSVGElement> {}

export const IconPlayer: React.FC<IconPlayerProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.16" />
      <path
        d="M16 12.1948V27.9241C16 28.7618 16.9683 29.2282 17.6233 28.7061L27.0609 21.1833C27.5495 20.7939 27.5653 20.0567 27.0938 19.6468L17.6562 11.4402C17.009 10.8773 16 11.3371 16 12.1948Z"
        fill="white"
      />
    </svg>
  );
};
