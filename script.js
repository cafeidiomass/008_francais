const boardPositions = [
  { x: 5.5, y: 78.0, r: 0 }, // 0 - start
  { x: 14.4, y: 78.0, r: 0 }, // 1
  { x: 22.3, y: 74.0, r: -35 }, // 2
  { x: 22.3, y: 63.0, r: -90 }, // 3
  { x: 22.3, y: 49.0, r: -90 }, // 4
  { x: 22.3, y: 34.0, r: -90 }, // 5
  { x: 24.5, y: 18.0, r: 0 }, // 6
  { x: 33.0, y: 18.0, r: 0 }, // 7
  { x: 40.7, y: 18.0, r: 0 }, // 8
  { x: 49.3, y: 18.0, r: 0 }, // 9
  { x: 57.1, y: 18.0, r: 0 }, // 10
  { x: 65.7, y: 18.0, r: 0 }, // 11
  { x: 73.5, y: 18.0, r: 0 }, // 12
  { x: 81.1, y: 18.0, r: 0 }, // 13
  { x: 89.2, y: 24.0, r: 55 }, // 14
  { x: 89.2, y: 36.0, r: 90 }, // 15
  { x: 89.0, y: 49.0, r: 135 }, // 16
  { x: 80.5, y: 51.0, r: 180 }, // 17
  { x: 72.5, y: 51.0, r: 180 }, // 18
  { x: 64.5, y: 51.0, r: 180 }, // 19
  { x: 56.5, y: 51.0, r: 180 }, // 20
  { x: 48.6, y: 51.0, r: 180 }, // 21
  { x: 40.7, y: 51.0, r: 180 }, // 22
  { x: 40.0, y: 63.0, r: 90 }, // 23
  { x: 40.0, y: 78.0, r: 35 }, // 24
  { x: 48.3, y: 78.0, r: 0 }, // 25
  { x: 56.5, y: 78.0, r: 0 }, // 26
  { x: 64.4, y: 78.0, r: 0 }, // 27
  { x: 72.5, y: 78.0, r: 0 }, // 28
  { x: 80.5, y: 78.0, r: 0 }, // 29
  { x: 85.2, y: 78.0, r: 0 }, // 30 - finish
];

const PENALTIES = [
  {
    text: "Pénalité en cas d’erreur : recule d’une case.",
    type: "back",
    value: 1,
  },
  {
    text: "Pénalité en cas d’erreur : perds 1 point.",
    type: "losePoint",
    value: 1,
  },
  { text: "Pénalité en cas d’erreur : passe un tour.", type: "skip", value: 1 },
  {
    text: "Pénalité en cas d’erreur : recule de 2 cases.",
    type: "back",
    value: 2,
  },
  {
    text: "Pénalité en cas d’erreur : ton adversaire gagne 1 point.",
    type: "opponentPoint",
    value: 1,
  },
  {
    text: "Pénalité en cas d’erreur : recule d’une case.",
    type: "back",
    value: 1,
  },
  {
    text: "Pénalité en cas d’erreur : perds 1 point.",
    type: "losePoint",
    value: 1,
  },
  { text: "Pénalité en cas d’erreur : passe un tour.", type: "skip", value: 1 },
  {
    text: "Pénalité en cas d’erreur : recule de 2 cases.",
    type: "back",
    value: 2,
  },
  {
    text: "Pénalité en cas d’erreur : ton adversaire avance d’une case.",
    type: "opponentForward",
    value: 1,
  },
  {
    text: "Pénalité en cas d’erreur : recule d’une case.",
    type: "back",
    value: 1,
  },
  {
    text: "Pénalité en cas d’erreur : perds 1 point.",
    type: "losePoint",
    value: 1,
  },
  { text: "Pénalité en cas d’erreur : passe un tour.", type: "skip", value: 1 },
  {
    text: "Pénalité en cas d’erreur : recule de 2 cases.",
    type: "back",
    value: 2,
  },
  {
    text: "Pénalité en cas d’erreur : ton adversaire gagne 1 point.",
    type: "opponentPoint",
    value: 1,
  },
  {
    text: "Pénalité en cas d’erreur : recule d’une case.",
    type: "back",
    value: 1,
  },
  {
    text: "Pénalité en cas d’erreur : perds 1 point.",
    type: "losePoint",
    value: 1,
  },
  { text: "Pénalité en cas d’erreur : passe un tour.", type: "skip", value: 1 },
  {
    text: "Pénalité en cas d’erreur : recule de 2 cases.",
    type: "back",
    value: 2,
  },
  {
    text: "Pénalité en cas d’erreur : ton adversaire avance d’une case.",
    type: "opponentForward",
    value: 1,
  },
  {
    text: "Pénalité en cas d’erreur : recule d’une case.",
    type: "back",
    value: 1,
  },
  {
    text: "Pénalité en cas d’erreur : perds 1 point.",
    type: "losePoint",
    value: 1,
  },
  { text: "Pénalité en cas d’erreur : passe un tour.", type: "skip", value: 1 },
  {
    text: "Pénalité en cas d’erreur : recule de 2 cases.",
    type: "back",
    value: 2,
  },
  {
    text: "Pénalité en cas d’erreur : ton adversaire gagne 1 point.",
    type: "opponentPoint",
    value: 1,
  },
  {
    text: "Pénalité en cas d’erreur : recule d’une case.",
    type: "back",
    value: 1,
  },
  {
    text: "Pénalité en cas d’erreur : perds 1 point.",
    type: "losePoint",
    value: 1,
  },
  { text: "Pénalité en cas d’erreur : passe un tour.", type: "skip", value: 1 },
  {
    text: "Pénalité en cas d’erreur : recule de 2 cases.",
    type: "back",
    value: 2,
  },
  {
    text: "Pénalité en cas d’erreur : recule de 3 cases.",
    type: "back",
    value: 3,
  },
];

