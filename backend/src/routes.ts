import { Router } from "express";
import { createStudentController } from "./useCases/CreateStudent";

const router = Router()

router.post('/students', (request, response) => {
    return createStudentController.handle(request, response)
})

export { router }