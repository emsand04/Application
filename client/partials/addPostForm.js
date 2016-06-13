/**
 * Created by Emma on 2016-06-10.
 */

Template.addPostForm.onRendered(function(){
    $('input#name-of-post, textarea#summary-text, textarea#more-text').characterCounter();
    $('.dropify').dropify();
});