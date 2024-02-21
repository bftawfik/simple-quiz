export const PreviousArrow: React.FC<SvgProps> = ({
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
      d="M15.0513 5.07219C15.4256 5.44645 15.4256 6.05323 15.0513 6.42748L9.97897 11.4998L15.0513 16.5722C15.4256 16.9464 15.4256 17.5532 15.0513 17.9275C14.6771 18.3017 14.0703 18.3017 13.696 17.9275L7.94606 12.1775C7.57183 11.8032 7.57183 11.1964 7.94606 10.8222L13.696 5.07219C14.0703 4.69794 14.6771 4.69794 15.0513 5.07219Z"
      fill="black"
    />
  </svg>
);
