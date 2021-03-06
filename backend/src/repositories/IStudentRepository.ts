import { Student } from "../entities/Student";

export interface IStudentRepository {
    findByName(nome: string): Promise<Student>
    save(student: Student): Promise<void>
    findAll(): Promise<Student>
}