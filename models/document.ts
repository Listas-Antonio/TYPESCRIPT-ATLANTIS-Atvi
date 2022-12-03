import { DocumentType } from "../enumerators/documentType"

export default class Document {
    public number: string
    public documentType: DocumentType
    public shippingDate: Date
}