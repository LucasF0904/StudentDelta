import { IStudentRepository } from "../../repositories/IStudentRepository";
import { IFindByStudentDTO } from "./FindByStudentDTO";
import { Student } from "../../entities/Student";

export class FindByStudentUseCase {
    constructor(private studentRepository: IStudentRepository) { }
    async execute(data: IFindByStudentDTO) {
        const FindByName = await this.studentRepository.findByName(data.nome)
        if (FindByName) {
            const student = new Student(data)
            return student
        }
    }
}