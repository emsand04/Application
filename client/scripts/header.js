/**
 * Created by Emma on 2016-06-02.
 */

Template.header.helpers ({
   menuItems: function() {
       var items = [{id:"home-item", name:"Hem"},
           {id:"content-item", name:"Innehåll"}];
           return items;
   }

});

Template.header.events({
    "click #home-item": function(){
        FlowRouter.go("start");
    },
    
    "click #content-item": function(){
        FlowRouter.go("home");
    }
});
