var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var FightRight = (function (_super) {
        __extends(FightRight, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function FightRight() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        FightRight.prototype.start = function () {
            // add Intro Image
            this._intro2Image = new createjs.Bitmap("../../Assets/images/game.png");
            this.addChild(this._intro2Image);
            this._right = new objects.Button("RightButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._right);
            this._right.on("click", this._nextClick, this);
            this._left = new objects.Button("LeftButton", config.Screen.CENTER_X - 170, config.Screen.CENTER_Y + 180);
            this.addChild(this._left);
            this._left.on("click", this._backClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        FightRight.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        FightRight.prototype._nextClick = function (event) {
            scene = config.Scene.RIGHT_FOREST;
            changeScene();
        };
        FightRight.prototype._backClick = function (event) {
            scene = config.Scene.LEFT_FOREST;
            changeScene();
        };
        return FightRight;
    })(objects.Scene);
    scenes.FightRight = FightRight;
})(scenes || (scenes = {}));
//# sourceMappingURL=fightRight.js.map