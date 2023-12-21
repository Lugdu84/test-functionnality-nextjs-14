import { delay } from '@/lib/utils';

export default async function SettingsPage() {
	await delay(5000);
	return (
		<div className="h-60 flex-1 rounded-xl bg-purple-500  p-10 text-white">
			<h1>Settings</h1>
		</div>
	);
}