const players = [
  {
    name: "Élève",
    color: "blue",
    position: 0,
    score: 0,
    skipNext: false,
    carEl: null,
  },
  {
    name: "Professeur",
    color: "red",
    position: 0,
    score: 0,
    skipNext: false,
    carEl: null,
  },
];

function playerWithArticle(playerIndex) {
  return playerIndex === 0 ? "L’élève" : "Le professeur";
}

let currentPlayer = 0;
let isMoving = false;
let activeQuestion = null;
let activePenalty = null;
let timerInterval = null;
let acceptingAnswer = false;
let gameOver = false;
let orderDecided = false;

const SOUND_PATHS = {
  click: "assets/effects/click.mp3",
  correct: "assets/effects/correct.wav",
  wrong: "assets/effects/wrong.wav",
  car: "assets/effects/car.mp3",
};

const sounds = Object.fromEntries(
  Object.entries(SOUND_PATHS).map(([name, src]) => {
    const audio = new Audio(src);
    audio.preload = "auto";
    audio.volume = name === "car" ? 0.45 : 0.75;
    return [name, audio];
  }),
);

function playSound(name) {
  const baseAudio = sounds[name];
  if (!baseAudio) return;

  try {
    const audio = baseAudio.cloneNode(true);
    audio.volume = baseAudio.volume;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } catch (error) {
    // Ignore autoplay blocks or occasional audio failures.
  }
}

document.addEventListener(
  "click",
  (event) => {
    if (event.target.closest("button, .choice-card, input, label")) {
      playSound("click");
    }
  },
  true,
);

const coverScreen = document.getElementById("coverScreen");
const howToPlayScreen = document.getElementById("howToPlayScreen");
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const startButton = document.getElementById("startButton");
const rollButton = document.getElementById("rollButton");
const resetButton = document.getElementById("resetButton");
const studentHouseEl = document.getElementById("studentHouse");
const teacherHouseEl = document.getElementById("teacherHouse");
const studentScoreEl = document.getElementById("studentScore");
const teacherScoreEl = document.getElementById("teacherScore");
const studentStatus = document.getElementById("studentStatus");
const teacherStatus = document.getElementById("teacherStatus");
const messageEl = document.getElementById("message");
const diceImage = document.getElementById("diceImage");
const diceText = document.getElementById("diceText");
const questionModal = document.getElementById("questionModal");
const winModal = document.getElementById("winModal");
const winnerTitle = document.getElementById("winnerTitle");
const winnerText = document.getElementById("winnerText");
const endImage = document.getElementById("endImage");
const questionTypeEl = document.getElementById("questionType");
const turnLabelEl = document.getElementById("turnLabel");
const questionTitleEl = document.getElementById("questionTitle");
const questionTextEl = document.getElementById("questionText");
const penaltyTextEl = document.getElementById("penaltyText");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const continueButton = document.getElementById("continueButton");
const timerEl = document.getElementById("timer");
const playAgainButton = document.getElementById("playAgainButton");
const blueCarEl = document.getElementById("blueCar");
const redCarEl = document.getElementById("redCar");
const carChoiceInputs = document.querySelectorAll('input[name="studentCar"]');
const howToPlayButton = document.getElementById("howToPlayButton");
const goToChoiceButton = document.getElementById("goToChoiceButton");
const backToCoverButton = document.getElementById("backToCoverButton");
const continueToChoiceButton = document.getElementById(
  "continueToChoiceButton",
);

