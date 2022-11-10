var mongoose = require('mongoose');
var dbURI = "mongodb://localhost/mekanbul";
//var dbURI ="mongodb+srv://nursolak:vzQBfKD@XMpi2p-@mekanbul.x4vg3l8.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbURI);
function kapat(msg, callback){
    mongoose.connection.close(function (){
        console.log(msg);
        callback();
    })
}
process.on("SIGINT", function (){
    kapat("Uygulama kapatıldı!", function (){
        process.exit(0);
    })
})
mongoose.connection.on("connected", function(){
    console.log(dbURI + "adresindeki veritabanına bağlanıldı!\n")
})
mongoose.connection.on("error", function(){
    console.log(dbURI + "Bağantı hatası\n")
})
mongoose.connection.on("disconnected", function(){
    console.log(dbURI + "Bağlantı kesildi\n")
})


require("./mekansema");