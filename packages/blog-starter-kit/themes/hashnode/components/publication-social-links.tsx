import { ReactElement } from 'react';

import { EarthSVG, InstagramSVG, LinkedinSVG, RssSVG, TwitterXSVG } from './icons/svgs';
import PublicationSocialLinkItem from './publication-social-link-item';

import { twJoin } from 'tailwind-merge';
import { Publication } from '../generated/graphql';

type Props = {
	isSidebar?: boolean;
} & Pick<Publication, 'links'>;

function PublicationSocialLinks(props: Props) {
	const { links, isSidebar } = props;
	const linkSVGMap: { [key: string]: { icon: ReactElement; labelText: string } } = {
		twitter: {
			icon: <TwitterXSVG className="h-5 w-5 stroke-current" />,
			labelText: 'Find me on Twitter, external website, opens in new tab',
		},
		instagram: {
			icon: <InstagramSVG className="h-5 w-5 fill-current" />,
			labelText: 'Find me on Instagram, external website, opens in new tab',
		},
		website: {
			icon: <EarthSVG className="h-5 w-5 fill-current" />,
			labelText: 'Check out my website, external website, opens in new tab',
		},
		linkedin: {
			icon: <LinkedinSVG className="h-5 w-5 fill-current" />,
			labelText: 'Find me on LinkedIn, external website, opens in new tab',
		},
	};

	return (
		<>
			{links && (links.twitter || links.instagram || links.website || links.linkedin) ? (
				<div
					className={twJoin(
						'blog-social-media-section',
						'flex flex-row flex-wrap gap-y-2',
						!isSidebar
							? 'justify-center gap-x-1.5 text-slate-700 dark:text-slate-300'
							: 'gap-x-5 gap-y-4 text-slate-600 dark:text-slate-200',
					)}
				>
					{Object.entries(links)
						.filter((entry) => entry[0] !== '__typename')
						.map((link) => {
							const key = link[0];
							const value = link[1];
							if (!value) return null;
							return (
								<PublicationSocialLinkItem
									key={key}
									href={value}
									labelText={linkSVGMap[key]?.labelText}
									isSidebar={!!isSidebar}
								>
									{linkSVGMap[key]?.icon}
								</PublicationSocialLinkItem>
							);
						})}
					<PublicationSocialLinkItem
						key="rss"
						href="/rss.xml"
						labelText="Open blog XML Feed, opens in new tab"
						isSidebar={!!isSidebar}
					>
						<RssSVG className="h-5 w-5 fill-current" />
					</PublicationSocialLinkItem>
				</div>
			) : null}
		</>
	);
}

export default PublicationSocialLinks;