function configurePlayers() {
  const selected =
    document.querySelector('input[name="studentCar"]:checked')?.value || "blue";

  players[0].color = selected;
  players[1].color = selected === "blue" ? "red" : "blue";

  players[0].carEl = selected === "blue" ? blueCarEl : redCarEl;
  players[1].carEl = selected === "blue" ? redCarEl : blueCarEl;
}

function getCarOffset(playerIndex) {
  return { x: 0, y: 0 };
}

function setCarPosition(playerIndex) {
  const player = players[playerIndex];
  const safePosition = Math.max(0, Math.min(30, player.position));
  const pos = boardPositions[safePosition];
  const offset = getCarOffset(playerIndex);

  player.carEl.style.left = `${pos.x + offset.x}%`;
  player.carEl.style.top = `${pos.y + offset.y}%`;
  player.carEl.style.transform = `translate(-50%, -50%) rotate(${pos.r}deg)`;
}

function updateHUD() {
  studentHouseEl.textContent = players[0].position;
  teacherHouseEl.textContent = players[1].position;

  studentScoreEl.textContent = players[0].score;
  teacherScoreEl.textContent = players[1].score;

  studentStatus.classList.toggle("active", currentPlayer === 0);
  teacherStatus.classList.toggle("active", currentPlayer === 1);

  studentStatus.style.borderColor =
    players[0].color === "blue" ? "#2077d4" : "#d4382f";
  teacherStatus.style.borderColor =
    players[1].color === "blue" ? "#2077d4" : "#d4382f";
}

