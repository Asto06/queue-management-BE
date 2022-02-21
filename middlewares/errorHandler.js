module.exports = (err, req, res, next) => {
    let code = 0;
    let name = err.name;
    let message = "";
    switch (name) {
        case "NOT_FOUND":
            code = 404;
            message = "Data tidak ditemukan!";
            break;
        default:
            code = 500;
            message = "Internal Server Error!";
            break;
    }
    res.status(code).json({
        success: false,
        message: message,
    });
};
