import Image from 'next/image';
import Link from 'next/link';
import LogoWhite from '../assets/logo-white.webp';
import { useAppContext } from './contexts/appContext';
import PublicationSocialLinks from './publication-social-links';
const PublicationFooter = ({ logo, darkMode }: { logo: string; darkMode: any }) => {
	const { publication } = useAppContext();

	return (
		<>
			<footer className="bg-primary mt-[120px] px-[24px] py-[40px] text-white transition transition-all duration-500 md:px-[60px]">
				<div className="grid-col-1 grid md:grid-cols-5">
					{/* grid */}

					<div className="col-span-2 mb-[70px]">
						<Link href="/">
							<Image src={LogoWhite} alt="Kicest logo" width={100} height={40} className="w-48" />
						</Link>
						<div className="mx-0 my-2 inline flex items-center justify-between rounded bg-white lg:w-[50%]">
							<PublicationSocialLinks isSidebar={true} links={publication.links} />
						</div>
					</div>

					<div>
						<p className="text-md mb-5 font-bold">Get To Know Us</p>
						<p className="mb-5">
							<Link href={'#'} className="hover:text-gray-300">
								About KICEST
							</Link>
						</p>
						<p className="mb-5">
							<Link href={'#'} className="hover:text-gray-300">
								Payment Partners
							</Link>
						</p>
						<p className="mb-5">
							<Link href={'#'} className="hover:text-gray-300">
								Contact Us
							</Link>
						</p>
					</div>

					<div className="flex flex-col justify-self-start md:justify-self-end">
						<p className="text-md mb-5 font-bold">Legal</p>
						<p className="mb-5">
							<Link href={'#'} className="hover:text-gray-300">
								Terms of Use
							</Link>
						</p>
						<p className="mb-5">
							<Link href={'#'} className="hover:text-gray-300">
								Privacy Policy
							</Link>
						</p>
						<p className="mb-5">
							<Link href={'#'} className="hover:text-gray-300">
								Disclaimer
							</Link>
						</p>
					</div>

					<div className="mb-10 flex flex-col justify-self-center md:mb-0 md:justify-self-end">
						<p className="text-md mb-5 font-bold">Support</p>
						<p className="mb-5">
							<Link href={'#'} className="hover:text-gray-300">
								Help
							</Link>
						</p>
						<p className="mb-5">
							<Link href="/faqs" className="hover:text-gray-300">
								FAQ
							</Link>
						</p>
						<p className="mb-5">
							<Link href={'#'} className="hover:text-gray-300">
								Partner with Us
							</Link>
						</p>
						<p className="mb-5">
							<Link href={'#'} className="hover:text-gray-300">
								Blog
							</Link>
						</p>
						<p className="mb-5">
							<Link href="/#newsletter" className="hover:text-gray-300">
								Newsletter
							</Link>
						</p>
					</div>
				</div>

				{/* horizontal rule */}
				<div className="my-5 h-px bg-white" />

				<p className="text-sm">&copy; {new Date().getFullYear()} KICEST. All rights reserved</p>
			</footer>
		</>
	);
};

export default PublicationFooter;
