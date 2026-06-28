function Logo({ className = 'h-10 w-10' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-label="DZ logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" fill="#0B0F14" />
      <path d="M2 2H46V46H2V2Z" fill="#111821" stroke="#1F2937" strokeWidth="2" />
      <path d="M8 8H40V11H11V37H40V40H8V8Z" fill="#6EE7E0" opacity="0.95" />
      <path
        d="M15 15H25.4C31.1 15 35 18.6 35 24C35 29.4 31.1 33 25.4 33H15V15ZM21 20.3V27.7H25.2C27.6 27.7 29 26.3 29 24C29 21.7 27.6 20.3 25.2 20.3H21Z"
        fill="#F8FAFC"
      />
      <path d="M24.8 15H38V20.1L28.9 33H38V40H22.4V34.9L31.5 22H24.8V15Z" fill="#6EE7E0" />
      <path d="M29.3 20.1H33.2L24.1 33H20.2L29.3 20.1Z" fill="#0B0F14" opacity="0.78" />
    </svg>
  );
}

export default Logo;
