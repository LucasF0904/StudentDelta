import { Request, Response } from "express";
import { CreateStudentUseCase } from "./CreateStudentUseCase";
export class CreateStudentController {
    constructor(
        private createStudentUseCase: CreateStudentUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, endereco, foto } = request.body
        try {
            await this.createStudentUseCase.execute({
                nome,
                endereco,
                foto
            })

            return response.status(201).send()
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
    }
}