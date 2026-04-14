exports.homeController = (req, res,next) => {
  // console.log("first middleware", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "host.html"));
}

exports.addHomeController =(req, res,next) => {
   console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "hostAdded.html"));
}