import { delay } from '@/lib/utils';

export default async function TeamPage() {
	await delay(1000);
	return (
		<div className="h-60 flex-1 rounded-xl bg-pink-500  p-10 text-white">
			<h1>Team</h1>
		</div>
	);
}
