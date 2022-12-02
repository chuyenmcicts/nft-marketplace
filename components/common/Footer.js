import Image from "next/image";

export default function Footer() {
  return (
    <footer className="items-start justify-between px-6 py-4 bg-white dark:bg-dark-color dark:border-dark-color-1 border-gray-color-1">
      <div className="flex items-center justify-center w-full">
        <a className="flex items-center justify-center space-x-4">
          <Image
            src="/assets/logo.png"
            height={50}
            width={50}
            layout="intrinsic"
            alt="logo"
          />
          <h1 className="flex text-2xl font-bold font-poppins">
            The NFT Marketplace
          </h1>
          <Image
            src="/assets/logo.png"
            height={50}
            width={50}
            layout="intrinsic"
            alt="logo"
          />
        </a>
      </div>
      <div className="col-span-7 text-center lg:col-span-8">
        Copyright © 2022 by{" "}
        <a
          href="https://www.youtube.com/channel/@blockofvu"
          className="cursor-pointer text-reject"
        >
          ChuyenMC
        </a>{" "}
        -{" "}
        <a
          href="https://github.com/chuyenmcicts/nft-marketplace"
          className="font-bold fond-poppins"
        >
          Github
        </a>
      </div>
    </footer>
  );
}
