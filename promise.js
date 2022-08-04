function getUser(callabck){
    // list=[]
    setTimeout(()=>{
        callabck([
            { username: 'john', email: 'john@test.com' },
            { username: 'jane', email: 'jane@test.com' },
        ]);
    },1000)
}

function findUser(username,callabck){
getUser((users)=>{
    const user = users.find((user) => user.username === username);
    callabck(user);
})
}

findUser('john',console.log);