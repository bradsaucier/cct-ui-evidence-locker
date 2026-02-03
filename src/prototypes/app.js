const HOLD_MS = 6000;

const holdBtn = document.getElementById("holdBtn");
const retryBtn = document.getElementById("retryBtn");
const resetBtn = document.getElementById("resetBtn");
const cmdState = document.getElementById("cmdState");
const meterFill = document.getElementById("meterFill");

let holdStart = null;
let holdTimer = null;
let animTimer = null;

function setState(text) {
  cmdState.textContent = text;
}

function setMeter(pct) {
  meterFill.style.width = pct + "%";
}

function clearTimers() {
  if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
  if (animTimer) { clearInterval(animTimer); animTimer = null; }
}

function reset() {
  clearTimers();
  holdStart = null;
  setState("Idle");
  setMeter(0);
  retryBtn.disabled = true;
  holdBtn.disabled = false;
}

function simulateCommand() {
  setState("Command sent (pending verify)");
  holdBtn.disabled = true;

  const success = Math.random() > 0.25;

  setTimeout(() => {
    if (success) {
      setState("Verified - stove is OFF");
      retryBtn.disabled = true;
    } else {
      setState("Fault - no confirmation received");
      retryBtn.disabled = false;
    }
  }, 1600);
}

function startHold() {
  holdStart = Date.now();
  setState("Holding - keep pressed");
  setMeter(0);

  animTimer = setInterval(() => {
    const elapsed = Date.now() - holdStart;
    const pct = Math.min(100, Math.round((elapsed / HOLD_MS) * 100));
    setMeter(pct);
  }, 50);

  holdTimer = setTimeout(() => {
    clearTimers();
    setMeter(100);
    setState("Hold complete - initiating command");
    simulateCommand();
  }, HOLD_MS);
}

holdBtn.addEventListener("mousedown", startHold);
holdBtn.addEventListener("touchstart", (e) => { e.preventDefault(); startHold(); }, { passive: false });

function cancelHold() {
  if (!holdStart) return;
  clearTimers();
  holdStart = null;
  setState("Hold cancelled");
  setMeter(0);
}

holdBtn.addEventListener("mouseup", cancelHold);
holdBtn.addEventListener("mouseleave", cancelHold);
holdBtn.addEventListener("touchend", cancelHold);

retryBtn.addEventListener("click", () => {
  retryBtn.disabled = true;
  simulateCommand();
});

resetBtn.addEventListener("click", reset);

reset();
