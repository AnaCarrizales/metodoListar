class Persona
{
    constructor(nombre, edad)
    {
      this.nombre = nombre;
      this.edad = edad;
      this.siguiente = null;
    }

    info() 
    {
      return `${this.nombre} tiene ${this.edad} años de edad.\n`;
    }
}
  
class Grupo 
{
    constructor() 
    {
      this.inicio = null;
    }

    agregar(persona) 
    {
      if (this.inicio == null) 
      {
        this.inicio = persona;
      } 

      else 
      {
        let asist = this.inicio;
        while (asist.siguiente != null) asist = asist.siguiente;
        asist.siguiente = persona;
      }
    }
  
    lista() 
    {
      let asist = this.inicio;
      let anuncio = "";
      if (asist == null) 
      {
        anuncio = "El grupo está vacío";
      }

      while (asist != null) 
      {
        anuncio += `${asist.info()} `;
        asist = asist.siguiente;
      }

      return anuncio;
    }
}

let persona1 = new Persona("Fernando Arellano", 20);
let persona2 = new Persona("Ana Carrizales", 19);
let persona3 = new Persona("Gamaliel González", 21);
let persona4 = new Persona("Alan Hernández", 25);
let persona5 = new Persona("Tirzo Tejeda", 30);
let persona6 = new Persona("Gustavo Higuera", 14);
let persona7 = new Persona("Emir Cruz", 23);


let grupo = new Grupo()
grupo.agregar(persona1);
grupo.agregar(persona2)
grupo.agregar(persona3)
grupo.agregar(persona4)
grupo.agregar(persona5)
grupo.agregar(persona6)
grupo.agregar(persona7)
console.log(grupo.lista())