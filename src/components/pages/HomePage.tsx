import FAQ from "../FAQ";
import Features from "../Features";
import Hero from "../Hero";
import HowItWorks from "../HowItWorks";
import UseCases from "../UseCases";
import WhyErrandGo from "../WhyErrandGo";

function HomePage() {
	return (
		<div>
			<Hero />

			<Features />

			<HowItWorks />

			<UseCases />

			<WhyErrandGo />

			<FAQ />
		</div>
	);
}

export default HomePage;
