const express = require('express');
const Padre = require('../models/Padre');
const bodyParser = require('body-parser');
const domainMethods = require('../domainServices/matriculaDomainServices');

var methods = {
    

    addPadre: function(request, response){
        Padre.create(
            request.body
         )
         .then(padre=>{
            response
            .status(200)
            .send('padre added successfully');
            })
         .catch(error=>
            response.send("Error: "+ error))
    },


    getPadreById: function(request, response){
        Padre.findOne({
            where: {
                id: request.params.padreId
              } 
        })
        .then(padre=>{
            response.json(padre);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
        
    },

  getPadres: function(request, response){
    Padre.findAll()
      .then(padre=>{
          response.json(padre);
      })
      .catch((error)=>{
          response.send("Error: "+ error)
      })
  },

  updatePadre: function(request, response){
    Padre.update(
        {Nombre: request.body.Nombre},
        {where: {id:request.params.padreId}}
    )
    .then(padre=>{
        response
        .status(200)
        .send('Padre was updated successfully');
    })
    .catch(error=>
        response.send("Error: "+error))
  },

  deletePadre: function(request, response){
    Padre.destroy({
        where:{
            id:request.params.padreId
        }
      })
      .then(padre=>{
          response
          .status(200)
          .send('padre deleted successfully')
      })
      .catch(error=>
        response.send("Error: " + error))
  }



}

module.exports= methods;