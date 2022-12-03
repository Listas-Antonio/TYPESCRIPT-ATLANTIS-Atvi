import Prototype from "../interfaces/prototype"

export default class Telephone implements Prototype {
    public ddd: string
    public number: string

    public clone(): Prototype {
        let telephone = new Telephone()
        telephone.ddd = this.ddd
        telephone.number = this.number
        return telephone
    }
}