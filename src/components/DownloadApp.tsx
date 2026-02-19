import { FaApple, FaGooglePlay } from "react-icons/fa";

interface DownloadAppProps {
	tag: "desktop" | "mobile";
}

export default function DownloadApp({ tag }: DownloadAppProps) {
	return (
		<div
			className={`flex gap-3 justify-center items-center rounded-[360px] py-4 px-6 bg-[#7D32DF] text-white font-medium text-base transition-colors duration-300 ${
				tag === "desktop"
					? "hidden lg:flex"
					: tag === "mobile"
						? "block w-full"
						: "block"
			}`}
		>
			<div className="flex items-center gap-3">
				<button className="cursor-pointer shrink-0">
					<FaApple className="text-[24px]" />
				</button>
				|
				<button
					onClick={() => {
						window.open(
							"https://play.google.com/store/apps/details?id=app.errandgo",
							"_blank",
							"noopener,noreferrer",
						);
					}}
					className="cursor-pointer shrink-0"
				>
					<FaGooglePlay className="text-[24]" />
				</button>
			</div>
			<span className="shrink-0">
				{tag === "desktop" ? "Get App" : "Get App"}
			</span>
		</div>
	);
}
