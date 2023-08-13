export class User{
    users = [{
        id : `user-1`,
        name : 'Shubham Gupta',
        contact : '9782312993',
        size : 'l',
        address : '26, Jain Vihar, Kamla Nehru Nagar, Ajmer Road',
        city : 'jaipur',
        role : 'user',
        accepted : false,
        location : [26.8746391, 75.7022562]
    },{
        id : `user-2`,
        name : 'Rachit Bohra',
        contact : '9414826826',
        size : 'l',
        address : 'VDN',
        city : 'jaipur',
        role : 'user',
        accepted : false,
        location : [26.8746391, 75.7022562]
    }]
    add = (req, res) => {

        const user = this.users.find(user => user.contact === req.body.contact)

        if(user){
            res.status(409).send({
                message : 'User already exists !'
            })
        }else{
            this.users.push({
                id : `user-${this.users.length + 1}`,
                ...req.body
            })
            res.status(201).send({
                bSuccess : true,
                message : 'User created !'
            })
        }  
    }
    read = (req,res) => {
        res.send(this.users);
    }
    login = (req, res) => {
        if(req.body.contact === '9782312993' && req.body.password ==='shubham#123'){
            res.status(200).send({
                name : "Shubham Gupta",
                bSuccess : true
            })
        }else{
            res.status(200).send({
                name : user.name,
                bSuccess : true,
                authenticationToken : user.id
            })
        }
    }
    approve = (req, res) => {
        if(req.body.userIds){
            this.users.map(user => {
                if(req.body.userIds.indexOf(user.id) !== -1){
                    const userIndex = this.users.find(u => u.id === user.id)
                    this.users[userIndex].accepted = true
                    res.status(200).send({
                        bSuccess : true
                    })
                }
            })
        }else{
            const userIndex = this.users.findIndex(user => user.id === req.params.id)
            if(userIndex !== -1){
                this.users[userIndex].accepted = true
                res.status(200).send({
                    bSuccess : true
                })
            }
        }
    }
}