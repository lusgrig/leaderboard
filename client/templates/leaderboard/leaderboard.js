
if (Meteor.isClient) {
  Meteor.subscribe('thePlayers');

  Template.leaderboard.helpers({
    'player': function() {
      var currentUserId = Meteor.userId();
      return PlayerList.find({}, {sort:{score:-1, name:1}});
     },
     'selectedClass': function(){
        var PlayerId = this._id;
        var selectedPlayer = Session.get('selectedPlayer');
        if (PlayerId === selectedPlayer) {
          return "selected";
        }
     },
     'showSelectedPlayer': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      return PlayerList.findOne(selectedPlayer);
     }
  });

  Template.leaderboard.events({
    'click .player': function(){
      // console.log("clicked");
      Session.set('selectedPlayer', this._id);
      // var selectedPlayer = Session.get('selectedPlayer');
      // console.log(selectedPlayer);
    },

    'click .increment': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      Meteor.call('modifyPlayerScore', selectedPlayer, 5);
      
    },

    'click .decrement': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      Meteor.call('modifyPlayerScore', selectedPlayer, -5);
    },

    'click .remove': function(){
       var selectedPlayer = Session.get('selectedPlayer');
      Meteor.call('removePlayerData', selectedPlayer);
    }
  });

} 

