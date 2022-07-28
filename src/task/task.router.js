const router = require('express').Router()
const httpTask = require('./task.http')

router.route('/task')
    .get(httpTask.getAll)
    .post(httpTask.create)

router.route('/task/:id')
    .get(httpTask.getById)
    .put(httpTask.update)
    .delete(httpTask.deleteById)


module.exports = {
    router
}