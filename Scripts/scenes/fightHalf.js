var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var FightHalf = (function (_super) {
        __extends(FightHalf, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function FightHalf() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        FightHalf.prototype.start = function () {
            // add Intro Image
            this._fightAllLeftImage = new createjs.Bitmap("../../Assets/images/game.png");
            this.addChild(this._fightAllLeftImage);
            this._finishAll = new objects.Button("RightButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._finishAll);
            this._finishAll.on("click", this._bossFightClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        FightHalf.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        FightHalf.prototype._bossFightClick = function (event) {
            scene = config.Scene.BOSS_FIGHT_LEFT1;
            changeScene();
        };
        return FightHalf;
    })(objects.Scene);
    scenes.FightHalf = FightHalf;
})(scenes || (scenes = {}));
//# sourceMappingURL=fightHalf.js.map