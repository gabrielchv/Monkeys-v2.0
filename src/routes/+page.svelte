<script lang="ts">
	import { formatPercentage, messages, selectRandomArrayItem, status } from '$lib/data';
	import MonkeyPicture from '$lib/components/MonkeyPicture.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import { ProgressBar as ProgressBarClass } from '$lib/data';
	import classNames from 'classnames';
	import { onMount } from 'svelte';
	import a1 from '$lib/pictures/a1.jpeg';
	import a2 from '$lib/pictures/a2.jpeg';
	import a3 from '$lib/pictures/a3.jpeg';
	import a4 from '$lib/pictures/a4.jpeg';
	import a5 from '$lib/pictures/a5.jpeg';
	import a6 from '$lib/pictures/a6.jpg';
	import g1 from '$lib/pictures/g1.jpeg';
	import g2 from '$lib/pictures/g2.jpeg';
	import g3 from '$lib/pictures/g3.jpeg';
	import g4 from '$lib/pictures/g4.jpeg';
	import g5 from '$lib/pictures/g5.jpeg';
	import g6 from '$lib/pictures/g6.jpg';
	import love from '$lib/pictures/love.gif';
	import seta from '$lib/pictures/seta.gif';

	let barProgress = [new ProgressBarClass(20), new ProgressBarClass(20)];
	let selectedPictures = [g1, a1];
	let buttonMessages = [
		messages.gazerah[Math.floor(Math.random() * messages.gazerah.length)],
		messages.agathixa[Math.floor(Math.random() * messages.agathixa.length)]
	];
	let buttonPressed = [false, false];
	let messageActivated = false;

	const incr = () => {
		barProgress[0].percentage -= 0.32;
		barProgress[1].percentage -= 0.31034;
	};
	const buttonClick = (id: number) => {
		barProgress[id].percentage += 7;
		if (id === 0) buttonMessages[0] = selectRandomArrayItem(messages.gazerah, buttonMessages[0]);
		if (id === 1) buttonMessages[1] = selectRandomArrayItem(messages.agathixa, buttonMessages[1]);
	};
	const onKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'a' || e.key === 'A') {
			if (!buttonPressed[0]) buttonClick(0);
			buttonPressed[0] = true;
		} else if (e.key === 'd' || e.key === 'D') {
			if (!buttonPressed[1]) buttonClick(1);
			buttonPressed[1] = true;
		}
	};
	const onKeyUp = (e: KeyboardEvent) => {
		if (e.key === 'a' || e.key === 'A') buttonPressed[0] = false;
		else if (e.key === 'd' || e.key === 'D') buttonPressed[1] = false;
	};

	onMount(() => {
		setInterval(incr, 20);
	});
	$: {
		// Gazerah
		if (barProgress[0].percentage >= 0 && barProgress[0].percentage < 20) selectedPictures[0] = g1;
		if (barProgress[0].percentage >= 20 && barProgress[0].percentage < 40) selectedPictures[0] = g2;
		if (barProgress[0].percentage >= 40 && barProgress[0].percentage < 60) selectedPictures[0] = g3;
		if (barProgress[0].percentage >= 60 && barProgress[0].percentage < 80) selectedPictures[0] = g4;
		if (barProgress[0].percentage >= 80 && barProgress[0].percentage <= 100)
			selectedPictures[0] = g5;

		// Agathixa
		if (barProgress[1].percentage >= 0 && barProgress[1].percentage < 20) selectedPictures[1] = a1;
		if (barProgress[1].percentage >= 20 && barProgress[1].percentage < 40) selectedPictures[1] = a2;
		if (barProgress[1].percentage >= 40 && barProgress[1].percentage < 60) selectedPictures[1] = a3;
		if (barProgress[1].percentage >= 60 && barProgress[1].percentage < 80) selectedPictures[1] = a4;
		if (barProgress[1].percentage >= 80 && barProgress[1].percentage <= 100)
			selectedPictures[1] = a5;

		// Superpower
		if (barProgress[0].percentage >= 80 && barProgress[1].percentage >= 80) {
			selectedPictures[0] = g6;
			selectedPictures[1] = a6;
			if (!messageActivated) messageActivated = true;
		}
		if (barProgress[0].percentage <= 0 && barProgress[1].percentage <= 0) messageActivated = false;
	}
</script>

