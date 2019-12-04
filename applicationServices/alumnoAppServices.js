const express = require('express');
const Alumno = require('../models/Alumno');
const bodyParser = require('body-parser');
const domainMethods = require('../domainServices/matriculaDomainServices');

var methods = {
    

    addAlumno: function(request, response){
        Alumno.create(
            request.body
         )
         .then(alumno=>{
            response
            .status(200)
            .send('Alumno added successfully');
            })
         .catch(error=>
            response.send("Error: "+ error))
    },


    getAlumnoById: function(request, response){
        Alumno.findOne({
            where: {
                id: request.params.alumnoId
              } 
        })
        .then(alumno=>{
            response.json(alumno);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
        
    },

  getAlumnos: function(request, response){
      Alumno.findAll()
      .then(alumno=>{
          response.json(alumno);
      })
      .catch((error)=>{
          response.send("Error: "+ error)
      })
  },

  updateAlumno: function(request, response){
    Alumno.update(
        {Nombre: request.body.Nombre},
        {where: {id:request.params.alumnoId}}
    )
    .then(alumno=>{
        response
        .status(200)
        .send('Alumno was updated successfully');
    })
    .catch(error=>
        response.send("Error: "+error))
  },

  deleteAlumno: function(request, response){
      Alumno.destroy({
        where:{
            id:request.params.alumnoId
        }
      })
      .then(alumno=>{
          response
          .status(200)
          .send('Alumno deleted successfully')
      })
      .catch(error=>
        response.send("Error: "+error))
  }



}

module.exports= methods;