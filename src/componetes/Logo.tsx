import React from "react";
import "../styles/logo.css";

function Logo() {
  return (
    <>
      <div className="logo">
        <MyIcon></MyIcon>
        <h1>
          IMPERIUM <br />
          SOUND
        </h1>
      </div>
    </>
  );
}

const MyIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid meet"
    version="1.0"
    viewBox="2751.4 2487.6 547.2 464.3"
    zoomAndPan="magnify"
    width="80px"
    style={{ fill: "rgb(0, 0, 0)" }}
  >
    <defs>
      <linearGradient
        id="_id359_stfc4ln7j"
        gradientUnits="userSpaceOnUse"
        x1="3025"
        x2="3025"
        y1="2561.22"
        y2="3467.634"
      >
        <stop offset="0" style={{ stopColor: "rgb(209, 200, 193)" }} />
        <stop offset="1" style={{ stopColor: "rgb(209, 200, 193)" }} />
      </linearGradient>
    </defs>
    <path
      d="M3298.59,2693.94v-10.86l-10.8-1.18c-2.9-0.3-34.03-3.42-74.34,2.63v-79.24l-13.67,1.75c-22.59,2.93-43.55,7.26-62.91,12.85c-21.05-44.67-55.86-86.86-104.25-126.06l-7.62-6.2l-7.62,6.2c-48.39,39.2-83.2,81.39-104.25,126.06c-19.36-5.59-40.32-9.92-62.91-12.85l-13.67-1.75v79.24c-40.32-6.05-71.44-2.93-74.34-2.63l-10.8,1.18v10.86c0,89.13,23.95,156.97,71.23,201.7c39.11,36.99,92.91,56.29,156.39,56.29c4.99,0,10.07-0.15,15.21-0.36h17.39l-3.45-14.94c-8.59-37.2-22.83-127.09,16.82-200.34c39.65,73.25,25.41,163.14,16.82,200.34l-3.45,14.94h17.39c5.14,0.21,10.22,0.36,15.21,0.36c63.48,0,117.29-19.3,156.39-56.29C3274.64,2850.91,3298.59,2783.07,3298.59,2693.94z M3189.26,2633.03v56.13c-9.8,2.27-19.9,5.11-30.03,8.71c-2.15-18.84-6.5-37.35-13.04-55.47C3159.68,2638.62,3174.01,2635.45,3189.26,2633.03z M2860.74,2633.03c15.24,2.42,29.58,5.6,43.07,9.38c-6.53,18.12-10.89,36.63-13.04,55.47c-10.13-3.6-20.23-6.44-30.03-8.71V2633.03z M2839.27,2878.04c-40.29-38.08-61.61-96.15-63.51-172.7c12.55-0.39,34.84-0.18,60.79,4.14v71.86c0,54.95,54.44,109.88,108.06,144.15C2909.19,2920.83,2870.75,2907.86,2839.27,2878.04z M2860.74,2781.35v-66.78c9.38,2.42,18.96,5.41,28.52,9.13c-0.48,72.68,30.91,134.71,58.49,175.02C2900.42,2865.97,2860.74,2819.73,2860.74,2781.35z M2976.97,2897.6c-25.71-34.63-60.25-93.58-63.3-162.68c24.83,13.37,48.15,32.66,65.75,60.37C2972.59,2832.34,2973.61,2868.54,2976.97,2897.6z M2987.07,2764.32c-21.02-26.22-46.61-44.34-72.92-56.8c1.6-19.6,5.84-38.83,12.73-57.68c36.84,13.55,65.96,32.91,87.04,58.01C3001.86,2725.82,2993.18,2744.96,2987.07,2764.32z M3025,2683.9c-22.74-24.07-52.38-42.89-88.62-56.35c18.48-38.11,48.06-74.4,88.62-108.64c40.56,34.24,70.14,70.53,88.62,108.64C3077.38,2641.01,3047.74,2659.82,3025,2683.9z M3036.07,2707.85c21.08-25.1,50.21-44.46,87.04-58.01c6.9,18.84,11.13,38.08,12.73,57.68c-26.31,12.46-51.9,30.58-72.92,56.8C3056.82,2744.96,3048.14,2725.82,3036.07,2707.85z M3070.58,2795.29c17.6-27.7,40.92-47,65.75-60.37c-3.05,69.11-37.59,128.05-63.3,162.68C3076.39,2868.54,3077.41,2832.34,3070.58,2795.29z M3160.74,2723.7c9.56-3.72,19.14-6.71,28.52-9.13v66.78c0,38.38-39.68,84.62-87.01,117.38C3129.83,2858.41,3161.22,2796.38,3160.74,2723.7z M3210.73,2878.04c-31.48,29.82-69.93,42.8-105.34,47.45c53.62-34.27,108.06-89.19,108.06-144.15v-71.86c25.95-4.32,48.24-4.54,60.79-4.14C3272.34,2781.89,3251.02,2839.96,3210.73,2878.04z"
      width="70px"
      style={{ fill: "url(#_id359_stfc4ln7j)" }}
    />
  </svg>
);

export default Logo;
