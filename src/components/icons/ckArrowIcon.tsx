"use client";

import { useRouter } from "next/navigation";

interface ckArrowIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  size?: number | string;
  color?: any;
  component?: React.ElementType;
  to?: string;
}

export const ckArrowIcon: React.FC<ckArrowIconProps> = ({
  size,
  color,
  style,
  component: Component = "div",
}) => {
  return (
    <Component style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width={size}
        height={size}
      >
        <g id="Layer_2">
          <polygon
            points="436.09 64.41 436.09 373.7 369.3 373.7 369.3 177.15 110.39 436.09 64.41 390.11 323.34 131.2 126.8 131.2 126.8 64.41 436.09 64.41"
            style={{
              fill: color,
            }}
          />
        </g>
      </svg>
    </Component>
  );
};

export const backArrow: React.FC<ckArrowIconProps> = ({
  size,
  color,
  style,
  className,
  component: Component = "div",
  to,
}) => {
  const router = useRouter();
  return (
    <Component
      className={className}
      style={style}
      onClick={() => {
        if (to) {
          router.push(to);
        }
      }}
    >
      <svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width={size}
        height={size}
      >
        <polygon
          points="24.7 250.25 224.76 50.19 267.96 93.39 140.82 220.52 475.8 220.51 475.8 279.99 140.82 279.98 267.96 407.11 224.76 450.31 24.7 250.25"
          style={{ fill: color }}
        />
      </svg>
    </Component>
  );
};

export const crokan: React.FC<ckArrowIconProps> = ({
  size,
  color,
  style,
  className,
  component: Component = "div",
  to,
}) => {
  const router = useRouter();
  return (
    <Component
      className={className}
      style={{
        background: "inherit",
        ...style,
      }}
      onClick={() => {
        if (to) {
          router.push(to);
        }
      }}
    >
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 790 800"
        width={size}
        height={size}
      >
        <path
          d="M687.6,69.62C622.7-.96,527.69,9.85,434.54,7.21c-66.08-1.57-136.08-15.2-201.02-.35C-36.56,74.37-93.28,653.02,174.53,771.26c68.91,30.31,150.58,26.24,225.6,28.47,156.78,3.25,309.84-21.37,363.09-172.05,36.03-100.27,29.84-210.1,15.33-314.28-13.4-80.95-32.1-179.75-90.8-243.62l-.14-.15ZM652.69,548.49c-12.84,49.49-49.49,110.27-111.1,117.98-12.53,1.26-25.36-.65-36.84-5.46-62.61-28.04-58.73-108.85-31.15-158.84,20.32-39.38,70.66-83.85,121.26-83.68,10.15.03,20.24,2.16,29.01,6.94,40.56,22.14,38.72,86.06,28.86,122.85l-.05.2ZM609.14,231.59c-2.43,68.61-74.02,112.42-124.13,156.77-40.04,33.9-73.9,73.95-102.35,116.4-40.01,57.59-94.72,152.93-184.87,129.68-2.81-.73-5.57-1.65-8.22-2.78-112.59-48.2-115.71-313.31-29.04-413.32,55.59-61.23,111.92-50.83,189.46-39.54,27.36,3.75,55.49,5.5,83.21,3.17,30.09-2.15,59.47-9.07,89.55-10.98,47.11-3.42,85.89,14.41,86.39,60.39v.2Z"
          style={{ fill: color }}
        />
      </svg>
    </Component>
  );
};
