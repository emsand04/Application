/**
 * Created by Emma on 2016-06-04.
 */

Template.addCommentButton.onRendered(function(){

    var popoverTemplate = ['<div id="popover-comment" class="popover" role="tooltip">',
        '<div class="arrow"></div>',
        '<h3 class="popover-title"></h3>',
        '<div class="popover-content"></div>',
        '</div>'].join('');

    var content = writeCommentForm();


    $('#add-comment-btn').popover({
        //selector: '[rel=popover]',
        container: '.blog-post',
        placement: 'auto right',
        template: popoverTemplate,
        trigger: 'click',
        content: content,
        html: true
    }
    );
});

Template.post.onRendered(function(){
    $('.collapse').collapse({
  //  accordion : false
});
});

Template.post.events({
   'click: #close-reveal': function(){
       $('#add-comment-btn').popover('hide');
   },

    'click: #post-name': function(){
        $('#add-comment-btn').popover('hide');
    }
});

function writeCommentForm(){
    var form = [
        '<form>',
        '<div class="form-group">',
        '<label for="input-comment">Kommentar</label>',
        '<textarea type="text" class="form-control" rows="2" id="input-comment" placeholder="Skriv här.."></textarea>',
        '</div>',
        '<button type="submit" name="action" class="btn waves-effect waves-light">Skicka<i class="material-icons right">send </i> </button>',
        '</form>'].join('');
    return(form);
}