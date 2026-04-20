import { useEffect, useRef } from "react";
import Button from "../UI/Button";
import GetResultsBtn from "../UI/GetResultsBtn";

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 31 30"
    fill="none"
    className="w-5 h-5"
  >
    <path
      d="M27.1421 25.8926H22.4746V18.5839C22.4746 16.8414 22.4396 14.5989 20.0446 14.5989C17.6134 14.5989 17.2421 16.4951 17.2421 18.4551V25.8926H12.5784V10.8639H17.0584V12.9126H17.1184C17.5673 12.1461 18.2157 11.5156 18.9944 11.0882C19.7731 10.6607 20.6531 10.4523 21.5409 10.4851C26.2659 10.4851 27.1396 13.5951 27.1396 17.6426V25.8926H27.1421ZM7.31211 8.80764C6.77626 8.80838 6.25224 8.65017 5.80632 8.35304C5.3604 8.0559 5.01263 7.63319 4.807 7.13837C4.60137 6.64355 4.54712 6.09885 4.65111 5.5732C4.7551 5.04754 5.01267 4.56453 5.39122 4.18528C5.76977 3.80603 6.2523 3.54758 6.77776 3.44261C7.30323 3.33765 7.84802 3.3909 8.34322 3.59561C8.83842 3.80033 9.26178 4.14732 9.55973 4.59269C9.85769 5.03805 10.0169 5.56179 10.0171 6.09764C10.0176 6.45324 9.94801 6.80545 9.81231 7.13414C9.6766 7.46282 9.47745 7.76155 9.22624 8.01323C8.97502 8.26491 8.67667 8.46461 8.34823 8.60092C8.01979 8.73723 7.66771 8.80747 7.31211 8.80764ZM9.64961 25.8926H4.97336V10.8639H9.64961V25.8926Z"
      fill="currentColor"
    />
  </svg>
);

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 31 30"
    fill="none"
    className="w-5 h-5"
  >
    <path
      d="M16.5688 2.28883C17.9338 2.26758 19.2876 2.27758 20.6413 2.26758C20.683 3.89272 21.3335 5.44296 22.4638 6.61133C23.686 7.70925 25.2409 8.36588 26.8801 8.47633V12.6738C25.3684 12.6367 23.88 12.2931 22.5051 11.6638C21.9192 11.3835 21.3551 11.0596 20.8176 10.6951C20.8076 13.7363 20.8288 16.7776 20.7976 19.8088C20.7178 21.2809 20.231 22.702 19.3913 23.9138C18.699 24.9146 17.7811 25.7386 16.7117 26.3194C15.6424 26.9003 14.4515 27.2216 13.2351 27.2576C11.7437 27.3249 10.2655 26.9514 8.98508 26.1838C7.93117 25.5579 7.03836 24.694 6.37809 23.6613C5.71781 22.6286 5.30839 21.4556 5.18258 20.2363C5.16258 19.7151 5.15133 19.1951 5.17258 18.6838C5.27891 17.6157 5.60341 16.5808 6.12599 15.6432C6.64857 14.7055 7.35809 13.8852 8.21061 13.2329C9.06312 12.5807 10.0405 12.1104 11.0821 11.8513C12.1238 11.5921 13.2076 11.5496 14.2663 11.7263C14.2863 13.2676 14.2238 14.8088 14.2238 16.3513C13.7794 16.1955 13.3085 16.129 12.8383 16.1557C12.3681 16.1823 11.9077 16.3017 11.4838 16.5068C11.0598 16.7119 10.6805 16.9988 10.3678 17.351C10.055 17.7031 9.81496 18.1136 9.66133 18.5588C9.49818 19.1021 9.44882 19.6731 9.51633 20.2363C9.65144 21.095 10.0974 21.8741 10.7695 22.4254C11.4416 22.9767 12.2928 23.2617 13.1613 23.2263C13.7441 23.2092 14.3133 23.0468 14.8173 22.7539C15.3214 22.4609 15.7443 22.0467 16.0476 21.5488C16.2796 21.2222 16.4261 20.8428 16.4738 20.4451C16.5788 18.5801 16.5363 16.7263 16.5476 14.8613C16.5588 10.6638 16.5376 6.47633 16.5688 2.28883Z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 31 30"
    fill="none"
    className="w-5 h-5"
  >
    <path
      d="M28.4426 9.61758C28.4183 8.58045 28.224 7.55433 27.8676 6.58008C27.553 5.74483 27.0579 4.98935 26.4176 4.36758C25.7958 3.72728 25.0403 3.23216 24.2051 2.91758C23.2308 2.56113 22.2047 2.36689 21.1676 2.34258C19.8426 2.26758 19.4176 2.26758 16.0176 2.26758C12.6176 2.26758 12.1926 2.26758 10.8676 2.34258C9.83045 2.36689 8.80433 2.56113 7.83008 2.91758C6.99483 3.23216 6.23935 3.72728 5.61758 4.36758C4.97686 4.98655 4.4853 5.74313 4.18008 6.58008C3.81278 7.55176 3.61409 8.57902 3.59258 9.61758C3.51758 10.9426 3.51758 11.3676 3.51758 14.7676C3.51758 18.1676 3.51758 18.5926 3.59258 19.9176C3.61409 20.9561 3.81278 21.9834 4.18008 22.9551C4.4853 23.792 4.97686 24.5486 5.61758 25.1676C6.23935 25.8079 6.99483 26.303 7.83008 26.6176C8.80433 26.974 9.83045 27.1683 10.8676 27.1926C12.1926 27.2676 12.6176 27.2676 16.0176 27.2676C19.4176 27.2676 19.8426 27.2676 21.1676 27.1926C22.2047 27.1683 23.2308 26.974 24.2051 26.6176C25.0344 26.2914 25.7876 25.7978 26.4177 25.1677C27.0478 24.5376 27.5414 23.7844 27.8676 22.9551C28.224 21.9808 28.4183 20.9547 28.4426 19.9176C28.4426 18.5926 28.5176 18.1676 28.5176 14.7676C28.5176 11.3676 28.5176 10.9426 28.4426 9.61758Z"
      fill="currentColor"
    />
    <path
      d="M16.0178 8.34229C14.747 8.34229 13.5048 8.7191 12.4482 9.42509C11.3917 10.1311 10.5681 11.1345 10.0819 12.3085C9.59556 13.4826 9.46832 14.7744 9.71623 16.0207C9.96414 17.2671 10.5761 18.4119 11.4746 19.3104C12.3732 20.209 13.518 20.8209 14.7643 21.0688C16.0106 21.3167 17.3025 21.1895 18.4765 20.7032C19.6505 20.2169 20.654 19.3934 21.36 18.3368C22.066 17.2802 22.4428 16.038 22.4428 14.7673C22.4428 13.0633 21.7659 11.429 20.5609 10.2241C19.356 9.0192 17.7218 8.34229 16.0178 8.34229ZM16.0178 18.9298C15.1945 18.9298 14.3897 18.6857 13.7052 18.2283C13.0207 17.7709 12.4872 17.1208 12.1721 16.3602C11.8571 15.5996 11.7746 14.7627 11.9353 13.9552C12.0959 13.1478 12.4923 12.4061 13.0744 11.824C13.6566 11.2418 14.3983 10.8454 15.2057 10.6848C16.0132 10.5242 16.8501 10.6066 17.6107 10.9216C18.3713 11.2367 19.0214 11.7702 19.4788 12.4547C19.9362 13.1392 20.1803 13.944 20.1803 14.7673C20.1803 16.3017 18.9297 18.9298 16.0178 18.9298Z"
      fill="currentColor"
    />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 31 30"
    fill="none"
    className="w-5 h-5"
  >
    <path
      d="M28.5953 8.42627C28.4431 7.88117 28.1529 7.38456 27.7526 6.98448C27.3523 6.58441 26.8555 6.2944 26.3103 6.14252C24.2641 5.59377 16.0303 5.59377 16.0303 5.59377C16.0303 5.59377 7.81658 5.58252 5.74908 6.14252C5.20389 6.2944 4.70713 6.58441 4.30683 6.98448C3.90654 7.38456 3.61626 7.88117 3.46408 8.42627C3.07592 10.5213 2.88467 12.6481 2.89283 14.7788C2.88556 16.9011 3.07639 19.0194 3.46283 21.1063C3.61475 21.652 3.90505 22.1492 4.3056 22.5497C4.70615 22.9503 5.20337 23.2406 5.74908 23.3925C7.79283 23.9425 16.0303 23.9425 16.0303 23.9425C16.0303 23.9425 24.2428 23.9425 26.3103 23.3925C26.8555 23.2406 27.3523 22.9506 27.7526 22.5506C28.1529 22.1505 28.4431 21.6539 28.5953 21.1088C28.9737 19.0211 29.157 16.9028 29.1428 14.7813C29.1584 12.6505 28.9751 10.523 28.5953 8.42627ZM13.4016 18.7075V10.8325L20.2553 14.7738L13.4016 18.7075Z"
      fill="currentColor"
    />
  </svg>
);

