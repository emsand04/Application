/**
 * Created by Emma on 2016-06-02.
 */
/*
Här definieras URL:er som ska gå att nå i webbläsaren.
 */

//FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn], {except: ["start"]});

FlowRouter.route("/", {

    name: "start",
    action: function () {
        BlazeLayout.render("mainLayout", {header: "header", main: "start", footer: "footer"});
    }

});

FlowRouter.route("/home", {

    name: "home",
    action: function () {
        BlazeLayout.render("mainLayout", {header: "header", main: "home", footer: "footer"});
    }

});

FlowRouter.route("/user-site", {

    name: "user-site",
    action: function () {
        BlazeLayout.render("mainLayout", {header: "header", main: "user-site", footer: "footer"});
    }

});

FlowRouter.notFound = {
    
    action: function () {
        BlazeLayout.render("mainLayout", {header: "header", main: "not-found", footer: "footer"});
    }

};