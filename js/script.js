const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {};
learning.topic = "JS";
learning.learningGoals = [
  "create projects with JS",
  "debug semantic errors",
  "customize sites",
  "make websites interactive",
];
learning.category = "Front End Development";
learning.topicImportance = "High";

console.log(learning);

learning["topic"] = "JavaScript";
learning.learningGoals.splice(1, 1);

topicElement.innerText = `I am learning ${learning.topic}`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals`;
countElement.classList.remove("hide");
