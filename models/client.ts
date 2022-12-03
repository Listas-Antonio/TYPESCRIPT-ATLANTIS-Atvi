import Document from "./document"
import Address from "./address"
import Telephone from "./telephone"

export default class Cliente {
    public name: string
    public socialName: string
    public birthDate: Date
    public registrationDate: Date
    public telephones: Telephone[] = []
    public address: Address
    public documents: Document[] = []
    public dependents: Cliente[] = []
    public holder: Cliente

}