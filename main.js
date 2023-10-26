// Button Event Listener
document.getElementById("grade-btn").addEventListener("click", gradeBtnClicked);

function gradeBtnClicked() {
  //grade reset
  let grade = 0;
  //getting inputs
  let q1A = document.getElementById("q1").value.toLowerCase();
  let q2A = document.getElementById("q2").value.toLowerCase();
  let q3A = document.getElementById("q3").value.toLowerCase();
  let q4A = document.getElementById("q4").value.toLowerCase();
  //consol.logging inputs
  console.log(q1A);
  console.log(q2A);
  console.log(q3A);
  console.log(q4A);
  //q1 verifying
  if (q1A === "steve" || q1A === "alex") {
    grade++;
    console.log(grade);
    document.getElementById("q1output").innerHTML = "Correct!";
  } else {
    console.log("Wrong");
    document.getElementById("q1output").innerHTML = "Wrong";
  }
  //q2 verifying
  if (
    q2A === "2" ||
    q2A === "two" ||
    q2A === "question 2" ||
    q2A === "question two"
  ) {
    grade++;
    console.log(grade);
    document.getElementById("q2output").innerHTML = "Correct!";
    // } else {
    //   console.log("Wrong");
    //   document.getElementById("q2output").innerHTML = "Wrong";
  }
  //q3 verifying
  if (
    q3A === "3" ||
    q3A === "three" ||
    q3A === "question 3" ||
    q3A === "question three"
  ) {
    grade++;
    console.log(grade);
    document.getElementById("q3output").innerHTML = "Correct!";
  } else {
    console.log("Wrong");
    document.getElementById("q3output").innerHTML = "Wrong";
  }
  //q4 verifying
  if (
    q4A === "4" ||
    q4A === "four" ||
    q4A === "question 4" ||
    q4A === "question four"
  ) {
    grade++; // grade = grade + 1
    console.log(grade);
    document.getElementById("q4output").innerHTML = "Correct!";
  } else {
    console.log("Wrong");
    document.getElementById("q4output").innerHTML = "Wrong";
  }
  //announcing grade at the bottom
  if (grade === 0) {
    document.getElementById("output").innerHTML =
      " 0%, 0/4. Lots of space to improve!";
  } else if (grade === 1) {
    document.getElementById("output").innerHTML =
      "25%, 1/4. Outlook not so not so good.";
  } else if (grade === 2) {
    document.getElementById("output").innerHTML =
      "50%, 2/4. halfway there! :/.";
  } else if (grade === 3) {
    document.getElementById("output").innerHTML = "3/4, 75%! Just 1 point off!";
  } else if (grade === 4) {
    document.getElementById("output").innerHTML =
      "4/4, 100%!! Outlook very good, I think.";
  } else {
    document.getElementById("output").innerHTML =
      "?/4, ?%. I think I messed something up uh.... Yeah, that's NOT a grade I accounted for. Uh... hmmmmm... oops?";
  }
}
