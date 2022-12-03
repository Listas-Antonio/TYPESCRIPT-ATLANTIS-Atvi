import Client from "../models/client";
import Address from "../models/address";
import Telephone from "../models/telephone";

let client = new Client()
client.name = `Pedro de Alcântara João Carlos Leopoldo Salvador`
client.socialName = `Dom Pedro II`
client.registrationDate = new Date(1840, 6, 23)
client.birthDate = new Date(1825, 11, 2)

let address = new Address()
address.street = `R. do Catete`
address.district = `Copacabana`
address.city = `Rio de Janeiro`
address.state = `Rio de Janeiro`
address.country = `Brasil`
address.zipCode = `22220-000`
client.address = address

let telephone = new Telephone()
telephone.ddd = `12`
telephone.number = `987221234`
client.telephones.push(telephone)
telephone.ddd = `12`
telephone.number = `932476586`

let dependent = new Client()
dependent.name = `Isabel Cristina Leopoldina Augusta Micaela`
dependent.socialName = `Princesa Isabel`
dependent.registrationDate = new Date(1921, 10, 14)
dependent.birthDate = new Date(1846, 6, 29)
dependent.address = (client.address.clone() as Address)
dependent.telephones = (client.telephones.map(i => i.clone()) as Telephone[])
dependent.holder = client
client.dependents.push(dependent)

console.log(client);
console.log(dependent);
