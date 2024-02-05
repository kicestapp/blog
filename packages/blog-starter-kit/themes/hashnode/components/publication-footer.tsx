import Image from 'next/image';
import Link from 'next/link';
import LogoWhite from '../assets/logo-white.webp';
import { useAppContext } from './contexts/appContext';
import PublicationSocialLinks from './publication-social-links';
const PublicationFooter = ({ logo, darkMode }: { logo: string; darkMode: any }) => {
	const { publication } = useAppContext();

	return (
		<footer className="bg-primary mt-[120px] px-[24px] py-[40px] text-white transition transition-all duration-500 md:px-[60px]">
			<div className="grid-col-1 grid md:grid-cols-5">
				{/* grid */}

				<div className="col-span-2 mb-[70px] md:mb-0">
					<div className="flex items-center gap-x-1">
						<Link href="/" className="flex flex-shrink-0 items-center text-white">
							<Image src={LogoWhite} alt="Kicest logo" width={100} height={40} className="w-32" />
						</Link>
						<div className="rounded-md bg-white px-1 text-[7px] uppercase text-black">Beta</div>
					</div>

					{/* <Link href="/">
							<Image src={LogoWhite} alt="logo" className="w-36" />
						</Link> */}
					<div className="mx-0 my-2 inline flex items-center justify-between rounded bg-white lg:w-[50%]">
						<PublicationSocialLinks isSidebar={true} links={publication.links} />
					</div>
				</div>

				<div>
					<p className="text-md mb-5 font-bold">Get To Know Us</p>
					<p className="mb-5">
						<Link href={'./about'} className="hover:underline">
							About us
						</Link>
					</p>
					<p className="mb-5">
						{/* <Link href={"#"} className="hover:underline">
								Payment Partners
							</Link> */}
					</p>
					<p className="mb-5">
						<Link href={'mailto:support@kicest.com'} className="hover:underline" target="_blank">
							Contact Us
						</Link>
					</p>
				</div>

				<div className="mb-10 flex flex-col justify-self-center md:mb-0 md:justify-self-end">
					<p className="text-md mb-5 font-bold">Support</p>
					{/* <p className="mb-5">
							<Link href={"#"} className="hover:underline">
								Help
							</Link>
						</p> */}
					<p className="mb-5">
						<Link href="/faqs" className="hover:underline">
							FAQ
						</Link>
					</p>
					<p className="mb-5">
						<Link href="https://blog.kicest.com" className="hover:underline">
							Blog
						</Link>
					</p>
					<p className="mb-5">
						<Link href={'mailto:partner@kicest.com'} className="hover:underline" target="_blank">
							Partner with Us
						</Link>
					</p>
					{/*<p className="mb-5">
							<Link href="/#newsletter" className="hover:underline">
								Newsletter
							</Link>
						</p> */}
				</div>

				<div className="flex flex-col justify-self-start md:justify-self-end">
					<p className="text-md mb-5 font-bold">Legal</p>
					<p className="mb-5">
						<Link href={'./terms'} className="hover:underline">
							Terms of Use
						</Link>
					</p>
					<p className="mb-5">
						<Link href={'./privacy-policy'} className="hover:underline">
							Privacy Policy
						</Link>
					</p>
					<p className="mb-5">
						<Link href={'./disclaimer'} className="hover:underline">
							Disclaimer
						</Link>
					</p>
				</div>
			</div>

			{/* horizontal rule */}
			<div className="my-5 h-px bg-white" />

			<p className="text-sm">
				&copy; {new Date().getFullYear()} KICEST by{' '}
				<Link href="https://solysa.ng" target="_blank" rel="noopener noreferrer">
					Solysa Limited
				</Link>
				. All rights reserved
			</p>
		</footer>
	);
};

export default PublicationFooter;
