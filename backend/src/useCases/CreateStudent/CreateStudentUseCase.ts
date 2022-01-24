import { IStudentRepository } from "../../repositories/IStudentRepository";
import { ICreateStudentRequestDTO } from "./CreateStudentDTO";
import { Student } from '../../entities/User';

export class CreateStudentUseCase {
    constructor(
        private studentRepository: IStudentRepository
    ) { }
    async execute(data: ICreateStudentRequestDTO) {
        const studentAlreadyExists = await this.studentRepository.findByName(data.nome)

        if (studentAlreadyExists) {
            throw new Error('Student already exists. ')
        }

        const student = new Student(data)

        await this.studentRepository.save(student)
    }
}