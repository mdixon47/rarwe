// app/routes/bands/band/songs.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
      return this.modelFor('bands.band');
    }
});
