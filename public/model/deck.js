/**************************************************
 *               Create Deck Class
 **************************************************/
export class Deck {
    constructor(data) {
        //This will remove whitespace beginning 
        //and end if they hit spacebar before or after the text field
        this.name = data.name.trim();
        this.subject = data.subject.trim();
        //This ensures this is a type number
        this.dateCreated = typeof data.dateCreated == 'number' ? data.dateCreated : Number(data.dateCreated);
        this.isFavorited = data.isFavorited;
        this.category = data.category;
        this.keywords = data.keywords;
        this.flashcardNumber = data.flashcardNumber;
        this.isClassDeck = data.isClassDeck;
        this.created_by = data.created_by;
        this.isMastered = data.isMastered;
        // FOR FUTURE USE AND EXPANSION
        //this.isPublic = data.isPublic
    }

    /**************************************************
     *      Setter for the Document ID
    **************************************************/
    set_docID(ID) {
        this.docID = ID;
    }



    /************************************************************************
     *                          serialize
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

    // to store in Firestore
    serialize() {
        return {
            name: this.name,
            subject: this.subject,
            dateCreated: this.dateCreated,
            isFavorited: this.isFavorited,
            category: this.category,
            keywords: this.keywords,
            flashcardNumber: this.flashcardNumber,
            isClassDeck: this.isClassDeck,
            created_by: this.created_by,
            isMastered: this.isMastered,
            // FOR FUTURE USE AND EXPANSION
            //isPublic: this.isPublic,

        };
    }

    /***************************************************************************
     *                  Type Checking
     * *************************************************************************
     *      This will ensure the user inputs of the correct type. 
     *      Will prompt for an error, claimed in the error tags in index.html 
    ***************************************************************************/
    static isSerializedDeck(obj) {

        if (!obj.name || typeof obj.name != 'string') return false;
        if (!obj.subject || typeof obj.subject != 'string') return false;
        if (!obj.category || typeof obj.category != 'string') return false;
        if (!obj.dateCreated || typeof obj.dateCreated != 'number') return false;
        if (!obj.isFavorited || typeof obj.isFavorited != 'boolean') return false;
        if (!obj.keywords || typeof obj.keywords != 'array') return false;
        if (!obj.created_by || typeof obj.created_by != 'string') return false;
    }

    /***************************************************************************
     *                  Serialization For Editing/Updating
     * *************************************************************************
     *      This will allow updating to be serialized, prevents errors on the 
     *      firebase side.  
    ***************************************************************************/
    serializeForUpdate() {
        const d = {};
        if (this.name) d.name = this.name;
        if (this.subject) d.subject = this.subject;
        if (this.category) d.category = this.category;
        if (this.isFavorited) d.isFavorited = this.isFavorited;
        if (this.dateCreated) d.dateCreated = this.dateCreated;
        if (this.keywords) d.keywords = this.keywords;
        if (this.flashcardNumber) d.flashcardNumber = this.flashcardNumber;
        if (this.isClassDeck) d.isClassDeck = this.isClassDeck;
        if (this.created_by) d.created_by = this.created_by;
        if (this.isMastered) d.isMastered = this.isMastered;

        return d;
    }

}