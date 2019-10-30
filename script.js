fetch("https://www.reddit.com/r/aww/.json")
  .then(res => res.json())
  .then(data => {
    const articleContainerEl = document.getElementById("main");
    for (entry of data.data.children) {
      let postEl = document.createElement("div");
      postEl.classList.add("post");
      articleContainerEl.appendChild(postEl);

      let titleEl = document.createElement("p");
      titleEl.innerText = entry.data.title;
      postEl.appendChild(titleEl);

      let picEl = document.createElement("img");
      picEl.src = entry.data.thumbnail;
      postEl.appendChild(picEl);

      let linkEl = document.createElement("a");
      //   linkEl.setAttribute("href", `www.reddit.com${entry.data.permalink}`);
      linkEl.href = `www.reddit.com${entry.data.permalink}`;
      linkEl;
      linkEl.innerText = "link";
      postEl.appendChild(linkEl);
    }
  });
