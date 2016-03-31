var defender = {};
defender.Boot = function(game){

};

defender.Boot.prototype = {
  preload: function(){
    this.load.image('preloaderBar', 'assets/images/loader_bar.png');
    this.load.image('titleimage', 'assets/images/TitleImage.png');
  },
  create: function(){
    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = fail;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 270;
    this.scale.minHeight = 480;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlightVertically = true;
    this.stage.forPortrait = true;
    this.scale.setScreenSize(true);

    this.input.addPointer();
    this.stage.backgroudColor = '#171642';

    this.state.start('Preloader');
    },
}