function SpinningSticker() {
  const stickerRef = useRef(null);
  useEffect(() => {
    let angle = 60;
    let animId;
    const animate = () => {
      angle += 0.3;
      if (stickerRef.current) {
        stickerRef.current.style.transform = `rotate(${angle}deg)`;
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      ref={stickerRef}
      className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 shrink-0"
      style={{ willChange: "transform" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 220 221"
        fill="none"
        className="w-full h-full"
      >
        <g clipPath="url(#clip0_footer_sticker)">
          <circle cx="110" cy="110.903" r="109.623" fill="#FCB8FA" />
          <path
            d="M134.549 76.3317V104.681H127.452V76.3317H112.475L112.475 145.474H127.452L127.452 117.124H134.549V145.474H149.526V76.3317H134.549Z"
            fill="black"
          />
          <path
            d="M93.959 104.434V89.2689H84.1087V132.853H93.959V120.314H89.0666V108.022H107.744V145.482H93.9513L93.959 145.474V138.731L91.3743 141.284C88.6512 143.972 84.9895 145.478 81.1702 145.478C75.1662 145.478 70.2969 140.592 70.2969 134.56V87.2492C70.2969 81.2209 75.1662 76.3318 81.1702 76.3318H96.8744C102.878 76.3318 107.748 81.2209 107.748 87.2492V104.434H93.9628H93.959Z"
            fill="black"
          />
          <text
            fill="black"
            fontSize="17"
            fontWeight="600"
            fontFamily="sans-serif"
            letterSpacing="1"
          >
            <textPath href="#stickerCircle" startOffset="0%">
              • GET HYPED • GET RESULTS • GET NOTICED{" "}
            </textPath>
          </text>
          <defs>
            <path id="stickerCircle" d="M110,18 a92,92 0 1,1 -0.1,0" />
            <clipPath id="clip0_footer_sticker">
              <rect width="220" height="221" fill="white" />
            </clipPath>
          </defs>
        </g>
      </svg>
    </div>
  );
}

const NAV_LINKS = [
  { label: "Expertises", href: "/expertises" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/gethypednl/",
    Icon: LinkedInIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@gethyped.nl",
    Icon: TikTokIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gethyped.nl/",
    Icon: InstagramIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@gethypednl",
    Icon: YouTubeIcon,
  },
];

// GETHYPED wordmark SVG
function GetHypedLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 374 142"
      fill="none"
      className="w-full h-full"
    >
      <path
        d="M346.695 141.574H98.1443V39.7663L342.475 1.31406C358.99 -1.28201 373.926 11.5381 373.926 28.3324V114.227C373.926 129.331 361.735 141.574 346.695 141.574Z"
        fill="black"
      />
      <path
        d="M126.851 41.6173V79.9895L119.894 80.6225V42.651L105.669 44.7503V135.404L119.894 135.268V97.2966L126.851 96.8319V135.204L142.026 135.06V39.3738L126.851 41.6173Z"
        fill="white"
      />
      <path
        d="M170.676 35.1352L166.631 71.5282L166.44 74.6451L166.057 74.6851L165.866 71.6083L161.884 36.4332L145.473 38.861L158.039 100.646V134.908L174.658 134.755V99.6843L188.309 32.5231L170.676 35.1352Z"
        fill="white"
      />
      <path
        d="M292.411 38.2441V17.123L246.695 23.8856V134.074L292.411 133.642V112.528L268.755 113.346V87.4331L291.039 85.9588V65.022L268.755 67.0572V41.1526L292.411 38.2441Z"
        fill="white"
      />
      <path
        d="M219.528 82.9781L210.896 83.6352V46.2806L219.528 45.1989V82.9781ZM191.676 32.0263V134.595L210.752 134.411V101.167L219.6 100.694C231.169 100.077 240.232 90.4779 240.232 78.8436V50.1827C240.232 36.8338 228.424 26.5938 215.268 28.5408L191.676 32.0343V32.0263Z"
        fill="white"
      />
      <path
        d="M334.96 112.865L323.551 113.234V32.1545L334.96 30.7202V112.865ZM298.315 16.2496V133.585L340.888 133.185C352.839 133.073 362.469 123.313 362.469 111.311V32.0984C362.469 18.7495 350.661 8.50946 337.505 10.4565L298.307 16.2576L298.315 16.2496Z"
        fill="white"
      />
      <path
        d="M33.9179 141.574H58.5951V123.57L44.3616 123.987V103.643L57.7334 102.785V84.9174L44.3616 86.1674V65.8155L58.5951 63.9966V45.9924L33.9179 49.8705V141.574Z"
        fill="black"
      />
      <path
        d="M62.3769 45.3915V63.5159L72.2063 62.2579V141.574H84.0782V60.7435L94.6256 59.3974V40.3195L62.3769 45.3915Z"
        fill="black"
      />
      <path
        d="M20.2509 88.4189V68.7721L9.51992 70.1423V125.525L20.2509 125.213V108.971L13.6607 109.348V93.6111L30.2079 92.2009V141.566H20.2589V136.414L18.5275 138.121C16.2856 140.332 13.2698 141.566 10.1343 141.566H8.4189C3.90312 141.566 0.249023 137.888 0.249023 133.361V64.5255C0.249023 59.141 4.15842 54.5498 9.45608 53.7165L20.7774 51.9378C25.732 51.1605 30.2159 55.0066 30.2159 60.0384V87.4814L20.2668 88.4109L20.2509 88.4189Z"
        fill="black"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* ── TOP CTA ── */}
      <div className="flex justify-center items-center px-4 xs:px-6 lg:px-10 pt-16 xs:pt-20 lg:pt-24 pb-10 xs:pb-12 lg:pb-16">
        <div>
          <div className="flex flex-col justify-center items-center xs:flex-row xs:items-end xs:justify-between gap-8">
            <h2 className="font-black leading-[1.0] text-center tracking-tight text-neutral-900 text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[clamp(80px,8vw,120px)]">
              Let's Get Hyped!
            </h2>
           
          </div>
          <div className="flex flex-col justify-center items-center xs:flex-row gap-3 xs:gap-4 mt-8 xs:mt-10">
            <Button text="Mail ons direct" />
            <GetResultsBtn bgColor="#ff3000" textColor="#ffffff" />
          </div>
        </div>
      </div>

      {/* ── BOTTOM OVERLAY SECTION (Vector1 shape) ── */}
      <div className="relative w-[96%] mx-auto mt-16 xs:mt-20 lg:mt-28 h-[200px] xs:h-[250px] sm:h-[300px] lg:h-[386px]">
        {/* Background SVG */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1860 386"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M1859.06 34.8264V349.463C1859.06 365.199 1859.06 380.122 1859.06 385.962L0.642595 385.955C0.642578 383.021 0.642769 379.682 0.642769 371.941V290.843C0.642769 283.856 5.67717 277.887 12.5466 276.741L1819.04 0.740997C1840 -2.74446 1859.06 13.489 1859.06 34.8184"
            fill="#EAE4D8"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 h-full px-4 xs:px-8 lg:px-2 flex flex-col justify-end pb-2 ">
          {/* Main Row */}
          <div className="flex flex-col xs:flex-row xs:items-end xs:justify-between gap-8 xs:gap-6">
            {/* LEFT: Logo */}
            <div className="w-[160px] xs:w-[200px] sm:w-[260px] lg:w-[380px] shrink-0">
              <GetHypedLogo />
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-end items-end">
              {/* LEFT SIDE */}
              <div className="flex flex-col gap-8">
                {/* Nav */}
                <div className="flex flex-wrap gap-2 justify-center items-center">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="px-3 py-3 xs:px-4 xs:py-3 bg-white rounded-[14px] text-[18px] text-neutral-900 font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Follow */}
                <div className="flex items-center gap-3">
                  <p className="font-bold text-[18px] text-black  whitespace-nowrap">
                    Follow us
                  </p>

                  <div className="flex gap-2">
                    {SOCIALS.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-12 h-12 rounded-full  flex items-center justify-center bg-white text-neutral-900  hover:scale-[1.2] transition-all duration-200"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col gap-8 justify-center items-center">
                {/* Contact */}
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-[20px] text-black">Contact</p>
                  <a
                    href="mailto:info@gethyped.nl"
                    className="text-[16px]  text-[#161616] hover:text-neutral-900"
                  >
                    info@gethyped.nl
                  </a>
                  <a
                    href="tel:+31615337496"
                    className="text-[16px] text-[#161616] hover:text-neutral-900"
                  >
                    +31 6 1533 7496
                  </a>
                </div>

                {/* Address */}
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-[18px] text-black">Adres</p>
                  <a
                    href="https://www.google.nl/maps/dir//Beltrumsestraat+6,+7141+AL+Groenlo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] text-neutral-800 hover:text-neutral-900 leading-snug"
                  >
                    Beltrumsestraat 6,
                    <br />
                    7141 AL Groenlo
                  </a>
                </div>
              </div>

              {/* BOTTOM FULL WIDTH */}
              <div className="md:col-span-2 flex justify-evenly w-full text-[14px] text-neutral-600 pt-2">
                <span>© 2025 Get Hyped</span>
                <span>© Design by Dylan</span>
                <span> Privacyvoorwaarden</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
