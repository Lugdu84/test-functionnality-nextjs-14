import { delay } from '@/lib/utils';

export default async function Home() {
	await delay(5000);
	return (
		<div className="h-60 rounded-xl bg-sky-500  p-10 text-white">
			<h1>Parallel Routes</h1>
		</div>
	);
}