<div class="h-[100svh] w-full flex gap-2 flex-col items-center">
	<div class="bg-blue-300 p-2 gap-2 w-full italic font-bold flex justify-center items-center">
		{'Agathixa simulator'}
		<span class="text-red-900 underline">v2.0</span>
	</div>
	<span class="text-blue-900 hidden md:block"
		>Utilize <span class={classNames('font-semibold', { 'text-red-700': buttonPressed[0] })}
			>[A]</span
		>
		e
		<span class={classNames('font-semibold', { 'text-red-700': buttonPressed[1] })}>[D]</span> para apertar
		os botões</span
	>
	<a
		target="_blank"
		href="https://api.whatsapp.com/send/?phone=55011946140288&text&type=phone_number&app_absent=0&text=Ei%2C%20amor%21%20%F0%9F%8C%B8%20Sempre%20que%20penso%20em%20n%C3%B3s%20dois%2C%20imagino%20a%20gente%20como%20dois%20macaquinhos%20fofos%20%F0%9F%90%92%F0%9F%92%95%2C%20brincando%20juntos%20nas%20%C3%A1rvores%20do%20amor%20e%20compartilhando%20bananas%20da%20felicidade.%20A%20cada%20dia%20que%20passa%2C%20sinto%20que%20nosso%20la%C3%A7o%20se%20fortalece%2C%20assim%20como%20os%20macaquinhos%20que%20se%20abra%C3%A7am%20nas%20copas%20das%20%C3%A1rvores.%20Obrigado%20por%20ser%20minha%20parceira%20de%20travessuras%20e%20aventuras.%20Te%20amo%20mais%20do%20que%20os%20macaquinhos%20amam%20bananas%21%20%F0%9F%8D%8C%F0%9F%92%96%F0%9F%90%92"
		class={classNames('text-[50px] absolute top-12 md:top-20 leading-[40px]', {
			hidden: !messageActivated
		})}
	>
		💌
		<img class="absolute w-10 top-5 -left-5 -rotate-45" alt="seta" src={seta} />
	</a>

	<div
		class="grid h-full mt-12 gap-1.5 w-full grid-rows-[auto_auto_1fr_7fr] max-w-[600px] gap-x-1 p-2 grid-cols-2"
	>
		<span class="flex items-center justify-center text-center h-12 font-semibold"
			>{status[formatPercentage([barProgress[0].percentage, barProgress[1].percentage])[0]]}</span
		>
		<span class="flex items-center justify-center text-center h-12 font-semibold"
			>{status[formatPercentage([barProgress[0].percentage, barProgress[1].percentage])[1]]}</span
		>

		<MonkeyPicture side="left" visible={selectedPictures[0] === g1} src={g1} />
		<MonkeyPicture side="left" visible={selectedPictures[0] === g2} src={g2} />
		<MonkeyPicture side="left" visible={selectedPictures[0] === g3} src={g3} />
		<MonkeyPicture side="left" visible={selectedPictures[0] === g4} src={g4} />
		<MonkeyPicture side="left" visible={selectedPictures[0] === g5} src={g5} />
		<MonkeyPicture side="left" visible={selectedPictures[0] === g6} src={g6} />

		<MonkeyPicture side="right" visible={selectedPictures[1] === a1} src={a1} />
		<MonkeyPicture side="right" visible={selectedPictures[1] === a2} src={a2} />
		<MonkeyPicture side="right" visible={selectedPictures[1] === a3} src={a3} />
		<MonkeyPicture side="right" visible={selectedPictures[1] === a4} src={a4} />
		<MonkeyPicture side="right" visible={selectedPictures[1] === a5} src={a5} />
		<MonkeyPicture side="right" visible={selectedPictures[1] === a6} src={a6} />

		<ProgressBar powerMode={selectedPictures[0] === g6} pct={barProgress[0].percentage} />
		<ProgressBar powerMode={selectedPictures[1] === a6} pct={barProgress[1].percentage} reverse />

		<button
			on:click|preventDefault={() => buttonClick(0)}
			class={classNames(
				'bg-green-400 hover:bg-green-500 active:bg-green-600 shadow h-full w-full rounded-bl-2xl text-white text-2xl px-1 font-semibold',
				{ 'bg-green-500': buttonPressed[0] }
			)}>{buttonMessages[0]}</button
		>
		<button
			on:click|preventDefault={() => buttonClick(1)}
			class={classNames(
				'bg-green-400 hover:bg-green-500 active:bg-green-600 shadow h-full w-full rounded-br-2xl text-white text-2xl px-1 font-semibold',
				{ 'bg-green-500': buttonPressed[1] }
			)}>{buttonMessages[1]}</button
		>
	</div>
</div>
<img
	src={love}
	class={classNames('absolute pointer-events-none bottom-0 left-0 w-full aspect-square', {
		hidden: !messageActivated
	})}
	alt="love baby"
/>

<svelte:window on:keydown|preventDefault={onKeyDown} on:keyup|preventDefault={onKeyUp} />
