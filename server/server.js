const cors = require('cors');
const Client = require('pg').Client
const express = require('express');
const app = express();
// const multer = require('multer')
// const storage = multer.diskStorage({
//     destination: function(req,file,cb){
//         cb(null,'./uploads/');
//     },
//     filename: function(req,file,cb){
//         cb(null, new Date().toISOString()+ file.originalname);
//     }
// });
// const upload =multer({storage:storage})
app.use(express.json());

// app.use(express.static('public'))
const createClient = () => new Client({
    user: 'postgres',
    password: '1234rewq', // better not put passwords inside .js files
    host: 'localhost',
    port: '5433',
    database: "allUsersProfiles"
});

app.use(cors());

app.route('/email')
    .post(async (req, res) => {
        console.log('email server post');
        console.log(req.body.email);
        const allUseres = await getRgeisterData()
        let isEmailExits = false
        allUseres.map(item => {
            if (!item.username) return
            if (req.body.email === item.email) {
                console.log('exsits');
                isEmailExits = true
            }
            console.log(item);
        })
        res.send(isEmailExits)

    })
    .get(async (req, res) => {
        console.log('email server get');
        const allUseres = await getRgeisterData()
        res.send(allUseres)
    })


app.route('/newUser')
    .post((req, res) => {
        console.log('post new user');
        console.log(req.body.allUserData);
        rgisterForm(req.body.allUserData);
    })

// app.post('/img',upload.single('userimg'),(req,res)=>{
// console.log('in route img');
//     console.log(req.file);
// })

async function rgisterForm(newUser) { // TODO:rename to getCountriesFromDB
    let client;
    let finishRun = false
    try {
        if (!newUser.email || newUser.userDetailes.length === 0) {
            finishRun = true
            return
        }
        client = createClient()
        await client.connect()
        console.log("Connected successfully")
        const alldata = await getRgeisterData()
        for (let i of alldata) {
            if (i.email === newUser.email) return
        }
        await client.query(`INSERT INTO users values($1 ,$2 ,$3 ,$4 ,$5 , $6 )`, [newUser.email, newUser.password,
        newUser.userDetailes.username, newUser.userDetailes.gender, newUser.userDetailes.userDate, newUser.userLocation])

    } catch (err) {
        console.log(`Somthing went worng ${err}`)
    }

    finally {
        if (finishRun) return
        await client.end()
        console.log("client disconnected successfully")
    }
}



const getRgeisterData = async () => {
    let client;
    try {
        client = createClient()
        await client.connect()
        console.log("Connected successfully")
        const allUsers = await client.query("select * from users")
        console.table(allUsers.rows)
        return allUsers.rows
    } catch (err) {
        console.log(`Somthing went worng ${err}`)
    }

    finally {
        await client.end()
        console.log("client disconnected successfully")
    }
}

app.
    listen(3001, () => console.log('Example app listening on port 3001!'));