let req = new XMLHttpRequest();

let searchBtn = document.querySelector(".search-btn");
let seachInput = document.querySelector(".search-input");
let msg = document.querySelector(".msg");

searchBtn.addEventListener("click", (_) => {
  req.open("GET", `https://api.github.com/users/${seachInput.value}`);
  req.send();
  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      msg.style.display = "none";
      let userData = JSON.parse(this.responseText);
      let userName = document.querySelector(".user-name"),
        avatar = document.querySelector(".avatar"),
        followers = document.querySelector(".followers"),
        following = document.querySelector(".following"),
        location = document.querySelector(".location"),
        publicRepos = document.querySelector(".public-repos"),
        profileUrl = document.querySelector(".profile-url"),
        joinedDate = document.querySelector(".joined-date");
      avatar.src = userData["avatar_url"];
      userName.innerHTML = `User username is: ${userData.login}`;
      followers.innerHTML = `Total Followers is: ${userData.followers}`;
      following.innerHTML = `Total Following is: ${userData.following}`;
      location.innerHTML = `User Location is: ${
        userData.location || "Unknown"
      }`;
      joinedDate.innerHTML = `This User Joined ${`${new Date(
        userData["created_at"]
      ).getFullYear()}-${new Date(
        userData["created_at"]
      ).getMonth()}-${new Date(userData["created_at"]).getDate()}`}`;
      publicRepos.innerHTML = `Total Public Repos is: ${userData["public_repos"]}`;
      profileUrl.innerHTML = `Go TO ${userData.login} Profile`;
      profileUrl.href = userData["html_url"];
    } else {
      msg.style.display = "block";
    }
  };
});
