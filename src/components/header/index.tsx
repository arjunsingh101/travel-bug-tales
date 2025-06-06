"use client";
import { KeyboardArrowDown } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();

  const isPackagesPage = path.includes("/packages");

  return (
    <header className="absolute flex px-10 pt-5 flex-row justify-between z-50 w-full transition-transform duration-300">
      <div>
        <div className="text-white">
          <Image
            src={
              isPackagesPage
                ? "/images/tbt-logo-black.png"
                : "/images/tbt-logo-white.png"
            }
            width={200}
            height={100}
            alt="logo"
            className="mix-blend-overlay"
          />
        </div>
      </div>
      <div
        className={`${
          isPackagesPage ? "text-[#0C0C0C]" : "text-white"
        } flex flex-row gap-5 items-center`}
      >
        <Link href={"/"} className="hidden md:block">
          Home
        </Link>
        <Link href={"/about"} className="hidden md:block">
          About
        </Link>
        <Link href={"/"} className="hidden md:block">
          Destinations <KeyboardArrowDown fontSize="small" />
        </Link>
        <Link href={"/"} className="hidden md:block">
          Prices <KeyboardArrowDown fontSize="small" />
        </Link>
        <Link href={"/contact"} className="hidden md:block">
          Contact
        </Link>
        <div className="flex lg:hidden">
          <IconButton>
            <MenuIcon className="text-white" />
          </IconButton>
        </div>
      </div>
    </header>
  );
};
