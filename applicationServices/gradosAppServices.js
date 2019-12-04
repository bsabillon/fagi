const express = require('express');
const Grado = require('../models/Grado');
const bodyParser = require('body-parser');
const domainMethods = require('../domainServices/matriculaDomainServices');

var methods = {
    

    addGrado: function(request, response){
        Grado.create(
            request.body
         )
         .then(grado=>{
            response
            .status(200)
            .send('Grado added successfully');
            })
         .catch(error=>
            response.send("Error: "+ error))
    },


    getGradoById: function(request, response){
        Grado.findOne({
            where: {
                id: request.params.gradoId
              } 
        })
        .then(grado=>{
            response.json(grado);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
        
    },

  getGrados: function(request, response){
    Grado.findAll()
      .then(grado=>{
          response.json(grado);
      })
      .catch((error)=>{
          response.send("Error: "+ error)
      })
  },

  updateGrado: function(request, response){
    Grado.update(
        {Nombre: request.body.Nombre},
        {where: {id:request.params.gradoId}}
    )
    .then(grado=>{
        response
        .status(200)
        .send('Grado was updated successfully');
    })
    .catch(error=>
        response.send("Error: "+error))
  },

  deleteGrado: function(request, response){
    Grado.destroy({
        where:{
            id:request.params.gradoId
        }
      })
      .then(grado=>{
          response
          .status(200)
          .send('Grado deleted successfully')
      })
      .catch(error=>
        response.send("Error: " + error))
  }



}

module.exports= methods;