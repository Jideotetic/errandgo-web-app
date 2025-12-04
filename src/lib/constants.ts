import { BsTiktok, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

export interface NavLink {
	title: string;
	href: string;
}

interface Faqs {
	id: string;
	title: string;
	content: string[];
}

export const NAV_LINKS: NavLink[] = [
	{ title: "Features", href: "/#features" },
	{ title: "How It Works", href: "/#how-it-works" },
	{ title: "FAQs", href: "/#faqs" },
];

export const FOOTER_LINKS = [
	{ title: "Instagram", href: "https://www.instagram.com", icon: ImInstagram },
	{ title: "Twitter", href: "https://www.x.com", icon: BsTwitterX },
	{ title: "TikTok", href: "https://www.tiktok.com", icon: BsTiktok },
	{ title: "Facebook", href: "https://www.facebook.com", icon: FaFacebook },
];

export const GET_HELP_USE_CASES = [
	"Check prices in a market before you go",
	"Confirm item availability and prices",
	"Verify property or item condition",
	"Make quick enquiries at offices or service centers",
	"Small runs, or “just help me check” tasks",
];

export const HELP_AND_EARN_USE_CASES = [
	"Grab errands around your neighborhood",
	"Make money during your free hours as a rider",
	"Earn between classes as a student",
	"Turn your spare time into extra income",
	"Build trust and get chosen more often",
];

export const ERRAND_CREATOR = [
	"Save time and transportation costs",
	"Get help anywhere you are unable to reach",
	"Compare bids instead of paying fixed fees",
	"Real-time update & proof of actions",
];

export const ERRAND_HELPER = [
	"Flexible earnings",
	"Simple and seamless onboarding",
	"Build consistent income from everyday errands",
	"Work around your schedule",
];

export const FAQs: Faqs[] = [
	{
		id: "item-1",
		title: "How does ErrandGo work?",
		content: [
			"ErrandGo connects people who need quick help with those willing to assist. As an errand creator, you post what you need and set your budget. Errand helpers then place their bids, you choose the best one, and they complete the task while sharing updates. Helpers earn after the errand is confirmed.",
		],
	},
	{
		id: "item-2",
		title: "What types of errands can I request?",
		content: [
			"ErrandGo connects people who need quick help with those willing to assist. As an errand creator, you post what you need and set your budget. Errand helpers then place their bids, you choose the best one, and they complete the task while sharing updates. Helpers earn after the errand is confirmed.",
		],
	},
	{
		id: "item-3",
		title: "How much can I earn as an errand helper?",
		content: [
			"ErrandGo connects people who need quick help with those willing to assist. As an errand creator, you post what you need and set your budget. Errand helpers then place their bids, you choose the best one, and they complete the task while sharing updates. Helpers earn after the errand is confirmed.",
		],
	},
	{
		id: "item-4",
		title: "How do I become an errand helper and start earning?",
		content: [
			"ErrandGo connects people who need quick help with those willing to assist. As an errand creator, you post what you need and set your budget. Errand helpers then place their bids, you choose the best one, and they complete the task while sharing updates. Helpers earn after the errand is confirmed.",
		],
	},
	{
		id: "item-5",
		title: "Can I post an errand for a location I am not physically in?",
		content: [
			"ErrandGo connects people who need quick help with those willing to assist. As an errand creator, you post what you need and set your budget. Errand helpers then place their bids, you choose the best one, and they complete the task while sharing updates. Helpers earn after the errand is confirmed.",
		],
	},
	{
		id: "item-6",
		title: "What happens if a helper does not complete an errand?",
		content: [
			"ErrandGo connects people who need quick help with those willing to assist. As an errand creator, you post what you need and set your budget. Errand helpers then place their bids, you choose the best one, and they complete the task while sharing updates. Helpers earn after the errand is confirmed.",
		],
	},
];
