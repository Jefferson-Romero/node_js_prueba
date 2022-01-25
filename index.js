const express=require('express');
const app=express();
const port = 3000;
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.static('public/views'));


app.use(express.json());

app.get('/misitio/gastos',(req,res)=>{
    res.json({
        gasto:'Salud',
        monto: 14575.60,
        informacion: 'Corresponde a consultas médicas,págos de seguros,medicinas' 
    });
});

app.get('/misitio', (req,res)=>{
    res.send('Bienvenido a mi sitio web');
   });

   app.get('/misitio/about', (req,res)=>{
    res.send('<h1>Acerca de nosotros</h1>');
    console.log('Ruta recibida'+ req.protocol+'://'+req.get('host')+req.originalUrl);
   });

   app.listen(port,()=>{
    console.log('Servidor escuchando en el puerto '+port);
});

app.post('/misitio/calculo',(req,res)=>{
    console.log(req.body);
    res.send('Calculo impuesto a la renta');

});

app.post('/misitio/usuario/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario nuevo registrado');
    });

app.put('/misitio/usuario/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario'+(req.params.id)+'ha sido actualizado');
})    
    app.delete('/misitio/usuario/:id', (req,res)=>{
        res.send('Usuario '+ (req.params.id) +' borrado');
       })


app.set('nombreApp','Aplicacion para manejo de gastos SRI');
console.log(app.get('nombreApp'));

app.set('puerto',4000);

app.listen(app.get('puerto'), ()=>{
    console.log('Nombre de la App',app.get('nombreApp'));
    console.log('Puerto del servidor',app.get('puerto'));
   })

app.set('view engine','ejs');
app.set('views',__dirname+"/views");  
app.get('/',(req,res)=>{
    res.render('index.ejs');
   })





   
