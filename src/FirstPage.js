import React from "react";
import SecondPage from "./SecondPage";
import "./FirstPage.css";
import anime from "animejs/lib/anime.es.js";

class FirstPage extends React.Component {
  componentDidMount() {
    const firstPages = document.querySelector(".first-page");
    const text = document.querySelector(".text");
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    const jaewon = document.querySelector(".jaewon");
    jaewon.innerHTML = jaewon.textContent.replace(/\S/g, "<span>$&</span>");
    const arrow = document.querySelector(".arrow");
    const lines = document.querySelectorAll(".line");
    let bgWidth = window.innerWidth;
    let bgHeight = firstPages.scrollHeight;

    let arrowWidth = window.innerWidth / 3.6;
    let arrowHeight = window.innerWidth / 240;
    arrow.style.width = `${arrowWidth}px`;
    arrow.style.height = `${arrowHeight}px`;
    let textFontSize = window.innerWidth / 10;
    text.style.fontSize = `${textFontSize}px`;
    let jaewonFontSize = window.innerWidth / 10;
    jaewon.style.fontSize = `${jaewonFontSize}px`;
    let linesWidth = jaewon.getBoundingClientRect().width;
    let textTranslate = window.innerWidth / 53.3846153846;

    for (let i = 0; i < lines.length; i++) {
      lines[i].style.width = `${linesWidth}px`;
    }

    window.addEventListener("resize", () => {
      bgWidth = window.innerWidth;
      bgHeight = window.innerHeight;
      textFontSize = window.innerWidth / 10;
      jaewonFontSize = window.innerWidth / 10;
      text.style.fontSize = `${textFontSize}px`;
      jaewon.style.fontSize = `${jaewonFontSize}px`;
      arrow.style.width = `${arrowWidth}px`;
      arrow.style.height = `${arrowHeight}px`;

      linesWidth = jaewon.getBoundingClientRect().width;
      for (let i = 0; i < lines.length; i++) {
        lines[i].style.width = `${linesWidth}px`;
      }
    });

    anime.set(lines[0], {
      translateY: -bgHeight,
    });

    anime.set(lines[1], {
      translateY: bgHeight,
    });

    anime.set(".jaewon span", {
      opacity: 0,
    });

    const firstAnime = anime.timeline({
      loop: false,
    });
    firstAnime
      .add({
        targets: ".text",
        scale: [10, 1],
        opacity: [0, 1],
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 500,
      })

      .add({
        targets: ".arrow",
        translateX: [-bgWidth, bgWidth],
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 500,
      })

      .add({
        targets: ".text",
        translateX: () => anime.random(-textTranslate, textTranslate),
        translateY: () => anime.random(-textTranslate, textTranslate),
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text",
        translateX: 0,
        translateY: 0,
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text",
        translateX: () => anime.random(-textTranslate, textTranslate),
        translateY: () => anime.random(-textTranslate, textTranslate),
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text",
        translateX: 0,
        translateY: 0,
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text",
        translateX: () => anime.random(-textTranslate, textTranslate),
        translateY: () => anime.random(-textTranslate, textTranslate),
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text",
        translateX: 0,
        translateY: 0,
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text",
        translateX: () => anime.random(-textTranslate, textTranslate),
        translateY: () => anime.random(-textTranslate, textTranslate),
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text",
        translateX: 0,
        translateY: 0,
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".arrow",
        translateX: [bgWidth, -bgWidth],
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 500,
      })

      .add({
        targets: ".text",
        translateX: () => anime.random(-textTranslate, textTranslate),
        translateY: () => anime.random(-textTranslate, textTranslate),
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text",
        translateX: 0,
        translateY: 0,
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text",
        translateX: () => anime.random(-textTranslate, textTranslate),
        translateY: () => anime.random(-textTranslate, textTranslate),
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text",
        translateX: 0,
        translateY: 0,
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text",
        translateX: () => anime.random(-textTranslate, textTranslate),
        translateY: () => anime.random(-textTranslate, textTranslate),
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text",
        translateX: 0,
        translateY: 0,
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text",
        translateX: () => anime.random(-textTranslate, textTranslate),
        translateY: () => anime.random(-textTranslate, textTranslate),
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text",
        translateX: 0,
        translateY: 0,
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 30,
      })

      .add({
        targets: ".text span",
        translateX: () => anime.random(-500, 500),
        translateY: () => anime.random(-500, 500),
        opacity: [1, 0],
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        delay: anime.stagger(100),
        duration: 1000,
      })

      .add({
        targets: ".jaewon span",
        translateX: () => anime.random(-500, 500),
        translateY: () => anime.random(-500, 500),
        opacity: 0,
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        delay: anime.stagger(100),
        duration: 500,
      })

      .add({
        targets: ".jaewon span",
        translateX: 0,
        translateY: 0,
        opacity: 1,
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        delay: anime.stagger(100),
        duration: 500,
      })

      .add({
        targets: lines,
        translateY: 0,
        easing: "linear",
        duration: 800,
        complete: () => {
          firstPages.removeChild(lines[0]);
        },
      })

      .add({
        targets: ".jaewon span",
        opacity: 0,
        easing: "cubicBezier(0.01, 0.01, 0.85, 0.05)",
        duration: 10,
      })

      .add({
        targets: ".line",
        rotate: 90,
        width: bgWidth / 14,
        height: bgWidth / 14,
        backgroundColor: "white",
        easing: "linear",
        duration: 500,
        begin: () => {
          const line = document.querySelector(".line");
          line.style.boxShadow = "none";
        },
        complete: () => {
          const secondAnime = anime.timeline({
            loop: true,
          });

          secondAnime.add({
            begin: () => {
              const arrowBounce = document.querySelector(".arrow-bounce");
              const app = document.querySelector(".App");
              app.style.overflow = "auto";
              arrowBounce.style.opacity = 1;
              const thirdAnime = anime.timeline({
                loop: true,
              });
              // thirdAnime.add({
              //   targets: arrowBounce,
              //   bottom: "1.5%",
              //   easing: "easeOutExpo",
              //   duration: 780,
              // });
              // thirdAnime.add({
              //   targets: arrowBounce,
              //   bottom: "1%",
              //   easing: "easeInExpo",
              //   duration: 780,
              // });
            },
            targets: ".line",
            translateY: [
              {
                value: [0, -180],
                duration: 800,
                easing: "easeOutExpo",
              },
              {
                value: [-180, 0],
                duration: 500,
                easing: "easeInExpo",
              },
            ],

            rotate: [
              {
                value: [0, 180],
                duration: 1350,
                easing: "linear",
              },
            ],

            height: [
              {
                value: (bgWidth / 14) * 0.4,
                duration: 700,
                delay: 1350,
                easing: "easeOutExpo",
              },
              { value: bgWidth / 14, duration: 350, easing: "easeInExpo" },
            ],

            width: [
              {
                value: (bgWidth / 14) * 3,
                duration: 700,
                delay: 1350,
                easing: "easeOutExpo",
              },
              { value: bgWidth / 14, duration: 350, easing: "easeInExpo" },
            ],
          });
        },
      });
  }
  render() {
    return (
      <div className="first-page">
        <h1 className="text">Portfolio</h1>
        <h1 className="jaewon">SIM JAE WON</h1>
        <div className="arrow"></div>
        <div className="line line-shadow1"></div>
        <div className="line line-shadow2"></div>
        <div className="arrow-bounce"></div>
      </div>
    );
  }
}
export default FirstPage;
