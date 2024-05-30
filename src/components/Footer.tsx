import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper"

const Footer = () => {
    return(
        <footer className="h-20 relative bg-white">
            <MaxWidthWrapper>
                <div className="border-t border-gray-200"/>
                <div className="h-full flex flex-col md:flex-row justify-center  items-center md:justify-between">
                    <div className="pb-2 md:pb-0 text-center md:text-left">
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} All rights reserved
                        </p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex space-x-8">
                            <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                                Terms
                            </Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}


export default Footer;