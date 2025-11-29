import { FaApple, FaGooglePlay } from "react-icons/fa";

interface DownloadAppProps {
	tag: "desktop" | "mobile";
}

export default function DownloadApp({ tag }: DownloadAppProps) {
	return (
		<div
			className={`flex gap-3 justify-center items-center rounded-[360px] py-4 px-6 bg-[#7D32DF] text-white font-medium text-15px transition-colors duration-300 ${
				tag === "desktop"
					? "hidden lg:flex"
					: tag === "mobile"
					? "block w-full"
					: "block"
			}`}
		>
			<div className="flex items-center gap-3">
				<button className="cursor-pointer">
					<FaApple className="text-[20px]" />
				</button>
				|
				<button className="cursor-pointer">
					<FaGooglePlay className="text-[16px]" />
				</button>
			</div>
			<span className="shrink-0 text-[12px] sm:text-[15px]">Download App</span>
		</div>
	);
}
