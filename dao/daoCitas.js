
let citas = [
    {id:0, nombre:'Pepe',apellidos:'Sanchez',fecha:'2021-01-12',hora:'08:00'},
    {id:1, nombre:'Juan',apellidos:'Sanchez',fecha:'2021-01-13',hora:'10:30'},
    {id:2, nombre:'Felisa',apellidos:'González',fecha:'2021-01-14',hora:'09:30'},
    {id:3, nombre:'Enriqueta',apellidos:'González',fecha:'2021-01-15',hora:'09:00'},
    {id:4, nombre:'Antonio',apellidos:'Sanchez',fecha:'2021-01-16',hora:'17:00'},
    {id:5, nombre:'Luis',apellidos:'Sanchez',fecha:'2021-01-16',hora:'15:00'},
    {id:6, nombre:'Felipe',apellidos:'Pérez',fecha:'2021-01-16',hora:'18:00'},
    {id:7, nombre:'Arbusta',apellidos:'García',fecha:'2021-01-16',hora:'09:00'},
    {id:8, nombre:'Akilina',apellidos:'García',fecha:'2021-01-15',hora:'10:00'},
    {id:9, nombre:'Fernanda',apellidos:'Sanchez',fecha:'2021-01-14',hora:'12:00'},
    {id:10, nombre:'Juan José',apellidos:'Sanchez',fecha:'2021-01-14',hora:'13:00'},
]

let daoCitas = {}

daoCitas.saveCita=function saveCita(cita){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            cita.id=citas.length+5
            citas.push(cita)
            resolved(cita)
        },1000) 
    })    
}

daoCitas.getCita=function getCita (id){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            resolved(citas.find(cita=>cita.id==id))
            reject("error")
        },1000) 
    })
}
daoCitas.getCitas=function getCitas (){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            resolved(citas)
            reject("error")
        },1000) 
    })
}
daoCitas.getCitasByName=function getCitasByName (nombre){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            resolved(citas.filter(cita=>`${cita.nombre} ${cita.apellidos}`==nombre))
            reject("error")
        },1000) 
    })
}

daoCitas.deleteCita=function deleteCita (id){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            let index=citas.findIndex(cita=>cita.id==id)
            let cita=citas.splice(index,1)
            resolved(cita)
            reject("error")
        },1000) 
    })
}

daoCitas.editCita=function editCita(cita){
    let citaACambiar=this.getCita(cita.id)
    citaACambiar.fecha=cita.fecha
    citaACambiar.hora=cita.hora
    citaACambiar.nombre=cita.nombre
    citaACambiar.apellidos=cita.apellidos
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            resolved(citas.splice(citas.indexOf(cita), 1, citaACambiar))
        },1000)
    })
    
}

module.exports=daoCitas