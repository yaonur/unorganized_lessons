<script>
	import 'tailwindcss/tailwind.css';

	let mode = 10; // default mode
	let num1, num2, correctAnswer;

	function generateNumbers() {
		const start = mode <= 5 ? 1 : mode - 4;
		num1 = Math.floor(Math.random() * (mode - start )) + start;
		num2 = Math.floor(Math.random() * (mode - num1)) + 1;
		correctAnswer = num1 + num2;
	}

	let options = [];
	let result = '';
	let selectedAnswer = null;
	let showCorrectAnswer = false;

	function generateOptions() {
		options = [correctAnswer];
		while (options.length < 4) {
			let option = Math.floor(Math.random() * mode * 2) + 1; // generate a random number within a reasonable range
			if (!options.includes(option)) {
				options.push(option);
			}
		}
		options.sort(() => Math.random() - 0.5); // shuffle the options
	}

	function checkAnswer(option) {
		selectedAnswer = option;
		if (option === correctAnswer) {
			result = 'Correct!';
			newQuestion();
		} else {
			result = 'Try again!';
			showCorrectAnswer = true;
		}
	}

	function newQuestion() {
		generateNumbers();
		result = '';
		selectedAnswer = null;
		showCorrectAnswer = false;
		generateOptions();
	}

	function setMode(newMode) {
		mode = newMode;
		newQuestion();
	}

	newQuestion(); // generate the first question and options
</script>


<h1 class="mb-4 text-2xl font-bold">Sum Exercise</h1>
<div class="mb-4 flex gap-4">
	<button class="rounded {mode===5?'bg-blue-500':'bg-green-500'} px-4 py-2 text-white" on:click={() => setMode(5)}
		>Mode 5</button
	>
	<button class="rounded {mode===10?'bg-blue-500':'bg-green-500'} px-4 py-2 text-white" on:click={() => setMode(10)}
		>Mode 10</button
	>
	<button class="rounded {mode===15?'bg-blue-500':'bg-green-500'} px-4 py-2 text-white" on:click={() => setMode(15)}
		>Mode 15</button
	>
	<button class="rounded {mode===20?'bg-blue-500':'bg-green-500'} px-4 py-2 text-white" on:click={() => setMode(20)}
		>Mode 20</button
	>
</div>
<p class="mb-4 text-lg">What is {num1} + {num2}?</p>
<div class="mb-8 flex gap-4">
	{#each options as option (option)}
		<button
			class={`rounded px-4 py-2 ${
				selectedAnswer === option
					? option === correctAnswer
						? 'bg-green-500'
						: 'bg-red-500'
					: showCorrectAnswer && option === correctAnswer
					? 'bg-green-500'
					: 'bg-gray-200'
			}`}
			on:click={() => checkAnswer(option)}
		>
			{option}
		</button>
	{/each}
</div>
<div class="mb-4 flex items-center gap-2">
	<div class="mr-2 flex h-12 w-12 items-center justify-center rounded-md bg-gray-200">{num1}</div>
	{#each Array(num2)
		.fill()
		.map((_, i) => i + 1) as step}
		<div class="relative flex h-12 w-12 items-center justify-center rounded-md bg-gray-200">
			<span class="absolute -top-5 text-sm">{step === 1 ? `+${step}` : `+${step}`}</span>
			{num1 + step}
		</div>
	{/each}
</div>
<p class="mb-4 text-lg">{result}</p>
