let spanheader = document.querySelector(".span-header");
let listphone = document.querySelector(".list-phone");

spanheader.addEventListener("click", function (eo) {
  listphone.classList.add("list-phoneX");
});
let close = document.querySelector(".close");

close.addEventListener("click", function (eo) {
  listphone.classList.remove("list-phoneX");
});

// bookimg

let bookoverlay = document.querySelector(".book-overlay");
let bookimg = document.querySelectorAll(".book-img");
bookimg.forEach((element, index) => {
  element.addEventListener("click", function (eo) {
    bookoverlay.classList.add("book-overlayX");
    let imgSrc = element.getElementsByTagName("img")[0].getAttribute("src");
    let inerhtmlImg = `
<img src="${imgSrc}" alt="" srcset="" />
`;
    let imgover = document.querySelector(".img-over");
    imgover.innerHTML = inerhtmlImg;

    let right = document.querySelector(".right");

    let i = 0;
    right.addEventListener("click", function (eo) {
      let bookimginerarray = [
        `img/53921-غلاف-لا-وقت-للضياع.jpg`,
        `img/258585452_865594440757018_4109112257817981754_n.jpg`,
        `img/1675135_0.jpeg`,
      ];
      let inerhtmlImg = `
      <img src="${bookimginerarray[i]}" alt="" srcset="" />
      `;
      i++;
      let imgover = document.querySelector(".img-over");
      imgover.innerHTML = inerhtmlImg;
      if (i == bookimginerarray.length) {
        i = 0;
      }
    });
    let left = document.querySelector(".left");
    // let i = 0;

    left.addEventListener("click", function (eo) {
      let bookimginerarray = [
        `img/53921-غلاف-لا-وقت-للضياع.jpg`,
        `img/258585452_865594440757018_4109112257817981754_n.jpg`,
        `img/1675135_0.jpeg`,
      ];
      console.log(bookimginerarray.length);
      let inerhtmlImg = `
      <img src="${bookimginerarray[i]}" alt="" srcset="" />
      `;

      let imgover = document.querySelector(".img-over");
      imgover.innerHTML = inerhtmlImg;
      if (i == 0) {
        i = bookimginerarray.length;
      }
      i--;
      console.log(i);
    });
  });
});

let right = document.querySelector(".right");

let closebookover = document.querySelector(".close-book-over");
closebookover.addEventListener("click", function (eo) {
  bookoverlay.classList.remove("book-overlayX");
});

// up

let up = document.querySelector(".up");
window.addEventListener("scroll", function (eo) {
  if (window.scrollY > 600) {
    up.classList.add("upx");
  } else {
    up.classList.remove("upx");
  }
});

up.addEventListener("click", function (eo) {

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

});
