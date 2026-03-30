// 컷씬 파티클 생성
function createParticles(cutscene, color, count = 30) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.className = "cutscene-particle";
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: ${color};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: 0;
            box-shadow: 0 0 ${Math.random() * 10 + 5}px ${color};
            animation: particleFloat ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        cutscene.appendChild(particle);
    }
}

// 파티클 제거
function removeParticles(cutscene) {
    const particles = cutscene.querySelectorAll(".cutscene-particle");
    particles.forEach(p => p.remove());
}

// 타이핑 효과
function typeText(element, text, speed = 50) {
    return new Promise(resolve => {
        element.innerText = "";
        let i = 0;
        const interval = setInterval(() => {
            element.innerText += text[i];
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                resolve();
            }
        }, speed);
    });
}

// 시크릿 컷씬 (Abyssal Gyun)
function secretCutsceneEffect() {
    const cutscene = document.getElementById("cutscene");
    const cutsceneText = document.getElementById("cutscene-text");
    
    cutsceneText.innerText = "";
    cutscene.style.background = "linear-gradient(135deg, rgba(0,0,30,0.95), rgba(0,20,60,0.95), rgba(0,0,50,0.95))";
    cutscene.style.transform = "scale(1)";
    cutscene.classList.add("show");
    
    // 파티클 추가
    removeParticles(cutscene);
    createParticles(cutscene, "#4fc3f7", 40);
    
    const messages = [
        "바닷물이 모두 사라졌습니다.",
        "당신은 바닷물을 모두 사라지게한 원인을 마주합니다.",
        "바닷물을 전부 마셔버린 김산"
    ];
    
    let step = 0;
    
    async function nextMessage() {
        cutsceneText.style.opacity = "0";
        cutsceneText.style.transform = "translateY(20px)";
        
        await new Promise(r => setTimeout(r, 300));
        
        if (step === 2) {
            // 마지막 메시지는 특별한 스타일
            cutsceneText.style.fontSize = "3rem";
            cutsceneText.style.color = "#4fc3f7";
            cutsceneText.style.textShadow = "0 0 30px #4fc3f7, 0 0 60px #0288d1, 0 0 90px #01579b";
            cutsceneText.innerText = messages[step];
            
            // 쉐이크 효과
            let shakeCount = 0;
            const shakeInterval = setInterval(() => {
                const x = (Math.random() - 0.5) * 20;
                const y = (Math.random() - 0.5) * 20;
                cutscene.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
                shakeCount++;
                if (shakeCount > 20) {
                    clearInterval(shakeInterval);
                    cutscene.style.transform = "scale(1) translate(0,0)";
                }
            }, 100);
        } else {
            cutsceneText.style.fontSize = "1.8rem";
            cutsceneText.style.color = "#b3e5fc";
            cutsceneText.style.textShadow = "0 0 20px rgba(79,195,247,0.5)";
            await typeText(cutsceneText, messages[step], 60);
        }
        
        cutsceneText.style.opacity = "1";
        cutsceneText.style.transform = "translateY(0)";
        
        step++;
        if (step < messages.length) {
            setTimeout(nextMessage, 2500);
        } else {
            setTimeout(() => {
                cutscene.classList.remove("show");
                cutscene.style.transform = "scale(1)";
                removeParticles(cutscene);
                cutsceneText.style.fontSize = "";
            }, 5000);
        }
    }
    
    nextMessage();
}

// Lord of Depths 컷씬
function lordOfDepthsCutscene() {
    const cutscene = document.getElementById("cutscene");
    const cutsceneText = document.getElementById("cutscene-text");
    
    cutsceneText.innerText = "";
    cutscene.style.background = "linear-gradient(135deg, rgba(20,0,40,0.97), rgba(40,0,60,0.97), rgba(10,0,30,0.97))";
    cutscene.style.transform = "scale(1)";
    cutscene.classList.add("show");
    
    // 파티클 추가
    removeParticles(cutscene);
    createParticles(cutscene, "#ce93d8", 50);
    createParticles(cutscene, "#7c4dff", 30);
    
    const messages = [
        "고요한 심연속, 헤아릴 수 없는 뱃살이 태동합니다..",
        "뱃살이 상상할 수 없는 깊이에서 움직입니다..",
        "당신은 우주보다 무거운 존재를 마주합니다..",
        "무한의 뱃살 김산"
    ];
    
    let step = 0;
    
    async function nextMessage() {
        cutsceneText.style.opacity = "0";
        cutsceneText.style.transform = "translateY(30px) scale(0.9)";
        
        await new Promise(r => setTimeout(r, 400));
        
        if (step === messages.length - 1) {
            // 최종 메시지
            cutsceneText.style.fontSize = "3.2rem";
            cutsceneText.style.color = "#e1bee7";
            cutsceneText.style.textShadow = "0 0 40px #ce93d8, 0 0 80px #7c4dff, 0 0 120px #4a148c";
            cutsceneText.innerText = messages[step];
            
            // 강력한 쉐이크 효과
            let shakeCount = 0;
            const shakeInterval = setInterval(() => {
                const x = (Math.random() - 0.5) * 30;
                const y = (Math.random() - 0.5) * 30;
                const rotation = (Math.random() - 0.5) * 5;
                cutscene.style.transform = `translate(${x}px, ${y}px) scale(1.15) rotate(${rotation}deg)`;
                shakeCount++;
                if (shakeCount > 30) {
                    clearInterval(shakeInterval);
                    cutscene.style.transform = "scale(1) translate(0,0) rotate(0deg)";
                }
            }, 80);
        } else {
            cutsceneText.style.fontSize = "1.8rem";
            cutsceneText.style.color = "#d1c4e9";
            cutsceneText.style.textShadow = "0 0 25px rgba(206,147,216,0.6)";
            await typeText(cutsceneText, messages[step], 50);
        }
        
        cutsceneText.style.opacity = "1";
        cutsceneText.style.transform = "translateY(0) scale(1)";
        
        step++;
        if (step < messages.length) {
            setTimeout(nextMessage, 2800);
        } else {
            setTimeout(() => {
                cutscene.classList.remove("show");
                cutscene.style.transform = "scale(1)";
                removeParticles(cutscene);
                cutsceneText.style.fontSize = "";
            }, 5500);
        }
    }
    
    nextMessage();
}

// 컷씬 닫기
function closeCutscene() {
    const cutscene = document.getElementById("cutscene");
    cutscene.classList.remove("show");
    cutscene.style.transform = "scale(1)";
    removeParticles(cutscene);
}

// 파티클 애니메이션 스타일 주입
(function injectParticleStyles() {
    if (document.getElementById("cutscene-particle-styles")) return;
    
    const style = document.createElement("style");
    style.id = "cutscene-particle-styles";
    style.textContent = `
        @keyframes particleFloat {
            0%, 100% {
                opacity: 0;
                transform: translateY(0) scale(0.5);
            }
            25% {
                opacity: 0.8;
                transform: translateY(-30px) scale(1);
            }
            50% {
                opacity: 1;
                transform: translateY(-60px) scale(1.2);
            }
            75% {
                opacity: 0.6;
                transform: translateY(-90px) scale(0.8);
            }
        }
        
        #cutscene-text {
            transition: opacity 0.5s ease, transform 0.5s ease, font-size 0.3s ease;
        }
    `;
    document.head.appendChild(style);
})();