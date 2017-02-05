var express = require('express');
var router = express.Router();
var Contato = require('../models/contatos');
var Grupo = require('../models/grupos');


//get all contacts with specific filter
router.get('/',function(req,res){
    var query = {};
    if (req.query.nome)
        query.nome = req.query.nome;
    if (req.query.email)
        query.email = req.query.email;

    Contato.find(query, function (err, contato) {
        console.log(contato);
        if (!contato) {
            return res.status(404).json({ Error: "that contact doesn't exist" });
        }

        if (err) {
            return res.status(500);
        }
        return res.send(contato);
    });   
});

router.get('/:id',function(req,res){
    Contato.findById(req.params.id,function(err,contato){
        if(!contato){
            return res.status(400).json({Error:"the contact doesn't exist"});
        }

        if(err){
            return res.status(500).json({Error:"mongoDB problem"});
        }

        res.send(contato);
    }).populate('emergencia');
});


router.post('/',function(req,res){
    if(JSON.stringify(req.body) == "{}"){
        return res.status(400).json({Error:"empty request body"});
    }
    if(!req.body.email && !req.body.name){
        return res.status(400).json({Error:"you need to specify the email and the name"});
    }
    if(!req.body.email){
        return res.status(400).json({Error:"you need to specifiy the email"});
    }
    if(!req.body.nome){
        return res.status(400).json({Error:"you need to specify the name"});
    }

    var contato = new Contato(req.body);
    contato.save(function(err){
        if(err){
            return res.status(500);
        }
        return res.json({message: "Contact added"});
    });
});


// atualizacao parcial
router.put('/:id/nome',function(req,res){
    console.log(req)
    Contato.findById(req.params.id,function(err,contato){
        
        if(err){
            return res.status(500).json({Error:"Problema no servidor"});
        }
        
        if(!contato){
            return res.status(404).json({Error:"the contact doesn't exist"});    
        }

        if(JSON.stringify(req.body) == "{}"){
            return res.status(400).json({Error:"your request body is empty"});
        }

        contato.nome = req.body.nome;

        contato.save(function(err){
            if(err){
                return res.status(500).json({Error:"server error"});
            }
            res.json({message:"updated"});
        });
    });
});

//atualizacao

router.put('/:id',function(req,res){
    Contato.findById(req.params.id,function(err,contato){
        if(err){
            return res.status(500).json({Error:"Problema no servidor"});
        }

        if(!contato){
            return res.status(404).json({Error:"o contato nao existe"});
        }

        for(var prop in req.body){
            contato[prop] = req.body[prop];
        }

        contato.save(function(err){
            if(err){
                return res.status(500).json({Error:"Problema no servidor"});
            }
            return res.status(200).json({message:"Contato atualizado"});
        });
    });
});

router.delete('/:id',function(req,res){
    Contato.findById(req.params.id,function(err,contato){
        if(err){
            return res.status(500).json({Error:"Problema no servidor"});
        }    

        if(!contato){
            return res.status(404).json({Error:"You can't remove a contact that doesn't exist"});
        }

        Grupo.update({},{ $pull: { contatos: { $in: [contato._id] }}}, {multi: true}).exec();

        contato.remove(function(err){
            if(err){
                return res.status(500).json({Error:"Problema no servidor"});
            }
                return res.status(204);
        });

    });
});

module.exports = router;