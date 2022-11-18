const fs = require('fs');

// set images' attributes
attributes = [
    {
        name: "road",
        time: "daytime",
        prop: "rock"
    },
    {
        name: "dock",
        time: "daytime",
        prop: "water"
    },
    {
        name: "reflection",
        time: "night",
        prop: "water"
    },
    {
        name: "stars",
        time: "night",
        prop: "sky"
    },
    {
        name: "clouds",
        time: "night",
        prop: "sky"
    },
    {
        name: "clouds",
        time: "dawn",
        prop: "sky"
    }
]

// images' uris
const base_uri = "https://gateway.pinata.cloud/ipfs/QmdRs1kB7t3GYht9LF9DJo39MztChnWghb5VXqCwPp7yHJ/";


// create json files for the images
for(i in attributes){
    const obj = {
        "description": "Taco's NFT",
        "image": base_uri + i.toString() + ".jpg",
        "name": "sceneries",
        "attributes": [attributes[i]]
    }
    
    let filename = "./metadata/" + i.toString() + ".json"
    fs.writeFile(filename, JSON.stringify(obj), (err) => {
        if(err) console.log(err)
    })
}

// create json files for the black box

const blackBox = {
    "description": "Taco's NFT",
    "image": "https://gateway.pinata.cloud/ipfs/QmbHfFppAJ9ayLb8KLwZ2NSLNUZkEHjZzcvp8HzxTZoHtm/",
    "name": "unknown",
    "attributes": [{
        name: "unknown",
        time: "unknown",
        prop: "unknown"
    },]
}

fs.writeFile("blackbox.json", JSON.stringify(blackBox), (err) => {
    if(err) console.log(err);
})