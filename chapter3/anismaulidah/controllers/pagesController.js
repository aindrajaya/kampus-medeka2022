exports.home = (req, res) => {
  const title = "Hello World",
    subTitle = "Welcome to the world!";
  
  res.render("index", { title, subTitle });
};

exports.about = (req, res) => {
  res.render("about", { title: "About" });
};