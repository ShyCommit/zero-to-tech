import { animate, stagger } from "animejs";

export function initCardsAnim() {
  var cards = document.querySelectorAll(".card");
  if (!cards.length) return;

  // 渐进增强：只有 JS 真正跑起来时才把卡片设为透明，
  // 这样脚本一旦加载失败，页面依然是完整的（不会整片空白）。
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.opacity = "0";
  }

  animate(".card", {
    opacity: [0, 1],
    translateY: [24, 0],
    delay: stagger(120),
    duration: 700,
    ease: "outBack",
  });
}