function rollBiasedDice(playerIndex) {
  const studentDice = [1, 2, 3, 4, 4, 5, 5, 6, 6];
  const teacherDice = [1, 1, 2, 3, 3, 3, 4, 5, 6];
  const pool = playerIndex === 0 ? studentDice : teacherDice;

  return pool[Math.floor(Math.random() * pool.length)];
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function animateDice(finalValue) {
  rollButton.disabled = true;
  diceImage.classList.add("rolling");

  for (let i = 0; i < 14; i++) {
    const tempValue = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `assets/${tempValue}.png`;
    diceText.textContent = `Dé : ${tempValue}`;
    await sleep(80);
  }

  diceImage.classList.remove("rolling");
  diceImage.src = `assets/${finalValue}.png`;
  diceText.textContent = `Dé : ${finalValue}`;
}

async function decideStartOrder() {
  if (isMoving || gameOver) return;

  rollButton.disabled = true;
  resetButton.disabled = true;

  messageEl.textContent = "Lancer initial : l’élève lance le dé.";
  const studentRoll = rollBiasedDice(0);
  await animateDice(studentRoll);
  await sleep(450);

  messageEl.textContent = `L’élève a obtenu ${studentRoll}. C’est maintenant au tour du professeur.`;
  const teacherRoll = rollBiasedDice(1);
  await animateDice(teacherRoll);
  await sleep(450);

  if (studentRoll === teacherRoll) {
    messageEl.textContent = `Égalité : les deux ont obtenu ${studentRoll}. Clique pour relancer et déterminer l’ordre.`;
    diceText.textContent = `Égalité : ${studentRoll} x ${teacherRoll}`;
    rollButton.textContent = "Relancer";
    rollButton.disabled = false;
    resetButton.disabled = false;
    return;
  }

  currentPlayer = studentRoll > teacherRoll ? 0 : 1;
  orderDecided = true;

  rollButton.textContent = "Lance le dé";
  diceText.textContent = `Élève ${studentRoll} x ${teacherRoll} Professeur`;
  messageEl.textContent = `${playerWithArticle(currentPlayer)} commence la course. Clique sur « Lance le dé ».`;

  updateHUD();

  rollButton.disabled = false;
  resetButton.disabled = false;
}

async function moveSpecificCar(playerIndex, steps) {
  const player = players[playerIndex];
  const target = Math.max(0, Math.min(30, player.position + steps));

  while (player.position !== target) {
    player.position += player.position < target ? 1 : -1;

    playSound("car");
    setCarPosition(playerIndex);
    updateHUD();

    await sleep(260);
  }
}

async function moveCar(steps) {
  isMoving = true;
  rollButton.disabled = true;

  await moveSpecificCar(currentPlayer, steps);

  messageEl.textContent = `${playerWithArticle(currentPlayer)} arrive sur la case ${players[currentPlayer].position}.`;

  await sleep(1200);

  isMoving = false;
  openQuestion(
    players[currentPlayer].position >= 30
      ? 29
      : players[currentPlayer].position - 1,
  );
}

async function rollDice() {
  if (isMoving || gameOver) return;

  if (!orderDecided) {
    await decideStartOrder();
    return;
  }

  if (players[currentPlayer].skipNext) {
    players[currentPlayer].skipNext = false;
    messageEl.textContent = `${playerWithArticle(currentPlayer)} passe son tour.`;
    switchPlayer();
    return;
  }

  const value = rollBiasedDice(currentPlayer);

  messageEl.textContent = `${playerWithArticle(currentPlayer)} lance le dé...`;

  await animateDice(value);

  messageEl.textContent = `${playerWithArticle(currentPlayer)} a obtenu ${value}.`;

  moveCar(value);
}

function getQuestionForHouse(houseIndex) {
  if (houseIndex >= 29) {
    return QUESTIONS.find((question) => question.type === "Défi final");
  }

  const isTimedChallenge = Math.random() < 0.18 && houseIndex > 4;

  if (isTimedChallenge) {
    const timedQuestions = QUESTIONS.filter((question) => question.timed);
    return timedQuestions[Math.floor(Math.random() * timedQuestions.length)];
  }

  const standardQuestions = QUESTIONS.filter(
    (question) => !question.timed && question.type !== "Défi final",
  );

  return standardQuestions[houseIndex % standardQuestions.length];
}

function openQuestion(houseIndex) {
  activeQuestion = getQuestionForHouse(houseIndex);
  activePenalty = PENALTIES[houseIndex] || PENALTIES[0];
  acceptingAnswer = true;

  questionTypeEl.textContent = activeQuestion.type;
  turnLabelEl.textContent = players[currentPlayer].name;
  questionTitleEl.textContent = activeQuestion.title;
  questionTextEl.textContent = activeQuestion.text;
  penaltyTextEl.textContent = activePenalty.text;
  feedbackEl.textContent = "";

  continueButton.classList.add("hidden");
  optionsEl.innerHTML = "";

  activeQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = option;
    button.addEventListener("click", () => answerQuestion(index));
    optionsEl.appendChild(button);
  });

  questionModal.classList.remove("hidden");
  questionModal.setAttribute("aria-hidden", "false");

  if (activeQuestion.timed) {
    startTimer();
  } else {
    stopTimer();
  }
}

function startTimer() {
  let timeLeft = 15;

  timerEl.textContent = timeLeft;
  timerEl.classList.remove("hidden");

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);

      if (acceptingAnswer) {
        answerQuestion(-1);
      }
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerEl.classList.add("hidden");
}

async function applyPenalty() {
  const player = players[currentPlayer];
  const opponentIndex = currentPlayer === 0 ? 1 : 0;
  const opponent = players[opponentIndex];

  if (activePenalty.type === "back") {
    feedbackEl.textContent += ` Pénalité appliquée : recul de ${activePenalty.value} case${activePenalty.value > 1 ? "s" : ""}.`;
    await moveSpecificCar(currentPlayer, -activePenalty.value);
  }

  if (activePenalty.type === "losePoint") {
    player.score = Math.max(0, player.score - activePenalty.value);
    feedbackEl.textContent += ` Pénalité appliquée : perte de ${activePenalty.value} point${activePenalty.value > 1 ? "s" : ""}.`;
  }

  if (activePenalty.type === "skip") {
    player.skipNext = true;
    feedbackEl.textContent += " Pénalité appliquée : un tour sera passé.";
  }

  if (activePenalty.type === "opponentPoint") {
    opponent.score += activePenalty.value;
    feedbackEl.textContent += ` Pénalité appliquée : ${playerWithArticle(opponentIndex)} gagne ${activePenalty.value} point${activePenalty.value > 1 ? "s" : ""}.`;
  }

  if (activePenalty.type === "opponentForward") {
    feedbackEl.textContent += ` Pénalité appliquée : ${playerWithArticle(opponentIndex)} avance de ${activePenalty.value} case${activePenalty.value > 1 ? "s" : ""}.`;
    await moveSpecificCar(opponentIndex, activePenalty.value);
  }

  updateHUD();
}

