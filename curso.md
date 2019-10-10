# Taller de Node.js con Express, Vue, MongoDB o MySQL
<!-- ## curso rapido de fullstack con vue, express y mongodb -->

## Dependencias
- express
- mongodb || mysql
- body-parser
- cors
- nodemon 
    
```js
// instalacion de dependencias
npm i express mongodb body-parser cors
npm i nodemon --dev
//credenciales mongodb
let credential = {
    user: 'guest',
    pass: 'foro2019'
}
``` 

# Modulo 0 - Repaso de JavaScript
- Tipo de Datos
    ```js
    var x;                  //Scope por funcion
    let y;                  //Scope por Bloques
    const z;                //Scope por bloque, no es mutable

    //ejemplo 1
    var a = 1, b = 2;
    {
        let c = 3;
        var d = 4;
        console.log(a,b,c,d)
    }
    console.log(a, b, c, d);    //Reference error: c is not defined

    //ejemplo 2:
    let i = 0;              //i es global
    function foo() {
        i = 1;
        let j = 2;          //j solo existe en foo
        if(true) {
            console.log(i); // 1
            console.log(j); // 2
        }
    }
    foo();
    ```

- Clases
    ```js
    class figura{
        constructor(nlados, nom){
            //aqui dentro se definen sus atributos
            this.n_lados = nlados
            this.nombre = nom
        }
        setNLados(nlados){
            this.n_lados = nlados
        }
        setNombre(nom){
            this.nombre = nom
        }
        printDatos(){
            console.log(`Nombre: ${this.nombre}`)
            console.log(`No. Lados: ${this.n_lados}`)
        }
    }
    ```
- Modulos
- Objetos
- Destructuracion de Objetos
- Funciones flecha
- Callbacks
- Promesas
- Async - Await

# Modulo 1 - Backend del servidor
## 1.1 Inicializar componentes
