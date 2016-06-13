/**
 * Created by Emma on 2016-06-04.
 */

Posts = new Mongo.Collection("posts");

Posts.attachSchema(new SimpleSCema({
    title: {
        type: String,
        label: 'Rubrik',
        max: 8,
        optional: false
    },
    image: {
        type: Image,
        label: 'Bild',
        optional: false
    },
    summary: {
        type: String,
        label: 'Sammanfattning',
        max: 50,
        optional: false
    },
    information: {
        type: String,
        label: 'Mer information',
        max: 200,
        optional: true
    }
}));