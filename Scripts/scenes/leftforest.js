var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var LeftForest = (function (_super) {
        __extends(LeftForest, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function LeftForest() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        LeftForest.prototype.start = function () {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/LeftCave.png");
            this.addChild(this._introImage);
            // add the LEFT_CAVE button to the MENU scene
            this._leftCaveButton = new objects.Button("LeftCaveButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._leftCaveButton);
            // LEFT_CAVE Button event listener
            this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._rightCaveButton = new objects.Button("RightCaveButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._rightCaveButton);
            // LEFT_CAVE Button event listener
            this._rightCaveButton.on("click", this._rightCaveButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        LeftForest.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        LeftForest.prototype._leftCaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.LEFT_CAVE;
            changeScene();
        };
        // LEFT_CAVE Button click event handler
        LeftForest.prototype._rightCaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.RIGHT_CAVE;
            changeScene();
        };
        return LeftForest;
    })(objects.Scene);
    scenes.LeftForest = LeftForest;
})(scenes || (scenes = {}));
//# sourceMappingURL=leftforest.js.map