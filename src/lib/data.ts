export function limitNumber(num: number, min: number, max: number) {
	return Math.min(Math.max(num, min), max);
}

export function limitArray(arr: number[], min: number, max: number) {
	return arr.map((num) => limitNumber(num, min + 1, max));
}

export class ProgressBar {
	private _percentage: number;

	constructor(_percentage = 0) {
		this._percentage = _percentage;
	}

	get percentage() {
		return this._percentage;
	}
	set percentage(value) {
		this._percentage = limitNumber(value, 0, 100);
	}
}

export const status = {
	g1: 'Tortinho da silva',
	g2: 'Meio torto',
	g3: 'Di boa',
	g4: 'Macaquinho agitado',
	g5: 'Feliz da silva',
	a1: 'Tortinha tristi',
	a2: 'Fedida com os pé fedido',
	a3: 'Calminha',
	a4: 'Muie meio doida',
	a5: 'Pirada Arlequina',
	g6: 'Modo Fusão',
	a6: 'Crystal Gem'
};

export const formatPercentage = (percentage: [number, number]) => {
	let value: ['g1' | 'g2' | 'g3' | 'g4' | 'g5' | 'g6', 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6'] = [
		'g1',
		'a1'
	];
	// Gazerah
	if (percentage[0] >= 0 && percentage[0] < 20) value[0] = 'g1';
	if (percentage[0] >= 20 && percentage[0] < 40) value[0] = 'g2';
	if (percentage[0] >= 40 && percentage[0] < 60) value[0] = 'g3';
	if (percentage[0] >= 60 && percentage[0] < 80) value[0] = 'g4';
	if (percentage[0] >= 80 && percentage[0] <= 100) value[0] = 'g5';

	// Agathixa
	if (percentage[1] >= 0 && percentage[1] < 20) value[1] = 'a1';
	if (percentage[1] >= 20 && percentage[1] < 40) value[1] = 'a2';
	if (percentage[1] >= 40 && percentage[1] < 60) value[1] = 'a3';
	if (percentage[1] >= 60 && percentage[1] < 80) value[1] = 'a4';
	if (percentage[1] >= 80 && percentage[1] <= 100) value[1] = 'a5';

	// Superpower
	if (percentage[0] >= 80 && percentage[1] >= 80) {
		value[0] = 'g6';
		value[1] = 'a6';
	}

	return value;
};

export const messages = {
	gazerah: [
		'Levar pra andar de skate 🛹',
		'Comer piolho do macaquinho 😋',
		'Dar frutinha 🍌🍑',
		'Abracinho com beijinho ❤️',
		'Passar hidratante no macaquinho 🧴',
		'Passeio na praia com amorzinho 🫂💟',
		'Deixar cozinhar 👨‍🍳'
	],
	agathixa: [
		'Fazer carinho 💕',
		'Dar beijinho nas bochechinha 😽',
		'Beijinho no rostinho todo 💋💋💕',
		'Massagem nos pezinho feio 💗🤢',
		'Beijinho nos pezinho fidido 🥰🤢',
		'Passar hidratante no macaquinho 🧴',
		'Chupar os dedo fidido fei 🤢🤮',
		'Escutar musica com mozinho 🎧'
	]
};

export let selectRandomArrayItem = <T extends Array<unknown>>(
	array: T,
	selected?: T[number]
): T[number] => {
	let item = array[Math.floor(Math.random() * array.length)];
	if (!selected) return item;

	while (item === selected) {
		item = array[Math.floor(Math.random() * array.length)];
	}
	return item;
};
