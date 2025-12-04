import { NAV_LINKS, type NavLink } from "@/lib/constants";
import DownloadApp from "./DownloadApp";
import { useState } from "react";
import { MobileNavigation } from "./MobileNavigation";
import Logo from "./Logo";

function Header() {
	const [sheetIsOpen, setSheetIsOpen] = useState(false);

	return (
		<div className="px-4 pt-8 pb-4 lg:pt-12 fixed left-0 right-0 bg-linear-to-b from-[#FFFFFF] to-transparent z-50">
			<div className="max-w-[1120px] w-full mx-auto h-16 p-4 lg:py-5 lg:px-[72px] gap-2.5 bg-[#F8F3FF] rounded-[360px] lg:h-[88px] flex justify-between items-center">
				<Logo />

				{/* DESKTOP NAV */}
				<>
					<nav className="hidden lg:block">
						<ul className="flex gap-12">
							{NAV_LINKS.map((link: NavLink) => (
								<li key={link.title}>
									<a
										className="hover:text-[#7D32DF] hover:underline text-base"
										href={link.href}
									>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<DownloadApp tag="desktop" />
				</>

				{/* MOBILE NAV */}
				<MobileNavigation
					side="left"
					sheetIsOpen={sheetIsOpen}
					setSheetIsOpen={setSheetIsOpen}
				>
					<nav className="flex justify-center text-center">
						<ul className="flex flex-col gap-10">
							{NAV_LINKS.map((link) => (
								<li key={link.title}>
									<a
										className="hover:text-[#7D32DF] text-base font-normal text-[#00072D] hover:underline"
										href={link.href}
										onClick={() => setSheetIsOpen(false)}
									>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<DownloadApp tag="mobile" />
				</MobileNavigation>
			</div>
		</div>
	);
}

export default Header;
