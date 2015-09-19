var Reflux = require('reflux');
var request = require('superagent');

module.exports = Reflux.createStore({
  listenables: require('./actions'),
  init: function () {
    this.tokenHeader = document.getElementById('meta_header').content,
    this.tokenValue = document.getElementById('meta_token').content;
    this.documentId = window.location.pathname.split('/')[2];
    this.resume = {
      documentId: this.documentId,
      sections: []
    }; 
  },

  onGetSections: function () {
    var url = urlTemplate
                .parse(endpoints.resumeSections)
                .expand({documentId: this.documentId});
    request
      .get(url)
      .end(function (err, res) {
        if (res.ok) {
          this.resume.sections = res.body;
          this.trigger(this.resume);
        } 
      }.bind(this))
  },


  onGetComments: function (sectionId) {
    var url = urlTemplate
                .parse(endpoints.resumeComments)
                .expand({
                  documentId: this.documentId,
                  sectionId: sectionId
                });
    request
      .get(url)
      .end(function (err, res) {
        var index = findindex(this.resume.sections, {sectionId: sectionId});
        this.resume.sections[index].comments = res.body;
        this.trigger(this.resume);
      }.bind(this))
  },


  getInitialState: function () {
    return this.resume;
  },
})
