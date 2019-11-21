getComments();
function getComments() {
  $.get("/comments", function(data) {
    if (!data) {
      console.log("No data received");
    }
    console.log("Received data:");
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }
    showComments(data);
  });
}

function ShowComments(comments) {
  var commentsSection = document.getElementById("suggestions");
  for (var i = 0; i < comments.length; i++) {
    var section = document.createElement("section");
    section.className += "suggestion";
    var heading = document.createElement("h3");
    heading.innerHTML = comments[i].name;
    var comment = document.createElement("p");
    comment.innerHTML = comments[i].comment;
    section.appendChild(heading);
    section.appendChild(comment);
    commentsSection.appendChild(section);
  }
}
