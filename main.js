const numsEl = document.querySelector(".nums");
const textarea = document.querySelector("#textarea");
const sort = document.querySelector("#sort");
textarea.focus();
textarea.addEventListener("keyup", (event) => {
  createNums(event.target.value);
});
function createNums(input) {
  const nums = input
    .split(",")
    .filter((num) => !isNaN(num) && num.trim() !== "")
    .map((num) => +num.trim());
  numsEl.innerHTML = "";
  nums.forEach((num) => {
    const numEl = document.createElement("span");
    numEl.classList.add("num");
    if (!isNaN(num)) {
      numEl.textContent = +num;
      numsEl.appendChild(numEl);
    }
  });
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  sort.addEventListener("click", function () {
    numsEl.innerHTML = "";
    nums.forEach((num) => {
      const numEl = document.createElement("span");
      numEl.classList.add("num");
      if (isNaN(num)) {
        numEl.textContent = "";
      } else {
        numEl.textContent = +num;
        numsEl.appendChild(numEl);
      }
    });
  });
}

const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();
