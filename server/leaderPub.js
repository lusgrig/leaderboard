if (Meteor.isServer) {
  Meteor.publish('thePlayers', function(){
    var currentUserId = this.userId;
    return PlayerList.find({createdBy: currentUserId});
  });

  Meteor.methods({
    'insertPlayerData': function(playerNameVar){
      var currentUserId = Meteor.userId();
        PlayerList.insert({
        name: playerNameVar,
        score: 0,
        createdBy: currentUserId
      });
      // console.log(currentUserId);
    },

    // 'updateName': function(playerNameVar) {
    //   PlayerList.update()
    // }

    'removePlayerData': function(selectedPlayer) {
      console.log("remove");
      PlayerList.remove(selectedPlayer);
    },

    'modifyPlayerScore': function(selectedPlayer, scoreValue){
      PlayerList.update(selectedPlayer, {$inc: {score:scoreValue}});
    }

  });
}