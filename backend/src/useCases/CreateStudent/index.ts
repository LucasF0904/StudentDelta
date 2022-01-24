import { PostgresStudentRepository } from "../../repositories/implementations/PostgresStudentRepository";
import { CreateStudentController } from "./CreateStudentController";
import { CreateStudentUseCase } from "./CreateStudentUseCase";

const postgresStudentRepository = new PostgresStudentRepository

const createStudentUseCase = new CreateStudentUseCase(
    postgresStudentRepository
)

const createStudentController = new CreateStudentController(
    createStudentUseCase
)

export { createStudentUseCase, createStudentController }