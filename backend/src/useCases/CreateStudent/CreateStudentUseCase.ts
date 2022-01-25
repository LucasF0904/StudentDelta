import { IStudentRepository } from "../../repositories/IStudentRepository";
import { ICreateStudentRequestDTO } from "./CreateStudentDTO";
import { Student } from '../../entities/Student';

export class CreateStudentUseCase {
    constructor(
        private studentRepository: IStudentRepository
    ) { }
    async execute(data: ICreateStudentRequestDTO) {
        const studentAlreadyExists = await this.studentRepository.findByName(data.nome)
        console.log(data)
        if (studentAlreadyExists) {
            throw new Error('Student already exists. ')
            console.log(data)
        }

        const student = new Student(data)
        console.log(data)

        await this.studentRepository.save(student)
        console.log(data)

    }
}