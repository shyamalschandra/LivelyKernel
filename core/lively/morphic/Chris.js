module('lively.morphic.Chris').requires().toRun(function() {
    lively.morphic.Morph.subclass('lively.morphic.Chrisbutton', 'events', {
        initialize: function($super){
            $super();
        },
        alertMe: function(text){
            debugger;
            alert(text + 'yyyy ccc');
        }
    });    

}) // end of module