async function answerQuestion(selectedIndex) {
  if (!acceptingAnswer) return;

  acceptingAnswer = false;
  stopTimer();

  const buttons = [...document.querySelectorAll(".option-btn")];

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === activeQuestion.answer) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && selectedIndex !== activeQuestion.answer) {
      button.classList.add("wrong");
    }
  });

  if (selectedIndex === activeQuestion.answer) {
    playSound("correct");

    players[currentPlayer].score += activeQuestion.timed ? 2 : 1;

    feedbackEl.textContent = `Correct ! ${activeQuestion.explanation}`;
    messageEl.textContent = `${playerWithArticle(currentPlayer)} a réussi le défi.`;
  } else {
    playSound("wrong");

    feedbackEl.textContent = `Incorrect ! ${activeQuestion.explanation}`;
    messageEl.textContent = `${playerWithArticle(currentPlayer)} n’a pas réussi le défi.`;

    await applyPenalty();
  }

  updateHUD();
  continueButton.classList.remove("hidden");
}

function switchPlayer() {
  currentPlayer = currentPlayer === 0 ? 1 : 0;

  updateHUD();

  messageEl.textContent =
    currentPlayer === 0
      ? "C’est au tour de l’élève. Clique sur « Lance le dé »."
      : "C’est au tour du professeur. Clique sur « Lance le dé ».";
}

function closeQuestion() {
  questionModal.classList.add("hidden");
  questionModal.setAttribute("aria-hidden", "true");

  const winnerIndex = players.findIndex((player) => player.position >= 30);

  if (winnerIndex !== -1) {
    const winner = players[winnerIndex];

    gameOver = true;

    if (winnerIndex === 0) {
      endImage.src = "assets/Victoire.png";
      endImage.alt = "Écran de victoire de l’élève";
      winnerTitle.textContent = "Victoire !";
      winnerText.textContent = `L’élève a gagné la course avec ${winner.score} point${winner.score > 1 ? "s" : ""}.`;
    } else {
      endImage.src = "assets/Defaite.png";
      endImage.alt = "Écran de défaite de l’élève";
      winnerTitle.textContent = "Défaite !";
      winnerText.textContent = `Le professeur a gagné la course avec ${winner.score} point${winner.score > 1 ? "s" : ""}.`;
    }

    winModal.classList.remove("hidden");
    winModal.setAttribute("aria-hidden", "false");

    rollButton.disabled = true;
    return;
  }

  switchPlayer();

  rollButton.disabled = false;
}

function resetGame() {
  configurePlayers();

  players.forEach((player) => {
    player.position = 0;
    player.score = 0;
    player.skipNext = false;
  });

  currentPlayer = 0;
  isMoving = false;
  acceptingAnswer = false;
  gameOver = false;
  orderDecided = false;

  stopTimer();

  diceImage.classList.remove("rolling");
  diceImage.src = "assets/1.png";
  diceText.textContent = "Dé : -";

  rollButton.textContent = "Lance le dé";
  messageEl.textContent =
    "Lance le dé pour déterminer qui commence : l’élève ou le professeur.";

  questionModal.classList.add("hidden");
  winModal.classList.add("hidden");

  rollButton.disabled = false;

  setCarPosition(0);
  setCarPosition(1);
  updateHUD();
}

carChoiceInputs.forEach((input) => {
  input.addEventListener("change", () => {
    document.querySelectorAll(".choice-card").forEach((card) => {
      card.classList.remove("selected");
    });

    input.closest(".choice-card").classList.add("selected");
  });
});

function showScreen(screen) {
  document.querySelectorAll(".screen").forEach((item) => {
    item.classList.remove("active");
  });

  screen.classList.add("active");
}

howToPlayButton.addEventListener("click", () => showScreen(howToPlayScreen));
goToChoiceButton.addEventListener("click", () => showScreen(startScreen));
backToCoverButton.addEventListener("click", () => showScreen(coverScreen));
continueToChoiceButton.addEventListener("click", () => showScreen(startScreen));

startButton.addEventListener("click", () => {
  showScreen(gameScreen);
  resetGame();
});

rollButton.addEventListener("click", rollDice);
resetButton.addEventListener("click", resetGame);
continueButton.addEventListener("click", closeQuestion);
playAgainButton.addEventListener("click", resetGame);

window.addEventListener("load", () => {
  configurePlayers();
  setCarPosition(0);
  setCarPosition(1);
  updateHUD();
});
