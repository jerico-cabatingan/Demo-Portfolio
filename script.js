/* Element assignment to variables project 1 */

let headingOne = document.getElementById('one');

let challenges1 = document.getElementById('challenges1');
let challengesP1 = document.getElementById('p1.1');

let solutions1 = document.getElementById('solutions1');
let solutionsP1 = document.getElementById('p1.2')

let features1 = document.getElementById('features1');
let featuresP1 = document.getElementById('p1.3');

let tech1 = document.getElementById('tech1');
let techP1 = document.getElementById('p1.4');

/* Element assignment to variables project 2 */

let headingTwo = document.getElementById('two');

let challenges2 = document.getElementById('challenges2');
let challengesP2 = document.getElementById('p2.1');

let solutions2 = document.getElementById('solutions2');
let solutionsP2 = document.getElementById('p2.2')

let features2 = document.getElementById('features2');
let featuresP2 = document.getElementById('p2.3');

let tech2 = document.getElementById('tech2');
let techP2 = document.getElementById('p2.4');


/* Element assignment to variables project 3 */

let headingThree = document.getElementById('three')

let challenges3 = document.getElementById('challenges3');
let challengesP3 = document.getElementById('p3.1');

let solutions3 = document.getElementById('solutions3');
let solutionsP3 = document.getElementById('p3.2')

let features3 = document.getElementById('features3');
let featuresP3 = document.getElementById('p3.3');

let tech3 = document.getElementById('tech3');
let techP3 = document.getElementById('p3.4');


/* Webpage requires 1 click to initiate event listener and another
click to envoke the function inside. Therefore, the function needs 
to be called first */

function toggleParagraph(heading, paragraph) {
    if (paragraph.style.display === 'none' && heading.style.display === 'block') {
      heading.style.display = 'none';
      paragraph.style.display = 'block';
    } else {
      heading.style.display = 'block';
      paragraph.style.display = 'none';
    }
}

toggleParagraph(headingOne, challengesP1);
toggleParagraph(headingOne, solutionsP1);
toggleParagraph(headingOne, featuresP1);
toggleParagraph(headingOne, techP1);

toggleParagraph(headingTwo, challengesP2);
toggleParagraph(headingTwo, solutionsP2);
toggleParagraph(headingTwo, featuresP2);
toggleParagraph(headingTwo, techP2);

toggleParagraph(headingThree, challengesP3);
toggleParagraph(headingThree, solutionsP3);
toggleParagraph(headingThree, featuresP3);
toggleParagraph(headingThree, techP3);

function hideParagraph(heading, paragraph) {
  if (paragraph.style.display === 'block' &&
  heading.style.display === 'none') {
    paragraph.style.display = 'none';
    heading.style.display = 'block';
  }
}

/* For some reason onmouseout even handlers won't work unless written
with an annonymous function call */

challenges1.onclick = function () {
  toggleParagraph(headingOne, challengesP1)
};
solutions1.onclick = function () {
  toggleParagraph(headingOne, solutionsP1)
};
features1.onclick = function () {
  toggleParagraph(headingOne, featuresP1)
};
tech1.onclick = function () {
  toggleParagraph(headingOne, techP1)
};

challenges1.onmouseout = function () {
  hideParagraph(headingOne, challengesP1)
};
solutions1.onmouseout = function () {
  hideParagraph(headingOne, solutionsP1)
};
features1.onmouseout = function () {
  hideParagraph(headingOne, featuresP1)
};
tech1.onmouseout = function () {
  hideParagraph(headingOne, techP1)
};



challenges2.onclick = function () {
  toggleParagraph(headingTwo, challengesP2)
};
solutions2.onclick = function () {
  toggleParagraph(headingTwo, solutionsP2)
};
features2.onclick = function () {
  toggleParagraph(headingTwo, featuresP2)
};
tech2.onclick = function () {
  toggleParagraph(headingTwo, techP2)
};

challenges2.onmouseout = function () {
  hideParagraph(headingTwo, challengesP2)
};
solutions2.onmouseout = function () {
  hideParagraph(headingTwo, solutionsP2)
};
features2.onmouseout = function () {
  hideParagraph(headingTwo, featuresP2)
};
tech2.onmouseout = function () {
  hideParagraph(headingTwo, techP2)
};



challenges3.onclick = function () {
  toggleParagraph(headingThree, challengesP3)
};
solutions3.onclick = function () {
  toggleParagraph(headingThree, solutionsP3)
};
features3.onclick = function () {
  toggleParagraph(headingThree, featuresP3)
};
tech3.onclick = function () {
  toggleParagraph(headingThree, techP3)
};

challenges3.onmouseout = function () {
  hideParagraph(headingThree, challengesP3)
};
solutions3.onmouseout = function () {
  hideParagraph(headingThree, solutionsP3)
};
features3.onmouseout = function () {
  hideParagraph(headingThree, featuresP3)
};
tech3.onmouseout = function () {
  hideParagraph(headingThree, techP3)
};

