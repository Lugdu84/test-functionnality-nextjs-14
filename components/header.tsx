import Link from 'next/link';

export default function Header() {
	return (
		<header className="py-10">
			<div className="container">
				<nav>
					<ul className="flex items-center justify-center gap-10 text-xl font-semibold">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/settings">Settings</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
