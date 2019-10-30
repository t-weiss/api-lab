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
      titleEl.classList.add("title");
      postEl.appendChild(titleEl);

      let picEl = document.createElement("img");
      picEl.src = entry.data.thumbnail;
      picEl.classList.add("pic");
      postEl.appendChild(picEl);

      let linkEl = document.createElement("a");
      //   linkEl.setAttribute("href", `www.reddit.com${entry.data.permalink}`);
      linkEl.href = `http://www.reddit.com${entry.data.permalink}`;
      linkEl.classList.add("link");
      linkEl.innerText = "link";
      postEl.appendChild(linkEl);
    }
  });
