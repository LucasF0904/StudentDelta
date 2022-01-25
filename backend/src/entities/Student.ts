import { uuid } from "uuidv4"
export class Student {
    public readonly id: string

    public nome: string
    public endereco: string
    public foto: string

    constructor(props: Omit<Student, 'id'>, id?: string) {
        Object.assign(this, props)

        if (!id) {
            this.id = uuid()
        }
    }
}