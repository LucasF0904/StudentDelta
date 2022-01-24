import { Student } from "../entities/User";

export interface IStudentRepository {
    findByName(nome: string): Promise<Student>
    save(student: Student): Promise<void>
}