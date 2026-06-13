const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    maxHealth: 100,
    image: "snortleblat.webp",

    attacked() {
        if (this.health <= 0) {
            messageElement.textContent =
                `${this.name} has already been defeated.`;
            return;
        }

        this.health -= 20;

        if (this.health < 0) {
            this.health = 0;
        }

        if (this.health === 0) {
            messageElement.textContent =
                `${this.name} has been defeated! Press Revive to bring it back.`;
        } else {
            messageElement.textContent =
                `${this.name} was attacked and lost 20 health.`;
        }

        displayCharacter();
    },

    levelUp() {
        if (this.health === 0) {
            messageElement.textContent =
                `${this.name} must be revived before leveling up.`;
            return;
        }

        this.level += 1;
        this.health = this.maxHealth;

        messageElement.textContent =
            `${this.name} reached level ${this.level} and recovered all health!`;

        displayCharacter();
    },

    revive() {
        if (this.health > 0) {
            messageElement.textContent =
                `${this.name} is still alive.`;
            return;
        }

        this.health = this.maxHealth;

        messageElement.textContent =
            `${this.name} has been revived with full health!`;

        displayCharacter();
    }
};

const nameElement = document.querySelector("#character-name");
const classElement = document.querySelector("#character-class");
const levelElement = document.querySelector("#character-level");
const healthElement = document.querySelector("#character-health");
const imageElement = document.querySelector("#character-image");
const healthFill = document.querySelector("#health-fill");
const healthBar = document.querySelector(".health-bar");
const messageElement = document.querySelector("#message");

const attackButton = document.querySelector("#attack-button");
const levelButton = document.querySelector("#level-button");
const reviveButton = document.querySelector("#revive-button");
const currentYearElement = document.querySelector("#current-year");

function displayCharacter() {
    nameElement.textContent = character.name;
    classElement.textContent = character.class;
    levelElement.textContent = character.level;
    healthElement.textContent =
        `${character.health}/${character.maxHealth}`;

    imageElement.src = character.image;
    imageElement.alt = `${character.name}, a ${character.class}`;

    const healthPercentage =
        (character.health / character.maxHealth) * 100;

    healthFill.style.width = `${healthPercentage}%`;

    healthBar.setAttribute("aria-valuenow", character.health);
    healthBar.setAttribute("aria-valuemax", character.maxHealth);

    const characterIsDefeated = character.health === 0;

    attackButton.disabled = characterIsDefeated;
    levelButton.disabled = characterIsDefeated;
    reviveButton.disabled = !characterIsDefeated;
}

attackButton.addEventListener("click", () => {
    character.attacked();
});

levelButton.addEventListener("click", () => {
    character.levelUp();
});

reviveButton.addEventListener("click", () => {
    character.revive();
});

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

displayCharacter();