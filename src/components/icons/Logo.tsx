import { ckArrowIconProps } from "./ckArrowIcon";

export const Logo: React.FC<ckArrowIconProps> = ({
  size,
  color,
  style,
  className,
  component: Component = "div",
}) => {
  return (
    <Component className={className} style={style}>
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 570 587.76"
        width={size}
        height={size}
      >
        <path
          d="M326.33,587.72c-126.29,2.01-255.75-68.39-304.97-187.27C-15.81,313.54-3.77,208.63,52.06,132.35,151.6-8.32,365.82-38.9,508.22,50.43c39.66,24.97,89.07,81.84,41.95,114.72-30.23,18.86-62.15,22.9-103.53,32.95-45.07,10.7-96.22,21.06-129.21,50.59-25.56,23.32-27.65,57.79-3.95,82.72,11.3,12.2,26.94,21.19,43.25,28.23,22.13,9.5,46.34,16.02,69.94,21.66,44,11.92,124.6,20.11,140.61,57.28,7.02,18.64-.42,36.72-12.45,54.57-47.82,64.84-147.11,93.27-228.25,94.56h-.25Z"
          style={{
            fill: color,
          }}
        />
      </svg>
    </Component>
  );
};
