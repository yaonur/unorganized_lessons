<script>
    import 'tailwindcss/tailwind.css';

    let mode = 10; // default mode
    let num1 = Math.floor(Math.random() * mode) + 1;
    let num2 = Math.floor(Math.random() * (mode - num1)) + 1; // ensure sum doesn't exceed mode
    let options = [];
    let result = '';
    let correctAnswer = num1 + num2;
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
        num1 = Math.floor(Math.random() * mode) + 1;
        num2 = Math.floor(Math.random() * (mode - num1)) + 1; // ensure sum doesn't exceed mode
        correctAnswer = num1 + num2;
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

<h1 class="text-2xl font-bold mb-4">Sum Exercise</h1>
<div class="flex gap-4 mb-4">
    <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => setMode(5)}>Mode 5</button>
    <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => setMode(10)}>Mode 10</button>
    <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => setMode(15)}>Mode 15</button>
    <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => setMode(20)}>Mode 20</button>
</div>
<p class="text-lg mb-4">What is {num1} + {num2}?</p>
<div class="flex gap-4 mb-4">
    {#each options as option (option)}
        <button
            class={`px-4 py-2 rounded ${selectedAnswer === option ? (option === correctAnswer ? 'bg-green-500' : 'bg-red-500') : (showCorrectAnswer && option === correctAnswer ? 'bg-green-500' : 'bg-gray-200')}`}
            on:click={() => checkAnswer(option)}
        >
            {option}
        </button>
    {/each}
</div>
<p class="text-lg mb-4">{result}</p>
