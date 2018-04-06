The quiz
========

### Luís Sanfelices

### Julia Bellone

## Descripción

Web / juego para competir con otros usuarios en conocimientos sobre cine/series. Usa la API de The Movie DB
Hecho con Angular y Express. 

Tendrá social login con Google. 

El objetivo es que los usuarios se registren y participen en Quizes. Se guardará su puntuación para que puedan competir con los otros usuarios. 

## Estructura

* Home 

* Login

* Signup

* Perfil: (público/privado) informacion del usuario

* Rankings: muestra estadisticas generales

* Juegos: muestra todos los quiz disponibles

* Quiz: muestra un quiz en concreto con estadisticas y un boton de start quiz

## Modelos

User
  -nombre
  -email
  
Quiz
  -nombre:string,
  -categoría:string,
  -ranking:array[{user, puntuacion}],
  -reviews:array[{user, points, content}]
