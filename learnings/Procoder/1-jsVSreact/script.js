let leftcounter = 10;                 // initial apples in basket 1
let rightcounter = 0;                // initial apples in basket 2

let leftbtn = document.getElementById("leftbtn");
let rightbtn = document.getElementById("rightbtn");

let leftbasket = document.querySelector(".basket1");
let rightbasket = document.querySelector(".basket2");

rightbtn.addEventListener("click", function () {
    if (leftcounter === 0) {
        alert("Oops basket 1 is empty now");
        return;
    }

    leftcounter--;
    rightcounter++;

    leftbasket.textContent = leftcounter + " apples";
    rightbasket.textContent = rightcounter + " apples";
});




leftbtn.addEventListener("click", function () {
    if (rightcounter === 0) {
        alert("Oops basket 2 is empty now");
        return;
    }

    rightcounter--;
    leftcounter++;

    leftbasket.textContent = leftcounter + " apples";
    rightbasket.textContent = rightcounter + " apples";
});


