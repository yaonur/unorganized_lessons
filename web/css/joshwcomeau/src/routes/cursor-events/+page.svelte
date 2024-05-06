<script lang='ts'> 
import type {Action} from "svelte/action"
import {spring} from "svelte/motion"
const followCursor: Action = (element) => {
	window.addEventListener("mousemove", event => {
		const elementHalfHeight = Number(getComputedStyle(element).height.replace("px","")?? 0)/ 2;
		element.style.top = `${event.clientY - elementHalfHeight}px`
		const elementHalfWidth = Number(getComputedStyle(element).width.replace("px","")?? 0)/ 2;
		element.style.left = `${event.clientX - elementHalfWidth}px`
	})
}

</script>

<p>Cursor Events</p>

<div use:followCursor></div>

<style>
	div {
		position: absolute;
		background-color: royalblue;
		width: 100px;
		height: 100px;
		border-radius:100px;
	}
</style>