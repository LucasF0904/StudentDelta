import { PostgresStudentRepository } from "../../repositories/implementations/PostgresStudentRepository";
import { FindByStudentController } from "./FindByStudentController";
import { FindByStudentUseCase } from "./FindByStudentUseCase";

const postgresStudentRepository = new PostgresStudentRepository

const findByStudentUseCase = new FindByStudentUseCase(
    postgresStudentRepository
)

const findByStudentController = new FindByStudentController(
    findByStudentUseCase
)

export { findByStudentUseCase, findByStudentController }