
const planosController = require("../../controllers/planos.controller");

module.exports = (routeV1) => {

    routeV1.route('/planos')
        .get(
            (req, res, next) => {
                next()
            },
            planosController.getplanps
        );
        
}