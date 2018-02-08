//Array of matches to restrict. Reddit for example will block all urls containing reddit in the hostname
let blacklist = ["reddit", "dev.to", "twitter", "youtube", "twitch", "instagram", "discord"]

let currentlocation = window.location.hostname;
for(let domain of blacklist){
    if(currentlocation.includes(domain)){
        restrictDomain()
    }
}
console.log("loaded content script")

function restrictDomain(){
    
}


