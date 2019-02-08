const Web3 = require('web3');

var contract = require('truffle-contract');

const emailstore = require('../../build/contracts/emailstore.json')
var express = require("express");
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var Emailstore = contract(emailstore)



// const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22000"));

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
Emailstore.setProvider(web3.currentProvider)
// DataEmail.setProvider(web3.currentProvider)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send('hello')
})

app.get('/getemail', async (req, res) => {
	const result = await getemailOnly();
	console.log(result);
	res.send(result);
})

app.post('/getemail', async (req, res) => {
	const result = await getemailContract(req);
	console.log(result);
	res.send(result);
})

app.post('/setemail', async (req, res) => {
	const result = await setemailContract(req);
	console.log("data insert");
	console.log(result);
	// var json = req.body
	res.send(result);
})

app.post('/setfile', async (req, res) => {
	const result = await setfile(req);
	console.log("data insert");
	console.log(result);
	// var json = req.body
	res.send(result);
})

app.post('/setaction', async (req, res) => {
	const result = await setAction(req);
	console.log("data insert");
	console.log(result);
	// var json = req.body
	res.send(result);
})

app.post('/setreply', async (req, res) => {
	const result = await setReply(req);
	console.log("data insert");
	console.log(result);
	// var json = req.body
	res.send(result);
})


app.listen(port, () => {
	console.log('Starting node.js on port' + port)
})



const setemailContract = (req) => {
	// const { id, from, to, subject, content, createdate, type, date, num, allto, timestamp} = req.body;
	const { id, from, to, subject, content, createdate, type, date, num, allto, timestamp, fromdoc, fromdocway, inbound, isprivate} = req.body;
	return new Promise((resolve, reject) => {
		Emailstore.deployed().then((instance) => {
			var email = instance;
			// console.log(instance)
			resolve(email.setEmail(id, from, to, subject, content, createdate, type, date, num, allto, timestamp,{
				from: "0x838c9c729d91097dae0a89823630a77f42742313",
				gas: 4600000
			}),email.setEmail2(fromdoc, fromdocway, inbound, isprivate,{
				from: "0x838c9c729d91097dae0a89823630a77f42742313",
				gas: 4600000}))
		}).catch((err) => {
			console.log('-----------------------')
			console.log(err)
			console.log('-----------------------')
		})
	})
}


const setfile = (req) => {
	const {filename, filepath, uploadDate, emailadd, status , emailid} = req.body;

	return new Promise((resolve, reject) => {
		Emailstore.deployed().then((instance) => {
			var email = instance;
			// console.log(instance)
			resolve(email.setFile(filename, filepath, uploadDate, emailadd, status, emailid, {

				from: "0x838c9c729d91097dae0a89823630a77f42742313",
				gas: 4600000

			}))
		}).catch((err) => {
			console.log('-----------------------')
			console.log(err)
			console.log('-----------------------')
		})
	})

}

const setAction = (req) => {
	const { emailad, action, timestamp, to, emailid } = req.body;
	return new Promise((resolve, reject) => {
		Emailstore.deployed().then((instance) => {
			var email = instance;
			resolve(email.setAction(emailad, action, timestamp, to, emailid, {

				from: "0x838c9c729d91097dae0a89823630a77f42742313",
				gas: 4500000
			}))
		}).catch((err) => {
			console.log('-----------------------')
			console.log(err)
			console.log('-----------------------')
		})
	})
}


const setReply = (req) => {
	const {emailreply, replydate, content} = req.body;
	return new Promise((resolve, reject) => {
		Emailstore.deployed().then((instance) => {
			var email = instance;
			// console.log(instance)
			resolve(email.setReply(emailreply, replydate, content,{
				from: "0x838c9c729d91097dae0a89823630a77f42742313",
				gas: 4500000
			}))
		}).catch((err) => {
			console.log('-----------------------')
			console.log(err)
			console.log('-----------------------')
		})
	})
}




const getemailContract = (req) => {
	const { id } = req.body;
	return new Promise((resolve, reject) => {
		Emailstore.deployed().then((instance) => {
			var email = instance;
			resolve(email.getmail(id,{
				from: "0x838c9c729d91097dae0a89823630a77f42742313",
				gas: 4700000
			}))
		}).catch((err) => {
			console.log('-----------------------')
			console.log(err)
			console.log('-----------------------')
		})
	})
}




