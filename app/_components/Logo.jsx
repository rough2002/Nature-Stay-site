import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-bookingo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height={60}
        width={60}
        quality={100}
        alt="Nature Stay logo"
        className="rounded-full" // This makes the image rounded
      />
      <span className="text-xl font-semibold text-primary-100">
        Nature Stay
      </span>
    </Link>
  );
}

export default Logo;
