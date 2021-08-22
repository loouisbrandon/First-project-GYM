
const homeController = require("../../controllers/home.controller");

module.exports = (routeV1) => {

    routeV1.route('/')
        .get(
            (req, res, next) => {
                next()
            },
            homeController.getHome
        );
        
}