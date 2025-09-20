class Usuario{
    constructor(esportistas){
        this.esportistas = esportistas
    }
    exibirNotas(){
        return `notas obtidas: ${this.esportistas.notas}`
    }
    exibirNotasOrdenadas(){
        return this.esportistas.notas.sort()
    }
    exibirMedia(){
        for(let i = 0; i < this.esportistas.length; i++){
            console.log(`Atleta: ${this.esportistas[i].nome}`)
            console.log(`Notas obtidas: ${this.esportistas[i].notas.join(",")}`)
            media = 0
            this.esportistas[i].notas.forEach(function(nota){
                media += Number.parseFloat(nota)
            })
            console.log(`Média válida: ${media}\n`) 

        }
        
    }

}


let atletas = [{
    nome: "Cesar Abascal",
    notas: [10,9.34,8.42,10,7.88]
},
{
    nome: "Fernando Puntel",
    notas: [8,10,10,7,9.33]
},
{
    nome: "Daiane Jelinski",
    notas: [7,10,9.5,9.5,8]
},
{
    nome: "Bruno Castro",
    notas: [8,10,10,7,9.33]
}]


let X = new Usuario(atletas)
X.exibirMedia()
