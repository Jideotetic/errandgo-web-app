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

export const FAQs: Faqs[] = [
	{
		id: "item-1",
		title: "How can I join Afro Ascend?",
		content: [
			"Joining is simple! Just fill out the Get in Touch form by clicking the button at the top right corner of our website. Share as much information about yourself and your creative journey as possible. An Afro Ascend talent specialist will review your submission and reach out to you within 1-2 business days.",
		],
	},
	{
		id: "item-2",
		title: "Do I need to be an established creator to join?",
		content: [
			"Not at all. You don't need to be established to join Afro Ascend—that’s what we’re here for! Our mission is to help you build, grow, and elevate your brand. We provide mentorship, resources, and tools to guide your creative journey. All we look for is talent with a clear and sustainable creative roadmap.",
		],
	},
	{
		id: "item-3",
		title: "Is Afro Ascend free to join?",
		content: ["Yes! Joining Afro Ascend is completely free of charge."],
	},
	{
		id: "item-4",
		title: "Can I showcase my work on Afro Ascend?",
		content: [
			"Absolutely. Showcasing your work is part of our selection process—we want to understand your creative style and vision. As an Afro Ascend talent, we'll also promote and amplify your content to wider and global audiences.",
		],
	},
	{
		id: "item-5",
		title: "How do I contact Afro Ascend for support?",
		content: [
			"You can reach us anytime through:",
			"The Get in Touch form on our website",
			"Email: info@afroascend.co",
			"Direct message (DM) on our official social media pages",
		],
	},
];
