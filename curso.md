# Taller de Node.js con Express, MongoDB o MySQL
<!-- ## curso rapido de fullstack con vue, express y mongodb -->

## Dependencias
- express
- mongodb || mysql
- body-parser
- cors
- handlebars
- nodemon (opcional)
    
```js
// instalacion de dependencias
npm i express mongodb || mysql handlebars body-parser cors
npm i nodemon --dev
``` 

# Modulo 0 - Repaso de JavaScript

### ¿Que es Javascript?
JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.

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

- Objetos
    ```js
    let alumno = {
        nombre: 'Jorge',
        apellido: 'Rea',
        semestre: 6,
        nControl: 'C16130488'
    }
    ```
- Destructuracion de Objetos
    ```js
    let{nom: nombre, ap: apellido, sem: semestre, nc: nControl} = alumno
    ```
- Modulos
    ```js

    module.export = class Alumno{
        constructor(){

        }
    }

    function printAlumno(alumno){
        console.log({alumno})
    }

    inscribirAlumno = (alumno) => taller.alumnos.push(alumno)

    let taller = {
        nombre: 'Fundamentos de node',
        tutor: 'Jorge Rea',
        nHoras: 4,
        alumnos: []
    }

    module.exports = {
        printAlumno,
        inscribirAlumno,
        taller,
        eliminarAlumno: (taller, alumno)=>{
            taller.alumnos.remove(alumno.id)
        }
    }
    ```
    ## En otro script
    ```js
    //Usamos la destructuracion de objetos para obtener los datos
    const {printAlumno, inscribirAlumno, eliminarAlumno} = require('./primerScript')
    const taller = require('./primerScript').taller

    document.querySelector('.main').addEventListener('click', (evt)=>{
        //Previene el comportamiento predeterminado del elemento
        evt.preventDefault()
        //Obtenemos el valor de un textBox
        let alumno = document.querySelector('#text_box1').value
        inscribirAlumno(alumno)
    })

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
- Funciones flecha
    ```js
    function sumar(a, b){
        return a + b
    }

    sumar = (a, b) => a + b;

    function $(id){
        return document.querySelector(id)
    }

    $ = (id) => document.querySelector(id)

    ```
- Funcion como parametro
    ```js
    function saludo(){
        console.log('hola');
    }
    function hablar(nombre, accion){
        accion();
        console.log(nombre);
    }
    hablar('Maverick', saludo);
    ```
- Callback
    ```js
    //"Base de Datos"
    let empleados = [
        {id: 1,nombre: 'Jorge'},
        {id: 2,nombre: 'Hector'},
        {id: 3,nombre: 'Mario'},
        {id: 4,nombre: 'Ruben'},
        {id: 5,nombre: 'Rios'},
    ]

    function buscar(id, callback){
        //Buscamos al empleado en la "base de datos" 
        let empleado = empleados.find(empleado => {
            //Si lo encuentra retorna el empleado
            return empleado.id === id
        })
        //Si empleado no esta definido retorna un mensaje que dice no existe
        if(!empleado)
            callback('No existe', null)
        else
            callback(null, `Empleado: ${empleado}`)
    }

    buscar(10, (err, res)=>{
        if(err) return console.log(err)
        console.log(res)
    })
        
    ```
- Promesas
    ```js
    buscar = (id) => {
        return new Promise((resolve, reject)=>{
            let empleado = empleados.find(empleado => empleado.id === id)

            if(!empleado)
                reject('No existe el empleado')
            else
                resolve(empleado)
        })
    }
    buscar(3).then(empleado =>{
        console.log('Empleado de BD: ', empleado)
    }, (err)=> console.log(err))

    ```
- Async - Await
    ```js
    // Async - Await lo usamos cuando node tiene que delegar la tarea a otra aplicacion o al sistema, lo que hace es esperar a la funcion hasta que cumpla su cometido
    
    router.get('/', async (req, res)=>{
        //En este caso node delega la tarea a MySQL
        let links = await pool.query('select * from links')
        res.render('links/list', {links})
    })
    ```
- Http Server
    ```js
    var http = require('http');
        http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Hello World!</h1>')
        res.end();
    }).listen(8080);
    ```
# Modulo 1 - Backend del servidor
## 1.1 Inicializar componentes
