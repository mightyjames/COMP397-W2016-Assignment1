var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var FightAllLeft = (function (_super) {
        __extends(FightAllLeft, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function FightAllLeft() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        FightAllLeft.prototype.start = function () {
            // add Intro Image
            this._intro2Image = new createjs.Bitmap("../../Assets/images/game.png");
            this.addChild(this._intro2Image);
            this._finishAll = new objects.Button("RightButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._finishAll);
            this._finishAll.on("click", this._finishAllClick, this);
            this._finishHalf = new objects.Button("LeftButton", config.Screen.CENTER_X - 170, config.Screen.CENTER_Y + 180);
            this.addChild(this._finishHalf);
            this._finishHalf.on("click", this._finishHalfClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        FightAllLeft.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        FightAllLeft.prototype._finishAllClick = function (event) {
            scene = config.Scene.FINISH_ALL_LEFT;
            changeScene();
        };
        FightAllLeft.prototype._finishHalfClick = function (event) {
            scene = config.Scene.FINISH_HALF_LEFT;
            changeScene();
        };
        return FightAllLeft;
    })(objects.Scene);
    scenes.FightAllLeft = FightAllLeft;
})(scenes || (scenes = {}));
//# sourceMappingURL=fightAllLeft.js.map