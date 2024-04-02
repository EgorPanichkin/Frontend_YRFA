export const EyeOpen = (props) => {
  const { className, onClick } = props;

  return (
    <svg
      onClick={onClick}
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 14.5C12.663 14.5 13.2989 14.2366 13.7678 13.7678C14.2366 13.2989 14.5 12.663 14.5 12C14.5 11.337 14.2366 10.7011 13.7678 10.2322C13.2989 9.76339 12.663 9.5 12 9.5C11.337 9.5 10.7011 9.76339 10.2322 10.2322C9.76339 10.7011 9.5 11.337 9.5 12C9.5 12.663 9.76339 13.2989 10.2322 13.7678C10.7011 14.2366 11.337 14.5 12 14.5Z"
        fill="#062533"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.66388 12.59C2.51699 12.2083 2.51699 11.7857 2.66388 11.404C3.39111 9.51849 4.67234 7.89744 6.33884 6.75431C8.00535 5.61117 9.97899 4.99956 11.9999 5C16.2569 5 19.8929 7.66 21.3359 11.41C21.4829 11.791 21.4819 12.214 21.3359 12.596C20.6087 14.4815 19.3274 16.1026 17.6609 17.2457C15.9944 18.3888 14.0208 19.0004 11.9999 19C7.74288 19 4.10688 16.34 2.66388 12.59ZM15.9999 12C15.9999 13.0609 15.5785 14.0783 14.8283 14.8284C14.0782 15.5786 13.0607 16 11.9999 16C10.939 16 9.9216 15.5786 9.17146 14.8284C8.42131 14.0783 7.99988 13.0609 7.99988 12C7.99988 10.9391 8.42131 9.92172 9.17146 9.17157C9.9216 8.42143 10.939 8 11.9999 8C13.0607 8 14.0782 8.42143 14.8283 9.17157C15.5785 9.92172 15.9999 10.9391 15.9999 12Z"
        fill="#062533"
      />
    </svg>
  );
};
