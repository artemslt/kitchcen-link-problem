const CopyIcon = ({ width = 25, height = 24, fill = "" }) => {
    return (
        <svg
            aria-label="copy icon"
            width={width}
            height={height}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.37496 3.25C6.067 3.25 3.38538 5.82436 3.38538 9V16.1069C3.38538 16.5211 3.73515 16.8569 4.16663 16.8569C4.5981 16.8569 4.94788 16.5211 4.94788 16.1069V9C4.94788 6.65279 6.92995 4.75 9.37496 4.75H16.68C17.1115 4.75 17.4613 4.41421 17.4613 4C17.4613 3.58579 17.1115 3.25 16.68 3.25H9.37496Z"
                fill={fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.1693 6.79326C15.7933 6.43104 12.3317 6.43104 8.95567 6.79326C7.99392 6.89645 7.22107 7.62304 7.10771 8.55348C6.70731 11.84 6.70731 15.16 7.10771 18.4465C7.22107 19.377 7.99392 20.1035 8.95567 20.2067C12.3317 20.569 15.7933 20.569 19.1693 20.2067C20.131 20.1035 20.9039 19.377 21.0172 18.4465C21.4176 15.16 21.4176 11.84 21.0172 8.55348C20.9039 7.62304 20.131 6.89645 19.1693 6.79326ZM9.12922 8.28398C12.3899 7.93413 15.7351 7.93413 18.9957 8.28398C19.243 8.3105 19.4374 8.49821 19.4653 8.72773C19.8516 11.8984 19.8516 15.1016 19.4653 18.2723C19.4374 18.5018 19.243 18.6895 18.9957 18.716C15.7351 19.0659 12.3899 19.0659 9.12922 18.716C8.88198 18.6895 8.6876 18.5018 8.65964 18.2723C8.27334 15.1016 8.27334 11.8984 8.65964 8.72773C8.6876 8.49821 8.88198 8.3105 9.12922 8.28398Z"
                fill={fill}
            />
        </svg>
    );
};

export default CopyIcon;
