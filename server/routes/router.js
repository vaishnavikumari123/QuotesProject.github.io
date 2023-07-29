const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');



/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);
/**
*  @description Root Route
 *  @method GET /all-quotes
 */
route.get('/all-quotes', services.homeRoutes);


/**
 *  @description add users
 *  @method GET /new-quotes
 */

route.get('/new-quotes', services.add_user)

/**
 *  @description for update user
 *  @method GET /view-quotes
 */
route.get('/view-quotes', services.show_q)

// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);

 



module.exports = route
