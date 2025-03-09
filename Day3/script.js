console.clear();

const igPost = {
  user: {
    profPicture: "https://xsgames.co/randomusers/assets/avatars/male/70.jpg",
    username: "Korey_Dengel90", //faker.internet.displayName(), //"Korey_Dengel90"
    location: "California, USA",
    image:
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/man-conquered-a-high-mountain-motivation-free-image.jpeg?w=1500&quality=50",
    caption: "Ahh... fresh air & breath taking",
    datePosted: "2 hours ago"
  },
  // text: faker.lorem.lines(),
  // likes: faker.number.int(2),
  // comments: [
  likes: [
    {
      user: {
        profPicture:
          "https://xsgames.co/randomusers/assets/avatars/male/28.jpg",
        username: "Jay_Lap94", //faker.internet.displayName(), //"Jay_Lap94"
        name: "Jacinto Laplante"
      }
    },
    {
      user: {
        profPicture:
          "https://xsgames.co/randomusers/assets/avatars/female/51.jpg",
        username: "S_Wysocki97", //faker.internet.displayName(), //"S_Wysocki97"
        name: "Sharice Wysocki"
      }
    },
    {
      user: {
        profPicture:
          "https://xsgames.co/randomusers/assets/avatars/female/0.jpg",
        username: "Lindborg_Cyborg9", //faker.internet.displayName(), //"Lindborg_Cyborg9"
        name: "Janina Lindborg"
      }
    },
    {
      user: {
        profPicture:
          "https://xsgames.co/randomusers/assets/avatars/male/35.jpg",
        username: "JCreeley82", //faker.internet.displayName(), //"JCreeley82"
        name: "Jon Creeley"
      }
    },
    {
      user: {
        profPicture: "https://xsgames.co/randomusers/assets/avatars/male/0.jpg",
        username: "Al_Melquist8", //faker.internet.displayName(), //"Al_Melquist8"
        name: "Alberto Melquist"
      }
    },
    {
      user: {
        profPicture:
          "https://xsgames.co/randomusers/assets/avatars/female/60.jpg",
        username: "KLady98", //faker.internet.displayName(), //"KLady98"
        name: "Kaleigh Larum"
      }
    },
    {
      user: {
        profPicture:
          "https://xsgames.co/randomusers/assets/avatars/male/49.jpg",
        username: "Tua_Twice2", //faker.internet.displayName(), //"Tua_Twice2"
        name: "Roger Tua"
      }
    },
    {
      user: {
        profPicture:
          "https://xsgames.co/randomusers/assets/avatars/female/43.jpg",
        username: "Sogna01", //faker.internet.displayName(), //"Sogna01"
        name: "Richelle Scogna"
      }
    },
    {
      user: {
        profPicture:
          "https://xsgames.co/randomusers/assets/avatars/female/66.jpg",
        username: "positive_vibes2", //faker.internet.displayName(), //"positive_vibes2"
        name: "Veola Bellestri"
      }
    },
    {
      user: {
        profPicture:
          "https://xsgames.co/randomusers/assets/avatars/male/60.jpg",
        username: "FerminTheVermin89", //faker.internet.displayName(), //"FerminTheVermin89"
        name: "Fermin Colson"
      }
    }
  ],
  comments: [
    {
      user: {
        profPicture:
          "https://xsgames.co/randomusers/assets/avatars/male/60.jpg",
        username: "FerminTheVermin89" //faker.internet.displayName() //"FerminTheVermin89",
      },
      text: "👍 Nice photo buddy!",
      date: "11-11-24"
    },
    {
      user: {
        profPicture:
          "https://xsgames.co/randomusers/assets/avatars/female/66.jpg",
        username: "positive_vibes2" //faker.internet.displayName() //"positive_vibes2",
      },
      text: "Beautiful",
      date: "11-11-24"
    },
    {
      user: {
        profPicture: "https://xsgames.co/randomusers/assets/avatars/male/0.jpg",
        username: "Al_Melquist8" //faker.internet.displayName() //"Al_Melquist8"
      },
      text: "That was a fun trip :)",
      date: "11-11-24"
    },
    {
      user: {
        profPicture:
          "https://xsgames.co/randomusers/assets/avatars/male/49.jpg",
        username: "Tua_Twice2" //faker.internet.displayName() //"Tua_Twice2"
      },
      text: "Amazing",
      date: "11-11-24"
    },
    {
      user: {
        profPicture:
          "https://xsgames.co/randomusers/assets/avatars/male/28.jpg",
        username: "Jay_Lap94" //faker.internet.displayName() //"Jay_Lap94"
      },
      text: "Wonderful memories",
      date: "11-11-24"
    },
    {
      user: {
        profPicture:
          "https://xsgames.co/randomusers/assets/avatars/female/51.jpg",
        username: "S_Wysocki97" //faker.internet.displayName() //"S_Wysocki97"
      },
      text: "Looks nice, Wish I was there",
      date: "11-11-24"
    }
  ]
};

