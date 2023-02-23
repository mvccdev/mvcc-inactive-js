/**
 * Execute a callback after a set amount of inactivity.
 *
 * @param {number} ms - The milliseconds of inactivity.
 * @param {Object} cb - The callback
 */
function mvcc_inactive(cb, ms) {
	let _timer = undefined;

	//
	// Setup the events.
	//
	window.onload = reset_timer;
    window.onmousemove = reset_timer;
    window.onmousedown = reset_timer;
    window.ontouchstart = reset_timer;
    window.ontouchmove = reset_timer;
    window.onclick = reset_timer;
	window.onkeydown = reset_timer;
    window.addEventListener('scroll', reset_timer, true);

	//
	// Reset the timer.
	//
	function reset_timer() {
		//
		// Reset the timer.
		//
		clearTimeout(_timer);

		//
		// Set the time out.
		//
		_timer = setTimeout(cb, ms);
	}
}
