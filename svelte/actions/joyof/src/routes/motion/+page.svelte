<script lang="ts">
	import { animate, stagger } from 'motion';

    const text = (element:HTMLElement, {options, action}) => {
        const letters = element.innerText.trim().split('')

        element.innerHTML= ''

        letters.forEach(letter => {
            element.innerHTML += `
            <span class="letter">
                ${letter}
                </span>
            `
        })
        animate(
            [...element.children],
            {
                color:'orangered',
                y: [0,30, -60,0],
                rotate: 360
            },
            { duration:1,delay: stagger(0.1), ...options} 
        )
    }
</script>

<h1 onfinished={() => console.log('finished')}
    user: text={{
        options: {duration: 2},
        action({animation}){
            animation.stop()
        }
    }}
    >Svelte</h1>
