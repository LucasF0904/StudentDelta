import { Student } from "../../entities/User";
import { IStudentRepository } from "../IStudentRepository";

export class PostgresStudentRepository implements IStudentRepository {
    private students: Student[] = []

    async findByName(nome: string): Promise<Student> {
        const student = this.students.find(student => student.nome === nome)

        return student
    }

    async save(student: Student): Promise<void> {
        this.students.push(student)
    }
}