//Hide Cards
const showCommentsBtn = document.querySelector(".show-comments");
const hideCommentsBtn = document.querySelector(".hide-comments");
const showLikesBtn = document.querySelector(".show-likes");
const hideLikesBtn = document.querySelector(".hide-likes");
const userCard = document.querySelector(".user-card"); //AKA card-1
const likesCard = document.querySelector(".likes-card"); //AKA card-3
const commentsCard = document.querySelector(".comments-card"); //AKA card-2

showCommentsBtn.addEventListener("click", () => {
  commentsCard.classList.remove("hidden"); //AKA card-2
  userCard.classList.add("hidden"); //AKA card-1
});

hideCommentsBtn.addEventListener("click", () => {
  userCard.classList.remove("hidden"); //AKA card-1
  commentsCard.classList.add("hidden"); //AKA card-2
});

showLikesBtn.addEventListener("click", () => {
  likesCard.classList.remove("hidden"); //AKA card-3
  userCard.classList.add("hidden"); //AKA card-1
});

hideLikesBtn.addEventListener("click", () => {
  userCard.classList.remove("hidden"); //AKA card-1
  likesCard.classList.add("hidden"); //AKA card-3
});

//Like btns
const likesIcon = document.querySelectorAll(".fa-regular.fa-heart"); //likes_icon

likesIcon.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("fa-regular");
    like.classList.toggle("fa-solid");
  });
});

//bookmark
const bookmarkBtn = document.getElementById("bookmark-btn");
const icon = bookmarkBtn.querySelector("i");

bookmarkBtn.addEventListener("click", function () {
  icon.classList.toggle("fa-regular");
  icon.classList.toggle("fa-solid");
});

// # of comments
const commentNumber = document.querySelector(".comments-count");
function commentsCount() {
  commentNumber.textContent = igPost.comments.length;
}
commentsCount();

//Create element utility function
function createElement(type, className, innerHTML, src) {
  const element = document.createElement(type);
  if (className !== undefined) {
    element.setAttribute("class", className);
  }
  if (innerHTML !== undefined) {
    element.innerHTML = innerHTML;
  }
  if (src !== undefined) {
    element.src = src;
  }
  return element;
}

function createImg({ src }) {
  return createElement("img", undefined, undefined, src);
}

function createP({ className, innerHTML }) {
  return createElement("p", className, innerHTML, undefined);
}

function createDiv({ className }) {
  return createElement("div", className, undefined, undefined);
}

function createBtn({ className, innerHTML }) {
  return createElement("button", className, innerHTML, undefined);
}

//User-card AKA card-1
function mainUser() {
  const userData = document.querySelector(".user-data");
  const userImg = createDiv({ className: "user-img" });
  const img = createImg({ src: igPost.user.profPicture });
  const username = createDiv({ className: "username" });
  const usernameUN = createP({
    className: ".usernameUN",
    innerHTML: igPost.user.username
  });
  const location = createP({
    className: "location",
    innerHTML: igPost.user.location
  });
  userImg.appendChild(img);
  username.appendChild(usernameUN);
  username.appendChild(location);
  userData.appendChild(userImg);
  userData.appendChild(username);
}
mainUser();

//main img
function mainImg() {
  const mainImgDiv = document.querySelector(".main-img");
  const img = document.createElement("img");
  img.src = igPost.user.image;
  mainImgDiv.appendChild(img);
}
mainImg();

//1st like
const firstLike = document.querySelector(".first-like");
firstLike.textContent = igPost.likes[0].user.username;

//username-caption AKA caption-username
const usernameCaption = document.querySelector(".username-caption");
usernameCaption.textContent = igPost.user.username;

//text-caption AKA caption-text
const textCaption = document.querySelector(".text-caption");
textCaption.textContent = igPost.user.caption;

//Post date
const datePosted = document.querySelector(".date-posted");
datePosted.textContent = igPost.user.datePosted;

//Comments card "3" AKA card-2
const commentsContainer = document.querySelector(".comments-container");
const comments = igPost.comments;
const commentMainUserImgDiv = document.getElementById("comment-user-img");
const commentMainUserImg = createImg({ src: igPost.user.profPicture });
commentMainUserImgDiv.appendChild(commentMainUserImg);

function renderComments() {
  commentsContainer.innerHTML = "";
  comments.forEach((comment) => {
    const cardSecondaryUserContainer = createDiv({
      className: "card-secondary-user-container"
    });
    const userData = createDiv({ className: "user-data" });
    const userImg = createDiv({ className: "user-img" });
    const commentUserImg = createImg({ src: comment.user.profPicture });
    const username = createDiv({ className: "username" });
    const usernameUN = createP({
      className: "usernameUN",
      innerHTML: comment.user.username
    });
    const commentText = createP({
      className: "comment-text",
      innerHTML: comment.text
    });
    const replyBtn = createBtn({ className: "grey", innerHTML: "Reply" });

    const heartButton = document.createElement("button");
    const heartIcon = document.createElement("i");

    heartIcon.setAttribute("class", "fa-regular fa-heart");

    heartIcon.addEventListener("click", () => {
      heartIcon.classList.toggle("fa-regular");
      heartIcon.classList.toggle("fa-solid");
    });
    heartButton.appendChild(heartIcon);
    userImg.appendChild(commentUserImg);
    username.appendChild(usernameUN);
    username.appendChild(commentText);
    username.appendChild(replyBtn);

    if (comment.user.username === igPost.user.username) {
      const deleteCommentBtn = createBtn({
        className: "grey delete-comment",
        innerHTML: "delete"
      });
      // deleteComment(comment.id);
      deleteCommentBtn.addEventListener("click", () => {
        deleteComment(comment.id);
      });

      username.appendChild(deleteCommentBtn);
    }

    userData.appendChild(userImg);
    userData.appendChild(username);
    cardSecondaryUserContainer.appendChild(userData);
    cardSecondaryUserContainer.appendChild(heartButton);
    commentsContainer.appendChild(cardSecondaryUserContainer);
  });
}

