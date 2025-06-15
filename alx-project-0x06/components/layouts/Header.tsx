// alx-project-0x03/components/layout/Header.tsx

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


const Header: React.FC = () => {
    const pathname = usePathname();
    const count = useSelector((state: RootState) => state.counter.value);

    return (
        <header className="fixed w-full bg-white shadow-md">
            <div className="container mx-auto flex justify-between py-6 px-4">
                <Link href="/" className="text-3xl font-bold text-gray-800">
                    Splash App
                </Link>
                <div className="flex gap-4">
                    {!["/counter-app"].includes(pathname) ? (
                        <>
                            <button className="bg-red-500">Sign In</button>
                            <button className="bg-blue-500">Sign Up</button>
                        </>
                    ) : (
                        <p className="text-lg font-semibold">Current count : {count}</p>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
