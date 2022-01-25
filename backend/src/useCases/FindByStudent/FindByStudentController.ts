import { Request, Response } from "express";
import { FindByStudentUseCase } from "./FindByStudentUseCase";

export class FindByStudentController {
    constructor(
        private findByStudentUseCase: FindByStudentUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, endereco, foto } = request.body
        try {
            await this.findByStudentUseCase.execute({
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