<script lang="ts">
	import classNames from 'classnames';
	export let pct: number;
	export let reverse = false;
	export let powerMode = false;
</script>

<div
	class={classNames('relative shadow flex w-full bg-gray-400', {
		'justify-end': reverse
	})}
>
	<!-- text -->
	<span
		class="absolute top-1/2 left-1/2 -translate-y-1/2 text-xs whitespace-nowrap -translate-x-1/2"
		>Nível de felicidade
	</span>
	<div
		class={classNames('h-full ', powerMode ? 'bg-red-500' : 'bg-blue-300')}
		style={`width: ${pct}%`}
	/>
</div>
