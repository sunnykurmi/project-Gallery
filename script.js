ScrollTrigger.matchMedia({
  "(min-width: 1024px)": function hello() {
    function init() {
      gsap.registerPlugin(ScrollTrigger);
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
      });
      locoScroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "fixed",
      });
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    }
    init();

    document.querySelectorAll("#img1,#img2,#img3").forEach(function (dets) {
      dets.addEventListener("mousemove", function () {
        document.querySelector("#page1 h1").style.filter = "blur(20px)";
        document.querySelector("#page1 h1").style.color = "rgb(0, 0, 0)";
      });
    });
    document.querySelectorAll("#img1,#img2,#img3").forEach(function (dets) {
      dets.addEventListener("mouseleave", function () {
        document.querySelector("#page1 h1").style.filter = "blur(0px)";
        document.querySelector("#page1 h1").style.color = "white";
      });
    });

    gsap.to("#h1cover", {
      delay: 1,
      duration: 2,
      ease: "power4.out",
      top: "100%",
    });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page1",
        start: "top top",
        end: "+=" + window.innerHeight * 5,
        scroller: "#main",
        pin: true,
 
        scrub: true,
      },
    });
    tl.to(
      "#page1 h1",
      {
        x: "-100%",
      },
      "hello"
    );
    tl.to(
      "#scroll",
      {
        x: "-600%",
      },
      "hello"
    );
    tl.fromTo(
      "#img1",
      {
        y: 0,
      },
      {
        y: -900,
      },
      "hello"
    );
    tl.to(
      "#img2",
      {
        y: "-220%",
      },
      "hello"
    );
    tl.to(
      "#img3",
      {
        y: "-130%",
      },
      "hello"
    );

    const a = new SplitType("#a1");
    const b = new SplitType("#a2");
    const c = new SplitType("#a3");
    const d = new SplitType("#a4");
    const e = new SplitType("#a5");

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#artistbox",
        start: "30% 90%",
        end: "top -50%",
        scrub: 2,
        // markers:true,
        scroller: "#main",
      },
    });
    tl2.fromTo(
      "#a1 .char",
      {
        x: 200,
        opacity: 0.1,
      },
      {
        x: -150,
        opacity: 1,
        stagger: 0.05,
      },
      "hello"
    );
    tl2.fromTo(
      "#a2 .char",
      {
        opacity: 0.1,
        x: 373,
      },
      {
        delay: 0.2,
        x: 20,
        opacity: 1,
        stagger: 0.05,
      },
      "hello"
    );
    tl2.fromTo(
      "#a3 .char",
      {
        opacity: 0.1,
        x: 86,
      },
      {
        delay: 0.4,
        x: -280,
        opacity: 1,
        stagger: 0.05,
      },
      "hello"
    );
    tl2.fromTo(
      "#a4 .char",
      {
        opacity: 0.1,
        x: 367,
      },
      {
        delay: 0.6,
        x: 10,
        opacity: 1,
        stagger: 0.05,
      },
      "hello"
    );
    tl2.fromTo(
      "#a5 .char",
      {
        opacity: 0.1,
        x: 280,
      },
      {
        delay: 0.8,
        x: -70,
        opacity: 1,
        stagger: 0.05,
      },
      "hello"
    );

    gsap.fromTo(
      "#a1 img,#a2 img,#a3 img,#a4 img,#a5 img",
      {
        x: 400,
        rotate: 50,
      },
      {
        scrollTrigger: {
          trigger: "#page2",
          start: "30% 90%",
          end: "top -140%",
          scrub: true,
          // markers:true,
          scroller: "#main",
        },
        x: -500,
        rotate: 0,
      }
    );

    const f = new SplitType("#page3 h1");

    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page3",
        start: "top top",
        end: "+=" + window.innerHeight * 20,
        pin: true,
        scrub: true,
        // markers:true,
        scroller: "#main",
      },
    });
    tl3.to(
      "#page3img1",
      {
        top: -320,
      },
      "hello"
    );
    tl3.to(
      "#page3 h1 .char:nth-child(1),#page3 h1 .char:nth-child(2)",
      {
        y: -840,
        delay: 0.07,
      },
      "hello"
    );
    tl3.to(
      "#page3img2",
      {
        top: -250,
        delay: 0.1,
      },
      "hello"
    );
    tl3.to(
      "#page3 h1 .char:nth-child(5),#page3 h1 .char:nth-child(6)",
      {
        y: -840,
        delay: 0.17,
      },
      "hello"
    );
    tl3.to(
      "#page3img3",
      {
        top: -250,
        delay: 0.2,
      },
      "hello"
    );
    tl3.to(
      "#page3 h1 .char:nth-child(9),#page3 h1 .char:nth-child(10)",
      {
        y: -840,
        delay: 0.27,
      },
      "hello"
    );

    tl3.to(
      "#page3img4",
      {
        left: "105%",
      },
      "hello1"
    );
    tl3.to(
      "#page3>h2",
      {
        left: "20%",
      },
      "hello1"
    );
    tl3.to(
      "#page3 h1 .char:nth-child(3),#page3 h1 .char:nth-child(4)",
      {
        x: "132vw",
        delay: 0.05,
      },
      "hello1"
    );
    tl3.to(
      "#page3 h1 .char:nth-child(7),#page3 h1 .char:nth-child(8)",
      {
        x: "123vw",
        delay: 0.09,
      },
      "hello1"
    );
    tl3.to(
      "#page3 h1 .char:nth-child(11)",
      {
        x: "90vw",
        delay: 0.13,
      },
      "hello1"
    );
    tl3.to(
      "#circ",
      {
        clipPath: "circle(72% at 50% 50%)",
      },
      "circ"
    );
    tl3.to(
      "#page3>h2",
      {
        opacity: 0,
      },
      "circ"
    );
    tl3.to("#circimg1", {
      top: "50%",
    });
    tl3.to(
      "#circimg1",
      {
        left: "18%",
      },
      "hello3"
    );
    tl3.fromTo(
      "#circ h2,#circ p,#circ button",
      {
        left: "-100%",
      },
      {
        left: 0,
      },
      "hello3"
    );
    tl3.to("#circ h2,#circ p,#circ button", {
      opacity: 0,
      y: -100,
    });
    tl3.to("#circimg2", {
      top: "50%",
    });
    tl3.to("#circimg2", {
      left: "82%",
    });
    tl3.to("#circimg3", {
      top: "50%",
    });
    tl3.to("#circimg4", {
      top: "50%",
    });
    tl3.to("#circimg4", {
      left: "18%",
    });
    tl3.to("#circimg5", {
      top: "50%",
    });
    tl3.to("#circimg5", {
      left: "82%",
    });
    tl3.to("#circimg6", {
      top: "50%",
    });
    tl3.to(
      "#circimg1,#circimg2,#circimg3",
      {
        top: "27%",
      },
      "hello4"
    );
    tl3.to(
      "#circimg4,#circimg5,#circimg6",
      {
        top: "73%",
      },
      "hello4"
    );

    const g = new SplitType("#footer h1");

    document
      .querySelector("#footer h1 .char:nth-child(1)")
      .addEventListener("mousemove", function () {
        document.querySelector("#footer img:nth-child(1)").style.transform =
          "translatey(-100px)";
        document.querySelector("#footer img:nth-child(1)").style.rotate =
          " 0deg";
        document.querySelector("#footer img:nth-child(1)").style.opacity = 1;
      });
    document
      .querySelector("#footer h1 .char:nth-child(1)")
      .addEventListener("mouseleave", function () {
        document.querySelector("#footer img:nth-child(1)").style.transform =
          "translatey(0px)";
        document.querySelector("#footer img:nth-child(1)").style.rotate =
          " 20deg";
        document.querySelector("#footer img:nth-child(1)").style.opacity = 0;
      });
    document
      .querySelector("#footer h1 .char:nth-child(2)")
      .addEventListener("mousemove", function () {
        document.querySelector("#footer img:nth-child(2)").style.transform =
          "translatey(-100px)";
        document.querySelector("#footer img:nth-child(2)").style.rotate =
          " 0deg";
        document.querySelector("#footer img:nth-child(2)").style.opacity = 1;
      });
    document
      .querySelector("#footer h1 .char:nth-child(2)")
      .addEventListener("mouseleave", function () {
        document.querySelector("#footer img:nth-child(2)").style.transform =
          "translatey(0px)";
        document.querySelector("#footer img:nth-child(2)").style.rotate =
          " 20deg";
        document.querySelector("#footer img:nth-child(2)").style.opacity = 0;
      });
    document
      .querySelector("#footer h1 .char:nth-child(3)")
      .addEventListener("mousemove", function () {
        document.querySelector("#footer img:nth-child(3)").style.transform =
          "translatey(-100px)";
        document.querySelector("#footer img:nth-child(3)").style.rotate =
          " 0deg";
        document.querySelector("#footer img:nth-child(3)").style.opacity = 1;
      });
    document
      .querySelector("#footer h1 .char:nth-child(3)")
      .addEventListener("mouseleave", function () {
        document.querySelector("#footer img:nth-child(3)").style.transform =
          "translatey(0px)";
        document.querySelector("#footer img:nth-child(3)").style.rotate =
          " 20deg";
        document.querySelector("#footer img:nth-child(3)").style.opacity = 0;
      });
    document
      .querySelector("#footer h1 .char:nth-child(4)")
      .addEventListener("mousemove", function () {
        document.querySelector("#footer img:nth-child(4)").style.transform =
          "translatey(-100px)";
        document.querySelector("#footer img:nth-child(4)").style.rotate =
          " 0deg";
        document.querySelector("#footer img:nth-child(4)").style.opacity = 1;
      });
    document
      .querySelector("#footer h1 .char:nth-child(4)")
      .addEventListener("mouseleave", function () {
        document.querySelector("#footer img:nth-child(4)").style.transform =
          "translatey(0px)";
        document.querySelector("#footer img:nth-child(4)").style.rotate =
          " 20deg";
        document.querySelector("#footer img:nth-child(4)").style.opacity = 0;
      });
    document
      .querySelector("#footer h1 .char:nth-child(5)")
      .addEventListener("mousemove", function () {
        document.querySelector("#footer img:nth-child(5)").style.transform =
          "translatey(-100px)";
        document.querySelector("#footer img:nth-child(5)").style.rotate =
          " 0deg";
        document.querySelector("#footer img:nth-child(5)").style.opacity = 1;
      });
    document
      .querySelector("#footer h1 .char:nth-child(5)")
      .addEventListener("mouseleave", function () {
        document.querySelector("#footer img:nth-child(5)").style.transform =
          "translatey(0px)";
        document.querySelector("#footer img:nth-child(5)").style.rotate =
          " 20deg";
        document.querySelector("#footer img:nth-child(5)").style.opacity = 0;
      });
    document
      .querySelector("#footer h1 .char:nth-child(6)")
      .addEventListener("mousemove", function () {
        document.querySelector("#footer img:nth-child(6)").style.transform =
          "translatey(-100px)";
        document.querySelector("#footer img:nth-child(6)").style.rotate =
          " 0deg";
        document.querySelector("#footer img:nth-child(6)").style.opacity = 1;
      });
    document
      .querySelector("#footer h1 .char:nth-child(6)")
      .addEventListener("mouseleave", function () {
        document.querySelector("#footer img:nth-child(6)").style.transform =
          "translatey(0px)";
        document.querySelector("#footer img:nth-child(6)").style.rotate =
          " 20deg";
        document.querySelector("#footer img:nth-child(6)").style.opacity = 0;
      });
    document
      .querySelector("#footer h1 .char:nth-child(7)")
      .addEventListener("mousemove", function () {
        document.querySelector("#footer img:nth-child(7)").style.transform =
          "translatey(-100px)";
        document.querySelector("#footer img:nth-child(7)").style.rotate =
          " 0deg";
        document.querySelector("#footer img:nth-child(7)").style.opacity = 1;
      });
    document
      .querySelector("#footer h1 .char:nth-child(7)")
      .addEventListener("mouseleave", function () {
        document.querySelector("#footer img:nth-child(7)").style.transform =
          "translatey(0px)";
        document.querySelector("#footer img:nth-child(7)").style.rotate =
          " 20deg";
        document.querySelector("#footer img:nth-child(7)").style.opacity = 0;
      });
    document
      .querySelector("#footer h1 .char:nth-child(8)")
      .addEventListener("mousemove", function () {
        document.querySelector("#footer img:nth-child(8)").style.transform =
          "translatey(-100px)";
        document.querySelector("#footer img:nth-child(8)").style.rotate =
          " 0deg";
        document.querySelector("#footer img:nth-child(8)").style.opacity = 1;
      });
    document
      .querySelector("#footer h1 .char:nth-child(8)")
      .addEventListener("mouseleave", function () {
        document.querySelector("#footer img:nth-child(8)").style.transform =
          "translatey(0px)";
        document.querySelector("#footer img:nth-child(8)").style.rotate =
          " 20deg";
        document.querySelector("#footer img:nth-child(8)").style.opacity = 0;
      });
    document
      .querySelector("#footer h1 .char:nth-child(9)")
      .addEventListener("mousemove", function () {
        document.querySelector("#footer img:nth-child(9)").style.transform =
          "translatey(-100px)";
        document.querySelector("#footer img:nth-child(9)").style.rotate =
          " 0deg";
        document.querySelector("#footer img:nth-child(9)").style.opacity = 1;
      });
    document
      .querySelector("#footer h1 .char:nth-child(9)")
      .addEventListener("mouseleave", function () {
        document.querySelector("#footer img:nth-child(9)").style.transform =
          "translatey(0px)";
        document.querySelector("#footer img:nth-child(9)").style.rotate =
          " 20deg";
        document.querySelector("#footer img:nth-child(9)").style.opacity = 0;
      });
    document
      .querySelector("#footer h1 .char:nth-child(10)")
      .addEventListener("mousemove", function () {
        document.querySelector("#footer img:nth-child(10)").style.transform =
          "translatey(-100px)";
        document.querySelector("#footer img:nth-child(10)").style.rotate =
          " 0deg";
        document.querySelector("#footer img:nth-child(10)").style.opacity = 1;
      });
    document
      .querySelector("#footer h1 .char:nth-child(10)")
      .addEventListener("mouseleave", function () {
        document.querySelector("#footer img:nth-child(10)").style.transform =
          "translatey(0px)";
        document.querySelector("#footer img:nth-child(10)").style.rotate =
          " 20deg";
        document.querySelector("#footer img:nth-child(10)").style.opacity = 0;
      });
  },
  hello() {},
});
ScrollTrigger.matchMedia({
  "(max-width: 600px)": function hello1() {
    function init() {
      gsap.registerPlugin(ScrollTrigger);
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
      });
      locoScroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "fixed",
      });
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    }
    init();

    gsap.to("#h1cover", {
      delay: 1,
      duration: 2,
      ease: "power4.out",
      top: "100%",
    });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page1",
        start: "top top",
        end: "+=" + window.innerHeight * 8,
        scroller: "body",
        pin: true,
        // markers:true,
        scrub: true,
      },
    });
    tl.to(
      "#page1 h1",
      {
        x: "-100%",
      },
      "hello"
    );
    tl.to(
      "#scroll",
      {
        x: "-600%",
      },
      "hello"
    );
    tl.fromTo(
      "#img1",
      {
        y: 0,
      },
      {
        y: -600,
      },
      "hello"
    );
    tl.to(
      "#img2",
      {
        y: "-220%",
      },
      "hello"
    );
    tl.to(
      "#img3",
      {
        y: "-130%",
      },
      "hello"
    );

    const a = new SplitType("#a1");
    const b = new SplitType("#a2");
    const c = new SplitType("#a3");
    const d = new SplitType("#a4");
    const e = new SplitType("#a5");

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#artistbox",
        start: "0% 70%",
        end: "top -50%",
        scrub: 2,
        // markers:true,
        scroller: "body",
      },
    });
    tl2.fromTo(
      "#a1 .char",
      {
        x: 100,
        opacity: 0.1,
      },
      {
        x: -60,
        opacity: 1,
        stagger: 0.05,
      },
      "hello"
    );
    tl2.fromTo(
      "#a2 .char",
      {
        opacity: 0.1,
        x: 103,
      },
      {
        delay: 0.2,
        x: -15,
        opacity: 1,
        stagger: 0.05,
      },
      "hello"
    );
    tl2.fromTo(
      "#a3 .char",
      {
        opacity: 0.1,
        x: 106,
      },
      {
        delay: 0.4,
        x: -95,
        opacity: 1,
        stagger: 0.05,
      },
      "hello"
    );
    tl2.fromTo(
      "#a4 .char",
      {
        opacity: 0.1,
        x: 107,
      },
      {
        delay: 0.6,
        x: -14,
        opacity: 1,
        stagger: 0.05,
      },
      "hello"
    );
    tl2.fromTo(
      "#a5 .char",
      {
        opacity: 0.1,
        x: 100,
      },
      {
        delay: 0.8,
        x: -34,
        opacity: 1,
        stagger: 0.05,
      },
      "hello"
    );

    gsap.fromTo(
      "#a1 img,#a2 img,#a3 img,#a4 img,#a5 img",
      {
        x: 400,
        rotate: 50,
      },
      {
        scrollTrigger: {
          trigger: "#page2",
          start: "30% 90%",
          end: "top -140%",
          scrub: true,
          // markers:true,
          scroller: "#main",
        },
        x: -200,
        rotate: 0,
      }
    );

    const f = new SplitType("#page3 h1");

    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page3",
        start: "top top",
        end: "+=" + window.innerHeight * 30,
        pin: true,
        scrub: true,
        // markers:true,
        scroller: "body",
      },
    });
    tl3.to(
      "#page3img1",
      {
        top: -250,
      },
      "hello"
    );
    tl3.to(
      "#page3 h1 .char:nth-child(1),#page3 h1 .char:nth-child(2)",
      {
        y: -840,
        delay: 0.096,
      },
      "hello"
    );
    tl3.to(
      "#page3img2",
      {
        top: -250,
        delay: 0.1,
      },
      "hello"
    );
    tl3.to(
      "#page3 h1 .char:nth-child(5),#page3 h1 .char:nth-child(6)",
      {
        y: -840,
        delay: 0.196,
      },
      "hello"
    );
    tl3.to(
      "#page3img3",
      {
        top: -250,
        delay: 0.2,
      },
      "hello"
    );
    tl3.to(
      "#page3 h1 .char:nth-child(9),#page3 h1 .char:nth-child(10)",
      {
        y: -840,
        delay: 0.296,
      },
      "hello"
    );

    tl3.to(
      "#page3img4",
      {
        left: "105%",
      },
      "hello1"
    );
    tl3.to(
      "#page3>h2",
      {
        left: "17%",
      },
      "hello1"
    );
    tl3.to(
      "#page3 h1 .char:nth-child(3),#page3 h1 .char:nth-child(4)",
      {
        x: "226vw",
        delay: 0.035,
      },
      "hello1"
    );
    tl3.to(
      "#page3 h1 .char:nth-child(7),#page3 h1 .char:nth-child(8)",
      {
        x: "237vw",
        delay: 0.057,
      },
      "hello1"
    );
    tl3.to(
      "#page3 h1 .char:nth-child(11)",
      {
        x: "130vw",
        delay: 0.072,
      },
      "hello1"
    );
    tl3.to(
      "#circ",
      {
        clipPath: "circle(72% at 50% 50%)",
      },
      "circ"
    );
    tl3.to(
      "#page3>h2",
      {
        opacity: 0,
      },
      "circ"
    );
    tl3.to(
      "#circimg1",
      {
        top: "50%",
      },
      "helo"
    );
    tl3.fromTo(
      "#circbox h2,#circbox p,#circbox button",
      {
        opacity: 0,
      },
      {
        delay: 0.3,
        opacity: 1,
      },
      "helo"
    );
    tl3.to(
      "#circimg2",
      {
        top: "50%",
      },
      "helo2"
    );
    tl3.to(
      "#circimg1",
      {
        top: "10%",
        width: "60%",
      },
      "helo2"
    );
    tl3.to(
      "#circbox h2,#circbox p,#circbox button",
      {
        opacity: 0,
      },
      "helo2"
    );
    tl3.to(
      "#circimg2",
      {
        top: "32%",
        width: "60%",
      },
      "helo3"
    );
    tl3.to(
      "#circimg3",
      {
        top: "54%",
        width: "60%",
      },
      "helo3"
    );
    tl3.to("#circimg4", {
      top: "77%",
      width: "60%",
    });
    tl3.to("#circimg5", {
      top: "80%",
    });
    tl3.to("#circimg6", {
      top: "50%",
    });
    tl3.to(
      "#circimg1,#circimg2,#circimg3",
      {
        top: "27%",
        width: "95%",
      },
      "hello4"
    );
    tl3.to(
      "#circimg4,#circimg5,#circimg6",
      {
        top: "73%",
      },
      "hello4"
    );
  },
  hello1() {},
});
