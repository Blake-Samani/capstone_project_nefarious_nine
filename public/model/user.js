export class User{
    constructor(data){
        this.email = data.email;
        this.username = data.username;
        this.decksStudying = data.decksStudying;
        this.defaultTimerSetting = [30, 3];
        this.coins = data.coins;
        this.deckNumber = data.deckNumber;
        this.flashcardNumber = data.flashcardNumber;
        this.profilePhotoName = data.profilePhotoName;
        this.profilePhotoURL = data.profilePhotoURL;
        this.userBio = data.userBio;
        this.pomopet = data.pomopet;
        this.pomopetData = data.pomopetData;
        this.itemsOwned = data.itemsOwned;
        this.equippedAcc = data.equippedAcc;
        this.equippedSkin = data.equippedSkin;
    }


/**************************************************
     *      Setter for the Document ID
**************************************************/
    set_docID(ID){
        this.docID = ID;
    }

/************************************************************************
     *                          toFirestore Method
     ********************************************************************
     *      This method will serialize the data so 
     *      that it will be compatible with the 
     *      Firestore. A link to supported types:
     *      https://cloud.google.com/firestore/docs/concepts/data-types
     *      Acceptable types:
     *      -boolean
     *      -array
     *      -string
     *      -map
     *      -timestamp
     *      -floating-point & integer
**************************************************************************/
        serialize() {   // Older Parameter [serialize(timestamp)], but we may not need a creation timestamp
                        // for each flashcard.
            return {
                email: this.email,
                username: this.username,
                decksStudying: this.decksStudying,
                defaultTimerSetting: this.defaultTimerSetting,
                coins: this.coins,
                deckNumber: this.deckNumber,
                flashcardNumber: this.flashcardNumber,
                profilePhotoName: this.profilePhotoName,
                profilePhotoURL: this.profilePhotoURL,
                userBio: this.userBio,
                pomopet: this.pomopet,
                pomopetData: this.pomopetData,
                itemsOwned: this.itemsOwned,
                equippedAcc: this.equippedAcc,
                equippedSkin: this.equippedSkin,
            };
        }

        static deserialize(data) {
            const user = new User(data);
            user.defaultTimerSetting = data.defaultTimerSetting;
            user.email = data.email;
            user.username = data.username;
            user.decksStudying = data.decksStudying;
            user.coins = data.coins;
            user.deckNumber = data.deckNumber;
            user.flashcardNumber = data.flashcardNumber;
            user.profilePhotoName = data.profilePhotoName;
            user.profilePhotoURL = data.profilePhotoURL;
            user.userBio = data.userBio;
            user.pomopet = data.pomopet;
            user.pomopetData = data.pomopetData;
            user.itemsOwned = data.itemsOwned;
            user.equippedAcc = data.equippedAcc;
            user.equippedSkin = data.equippedSkin;
            return user;
        }

/***************************************************************************
 *                  Type Checking
 * *************************************************************************
 *      This will ensure the user inputs of the correct type. 
 *      Will prompt for an error, claimed in the error tags in index.html 
***************************************************************************/
        static isSerializedProduct(obj){
            
            if(!obj.email || typeof obj.email != 'string') return false;  
            if(!obj.profilePhotoURL || !obj.profilePhotoURL.include('https')) return false; 
            if(!obj.profilePhotoURL || typeof obj.profilePhotoURL != 'string') return false;
            // TODO: decks studying type check
        }

}