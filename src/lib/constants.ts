export interface NavLink {
	title: string;
	href: string;
}

export const NAV_LINKS: NavLink[] = [
	{ title: "Features", href: "#features" },
	{ title: "How It Works", href: "#how-it-works" },
	{ title: "FAQs", href: "#faqs" },
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
