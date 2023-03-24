const router = require('express').Router();

/**
 * @swagger
 * /api:
 *   get:
 *     summary: Get a message
 *     description: Retrieve a list of String
 *     responses:
 *       '200':
 *         description: A list of users
 */
router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});
/**
 * @swagger 
 * /api/users/{userID}:
 *  post:
 *     summary: Create a new user
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to create
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the user
 *               name:
 *                 type: string
 *                 description: The name of the user
 *             required:
 *               - id
 *               - name
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 * */ 
router.post('/users', async (req, res, next) => {
  res.send({ message: 'New user 🚀' });
});

module.exports = router;
