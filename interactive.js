document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initInteractiveElements();
    initSecretFacts();
});

function initAnimations() {
    anime({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1200,
        easing: 'easeOutExpo',
        delay: 300
    });

    anime({
        targets: '.hero-quote',
        opacity: [0, 1],
        translateX: [-100, 0],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: 600
    });

    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        anime({
            targets: section,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: 'easeOutCubic',
            delay: 100 * index
        });
    });
}

function initInteractiveElements() {
    const cards = document.querySelectorAll('.fact-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                rotateY: 5,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                rotateY: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            showTimelineDetails(index);
        });
    });
}

function initSecretFacts() {
    const secretButtons = document.querySelectorAll('.secret-button');
    secretButtons.forEach(button => {
        button.addEventListener('click', function() {
            const factId = this.dataset.fact;
            revealSecretFact(factId);
        });
    });
}

function revealSecretFact(factId) {
    const factElement = document.getElementById(`fact-${factId}`);
    const button = document.querySelector(`[data-fact="${factId}"]`);
    
    if (factElement.classList.contains('hidden')) {
        factElement.classList.remove('hidden');
        anime({
            targets: factElement,
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 500,
            easing: 'easeOutBack'
        });
        button.textContent = 'Схаваць факт';
    } else {
        anime({
            targets: factElement,
            opacity: [1, 0],
            scale: [1, 0.8],
            duration: 300,
            easing: 'easeInBack',
            complete: function() {
                factElement.classList.add('hidden');
            }
        });
        button.textContent = 'Паказаць факт';
    }
}

function showTimelineDetails(index) {
    const details = [
        "Нарадзіўся ў беднай сялянскай сям'і ў вёсцы Бычкі",
        "Паступіў у Віцебскае мастацкае вучылішча, але быў вымушаны кінуць вучобу",
        "Узнік у Вялікую Айчынную вайну, прайшоў усю вайну ў званні лейтэнанта",
        "Пачалася літаратурная дзейнасць у газеце 'Гродненская правда'",
        "Публікацыя першай кнігі 'Журавлiны крык'",
        "Выйшла ў свет знакамітая повесць 'Трэцяя ракета'",
        "Пераезд у Мінск, актыўная грамадская дзейнасць",
        "Прызначаны Народным пісьменнікам Беларусі",
        "Палітычная эміграцыя, жыццё ў Еўропе",
        "Вяртанне на радзіму і смерць у Мінску"
    ];
    
    alert(details[index] || "Дадатковая інфармацыя");
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}