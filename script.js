let coursesList = [
  {name: "Courses in England", prices: [0, 100]},
  {name: "Courses in Germany", prices: [500, null]},
  {name: "Courses in Italy", prices: [100, 200]},
  {name: "Courses in Russia", prices: [null, 400]},
  {name: "Courses in China", prices: [50, 250]},
  {name: "Courses in USA", prices: [200, null]},
  {name: "Courses in Kazakhstan", prices: [56, 324]},
  {name: "Courses in France", prices: [null, null]},
];

const courses = document.querySelector(".courses")
const from = document.querySelector(".from")
const to = document.querySelector(".to")

const button = document.querySelector(".button")

coursesList.sort((a, b) => a.prices[0] - b.prices[0])

const showCourses = (list) => {
  courses.innerHTML = "";
  
  list.forEach((course, i) => {
    courses.innerHTML += `
        <li class="item">${ i + 1 }. ${ course.name } <b>${ course.prices[0] === null ? 0: course.prices[0] }
                          ${ course.prices[1] === null ? 100000: course.prices[1] } </b>
        </li>
    `;
  });
}

button.addEventListener("click", () => {
  if(+to.value < +from.value) {
    to.value = from.value
  }
  
  let filteredList = [...coursesList]
  filteredList = filteredList.filter(course => (course.prices[1] || Infinity) >= from.value &&
    (to.value || Infinity) >= course.prices[0])
  showCourses(filteredList);
})

showCourses(coursesList);

