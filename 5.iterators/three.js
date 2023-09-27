//Using for-in loop

const object = {
    game1 : 'COC',
    game2 : 'PUBG',
    game3 : 'NFS'
}

for(const key in object){
    console.log(key+' is the key with value '+object[key])
}

//The for in loop print the key values

const programming = ["Java","CPP","C","Python"]

for(const key in programming){
    console.log(key)
}

