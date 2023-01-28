const getDB=require('../database/database').getDB;
const mongodb=require('mongodb')

class Profiles{
    constructor(clientname,clientage,clientpart,clientlevel){
        this.clientname=clientname
        this.clientage=clientage
        this.clientpart=clientpart
        this.clientlevel=clientlevel
    }

    save() {
        const db=getDB()
        const profiles=db.collections('profiles')
        return profiles
        .insertOne(this)
        .then((data)=>{
            console.log(data)
        })
        .catch(err=>console.log(err))

    }

    static getProfilesFunction(){
        const db=getDB()
        const profiles=db.collection('profiles')
        return profiles
        .find()
        .toArray()
    }

    static showProfileDetails(id){
        const db=getDB()
        return db.collection('profiles')
        .find({
            id: new mongodb.objectId(id)
        })
        .next()
        .then((profile)=>{
            return profile
        })
        .catch((err)=>console.log(err))
    }

    static updateProfile(id,clientname,clientage,clientpart,clientlevel){
        const db=getDB()
        return db.collection('profiles')
        .updateOne({
            id: new mongodb.objectId(id)
        },
        {
            $set:{clientname,clientage,clientpart,clientlevel}
        })
    }

    static deleteProfile(id){
        const db=getDB()
        return db.collection('profiles')
        .deleteOne({
            id: new mongodb.objectId(id)
        })
        .then(()=>{
            console.log("Deletion success");
        })
        .catch(err=>console.log(err));
    }
}

module.exports=Profiles