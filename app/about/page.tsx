import Title from '@/components/Title';

export default function AboutPage() {
	return (
		<main className="py-20 2xl:py-32">
			<div className="max-w-6xl mx-auto px-4">
				<Title
					title="About WillTech"
					heading="Who We Are"
					description="WillTech Engineering Limited is a Nigeria-registered engineering and project management consultancy providing structured support for building and infrastructure projects."
				/>

				<div className="mt-8 space-y-8 bg-white border rounded-2xl p-8 md:p-10 shadow-sm">
					<section>
						<h2 className="text-xl font-semibold mb-3">Who We Are</h2>
						<p className="text-gray-700 leading-relaxed">
							WillTech Engineering Limited is a Nigeria-registered engineering and project management consultancy providing structured support for building and infrastructure projects. We support private developers, organisations, institutions and public sector clients with professional project management, cost consultancy and construction coordination services. Our goal is to help clients plan realistically, manage costs responsibly and deliver projects effectively.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-semibold mb-3">Our Approach</h2>
						<p className="text-gray-700 leading-relaxed mb-3">
							We believe successful projects depend on:
						</p>
						<ul className="list-disc list-inside text-gray-700 space-y-1">
							<li>Clear planning</li>
							<li>Structured project management</li>
							<li>Cost discipline</li>
							<li>Transparent communication</li>
							<li>Professional coordination</li>
							<li>Practical delivery support</li>
						</ul>
						<p className="text-gray-700 leading-relaxed mt-3">
							We aim to work as a reliable partner throughout the lifecycle of each project.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-semibold mb-3">Where We Work</h2>
						<p className="text-gray-700 leading-relaxed">
							WillTech operates primarily in Nigeria and supports projects across residential, commercial and institutional sectors. We also assist clients based outside Nigeria who are planning and executing projects locally.
						</p>
					</section>
				</div>
			</div>
		</main>
	);
}
