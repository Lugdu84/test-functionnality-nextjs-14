import { delay } from '@/lib/utils';

export default async function DashboardPage() {
	await delay(1000);
	return (
		<div className="h-60 flex-1 rounded-xl bg-violet-500 p-10 text-white">
			<h1>Dashboard</h1>
		</div>
	);
}
