import { delay } from '@/lib/utils';

export default async function DefaultHomePage() {
	await delay(3000);
	return (
		<div className="h-60 flex-1 rounded-xl bg-sky-500  p-10 text-white">
			<h1>Default Home</h1>
		</div>
	);
}
