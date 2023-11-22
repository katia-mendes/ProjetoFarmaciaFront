import Usuario from "./Usuario"
import Categoria from './Categoria'

export default interface Produto{

id: number
nome: string
descricao: string
valor: number
data: Date
categoria: Categoria | null
usuario: Usuario | null
}