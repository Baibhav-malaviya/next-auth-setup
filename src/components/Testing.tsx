import FadeIn from "./myComponents/Animations/FadeIn";
import SlideIn from "./myComponents/Animations/SlideIn";
import Container from "./myComponents/Container";
import Section from "./myComponents/Section";

const Testing = () => {
	return (
		<div>
			<Section bgColor="bg-gray-100" paddingY="py-16">
				<Container>
					<FadeIn>
						<h1 className="text-3xl font-bold text-gray-900">
							Welcome to My Website
						</h1>
					</FadeIn>
					<SlideIn>
						<p className="mt-4 text-lg text-gray-700">
							This section slides in from the left when it comes into view.
						</p>
					</SlideIn>
				</Container>
			</Section>

			<Section bgColor="bg-white" paddingY="py-24">
				<Container>
					<SlideIn>
						<h2 className="text-2xl font-semibold text-gray-800">
							Another Section Lorem, ipsum dolor sit amet consectetur
							adipisicing elit. Pariatur et similique accusantium ad eligendi
							tempore? Aliquid unde accusamus modi, provident odit inventore.
							Voluptate doloremque, corrupti debitis, natus magnam laborum
							quaerat, quidem sunt sint accusamus alias molestias. Nisi maiores
							recusandae consequuntur quibusdam, minima voluptate assumenda
							atque!
						</h2>
					</SlideIn>
					<FadeIn>
						<p className="mt-4 text-base text-gray-600">
							More content can go here with a fade-in effect. Lorem ipsum dolor,
							sit amet consectetur adipisicing elit. Possimus libero ad
							voluptatibus explicabo illo sed aperiam dicta suscipit, harum
							quibusdam assumenda unde quos laudantium, dolorem rerum distinctio
							debitis doloremque. Illum?
						</p>
					</FadeIn>
				</Container>
			</Section>
		</div>
	);
};

export default Testing;
