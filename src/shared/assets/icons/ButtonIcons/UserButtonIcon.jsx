export const UserButtonIcon = (props) => {
  const { color } = props;
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 8C11.2957 8 12.0587 7.68393 12.6213 7.12132C13.1839 6.55871 13.5 5.79565 13.5 5C13.5 4.20435 13.1839 3.44129 12.6213 2.87868C12.0587 2.31607 11.2957 2 10.5 2C9.70435 2 8.94129 2.31607 8.37868 2.87868C7.81607 3.44129 7.5 4.20435 7.5 5C7.5 5.79565 7.81607 6.55871 8.37868 7.12132C8.94129 7.68393 9.70435 8 10.5 8ZM3.965 14.493C3.87217 14.7411 3.86192 15.0126 3.9358 15.267C4.00967 15.5214 4.16371 15.7452 4.375 15.905C6.12634 17.266 8.28198 18.0034 10.5 18C12.81 18 14.938 17.216 16.631 15.9C17.061 15.567 17.235 14.997 17.039 14.49C16.5312 13.168 15.6346 12.0311 14.4673 11.2292C13.3001 10.4274 11.9171 9.99829 10.501 9.99861C9.08483 9.99894 7.70208 10.4287 6.5352 11.231C5.36831 12.0334 4.47216 13.1708 3.965 14.493Z"
        fill={color}
      />
    </svg>
  );
};
