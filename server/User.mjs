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
        let user = this.users.find(user => user.contact === req.body.contact && user.password === req.body.password)
        user ? res.status(200).send({
            name : user.name,
            bSuccess : true,
            authenticationToken : user.id
        }) : res.status(401).send({
            bSuccess : false,
            message : `No user found`
        })
    }
}