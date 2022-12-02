import { useTheme } from "next-themes"
import Image from "next/image";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
    const { theme, setTheme } = useTheme();

    return (
        <nav className="fixed z-10 flex flex-row justify-between w-full p-4 bg-white border-b dark:bg-dark-color dark:border-dark-color-1 border-gray-color-1">
            {/* Logo */}
            <Link href="/" className="flex space-x-2">
                <div className="flex flex-row justify-start flex-1">
                    <Image src="/assets/logo.jpg" height={32} width={32} alt="logo" />
                </div>
                <p className="text-lg font-semibold font-poppins text-dark-color-1 dark:text-white">ChuyenMC</p>
            </Link>
            {/* Logo */}

            {/* Menu */}
            <div className="flex space-x-4 font-bold">
                {Menu.map((menu) => (
                    <ActiveLink href={menu.href} key={menu.id} className="" activeLinkClass="text-red-400">
                        {menu.title}
                    </ActiveLink>
                ))}
            </div>
            {/* Menu */}

            <div>
                <button className="px-4 py-1 rounded-md button-gradient">
                    Button
                </button>
            </div>

        </nav>

    )
}

export default Navbar

const Menu = [
    {
        id: 1,
        href: "/",
        title: "Home"
    },
    {
        id: 2,
        href: "/marketplace",
        title: "Marketplace"
    },
    {
        id: 3,
        href: "/profile",
        title: "My NFTs"
    },
]
