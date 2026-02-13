import React from 'react';

export default function TermsPage() {
	return (
		<main className="min-h-screen py-16 bg-white">
			<div className="max-w-4xl mx-auto px-6">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">TERMS OF SERVICE</h1>
				<p className="text-sm text-gray-600 mb-8">Last updated: 2026</p>

				<section className="prose prose-sm md:prose-base text-gray-800">
					<p>By using this website, you agree to the following terms.</p>

					<h2>1. Website Use</h2>
					<p>This website provides information about WillTech Engineering Ltd services including Engineering, Construction, Project management and Consultancy. Information on this site is for general guidance only and does not constitute a binding contract.</p>

					<h2>2. Project Engagement</h2>
					<p>Any project or consultancy engagement with WillTech will be governed by a separate written agreement outlining:</p>
					<ul>
						<li>Scope</li>
						<li>Cost</li>
						<li>Timeline</li>
						<li>Responsibilities</li>
					</ul>

					<h2>3. Accuracy of Information</h2>
					<p>We aim to keep information accurate and up-to-date, but we do not guarantee completeness at all times.</p>

					<h2>4. Intellectual Property</h2>
					<p>All content on this website including text, logo, graphics and documents belongs to WillTech Engineering Ltd and may not be copied without permission.</p>

					<h2>5. Limitation of Liability</h2>
					<p>WillTech is not liable for decisions made based solely on website content, external links or third-party services.</p>

					<h2>6. Changes</h2>
					<p>We may update these terms at any time. Continued use of the website means you accept updates.</p>

					<h2>7. Governing Law</h2>
					<p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
				</section>
			</div>
		</main>
	);
}
