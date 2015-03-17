if (Meteor.isClient) {

  Template.addPlayerForm.events({
  'submit form': function(e){
    e.preventDefault();
    var playerNameVar = e.target.playerName.value;
    // var currentUserId = Meteor.userId();
    // PlayerList.insert({
    //   name: playerNameVar,
    //   score: 0,
    //   createdBy: currentUserId
    // });
  Meteor.call('insertPlayerData', playerNameVar);

    e.target.playerName.value = " ";

  },

  'click .remove': function(){
    var selectedPlayer = Session.get('selectedPlayer');
    Meteor.call('removePlayerData', selectedPlayer);
  }

});


}