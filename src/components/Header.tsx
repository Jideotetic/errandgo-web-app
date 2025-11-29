import { NAV_LINKS, type NavLink } from "@/lib/constants";
import DownloadApp from "./DownloadApp";
import { useState } from "react";
import { MobileNavigation } from "./MobileNavigation";
import Logo from "./Logo";

function Header() {
	const [sheetIsOpen, setSheetIsOpen] = useState(false);

	return (
		<div className="px-5 fixed left-0 right-0 pt-12 pb-5 bg-linear-to-b from-[#FFFFFF] to-transparent z-50">
			<div className="max-w-[1120px] w-full mx-auto p-4 sm:py-5 sm:px-8 bg-[#F8F3FF] text-[#00072D] rounded-[360px] h-[88px] flex justify-between items-center">
				<Logo />

				<nav className="hidden lg:block">
					<ul className="flex gap-12">
						{NAV_LINKS.map((link: NavLink) => (
							<li key={link.title}>
								<a
									className="hover:text-[#7D32DF] hover:underline"
									href={link.href}
								>
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<DownloadApp tag="desktop" />

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
										className="hover:text-[#7D32DF] text-[16px] font-normal text-[#00072D] hover:underline"
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
