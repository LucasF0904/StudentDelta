import { Router } from "express";
import { createStudentController } from "./useCases/CreateStudent";
import { findByStudentController } from "./useCases/FindByStudent";

const router = Router()

router.post('/students', (request, response) => {
    return createStudentController.handle(request, response)
})
router.get('/students', (request, response) => {
    return findByStudentController.handle(request, response)
})

export { router }