function addNewComment() {
  const commentInput = document.getElementById("add-comment");
  const newComment = {
    user: {
      profPicture: igPost.user.profPicture,
      username: igPost.user.username
    },
    text: commentInput.value,
    id: igPost.comments.length + 1
  };
  igPost.comments.push(newComment);
  commentInput.value = "";
  renderComments();
  commentsContainer.scrollTo({
    top: commentsContainer.scrollHeight,
    behavior: "smooth"
  });
  commentsCount();
  commentInput.focus();
  console.log(igPost.comments.length);
}

function deleteComment(commentId) {
  const commentIndex = igPost.comments.findIndex(
    (comment) => comment.id === commentId
  );
  if (commentIndex !== -1) {
    igPost.comments.splice(commentIndex, 1);
    renderComments();
    commentsCount();
  }
}

const addComment = document.getElementById("comment-form");
addComment.addEventListener("submit", (event) => {
  event.preventDefault();
  const commentInput = document.getElementById("add-comment");
  if (commentInput.value.length >= 1) {
    addNewComment();
  } else {
    alert("Comment should be more than one character long!");
  }
});

renderComments();

// (Likes Card) "Card-2" AKA Card-3
const likesContainer = document.createElement("div");
likesContainer.setAttribute("class", "likes-container");

const likes = igPost.likes;
likes.forEach((like) => {
  const userContainer = createDiv({ className: "likes-user-container" });
  const cardSecondaryUserContainer = createDiv({
    className: "card-secondary-user-container"
  });
  const userData = createDiv({ className: "user-data" });
  const userImg = createDiv({ className: "user-img" });
  const img = createImg({ src: like.user.profPicture });
  const username = createDiv({ className: "username" });
  const usernameUN = createP({
    className: "usernameUN",
    innerHTML: like.user.username
  });
  const usernameName = createP({
    className: "username-name",
    innerHTML: like.user.name
  });
  const followBtn = createBtn({ className: "follow-btn", innerHTML: "Follow" });
  followBtn.addEventListener("click", function () {
    if (followBtn.textContent === "Follow") {
      followBtn.textContent = "Following";
      followBtn.classList.add("following-btn"); // add the following-btn class
    } else {
      ``;
      followBtn.textContent = "Follow";
      followBtn.classList.remove("following-btn"); // remove the following-btn class
    }
  });

  userImg.appendChild(img);
  username.appendChild(usernameUN);
  username.appendChild(usernameName);
  userData.appendChild(userImg);
  userData.appendChild(username);
  cardSecondaryUserContainer.appendChild(userData);
  userContainer.appendChild(cardSecondaryUserContainer);
  likesContainer.appendChild(userContainer);
  cardSecondaryUserContainer.appendChild(followBtn);
});
likesCard.appendChild(likesContainer);

/*
function $(selector) {
  return document.querySelector(selector);
}
const userData = $(".user-data");
const postData = $(".post-card");
const likes = $(".likes");
const commentsCount = $(".comments-count");
const comments = $(".comments");
const showComments = $(".show-comments");

userData.innerText = igPost.user.userName;
postData.innerText = igPost.text;
likes.innerText = igPost.likes;

let totalComments = igPost.comments.length;

igPost.comments.forEach(function (comment) {
  //console.log("Comment text:", comment.text);
  //totalComments += comment.comments.length;
  // No need to access comment.comments since it doesn't exist in the current structure
});
commentsCount.innerText = totalComments;

function $$(type, text) {
  const element = document.createElement(type);
  if (text) {
    element.innerText = text;
  }
  return element;
}

/*
function createReply(user, reply) {
  const li = $$("li");
  const userName = $$("h3", user);
  const text = $$("p", reply);
  li.appendChild(userName);
  li.appendChild(text);
  return li;
}

//showing/hiding replies
//conditional rendering for showing/hiding replies
// Conditional rendering for showing/hiding comments
showComments.addEventListener("click", function () {
  if (comments.innerHTML.length) {
    // Clear the comments section if already displayed
    comments.innerHTML = "";
  } else {
    // Iterate over the igPost comments array
    igPost.comments.forEach(function (comment) {
      const li = $$("li");
      const username = $$("h3", comment.user.userName);
      const text = $$("p", comment.text);

      // Append username and text to the comment list item
      li.appendChild(username);
      li.appendChild(text);

      // Append the fully constructed comment list item to the comments section
      comments.appendChild(li);
    });
  }
});

*/