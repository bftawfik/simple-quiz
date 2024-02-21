export const NextArrow: React.FC<SvgProps> = ({
  height = 23,
  width = 23,
  fill,
  className,
}) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill={fill}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.9467 5.07219C7.57245 5.44645 7.57245 6.05323 7.9467 6.42748L13.0191 11.4998L7.9467 16.5722C7.57245 16.9464 7.57245 17.5532 7.9467 17.9275C8.32096 18.3017 8.92774 18.3017 9.302 17.9275L15.052 12.1775C15.4262 11.8032 15.4262 11.1964 15.052 10.8222L9.302 5.07219C8.92774 4.69794 8.32096 4.69794 7.9467 5.07219Z"
      fill="black"
    />
  </svg>
);
