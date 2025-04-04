exports.success = function (req, res, status=200, msg='OK') {

  
  res.status(status).send({
    error: false,
    status: status,
    body: msg,
    severity: "success",
  });
};

exports.error = function (req, res, status, msg) {

  const codestatus = status || 500;
  const mesg = msg || "EROORRRRRR";

  res.status(codestatus).send({
    error: true,
    status: codestatus,
    body: mesg,
    severity: "error",
  });
};
