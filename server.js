const express = require('express')
const{MongoClient, objectID}=require('mongodb')
const bodyParser = require ('body-parser')
const assert = require ('assert')
const cors = require('cors')
const app =express()
const  ObjectID = require('mongodb').ObjectId;
var dattaa="";
app.use(bodyParser.json())
app.use(cors())
const mongo_url ='mongodb://localhost:27017'
const dataBase ='DBUSER'
MongoClient.connect(mongo_url,{
  useNewUrlParser :true,
  useUnifiedTopology:true  
},(err,client)=>{
assert.equal(err,null,'DB connection failed')
const db = client.db(dataBase)

app.get('/users',(req,res)=>{
    db.collection('user').find().toArray((err,data)=>{
    if(err) 
     res.send('Cannot fetch contacts')
    else
    
     res.send(data)
    })
    })
    app.get('/BLLIST',(req,res)=>{
      db.collection('Bon de Livraison').find().toArray((err,data)=>{
      if(err) 
       res.send('Cannot fetch contacts')
      else
      
       res.send(data)
      })
      })
      app.get('/COMLIST',(req,res)=>{
        db.collection('Commande').find().toArray((err,data)=>{
        if(err) 
         res.send('Cannot fetch contacts')
        else
        
         res.send(data)
        })
        })
    app.get('/usekjjhhr/:email',(req,res)=>{
      db.collection('user').find({email:req.params.email}).toArray((err,data)=>{
      if(err) 
       res.send('Cannot fetch contacts')
      else
      
       res.send(data)
      })
      })
    app.get('/Article',(req,res)=>{
      db.collection('Article').find().toArray((err,data)=>{
      if(err) 
       res.send('Cannot fetch contacts')
      else
      
       res.send(data)
      })
      })
      app.get('/Fournisseur/:ca',(req,res)=>{
        db.collection('Fournisseur').find({CodeArticle:req.params.ca}).toArray((err,data)=>{
        if(err) 
         res.send('Cannot fetch contacts')
        else
        
         res.send(data)
        })
        })
        app.get('/User/:login', (req, res) => {
          db.collection('user').findOne(
            { email:req.params.login },
            (err, data) => {
              if (err) res.send('cannot fetch contact')
              else res.send(data)
            },
          )
        })
        app.get('/utilisateur/:login',(req,res)=>{
          db.collection('user').findOne({email:req.params.login}).then((err,data)=>{
          if(err) 
           res.send('Cannot fetch contacts')
          else
          
           res.send(data)
          })
          })
        app.get('/FournisseurByRef/:RF',(req,res)=>{
          db.collection('Fournisseur').find({Réference:req.params.RF}).toArray((err,data)=>{
          if(err) 
           res.send('Cannot fetch contacts')
          else
          
           res.send(data)
          })
          })
          app.get('/FournisseurByName/:FR',(req,res)=>{
            db.collection('Fournisseur').find({fournisseur:req.params.FR}).toArray((err,data)=>{
            if(err) 
             res.send('Cannot fetch contacts')
            else
            
             res.send(data)
            })
            })
        app.get('/BS',(req,res)=>{
          db.collection('Bon Sortie').find().toArray((err,data)=>{
          if(err) 
           res.send('Cannot fetch contacts')
          else
          
           res.send(data)
          })
          })
          app.get('/CAISSE',(req,res)=>{
            db.collection('caisse').find().toArray((err,data)=>{
            if(err) 
             res.send('Cannot fetch contacts')
            else
            
             res.send(data)
            })
            })
            app.get('/Clients',(req,res)=>{
              db.collection('Client').find().toArray((err,data)=>{
              if(err) 
               res.send('Cannot fetch contacts')
              else
              
               res.send(data)
              })
              })
       
        app.get('/BS/:CA/:Ref',(req,res)=>{
          db.collection('Fournisseur').find({CodeArticle:req.params.CA,Réference:req.params.Ref}).toArray((err,data)=>{
          if(err) 
           res.send('Cannot fetch contacts')
          else
          
           res.send(data)
          })
          })
   app.get("/CAISSE/:CA/:Four", (req, res) => {
         db.collection("Fournisseur").findOne({CodeArticle:req.params.CA,fournisseur:req.params.Four}).then((data) => {
             if(err) 
                 console.send('Cannot fetch contacts')
            else
                 res.send(data)
           });
           });
    app.get("/Article/:CA", (req, res) => {
         db.collection("Article").findOne({CodeArticle: req.params.CA}).then((data) => {
            if(err) 
            console.send('Cannot fetch contacts')
           else
            res.send(data)
          });
      });
      app.get("/Articlebyid/:id", (req, res) => {
        db.collection("Article").findOne({_id:ObjectID(req.params.id)}).then((data) => {
           if(err) 
           console.send('Cannot fetch contacts')
          else
           res.send(data)
         });
     });
      app.get("/rowFR/:CA", (req, res) => {
        db.collection("Fournisseur").findOne({CodeArticle: req.params.CA}).then((data) => {
           if(err) 
           console.send('Cannot fetch contacts')
          else
           res.send(data)
         });
     });
      
     
      app.get("/contact/:name", (req, res) => {
        let body = req.body;
        let contact = db
          .collection("user")
          .findOne({ _name: req.params.name })
          .then((data) => {
            res.send(data);
          });
      });
    
   app.post('/add_user',(req,res)=>{
        let newContact = req.body
        db.collection('user').insert(newContact,(err,data)=>{
        if(err){
        res.send('cannot add new contact')}
        else
        res.send('Contact added')
    })
    })
    app.post('/add_BL',(req,res)=>{
      let newContact = req.body
      db.collection('Bon de Livraison').insert(newContact,(err,data)=>{
      if(err){
      res.send('cannot add new contact')}
      else
      res.send('Contact added')
  })
  })
  app.post('/add_COM',(req,res)=>{
    let newContact = req.body
    db.collection('Commande').insert(newContact,(err,data)=>{
    if(err){
    res.send('cannot add new contact')}
    else
    res.send('Contact added')
})
})
    app.post('/Archive',(req,res)=>{
      let newContact = req.body
      db.collection('Archive').insert(newContact,(err,data)=>{
      if(err){
      res.send('cannot add new contact')}
      else
      res.send('Contact added')
  })
  })
    app.post('/Ajouter_Client',(req,res)=>{
      let newContact = req.body
      db.collection('Client').insert(newContact,(err,data)=>{
      if(err){
      res.send('cannot add new contact')}
      else
      res.send('Contact added')
  })
  })
    app.post('/add_Article',(req,res)=>{
      let newContact = req.body
      db.collection('Article').insert(newContact,(err,data)=>{
      if(err){
      res.send('cannot add new contact')}
      else
      res.send('Contact added')
  })
  })
  app.post('/add_Fournisseur',(req,res)=>{
    let newContact = req.body
    db.collection('Fournisseur').insert(newContact,(err,data)=>{
    if(err){
    res.send('cannot add new contact')}
    else
    res.send('Contact added')
})
})
app.post('/add_BS',(req,res)=>{
  let newContact = req.body
  db.collection('Bon Sortie').insert(newContact,(err,data)=>{
  if(err){
  res.send('cannot add new contact')}
  else
  res.send('Contact added')
})
})
app.post('/add_CAISSE',(req,res)=>{
  let newContact = req.body
  db.collection('caisse').insert(newContact,(err,data)=>{
  if(err){
  res.send('cannot add new contact')}
  else
  res.send('Contact added')
})
})
 app.put('/EDITFOUR/:id',(req,res)=>{
 db.collection('Fournisseur').updateMany({_id:ObjectID(req.params.id)},
 {$set:{...req.body}},(err,data)=>{
    if(err)
    {res.send('Cannot update contact')
    console.log(err)}
    else
    res.send('Contact updated')
 }
 )
 })
 app.put('/EDITQuant/:CD/:FR',(req,res)=>{
  db.collection('Fournisseur').updateOne({CodeArticle:req.params.CD,fournisseur:req.params.FR},
  {$set:{...req.body}},(err,data)=>{
     if(err)
     {res.send('Cannot update contact')
     console.log(err)}
     else
     res.send('Contact updated')
  }
  )
  })
 app.put('/EDITClient/:id',(req,res)=>{
  db.collection('Client').updateMany({_id:ObjectID(req.params.id)},
  {$set:{...req.body}},(err,data)=>{
     if(err)
     {res.send('Cannot update contact')
     console.log(err)}
     else
     res.send('Contact updated')
  }
  )
  })
  app.put('/QNT/:CA/:FR',(req,res)=>{
    db.collection('Fournisseur').updateOne({CodeArticle:req.params.CA,fournisseur:req.params.FR},
    {$set:{...req.body}},(err,data)=>{
       if(err)
       {res.send('Cannot update contact')
       console.log(err)}
       else
       res.send('Contact updated')
    }
    )
    })
 
 app.delete('/delete_user/:id',(req,res)=>{
    db.collection('user').remove({_id:ObjectID(req.params.id)},(err,data)=>{
        if(err)
    {res.send('Cannot delete contact')
    console.log(err)}
    else
    res.send('Contact deleted')
        
    })
 })
 app.delete('/delete_Article/:id',(req,res)=>{
  db.collection('Article').remove({_id:ObjectID(req.params.id)},(err,data)=>{
      if(err)
  {res.send('Cannot delete contact')
  console.log(err)}
  else
  res.send('Contact deleted')
      
  })
})
 app.delete('/Supp_Client/:id',(req,res)=>{
  db.collection('Client').remove({_id:ObjectID(req.params.id)},(err,data)=>{
      if(err)
  {res.send('Cannot delete contact')
  console.log(err)}
  else
  res.send('Contact deleted')
      
  })
})
app.delete('/Supp_Article_CAISSE/:id',(req,res)=>{
  db.collection('caisse').remove({_id:ObjectID(req.params.id)},(err,data)=>{
      if(err)
  {res.send('Cannot delete contact')
  console.log(err)}
  else
  res.send('Contact deleted')
      
  })
})

app.delete('/BSDELETE',(req,res)=>{
  db.collection('Bon Sortie').remove((err,data)=>{
      if(err)
  {res.send('Cannot delete contact')
  console.log(err)}
  else
  res.send('Contact deleted')
      
  })
})
app.delete('/CAISSEDELETE',(req,res)=>{
  db.collection('caisse').remove((err,data)=>{
      if(err)
  {res.send('Cannot delete contact')
  console.log(err)}
  else
  res.send('Contact deleted')
      
  })
})
}
)
app.listen(5001,(err)=>{
    if(err){
        console.log('error while running server')
    } else {
        console.log('Server is running on port 5001')}})


            