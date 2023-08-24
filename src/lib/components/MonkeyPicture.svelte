<script lang="ts">
	import classNames from 'classnames';

	export let src: string;
	export let side: 'left' | 'right';
	export let visible = true;
</script>

<img
	{src}
	alt="macaco"
	class={classNames(
		'bg-red-300 shadow self-end w-full aspect-[1/1] object-cover',
		side === 'left' ? 'rounded-tl-2xl' : 'rounded-tr-2xl',
		{ hidden: !visible }
	)}
/>
