fetch("https://api.github.com/users/anthonnyygpz")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok: ${response.status}");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.avatar_url);
    const avatar = document.getElementById("avatar");
    avatar.src = data.avatar_url;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
